import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { API_CONFIG } from '../config/api.config';
import { Observable } from 'rxjs';
import { usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http:HttpClient) { }
  
  findAll(): Observable<usuario[]>{
    return this.http.get<usuario[]>(`${API_CONFIG.baseUrl}/usuarios`);
  }
  create(usuario: usuario): Observable<usuario>{
    return this.http.post<usuario>(`${API_CONFIG.baseUrl}/usuarios`, usuario);
  }
}
