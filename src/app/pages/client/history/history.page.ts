import { Component, OnInit } from '@angular/core';
import {StorageService} from "../../../services/storage.service"
import{ClientService, Client} from "../../../services/client.service"
import { CommandsService, Command } from 'src/app/services/commands.service';
import {AlertController, ModalController} from '@ionic/angular';
import { CartModalPage } from '../../common/cart-modal/cart-modal.page';

@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
})
export class HistoryPage implements OnInit {

  commands = []
  actualId: string;

  constructor(private storageService: StorageService, private clientService: ClientService,
     private commandsService: CommandsService, private modalCtrl: ModalController) { }

  ngOnInit() {
    let clien: Client;
    this.storageService.getActualID().then(res =>{
      this.actualId = res;
    
      this.clientService.getClient(this.actualId).subscribe(res=>{
        this.commands = res.commands;
      })
      
    })

    

    
  }

  change(command){
    command.showCart = !command.showCart;
    this.commandsService.updateCommand(command, command.id)
  }

  async openCart(c){
    let cart;
    let modal = await this.modalCtrl.create({
      component: CartModalPage,
      cssClass: 'cart-modal',
      componentProps: {
        cart: c.cart
      }
    })
    modal.present();

  }

}
