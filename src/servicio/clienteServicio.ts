import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ClienteService {

  constructor(
    private http: HttpClient
  ) {}

  getClientes() : any{
    return this.http.get('http://127.0.0.1:8080/cliente');
  }

  getCliente(documento:string) {
    return this.http.get('http://127.0.0.1:8080/cliente/{documento}'.replace('{documento}',documento));
  }

  postCliente(cliente:any) {
    return this.http.post('http://127.0.0.1:8080/cliente',cliente);
  }
}