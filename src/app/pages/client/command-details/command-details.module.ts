import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CommandDetailsPageRoutingModule } from './command-details-routing.module';

import { CommandDetailsPage } from './command-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CommandDetailsPageRoutingModule
  ],
  declarations: [CommandDetailsPage]
})
export class CommandDetailsPageModule {}
