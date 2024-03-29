import { JwtHelperService } from '@auth0/angular-jwt';
import { API_CONFIG } from './../config/api.config';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { credenciais } from '../models/credenciais';
import { usuario } from '../models/usuario';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

jwtservice: JwtHelperService = new JwtHelperService();


  constructor(private http: HttpClient) { }

  authenticate(creds: credenciais) {
    return this.http.post(`${API_CONFIG.baseUrl}/login`, creds, {
      observe: 'response',
      responseType: 'text'
    })
  }

  sucessfulLogin(authToken: string){
    localStorage.setItem(`token`, authToken);
  }
  isAuthenticated(){
    let token = localStorage.getItem(`token`)
    if(token != null){
      return !this.jwtservice.isTokenExpired(token);

    }
    return false
  }
  logout(){
    localStorage.clear()
  } 

  getUsuarioLogado(): string | null {
    const token = localStorage.getItem('token');
    return token ? this.jwtservice.decodeToken(token)?.sub : null;
  }


}
