import { Component,OnInit  } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { ItemDetailsPage } from '../item-details/item-details';
import { ClienteFormPage } from '../cliente-form/clienteForm';

import { ClienteService } from '../../servicio/clienteServicio';

@Component({
  selector: 'cliente-list',
  templateUrl: 'cliente.html'
})
export class ClientePage  {
  icons: string[];
  items: Array<{documento: string, nombre: string, icon: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public clienteServicio:ClienteService) {

    this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    'american-football', 'boat', 'bluetooth', 'build'];    
  }

  ionViewWillEnter()    { 
    this.clienteServicio.getClientes().subscribe((i)=>{
      //console.log(i);
      this.setClientes(i);
    });     
  }

  setClientes(elementos){
    this.items = [];    
    for(let i = 0; i < elementos.length; i++) {      
      this.items.push({
        documento: elementos[i].documento,
        nombre: elementos[i].apellidos +' '+elementos[i].nombres,
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }
  }

  itemTapped(event, item) {
    this.navCtrl.push(ClienteFormPage, {
      item: {documento:item.documento,editar:true}
    });
  }

  itemAgregar(event) {
    this.navCtrl.push(ClienteFormPage, {
      item: {editar:false}
    });
  }
}
