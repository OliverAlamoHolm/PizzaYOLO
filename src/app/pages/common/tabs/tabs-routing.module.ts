import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab1/tab1.module').then(m => m.Tab1PageModule)
          }
        ]
      },
      {
        path: 'tab2',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab2/tab2.module').then(m => m.Tab2PageModule)
          }
        ]
      },
      {
        path: 'tab3',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab3/tab3.module').then(m => m.Tab3PageModule)
          }
        ]
      },
      {
        path: 'home-client',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../../client/home-client/home-client.module').then(m => m.HomeClientPageModule)
          }
        ]
      },
      {
        path: 'catalog',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../../client/catalog/catalog.module').then(m => m.CatalogPageModule)
          }
        ]
      },
      {
        path: 'home-pizza',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../../pizzaman/home-pizza/home-pizza.module').then(m => m.HomePizzaPageModule)
          }
        ]
      },
      {
        path: 'home-deliver',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../../delivery/home-delivery/home-delivery.module').then(m => m.HomeDeliveryPageModule)
          }
        ]
      },
      {
        path: 'deliver',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../../delivery/deliver/deliver.module').then(m => m.DeliverPageModule)
          }
        ]
      },

      {
        path: 'commands',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../../pizzaman/commands/commands.module').then(m => m.CommandsPageModule)
          }
        ]
      },

      {
        path: 'cart',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../../client/cart/cart.module').then(m => m.CartPageModule)
          }
        ]
      },
      {
        path: 'history',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../../client/history/history.module').then(m => m.HistoryPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
