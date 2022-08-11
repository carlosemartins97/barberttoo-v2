import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { AgendamentoComponent } from './pages/agendamento/agendamento.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { FuncionariosComponent } from './pages/funcionarios/funcionarios.component';
import { ServicosComponent } from './pages/servicos/servicos.component';



@NgModule({
  declarations: [
    DashboardComponent,
    AgendamentoComponent,
    FuncionariosComponent,
    ServicosComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
