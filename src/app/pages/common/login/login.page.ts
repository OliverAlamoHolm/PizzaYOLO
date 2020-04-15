import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { AuthService } from 'src/app/services/auth.service';
import { UsersService } from 'src/app/services/users.service';
import { StorageService } from 'src/app/services/storage.service';
import {Command, Product} from '../../../services/commands.service';
import {ClientService, Client} from '../../../services/client.service';
import {ToastController} from '@ionic/angular'

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: string;
  password: string;
  users = [];
  clients = [];

  constructor(private authService: AuthService, public router: Router, private usersService: UsersService,
    private storageService: StorageService, private clientService: ClientService, private toastController: ToastController) { }

  ngOnInit() {
    this.usersService.getUsers().subscribe(res =>{
      this.users = res;
      this.clientService.getClients().subscribe(res =>{
        this.clients = res;
      })
    })
  }

  OnSubmitLogin(){
    this.authService.login(this.email, this.password).then(()=>{
      for(let user of this.users){
        if (user.mail == this.email){
          this.storageService.addActualRol(user.rol);
          if (user.rol == 'client'){
            for(let cli of this.clients){
              if (cli.uid == user.uid){
                this.storageService.addActualName(cli.name + ' ' + cli.lastName)
                this.storageService.addActualUID(cli.uid)
                this.storageService.addActualId(cli.id)
              }
            }
          }
        }
      }
      this.router.navigateByUrl('tabs')
    }).catch(err =>
      this.passAlert('Error al iniciar sesión, comprueba las credenciales')
    )
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
