import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { AgendamentoComponent } from './pages/agendamento/agendamento.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { FuncionariosComponent } from './pages/funcionarios/funcionarios.component';
import { ServicosComponent } from './pages/servicos/servicos.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgxMaskModule } from 'ngx-mask';
import { CreateAgendamentoComponent } from './pages/agendamento/subpages/create-agendamento/create-agendamento.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [
    DashboardComponent,
    AgendamentoComponent,
    FuncionariosComponent,
    ServicosComponent,
    ProfileComponent,
    CreateAgendamentoComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    SharedModule,
    NgxMaskModule.forChild()
  ]
})
export class DashboardModule { }
