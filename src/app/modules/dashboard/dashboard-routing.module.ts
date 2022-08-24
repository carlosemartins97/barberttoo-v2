import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from 'src/app/core/guards/admin/admin.guard';
import { AdminComponent } from './pages/admin/admin.component';
import { AgendamentoComponent } from './pages/agendamento/agendamento.component';
import { CreateAgendamentoComponent } from './pages/agendamento/subpages/create-agendamento/create-agendamento.component';
import { DetailsAgendamentoComponent } from './pages/agendamento/subpages/details-agendamento/details-agendamento.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { FuncionariosComponent } from './pages/funcionarios/funcionarios.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ServicosComponent } from './pages/servicos/servicos.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: DashboardComponent
  },
  {
    path: 'agendamento',
    component: AgendamentoComponent,
  },
  {
    path: 'agendamento/create',
    component: CreateAgendamentoComponent
  },
  {
    path: 'agendamento/:id',
    component: DetailsAgendamentoComponent
  },
  {
    path: 'servicos',
    component: ServicosComponent
  },
  {
    path: 'funcionarios',
    component: FuncionariosComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'admin',
    loadChildren: () => import('./pages/admin/admin.module').then((m) => m.AdminModule),
    canLoad: [AdminGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
