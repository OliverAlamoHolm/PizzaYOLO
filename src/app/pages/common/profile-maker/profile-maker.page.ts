import { Component, OnInit } from '@angular/core';
import { ClientService, Client } from 'src/app/services/client.service';
import { StorageService } from 'src/app/services/storage.service';
import { Router } from '@angular/router';
import {map} from "rxjs/operators";
import {isNullOrUndefined} from "util";
import {AngularFireAuth} from '@angular/fire/auth';

@Component({
  selector: 'app-profile-maker',
  templateUrl: './profile-maker.page.html',
  styleUrls: ['./profile-maker.page.scss'],
})
export class ProfileMakerPage implements OnInit {

  name: string;
  lastname: string;
  clients  = []
  telephone: string;

  constructor(private clientService: ClientService, private storageService: StorageService, 
    private router: Router, private AFauth: AngularFireAuth) { }

  ngOnInit() {
  }

  createClient(){
    let client: Client = {
      mail: '',
      uid: '',
      name: this.name,
      lastname: this.lastname,
      telephone:this.telephone,
      commands: []
    }

    this.AFauth.authState.subscribe(auth =>{
      client.mail = auth.email;
      client.uid = auth.uid;
      this.clientService.createClient(client).then(()=>{
        this.storageService.addActualRol('client').then(()=>{
          this.storageService.addActualName(client.name + ' ' + client.lastname)
          this.storageService.addActualUID(client.uid)
          this.clientService.getClients().subscribe(res =>{
            this.clients = res;
            for(let cli of this.clients){
              if(cli.uid == client.uid){
                this.storageService.addActualId(cli.id).then(()=>{
                  this.router.navigate(['tabs']).then(()=>{
                    location.reload()
                  })
                })
              }
            }
          })   
        })
      })
    })
  }

}
