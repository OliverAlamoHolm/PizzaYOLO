import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {AuthGuard} from '../app/guards/auth.guard'
import {NologinGuard} from '../app/guards/nologin.guard'

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/common/tabs/tabs.module').then(m => m.TabsPageModule),canActivate : [AuthGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/common/login/login.module').then( m => m.LoginPageModule), canActivate : [NologinGuard]
  },
  {
    path: 'home-client',
    loadChildren: () => import('./pages/client/home-client/home-client.module').then( m => m.HomeClientPageModule)
  },
  {
    path: 'catalog',
    loadChildren: () => import('./pages/client/catalog/catalog.module').then( m => m.CatalogPageModule)
  },
  {
    path: 'home-pizza',
    loadChildren: () => import('./pages/pizzaman/home-pizza/home-pizza.module').then( m => m.HomePizzaPageModule)
  },
  {
    path: 'home-delivery',
    loadChildren: () => import('./pages/delivery/home-delivery/home-delivery.module').then( m => m.HomeDeliveryPageModule)
  },
  {
    path: 'deliver',
    loadChildren: () => import('./pages/delivery/deliver/deliver.module').then( m => m.DeliverPageModule)
  },
  {
    path: 'commands',
    loadChildren: () => import('./pages/pizzaman/commands/commands.module').then( m => m.CommandsPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/common/register/register.module').then( m => m.RegisterPageModule), canActivate : [NologinGuard]
  },
  {
    path: 'history',
    loadChildren: () => import('./pages/client/history/history.module').then( m => m.HistoryPageModule)
  },
  {
    path: 'cart',
    loadChildren: () => import('./pages/client/cart/cart.module').then( m => m.CartPageModule)
  },
  {
    path: 'catalog-categories/:category',
    loadChildren: () => import('./pages/client/catalog-categories/catalog-categories.module').then( m => m.CatalogCategoriesPageModule)
  },
  {
    path: 'product-details/:name',
    loadChildren: () => import('./pages/client/product-details/product-details.module').then( m => m.ProductDetailsPageModule)
  },
  {
    path: 'gestion-usuarios',
    loadChildren: () => import('./pages/common/gestion-usuarios/gestion-usuarios.module').then( m => m.GestionUsuariosPageModule)
  },
  {
    path: 'logout',
    loadChildren: () => import('./pages/common/logout/logout.module').then( m => m.LogoutPageModule)
  },
  {
    path: 'command-details',
    loadChildren: () => import('./pages/client/command-details/command-details.module').then( m => m.CommandDetailsPageModule)
  },
  {
    path: 'profile-maker',
    loadChildren: () => import('./pages/common/profile-maker/profile-maker.module').then( m => m.ProfileMakerPageModule)
  },
  {
    path: 'cart-modal',
    loadChildren: () => import('./pages/common/cart-modal/cart-modal.module').then( m => m.CartModalPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
