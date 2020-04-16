import { Component, OnInit } from '@angular/core';
import {StorageService} from '../../../services/storage.service';
import {Command, Product, CommandsService} from '../../../services/commands.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {

  command: Command;
  cart : Product[] = []
  private totalPrice: number = 0;
  
  constructor(private storageService: StorageService, private coService: CommandsService, private router: Router) { }

  ngOnInit() {
    this.cart = this.coService.getCart();
  }

  removeItem(product){
    this.coService.decreaseProduct(product)
  }

  confirm(){
    this.router.navigateByUrl('command-details')
  }

  cancel(){
    this.cart = []
    location.reload()
  }

  getTotal(){
    let total = 0;
    for(let car of this.cart){
      total +=  car.price * car.amount;
    }
    return total;
  }

}
