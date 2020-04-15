import { Component, OnInit } from '@angular/core';
import {ProductsService} from "../../../services/products.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.page.html',
  styleUrls: ['./product-details.page.scss'],
})
export class ProductDetailsPage implements OnInit {

    pName = null;
    items = [];

  constructor(private productsService: ProductsService, private route: ActivatedRoute) { }

  ngOnInit() {
      this.pName = this.route.snapshot.params['name'];
      this.items = this.productsService.getProducts();
  }

}
