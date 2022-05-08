import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ModulesRoutingModule } from './modules-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { LoaderComponent } from '../shared/loader/loader.component';



@NgModule({
  declarations: [
    HomeComponent,
    RegisterComponent,
    LoaderComponent,
  ],
  imports: [
    CommonModule,
    ModulesRoutingModule,
    ReactiveFormsModule,
  ]
})
export class ModulesModule { }
