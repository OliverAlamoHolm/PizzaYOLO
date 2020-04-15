import { Component, OnInit } from '@angular/core';
import { CommandsService, Command } from 'src/app/services/commands.service';
import {AlertController, ModalController} from '@ionic/angular';
import { CartModalPage } from '../../common/cart-modal/cart-modal.page';


@Component({
  selector: 'app-deliver',
  templateUrl: './deliver.page.html',
  styleUrls: ['./deliver.page.scss'],
})
export class DeliverPage implements OnInit {

  commands : Command[] =  []
  fin: boolean = false;

  constructor(private commandsService: CommandsService,  private alert: AlertController, private modalCtrl: ModalController) { }

  ngOnInit() {

    this.commandsService.getCommands().subscribe(res =>{
      this.commands = res;
    })
  }

  updateCommand(c){
    c.delivered = !c.delivered;
    this.commandsService.updateCommand(c, c.id)     
  }

  async alerta(c){
    const alert = await this.alert.create({
        header: 'Finalizar',
        message: '¿Ha entregado con éxito el pedido?',
        buttons: [
            {
                text: 'Cancel',
                role: 'cancel',
                cssClass: 'secondary',
                handler: () => {
                    
                }
            }, {
                text: 'Ok',
                handler: () => {

                    this.updateCommand(c)
                }
            }
        ]
    });
    await alert.present();
  }

  async alertaBorrar(c){
    const alert = await this.alert.create({
        header: 'Finalizar',
        message: '¿Desea borrar la comanda de la lista?',
        buttons: [
            {
                text: 'Cancel',
                role: 'cancel',
                cssClass: 'secondary',
                handler: () => {
                    
                }
            }, {
                text: 'Ok',
                handler: () => {

                    this.deleteCommand(c)
                }
            }
        ]
    });
    await alert.present();
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

  deleteCommand(command){
    this.commandsService.removeCommand(command.id)
  }
}
