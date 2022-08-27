import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../../services/user/user.service';

@Injectable({
  providedIn: 'root'
})
export class ClienteGuard implements CanLoad {

  constructor(private usuarioService: UserService, private router: Router) { }

  canLoad(
    route: Route,
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if (this.usuarioService.retornaUserRole() !== 'ROLE_CLIENTE') {
      this.router.navigate(['app/dashboard']);
      return false;
    }
    return true;
  }
}
