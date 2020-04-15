import { Injectable } from '@angular/core';
import {Storage} from '@ionic/storage';
import { browser, by, protractor, promise, ElementFinder } from 'protractor'




const ID_KEY = 'actualID';
const UID_KEY = 'actualUID';
const ROL_KEY = 'actualRol';
const COMMAND_KEY = 'command';
const NAME_KEY='clientName'

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(private storage: Storage) { }

  // Key for ID
  addActualId(id: string): Promise<any>{
    return this.storage.get(ID_KEY).then(()=>{
      return this.storage.set(ID_KEY, id);
    }) 
  }
  deleteActualID(){
    let id: string = null;
    return this.storage.set(ID_KEY, id)
  }
  getActualID(): Promise<string>{
    return this.storage.get(ID_KEY)
  }

  // Key for UID
  addActualUID(uid: string): Promise<any>{
    return this.storage.get(UID_KEY).then(()=>{
      return this.storage.set(UID_KEY, uid);
    }) 
  }

  deleteActualUID(){
    let uid: string = null;
    return this.storage.set(UID_KEY, uid)
  }
  getActualUID(): Promise<string>{
    return this.storage.get(UID_KEY)
  }


  // For rol
  addActualRol(rol: string): Promise<any>{
    return this.storage.get(ROL_KEY).then(()=>{
      return this.storage.set(ROL_KEY, rol);
    }) 
  }
  deleteActualRol(){
    let rol: string = null;
    return this.storage.set(ROL_KEY, rol)
  }

  getActualRol(): Promise<string>{
    return this.storage.get(ROL_KEY)
  }

  addActualName(name: string): Promise<any>{
    return this.storage.get(NAME_KEY).then(()=>{
      return this.storage.set(NAME_KEY, name);
    }) 
  }

  deleteActualName(){
    let name: string = null;
    return this.storage.set(NAME_KEY, name)
  }

  getActualName(): Promise<string>{
    return this.storage.get(NAME_KEY)
  }
}
