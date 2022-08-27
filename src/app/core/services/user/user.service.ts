import { Injectable } from '@angular/core';
import { TokenService } from '../token/token.service';
import { User } from './user.models';
import jwt_decode from 'jwt-decode';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private usuarioSubject = new BehaviorSubject<User>({});

  KEY = 'userId'

  constructor(private tokenService: TokenService, private router: Router) {
    if (this.tokenService.possuiToken()) {
      this.decodificaJWT();
    }
  }

  private decodificaJWT() {
    const token = this.tokenService.retornaToken();
    const usuario = jwt_decode(token) as User;
    const id = this.retornaUserId();
    const role = this.retornaUserRole();
    usuario.id = Number(id);
    usuario.role = role;
    this.usuarioSubject.next(usuario);
  }

  retornaUsuario() {
    return this.usuarioSubject.toPromise();
  }

  salvaUserId(id: number) {
    localStorage.setItem(this.KEY, String(id));
  }

  retornaUserId() {
    return localStorage.getItem(this.KEY) ?? '';
  }

  excluiId() {
    return localStorage.removeItem(this.KEY);
  }

  salvaUserRole(role: string) {
    localStorage.setItem('role', role);
  }

  retornaUserRole() {
    return localStorage.getItem('role') ?? '';
  }

  excluiRole() {
    localStorage.removeItem('role');
  }

  salvaToken(token: string) {
    this.tokenService.salvaToken(token);
    this.decodificaJWT();
  }

  logout() {
    this.tokenService.excluiToken();
    this.excluiId();
    this.excluiRole();
    this.usuarioSubject.next({});
    this.router.navigate(['']);
  }

  estaLogado() {
    return this.tokenService.possuiToken();
  }
}
