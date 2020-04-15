import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../services/auth.service"
import { StorageService } from 'src/app/services/storage.service';
import {ClientService, Client} from '../../../services/client.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.page.html',
  styleUrls: ['./logout.page.scss'],
})
export class LogoutPage implements OnInit {

  constructor(private authService: AuthService, private storageService: StorageService, private clientService: ClientService) { }

  ngOnInit() {
  }

  logout(){
    this.storageService.deleteActualID().then(res =>{
      this.storageService.deleteActualRol().then(res =>{
        this.storageService.deleteActualUID().then(res =>{
          
        })
      })
    })
    
    this.authService.logout();
  }
}
