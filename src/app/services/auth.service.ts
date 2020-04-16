import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {promise} from "protractor";
import rejected = promise.rejected;
import { AngularFirestoreModule, AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {Router} from "@angular/router";
import {ToastController} from '@ionic/angular'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private AFauth: AngularFireAuth, db: AngularFirestore, private router: Router, 
    private toastController: ToastController) { }

  login(email: string, password: string){
    return new Promise((resolve, rejected) =>{
      this.AFauth.auth.signInWithEmailAndPassword(email, password).then(user =>{
        resolve(user)      
      }).catch(err => 
        this.passAlert('Error al iniciar sesión, comprueba las credenciales'));
    })
  }

  logout(){
    this.AFauth.auth.signOut();
    this.router.navigate(['login'])
  }

  register(email:string, password:string){
    return new Promise((resolve, reject)=>{
      this.AFauth.auth.createUserWithEmailAndPassword(email, password).then(res =>{
        resolve(res);
      }).catch(err =>{
        reject(err);
      })
    });
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
