import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgendamentoRoutingModule } from './agendamento-routing.module';
import { AgendamentoComponent } from './agendamento.component';
import { CreateAgendamentoComponent } from './subpages/create-agendamento/create-agendamento.component';
import { CardAgendamentoComponent } from './components/card-agendamento/card-agendamento.component';
import { DetailsAgendamentoComponent } from './subpages/details-agendamento/details-agendamento.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxMaskModule } from 'ngx-mask';



@NgModule({
  declarations: [
    AgendamentoComponent,
    CreateAgendamentoComponent,
    CardAgendamentoComponent,
    DetailsAgendamentoComponent,
  ],
  imports: [
    CommonModule,
    AgendamentoRoutingModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    SharedModule,
    NgbModule,
    NgxMaskModule.forChild(),
  ]
})
export class AgendamentoModule { }
