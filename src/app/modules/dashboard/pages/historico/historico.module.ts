import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HistoricoComponent } from './historico.component';
import { HistoricoRoutingModule } from './historico-routing.module';
import { HistoricoFuncionarioTableComponent } from './components/historico-funcionario-table/historico-funcionario-table.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HistoricoClienteTableComponent } from './components/historico-cliente-table/historico-cliente-table.component';
import { HistoricoAdmTableComponent } from './components/historico-adm-table/historico-adm-table.component';



@NgModule({
  declarations: [
    HistoricoComponent,
    HistoricoFuncionarioTableComponent,
    HistoricoClienteTableComponent,
    HistoricoAdmTableComponent
  ],
  imports: [
    CommonModule,
    HistoricoRoutingModule,
    SharedModule
  ]
})
export class HistoricoModule { }
