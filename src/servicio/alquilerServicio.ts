import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {getURL} from './configuracion';

@Injectable()
export class AlquilerService {

  constructor(
    private http: HttpClient
  ) {}  

  getAlquil():Observable<any> {
    return this.http.get(getURL('{URL}/alquiler'));
  }  

  getAlquiler(fechaInicial:string,fechaFinal:string):Observable<any> {
    return this.http.get(getURL('{URL}/alquiler/fecha?fechaInicial={fi}&fechaFinal={ff}').replace('{fi}',fechaInicial).replace('{ff}',fechaFinal));
  }  

  postAlquiler(alquiler:any):Observable<any>{
    return this.http.post(getURL('{URL}/alquiler'),alquiler);
  }

  putAlquiler(id:string):Observable<any> {
    return this.http.put(getURL('{URL}/alquiler/{id}').replace('{id}',id),{});
  }
}