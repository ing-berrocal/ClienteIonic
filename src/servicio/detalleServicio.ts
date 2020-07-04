import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AlquilerService {

  constructor(
    private http: HttpClient
  ) {}

  getPlataforma() {
    return this.http.get('http://127.0.0.1:8080/alquiler/plataforma');
  }  

  getProducto() {
    return this.http.get('http://127.0.0.1:8080/alquiler/producto');
  }  
}