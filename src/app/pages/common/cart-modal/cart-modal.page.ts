import { Component, OnInit } from '@angular/core';
import {NavParams} from '@ionic/angular';
import { CommandsService, Command } from 'src/app/services/commands.service';


@Component({
  selector: 'app-cart-modal',
  templateUrl: './cart-modal.page.html',
  styleUrls: ['./cart-modal.page.scss'],
})
export class CartModalPage implements OnInit {

  cart = []

  constructor(private navParams: NavParams , private coService: CommandsService) { }

  ngOnInit() {
    this.cart = this.navParams.get('cart');;
  }

}
