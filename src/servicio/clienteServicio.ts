import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {getURL} from './configuracion';

@Injectable()
export class ClienteService {

  constructor(
    private http: HttpClient
  ) {}

  getClientes() : any{
    return this.http.get(getURL('{URL}/cliente'));
  }

  getCliente(documento:string) {
    return this.http.get(getURL('{URL}/cliente/{documento}').replace('{documento}',documento));
  }

  postCliente(cliente:any):any {
    return this.http.post(getURL('{URL}/cliente'),cliente);
  }

  putCliente(cliente:any):any {
    return this.http.put(getURL('{URL}/cliente'),cliente);
  }
}