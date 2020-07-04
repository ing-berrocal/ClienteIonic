import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TituloService {

  constructor(
    private http: HttpClient
  ) {}

  getPlataforma() : Observable<any> {
    return this.http.get('http://127.0.0.1:8080/titulo/plataforma');
  }  

  getProductor() : Observable<any>{
    return this.http.get('http://127.0.0.1:8080/titulo/producto');
  }  

  getT():any {
    return this.http.get('http://127.0.0.1:8080/titulo');
    //return this.http.get('http://127.0.0.1:8080/titulo'.replace('{param}',parametro).replace('{valor}',valor));
  }  

  getTitulos(parametro:string,valor:string) :any{
    return this.http.get('http://127.0.0.1:8080/titulo?parametro={param}&valor={valor}'.replace('{param}',parametro).replace('{valor}',valor));
    //return this.http.get('http://127.0.0.1:8080/titulo'.replace('{param}',parametro).replace('{valor}',valor));
  }  
  
  getTitulo(parametro:string) :any {
    return this.http.get('http://127.0.0.1:8080/titulo/{id}'.replace('{id}',parametro));    
  }  

  postTitulo(titulo:any) :any {
    return this.http.post('http://127.0.0.1:8080/titulo',titulo);
  }

  putTitulo(titulo:any) :any {
    return this.http.put('http://127.0.0.1:8080/titulo',titulo);
  }
}