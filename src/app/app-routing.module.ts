import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () => import('./modules/home/home.module').then((m) => m.HomeModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./modules/register/register.module').then((m) => m.RegisterModule)
  },
  {
    path: 'page-not-found',
    loadChildren: () => import('./modules/not-found/not-found.module').then((m) => m.NotFoundModule)
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: '/page-not-found',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
