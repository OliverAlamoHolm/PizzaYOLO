import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CatalogCategoriesPageRoutingModule } from './catalog-categories-routing.module';

import { CatalogCategoriesPage } from './catalog-categories.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CatalogCategoriesPageRoutingModule
  ],
  declarations: [CatalogCategoriesPage]
})
export class CatalogCategoriesPageModule {}
