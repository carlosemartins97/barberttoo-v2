import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../../services/user/user.service';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioGuard implements CanLoad {

  constructor(private usuarioService: UserService, private router: Router) { }

  canLoad(
    route: Route,
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if (this.usuarioService.retornaUserRole() !== 'ROLE_ADM' && this.usuarioService.retornaUserRole() !== 'ROLE_ATENDENTE') {
      this.router.navigate(['app/agendamento']);
      return false;
    }
    return true;
  }
}
