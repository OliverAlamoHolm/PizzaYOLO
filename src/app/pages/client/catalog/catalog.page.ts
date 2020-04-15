import { Component, OnInit } from '@angular/core'
import {Router} from "@angular/router";
import{ProductsService} from "../../../services/products.service";
import {CommandsService, Product} from "../../../services/commands.service"

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.page.html',
  styleUrls: ['./catalog.page.scss'],
})
export class CatalogPage implements OnInit {

  items = [];

    constructor(private productsService: ProductsService, private router: Router, private coService: CommandsService) {
    }

    ngOnInit() {
        this.items = this.productsService.getProducts()
    }

}
