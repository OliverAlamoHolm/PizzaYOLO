import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {map} from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private data = [
    {
        category: 'Pizzas Con Carne',
        expanded: false,
        imageCat:'https://cocina-casera.com/wp-content/uploads/2011/12/pizaa-carne-receta.jpg',
        products: [
            {  name: 'Barbacoa', price: 10, amount:1,  picture: './assets/products/pizzas/barbacoa.jpg', description:'Salsa barbacoa, chorizo a la parrilla, pollo a la parrilla, bacon a la parrilla'},
            {  name: 'TexMex', price: 11, amount:1,picture: './assets/products/pizzas/texmex.jpg', description:'Salsa taco, chorizo a la parrilla, pollo a la parrilla, maíz, guindillas'},
            {  name: 'Hawaii', price: 8.80, amount:1, picture: './assets/products/pizzas/hawaii.jpg', description:'Jamón, piña'},
            {  name: 'Boloñesa', price: 9.10,amount:1, picture: './assets/products/pizzas/bolognesa.jpg', description:'Carne molida, salsa boloñesa'},
            {  name: 'Calzone', price: 9.10, amount:1,picture: './assets/products/pizzas/calzone.jpg', description:'Rellena con carne y queso'},
            {  name: 'Fiorentina', price: 11,amount:1, picture: './assets/products/pizzas/fiorentina.jpg', description:'Jamón serrano, rúcula, queso parmesano'},
            {  name: 'Chicken George', price: 11,amount:1, picture: './assets/products/pizzas/chicken.jpg', description:'Pollo, piña, curry'},
            {  name: 'Kebab', price: 10, amount:1,  picture: './assets/products/pizzas/kebab.jpg', description:'Carne kebab, salsa kebab, ensalada'},
            {  name: 'Piazza', price: 11, amount:1,picture: './assets/products/pizzas/piazza.jpg', description:'Solomillo, champiñones, jamón, salsa baernesa'},
            {  name: 'Bombay', price: 11,amount:1, picture: './assets/products/pizzas/bombay.jpg', description:'Solomillo, verduras a la parrilla'},
            {  name: 'Ceasar', price: 11,amount:1, picture: './assets/products/pizzas/cesar.jpg', description:'Pollo, bacon, salsa caesar, lechuga, queso parmesano'},
            {  name: 'Buffala & Salami', price: 12,amount:1, picture: './assets/products/pizzas/buffala.jpg', description:'Mozarella de buffala, salami italiano, aceitunas, aceite de oliva'},
          ]
    }, 
    {
      category: ' Pizzas Con Pescado y Marisco',
      expanded: false,
      imageCat:'https://www.centrallecheraasturiana.es/wp-content/uploads/2017/03/MOB_Pizza_pescado.jpg',
      products: [
          {  name: 'Milano', price: 10, amount:1,  picture: './assets/products/pizzas/milano.jpg', description:'Gambas y campiñones'},
          {  name: 'Marinera', price: 11, amount:1,picture: './assets/products/pizzas/marinera.jpg', description:'Gambas, atún y salmón ahumado'},
          {  name: '4 Estaciones', price: 9.80, amount:1, picture: './assets/products/pizzas/4estaciones.jpg', description:'Gambas, atún, jamón y champiñones'},

        ]
    },
    {
      category: 'Pizzas Veganas',
      expanded: false,
      imageCat:'https://www.recetasveganas.es/wp-content/uploads/2015/05/Pizza-vegana.jpg',
      products: [
          {  name: 'De Coliflor', price: 12, amount:1,  picture: './assets/products/pizzas/coliflor.jpg', description:'Base de masa de coliflor, queso mozarella vegana y tomate'},
          {  name: 'Pizza vegana de berenjena', price: 10, amount:1,picture: './assets/products/pizzas/berenjena.jpg', description:'Masa de berenjena, pmimiento, rucula, berenjena y aceite de oliva'},
          {  name: 'De Tofu y tomate cherry', price: 14, amount:1, picture: './assets/products/pizzas/tofu.jpg', description:'Base de soja, maíz, tofu, cebolla y aceite de oliva'},
          {  name: 'Barbacoa Vegana', price: 9.50,amount:1, picture: './assets/products/pizzas/bcvegana.jpg', description:'Cebolla, pimienta, queso vegano, tomate y salsa barbacoa'},
          ]
    },
    {
      category: 'Pizzas Estrella',
      expanded: false,
      imageCat:'https://badun.nestle.es/imgserver/v1/80/1290x742/pizza-de-tomate-y-jamon-iberico.jpg',
      products: [
          {  name: '5 Quesos', price: 13, amount:1,  picture: './assets/products/pizzas/5quesos.jpg', description:'Crema de gorgonzola, quesos variados y aceitunas'},
          {  name: 'Jamon Serrano', price: 14, amount:1,picture: './assets/products/pizzas/jamonserrano.jpg', description:'Crema de queso con pesto, jamón serrano, aceitunas, rucula y aceite de oliva'},
          {  name: 'Mariscos', price: 14, amount:1, picture: './assets/products/pizzas/mariscos.jpg', description:'Crema de queso con ajo, mejillones, calamares, gambas y aceitunas'},
          {  name: 'Salmon Ahumado', price: 13,amount:1, picture: './assets/products/pizzas/salmon.jpg', description:'Crema de queso con wasabi, salmón ahumado, aceitunas, cebolla roja, rucula'},
          ]
    },
    {
      category: 'Bebidas',
      expanded: false,
      imageCat:'https://www.tendencias21.net/photo/art/grande/37128385-32897159.jpg?v=1567968333',
      products: [
          {  name: 'Cocacola', price: 2, amount:1,  picture: './assets/products/bebidas/cola.jpg', description:''},
          {  name: 'Fanta', price: 2, amount:1,picture: './assets/products/bebidas/fanta.jpg', description:''},
          {  name: 'Nestea', price: 2, amount:1, picture: './assets/products/bebidas/nestea.jpg', description:''},
          {  name: 'Agua natural', price: 1.5,amount:1, picture: './assets/products/bebidas/agua.jpg', description:''},
          {  name: 'Agua con gas', price: 1.5, amount:1,  picture: './assets/products/bebidas/aguagas.jpg', description:''},
          {  name: '7Up', price: 2, amount:1,picture: './assets/products/bebidas/7up.jpg', description:''},
          ]
    },
    {
      category: 'Postres Caseros',
      expanded: false,
      imageCat:'https://estaticos.miarevista.es/uploads/images/recipe/5a5613fa5bafe8526de66a2e/ppal-brownie_0.jpg',
      products: [
          {  name: 'Brownie', price: 2, amount:1,  picture: './assets/products/postres/brownie.jpg', description:'Bizcocho caliente de chocolate, con nueces, cubierto por un helado de vainilla y chocolate fundido.'},
          {  name: 'Tarta de Queso', price: 2, amount:1,picture: './assets/products/postres/tartaqueso.jpg', description:'Un pastel de queso o tarta de queso es un postre hecho a base de Ricotta, requesón o queso cheddar, queso quark, azúcar y algunas veces otros ingredientes, tales como: huevos, crema de leche, patata, almendras o frutas. '},
          {  name: 'Batido de frutas', price: 2, amount:1, picture: './assets/products/postres/smoothie.jpg', description:'Una dulce delicia con un hermoso tono lavanda que combina fresas, arándanos y frambuesas con yogur de vainilla.'},
          {  name: 'Galleta American Chip', price: 1.5,amount:1, picture: './assets/products/postres/chip.jpg', description:'Una masa dorada, textura blanda-esponjosa, pepitas de chocolate, un ligero aroma a vainilla'},
        ]
    },
  ]
  private cart = [];
  private length = [];
  private cartItemCount = new BehaviorSubject(0);
  private totalPrice :number = 0;

  constructor() { }
  getProducts () {
    return this.data;
}

getCart () {
    return this.cart;
}

addProduct(product) {
    let added = false;
    for (let p of this.cart){
        if(p.name === product.name){
            p.amount += 1;
            added = true;
            break;   
        }
    }
    if (!added){
        this.cart.push(product);  
    }
    this.cartItemCount.next(this.cartItemCount.value + 1);
}

decreaseProduct(product){
    for (let [index, p] of this.cart.entries()){
        if(p.name === product.name){
            p.amount -= 1;
            if(p.amount==0){
                this.cart.splice(index, 1);
            }
        }
    }
    this.cartItemCount.next(this.cartItemCount.value - 1);
}

getTotalPrice(){
    return this.totalPrice;
}

getCartItemCount(){
    return this.cartItemCount;
}

cleanCart(){
    this.cart = [];
}

getCartLength(){
    this.length = this.getCart();
    return this.length.length;
    
}
}
