import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgendamentoComponent } from './agendamento.component';
import { CreateAgendamentoComponent } from './subpages/create-agendamento/create-agendamento.component';
import { DetailsAgendamentoComponent } from './subpages/details-agendamento/details-agendamento.component';


const routes: Routes = [
  {
    path: '',
    component: AgendamentoComponent
  },
  {
    path: 'create',
    component: CreateAgendamentoComponent
  },
  {
    path: ':id',
    component: DetailsAgendamentoComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgendamentoRoutingModule { }
