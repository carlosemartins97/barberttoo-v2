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
    usuario.id = Number(id);
    this.usuarioSubject.next(usuario);
  }

  retornaUsuario() {
    return this.usuarioSubject.asObservable();
  }

  salvaUserId(id: number) {
    localStorage.setItem(this.KEY, String(id));
  }

  retornaUserId() {
    return localStorage.getItem(this.KEY) ?? '';
  }

  salvaToken(token: string) {
    this.tokenService.salvaToken(token);
    this.decodificaJWT();
  }

  logout() {
    this.tokenService.excluiToken();
    this.usuarioSubject.next({});
    this.router.navigate(['']);
  }

  estaLogado() {
    return this.tokenService.possuiToken();
  }
}
