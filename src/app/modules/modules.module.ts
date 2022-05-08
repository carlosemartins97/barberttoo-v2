import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ModulesRoutingModule } from './modules-routing.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    ModulesRoutingModule,
    ReactiveFormsModule,
  ]
})
export class ModulesModule { }
