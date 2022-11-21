import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaturamentoRoutingModule } from './faturamento-routing.module';
import { FaturamentoComponent } from './faturamento.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    FaturamentoComponent
  ],
  imports: [
    CommonModule,
    FaturamentoRoutingModule,
    SharedModule,
  ]
})
export class FaturamentoModule { }
