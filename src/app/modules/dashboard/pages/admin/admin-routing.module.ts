import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AdminFuncionariosComponent } from './subpages/admin-funcionarios/admin-funcionarios.component';
import { AdminServicosComponent } from './subpages/admin-servicos/admin-servicos.component';


const routes: Routes = [
  {
    path: '',
    component: AdminComponent
  },
  {
    path: 'servicos',
    component: AdminServicosComponent
  },
  {
    path: 'funcionarios',
    component: AdminFuncionariosComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
