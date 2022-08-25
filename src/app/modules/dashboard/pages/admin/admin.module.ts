import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { AdminServicosComponent } from './subpages/admin-servicos/admin-servicos.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CardAdminServicosComponent } from './subpages/admin-servicos/components/card-admin-servicos/card-admin-servicos.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminFuncionariosComponent } from './subpages/admin-funcionarios/admin-funcionarios.component';
import { CardAdminFuncionariosComponent } from './subpages/admin-funcionarios/components/card-admin-funcionarios/card-admin-funcionarios.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxMaskModule } from 'ngx-mask';



@NgModule({
  declarations: [
    AdminComponent,
    AdminServicosComponent,
    CardAdminServicosComponent,
    AdminFuncionariosComponent,
    CardAdminFuncionariosComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    NgbModule,
    NgxMaskModule.forChild(),
    SharedModule,
    FontAwesomeModule,
  ]
})
export class AdminModule { }
