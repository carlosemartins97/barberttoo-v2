import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';
import { InfoModalComponent } from './info-modal/info-modal.component';
import { AlertModalComponent } from './alert-modal/alert-modal.component';
import { CardSkeletonComponent } from './card-skeleton/card-skeleton.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [];

@NgModule({
  declarations: [
    LoaderComponent,
    InfoModalComponent,
    AlertModalComponent,
    CardSkeletonComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    RouterModule.forChild(routes),
  ],
  exports: [
    LoaderComponent,
    InfoModalComponent,
    AlertModalComponent,
    CardSkeletonComponent
  ]
})
export class SharedModule { }
