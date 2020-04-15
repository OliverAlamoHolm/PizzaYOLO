import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../services/auth.service"
import { StorageService } from 'src/app/services/storage.service';
import {CommandsService, Command} from "../../../services/commands.service";
import {AlertController, ModalController} from '@ionic/angular';
import { CartModalPage } from '../../common/cart-modal/cart-modal.page';
import { ClientService, Client } from 'src/app/services/client.service';

@Component({
  selector: 'app-home-pizza',
  templateUrl: './home-pizza.page.html',
  styleUrls: ['./home-pizza.page.scss'],
})
export class HomePizzaPage implements OnInit {

  commands: Command[] = []
  clients: Client[] = []
  vUser: boolean = false;
  vCommands: boolean = false;

  constructor(private authService: AuthService, private storageService: StorageService,
    private commandsService: CommandsService, private modalCtrl: ModalController, private clientService: ClientService) { }

  ngOnInit() {
    this.commandsService.getCommands().subscribe(res =>{
      this.commands = res;
      this.clientService.getClients().subscribe(res =>{
        this.clients = res;
      })
    })
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

  viewUsers(){
    this.vUser = !this.vUser;
  }

  viewCommands(){
    this.vCommands = !this.vCommands;
  }

}
