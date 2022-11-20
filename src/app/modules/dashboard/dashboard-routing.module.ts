import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from 'src/app/core/guards/admin/admin.guard';
import { ClienteGuard } from 'src/app/core/guards/cliente/cliente.guard';
import { FuncionarioGuard } from 'src/app/core/guards/funcionario/funcionario.guard';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'agendamento',
  },
  {
    path: 'agendamento',
    loadChildren: () => import('./pages/agendamento/agendamento.module').then((m) => m.AgendamentoModule),
    canLoad: [ClienteGuard]
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./pages/dashboard/dashboard.module').then((m) => m.DashboardModule),
    canLoad: [FuncionarioGuard],
  },
  {
    path: 'servicos',
    loadChildren: () => import('./pages/servicos/servicos.module').then((m) => m.ServicosModule),
  },
  {
    path: 'funcionarios',
    loadChildren: () => import('./pages/funcionarios/funcionarios.module').then((m) => m.FuncionariosModule),
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then((m) => m.ProfileModule),
  },
  {
    path: 'admin',
    loadChildren: () => import('./pages/admin/admin.module').then((m) => m.AdminModule),
    canLoad: [AdminGuard]
  },
  {
    path: 'historico',
    loadChildren: () => import('./pages/historico/historico.module').then((m) => m.HistoricoModule),
    canLoad: [AdminGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
