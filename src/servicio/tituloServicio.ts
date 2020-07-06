import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {getURL} from './configuracion';

@Injectable()
export class TituloService {

  constructor(
    private http: HttpClient
  ) {}

  getPlataforma() : Observable<any> {
    return this.http.get(getURL('{URL}/titulo/plataforma'));
  }  

  getProductor() : Observable<any>{
    return this.http.get(getURL('{URL}/titulo/producto'));
  }  

  getT():any {
    return this.http.get(getURL('{URL}/titulo'));
    //return this.http.get('{URL}/titulo'.replace('{param}',parametro).replace('{valor}',valor));
  }  

  getTitulos(parametro:string,valor:string) :any{
    return this.http.get(getURL('{URL}/titulo?parametro={param}&valor={valor}').replace('{param}',parametro).replace('{valor}',valor));
    //return this.http.get('{URL}/titulo'.replace('{param}',parametro).replace('{valor}',valor));
  }  
  
  getTitulo(parametro:string) :any {
    return this.http.get(getURL('{URL}/titulo/{id}').replace('{id}',parametro));    
  }  

  postTitulo(titulo:any) :any {
    return this.http.post(getURL('{URL}/titulo'),titulo);
  }

  putTitulo(titulo:any) :any {
    return this.http.put('{URL}/titulo',titulo);
  }
}