import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {getURL} from './configuracion';

@Injectable()
export class ReporteService {

  constructor(
    private http: HttpClient
  ) {}

  getReporteCliente():any {
    return this.http.get(getURL('{URL}/reporte/cliente'));
  }  

  getReporteTitulo():any {
    return this.http.get(getURL('{URL}/reporte/titulo'));
  }    

  getReporte10():any {
    return this.http.get(getURL('{URL}/reporte/reporte10'));
  }    
}