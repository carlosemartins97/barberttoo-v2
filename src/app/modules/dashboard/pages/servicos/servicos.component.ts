import { Component, OnInit } from '@angular/core';
import { faScissors } from '@fortawesome/free-solid-svg-icons';
import { CrudService } from 'src/app/core/models/service.model';
import { UserService } from 'src/app/core/services/user/user.service';
import { ServicosService } from './services/servicos.service';

@Component({
  selector: 'app-servicos',
  templateUrl: './servicos.component.html',
  styleUrls: ['./servicos.component.scss']
})
export class ServicosComponent implements OnInit {

  servicos: CrudService[];
  loading: boolean = false;

  role: string;

  //icons
  faScissors = faScissors;

  constructor(private servicosService: ServicosService, private userService: UserService) {
    this.role = this.userService.retornaUserRole();
  }

  ngOnInit(): void {
    this.getServicos();
  }

  getServicos() {
    this.loading = true;
    this.servicosService.getServices().then(res => {
      this.servicos = res;
      console.log(res);
      this.loading = false;
    }).catch(error => {
      console.log(error);
      this.loading = false;
    })
  }

}
