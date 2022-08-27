import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxMaskModule } from 'ngx-mask';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { CardAgendamentoDashboardComponent } from './components/card-agendamento-dashboard/card-agendamento-dashboard.component';



@NgModule({
  declarations: [
    DashboardComponent,
    CardAgendamentoDashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    SharedModule,
    NgbModule,
    NgxMaskModule.forChild(),
  ]
})
export class DashboardModule { }
