import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../services/auth.service"
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-home-client',
  templateUrl: './home-client.page.html',
  styleUrls: ['./home-client.page.scss'],
})
export class HomeClientPage implements OnInit {

  imageArray: any [];

  constructor(private authService: AuthService, private storageService: StorageService) {
    
   }

  ngOnInit() {
  }

  logout(){
    this.storageService.deleteActualID().then(res =>{
      this.storageService.deleteActualRol().then(res =>{
        this.storageService.deleteActualUID().then(res =>{
          this.storageService.deleteActualName().then(res =>{
          
          })
        })
      })
    })
    
    this.authService.logout();
  }

}
