import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';
import {CommandsService, Product} from 'src/app/services/commands.service'


@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage implements OnInit{

  rol= '';
  cart : Product[] =  [];

  constructor(private storageService: StorageService, private coService: CommandsService) {
    
  }
  ngOnInit() {
    this.storageService.getActualRol().then(res =>{
      this.rol = res;
      console.log(this.rol)
      if(this.rol == 'client'){
        this.cart = this.coService.getCart();
      }
    });
  }

}
