import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HistoricoComponent } from './historico.component';
import { HistoricoRoutingModule } from './historico-routing.module';
import { HistoricoFuncionarioTableComponent } from './components/historico-funcionario-table/historico-funcionario-table.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    HistoricoComponent,
    HistoricoFuncionarioTableComponent
  ],
  imports: [
    CommonModule,
    HistoricoRoutingModule,
    SharedModule
  ]
})
export class HistoricoModule { }
