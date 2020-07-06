import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {getURL} from './configuracion';

@Injectable()
export class AlquilerService {

  constructor(
    private http: HttpClient
  ) {}

  getPlataforma() {
    return this.http.get(getURL('{URL}/alquiler/plataforma'));
  }  

  getProducto() {
    return this.http.get(getURL('{URL}/alquiler/producto'));
  }  
}