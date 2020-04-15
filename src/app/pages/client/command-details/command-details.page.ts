import {StorageService} from '../../../services/storage.service';
import {Command, Product, CommandsService} from '../../../services/commands.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientService, Client } from 'src/app/services/client.service';
import { promise } from 'protractor';

@Component({
  selector: 'app-command-details',
  templateUrl: './command-details.page.html',
  styleUrls: ['./command-details.page.scss'],
})
export class CommandDetailsPage implements OnInit {

  command: Command;

  cart : Product[] = [];
  clients= []
  actualId: string = ''
  name: string;
  totalPrice: number;
  client: Client;
  ubication: string;

  constructor(private storageService: StorageService, private coService: CommandsService, 
    private router: Router, private clientService: ClientService) { }

  ngOnInit() {
    this.storageService.getActualName().then(res =>{
      this.name = res;
      this.cart = this.coService.getCart();
        this.command = {
        ubication: this.ubication,
        date: new Date(),
        cart: this.cart,
        price:  this.getTotal(),
        name: this.name,
        done: false,
        delivered: false,
        showCart: false,

      }
      this.totalPrice = this.command.price;
      this.storageService.getActualID().then(res =>{
        this.actualId = res;
        
        this.clientService.getClient(this.actualId).subscribe(res=>{
          this.client = res
          console.log(res);
        })
      })
    })
    
  }

  show(){

    
   
    if(this.ubication != ''){
      this.command.ubication = this.ubication;
      let cos = this.client.commands
      cos.push(this.command)
      this.client.commands = cos;
      console.log(this.client)
      this.clientService.updateClient(this.client, this.actualId).then(()=>{
        this.coService.deleteCart();
        
        this.router.navigate(['tabs']).then(()=>{
          location.reload()
        })
        
      })
      

    }else{
      console.log('Complete la ubicación')
    }  
  }

  getTotal(){
    let total = 0;
    for(let car of this.cart){
      total +=  car.price * car.amount;
      
    }
    return total;
  }

}
