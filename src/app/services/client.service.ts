import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import {map} from "rxjs/operators";
import {Command} from "../services/commands.service"

export interface Client{

  mail: string,
  uid: string;
  name: string,
  lastname: string,
  commands: Command[],
  telephone: string,
}

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private clientCollection: AngularFirestoreCollection<Client>;
  private clients : Observable<Client[]>;
  private cl = [];

  constructor(db: AngularFirestore) {
    this.clientCollection = db.collection<Client>('Clients');

    this.clients= this.clientCollection.snapshotChanges().pipe(
        map(actions=>{
          return actions.map(a =>{
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            return {id, ...data};
          })
        })   
    )
   }

  createClient(client: Client){
    this.cl.push(client);
    return this.clientCollection.add(client);
  }

  getClients(){
    return this.clients;
  }

  getClient(id: string){
    return this.clientCollection.doc<Client>(id).valueChanges();
  }

  updateClient(client: Client, id: string){
    return this.clientCollection.doc(id).update(client);
  }
}
