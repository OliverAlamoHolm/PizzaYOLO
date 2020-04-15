import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePizzaPageRoutingModule } from './home-pizza-routing.module';

import { HomePizzaPage } from './home-pizza.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePizzaPageRoutingModule
  ],
  declarations: [HomePizzaPage]
})
export class HomePizzaPageModule {}
