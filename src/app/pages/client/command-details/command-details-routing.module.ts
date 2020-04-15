import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CommandDetailsPage } from './command-details.page';

const routes: Routes = [
  {
    path: '',
    component: CommandDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CommandDetailsPageRoutingModule {}
