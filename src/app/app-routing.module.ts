import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'explorer',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'explorer',
    loadChildren: () => import('./explorer/explorer.module').then(m => m.ExplorerModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'calculation',
    loadChildren: () => import('./calculation/calculation.module').then(m => m.CalculationModule),
    canActivate: [AuthGuardService]
  },
  // {
  //   path: 'explorer',
  //   component: ListPage
  // }
  // // {
  //   path: 'explorer',
  //   redirectTo: 'explorer',
  //   pathMatch: 'full'
  // },
  // {
  //   path: 'folder/list',
  //   loadChildren: () => import('./explorer/explorer.module').then( m => m.ExplorerModule)
  // },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
