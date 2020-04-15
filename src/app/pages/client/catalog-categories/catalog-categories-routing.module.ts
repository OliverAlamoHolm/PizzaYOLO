import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CatalogCategoriesPage } from './catalog-categories.page';

const routes: Routes = [
  {
    path: '',
    component: CatalogCategoriesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CatalogCategoriesPageRoutingModule {}
