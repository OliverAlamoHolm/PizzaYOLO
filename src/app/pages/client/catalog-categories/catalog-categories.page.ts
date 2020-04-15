import { Component, OnInit } from '@angular/core';
import {ProductsService} from "../../../services/products.service";
import {ActivatedRoute} from "@angular/router";
import {BehaviorSubject} from "rxjs";
import {map} from "rxjs/operators";
import {AngularFireAuth} from '@angular/fire/auth';
import {isNullOrUndefined} from "util";
import {Command, Product, CommandsService} from '../../../services/commands.service';
import {StorageService} from '../../../services/storage.service';
import {ToastController} from '@ionic/angular'


@Component({
  selector: 'app-catalog-categories',
  templateUrl: './catalog-categories.page.html',
  styleUrls: ['./catalog-categories.page.scss'],
})
export class CatalogCategoriesPage implements OnInit {

  category = null;
  items = [];
  authState;

  cart = [];
  cartItemCount: BehaviorSubject<number>;
    
  
  command: Command;

  constructor(private productsService: ProductsService, private route: ActivatedRoute,
     private angularFireAuth: AngularFireAuth, private storageService: StorageService,
     private commandsService: CommandsService, private toastController: ToastController) { }

  ngOnInit() {
    this.category = this.route.snapshot.params['category'];
    this.items = this.productsService.getProducts();
    
  }

    addToCart(product){

      this.commandsService.addProduct(product)
      this.showToast(product.name + ' ha sido añadido al carrito')
              
    }


    getStat(){

        return this.angularFireAuth.authState.pipe(map(auth =>{
            if (isNullOrUndefined(auth)){
                return false;
            }else{
                return true;
            }

        }))
    }

    async showToast(msg){
      const toast = await this.toastController.create({
        message: msg,
        color: 'primary',
        position:'bottom',
        duration: 1000
      });
      toast.present();
    }

}
