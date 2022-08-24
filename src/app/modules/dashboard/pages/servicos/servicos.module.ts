import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicosRoutingModule } from './servicos-routing.module';
import { ServicosComponent } from './servicos.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxMaskModule } from 'ngx-mask';
import { CardServicosComponent } from './components/card-servicos/card-servicos.component';



@NgModule({
  declarations: [
    ServicosComponent,
    CardServicosComponent,
  ],
  imports: [
    CommonModule,
    ServicosRoutingModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    SharedModule,
    NgbModule,
    NgxMaskModule.forChild()
  ]
})
export class ServicosModule { }
