import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';
import { InfoModalComponent } from './info-modal/info-modal.component';
import { AlertModalComponent } from './alert-modal/alert-modal.component';



@NgModule({
  declarations: [
    LoaderComponent,
    InfoModalComponent,
    AlertModalComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LoaderComponent,
    InfoModalComponent,
    AlertModalComponent
  ]
})
export class SharedModule { }
