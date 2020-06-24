import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { AlquilerFormPage } from '../alquiler-form/alquilerForm';
import { AlquilerDetallePage } from '../alquiler-detalle/alquiler-detalle';

import { AlquilerService } from '../../servicio/alquilerServicio';

import moment from 'moment';

@Component({
  selector: 'alquiler-list',
  templateUrl: 'alquiler.html'
})
export class AlquilerPage {
  icons: string[];
  items: Array<{id:string,cliente: string, titulo: string, fechaAlquiler:string, fechaEntrega:string,valor:number,total:number,estado:number}>;
  fi:string = '';
  ff:string = '';

  constructor(public navCtrl: NavController, public navParams: NavParams, public alquilerServicio:AlquilerService) {    

    this.fi = moment().format('YYYY-MM-DD')
    this.ff = moment().format('YYYY-MM-DD')    
  }

  ionViewWillEnter()    { 
    this.alquilerServicio.getAlquiler(this.fi,this.ff).subscribe((i)=>{
      //console.log(i);
      this.setItems(i);
    });    
  }

  setItems(elementos){
    this.items = [];    
    for(let i = 0; i < elementos.length; i++) {      
      this.items.push({
        id: elementos[i].id,
        cliente: elementos[i].documento +'-'+elementos[i].apellidos+' '+elementos[i].nombres,
        titulo: elementos[i].nombre,
        fechaAlquiler:elementos[i].fechaAlquiler,
        fechaEntrega:elementos[i].fechaEntrega,
        valor:elementos[i].valorDia,
        total:elementos[i].valorDia * elementos[i].diasAlquiler,
        estado:elementos[i].estado
      });
    }
  }

  itemTapped(event, item) {    
  }

  itemAgregar(event) {
    this.navCtrl.push(AlquilerFormPage, {
      item: {editar:false}
    });
  }

  itemDetalle(event,item) {
    this.navCtrl.push(AlquilerDetallePage, {
      item: {item:item,editar:false}
    });
  }

  itemBuscar(event) {    
    this.alquilerServicio.getAlquiler(this.fi,this.ff).subscribe((i)=>{
      //console.log(i);
      this.setItems(i);
    });    
  }
}
