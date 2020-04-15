import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {Observable} from "rxjs";
import { AngularFirestoreModule, AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore'
import {map} from "rxjs/operators";

export interface Product{
  name: string,
  category: string,
  price: number,
  description: string,
  amount: number,
}

export interface Command{

  ubication: string;
  date: Date,
  cart: Product[],
  price: number,
  name: string,
  done: boolean,
  delivered: boolean,
  showCart: boolean,
}

@Injectable({
  providedIn: 'root'
})
export class CommandsService {

  private cart : Product[] = []
  totalPrice: number;
  private cartItemCount = new BehaviorSubject(0)
  private commandsCollection: AngularFirestoreCollection<Command>;
  private commands : Observable<Command[]>;

  constructor(db: AngularFirestore) {
    this.commandsCollection = db.collection<Command>('Commands');
      this.commands= this.commandsCollection.snapshotChanges().pipe(
          map(actions=>{
              return actions.map(a =>{
                  const data = a.payload.doc.data();
                  const id = a.payload.doc.id;
                  return {id, ...data};
              })
          })
      )
   }

   getCommands(){
    return this.commands;
}

getCommand(id){
    return this.commandsCollection.doc<Command>(id).valueChanges();
}

updateCommand(command: Command, id: string){
    return this.commandsCollection.doc(id).update(command);
}

addCommand(command: Command){
    return this.commandsCollection.add(command);
}

removeCommand(id){
    return this.commandsCollection.doc(id).delete();
}

getCart(){
  return this.cart;
}

getCartItemCount(){
  return this.cartItemCount;
}

addProduct(product){
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

deleteCart(){
  this.cart  =  []
}

}
