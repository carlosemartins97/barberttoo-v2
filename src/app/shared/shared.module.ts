import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';
import { InfoModalComponent } from './info-modal/info-modal.component';



@NgModule({
  declarations: [
    LoaderComponent,
    InfoModalComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LoaderComponent,
    InfoModalComponent
  ]
})
export class SharedModule { }
