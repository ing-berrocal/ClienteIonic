import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ReporteService {

  constructor(
    private http: HttpClient
  ) {}

  getReporteCliente():any {
    return this.http.get('http://localhost:8080/reporte/cliente');
  }  

  getReporteTitulo():any {
    return this.http.get('http://localhost:8080/reporte/titulo');
  }    

  getReporte10():any {
    return this.http.get('http://localhost:8080/reporte/reporte10');
  }    
}