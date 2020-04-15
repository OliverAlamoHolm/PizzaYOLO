import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { UsersService, User } from 'src/app/services/users.service';
import { Router } from '@angular/router';
import {AngularFireAuth} from '@angular/fire/auth';
import { StorageService } from 'src/app/services/storage.service';
import {ToastController} from '@ionic/angular'

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  email: string;
  password: string;
  password2: string;
  user: User = {
    mail: '',
    uid: '',
    rol: 'client',
  }

  constructor(private authService: AuthService, private router: Router, private userService: UsersService,
    private AFauth: AngularFireAuth, private storageService: StorageService, private toastController: ToastController) { }

  ngOnInit() {
  }

  OnSubmitRegister(){
    if(this.password == this.password2){
      this.authService.register(this.email, this.password).then(res =>{
        return this.AFauth.authState.subscribe(auth =>{
          this.user.mail = auth.email;
          this.user.uid = auth.uid;
          this.userService.createUser(this.user)
          this.storageService.addActualRol('client')
          this.storageService.addActualUID(this.user.uid)
          this.router.navigate(['profile-maker'])
      })
      }).catch(err =>{
        this.passAlert('Correo inválido')
      })
      
    }else{
      this.passAlert('Las contraseñas deben coincidir');
    }

  }

  async passAlert(msg){
    const toast = await this.toastController.create({
      message: msg,
      color: 'primary',
      position: 'middle',
      duration: 2000
    });
    toast.present();

  }

}
