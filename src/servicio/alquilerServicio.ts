import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AlquilerService {

  constructor(
    private http: HttpClient
  ) {}

  getAlquil() {
    return this.http.get('http://127.0.0.1:8080/alquiler');
  }  

  getAlquiler(fechaInicial:string,fechaFinal:string) {
    return this.http.get('http://127.0.0.1:8080/alquiler/fecha?fechaInicial={fi}&fechaFinal={ff}'.replace('{fi}',fechaInicial).replace('{ff}',fechaFinal));
  }  

  postAlquiler(alquiler:any) {
    return this.http.post('http://127.0.0.1:8080/alquiler',alquiler);
  }

  putAlquiler(id:string) {
    return this.http.put('http://127.0.0.1:8080/alquiler/{id}'.replace('{id}',id),{});
  }
}