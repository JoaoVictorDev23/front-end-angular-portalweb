import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tarifas } from '../models/tarifas';
import { API_CONFIG } from '../config/api.config';

@Injectable({
  providedIn: 'root'
})
export class TarifasService {

  constructor(private http: HttpClient) { }
 

  findAll(): Observable<tarifas[]>{
    return this.http.get<tarifas[]>(`${API_CONFIG.baseUrl}/tarifas`)
  }
}
