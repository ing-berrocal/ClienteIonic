import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { ItemDetailsPage } from '../item-details/item-details';
import { TituloFormPage } from '../titulo-form/tituloForm';

import { TituloService } from '../../servicio/tituloServicio';

@Component({
  selector: 'titulo-list',
  templateUrl: 'titulo.html'
})
export class TituloPage {
  icons: string[];
  items: Array<{id:string,documento: string, nombre: string, icon: string, plataforma:string}>;
  busqueda:string = 't';
  consulta:string = '';

  constructor(public navCtrl: NavController, public navParams: NavParams, public tituloServicio:TituloService) {

    this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane','american-football', 'boat', 'bluetooth', 'build'];    
  }

  ionViewWillEnter()    { 
    this.tituloServicio.getTitulos(this.busqueda,this.consulta).subscribe((i)=>{
      //console.log(i);
      this.setItems(i);
    });    
  }

  setItems(elementos){
    this.items = [];    
    for(let i = 0; i < elementos.length; i++) {      
      this.items.push({
        id: elementos[i].id,
        documento: '',
        nombre: elementos[i].nombre,
        icon: this.icons[Math.floor(Math.random() * this.icons.length)],
        plataforma: elementos[i].plataforma.descripcion
      });
    }
  }

  itemTapped(event, item) {
    this.navCtrl.push(TituloFormPage, {
      item: {id:item.id,editar:true}
    });
  }

  itemAgregar(event) {
    this.navCtrl.push(TituloFormPage, {
      item: {editar:false}
    });
  }

  itemBuscar(event) {    
    this.tituloServicio.getTitulos(this.busqueda,this.consulta).subscribe((i)=>{
      //console.log(i);
      this.setItems(i);
    });
  }
}
