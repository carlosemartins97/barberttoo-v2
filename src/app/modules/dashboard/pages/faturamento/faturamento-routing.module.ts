import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FaturamentoComponent } from './faturamento.component';


const routes: Routes = [
  {
    path: '',
    component: FaturamentoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FaturamentoRoutingModule { }
