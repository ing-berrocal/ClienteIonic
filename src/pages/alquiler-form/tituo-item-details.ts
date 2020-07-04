import { Component } from '@angular/core';

import { NavController, NavParams, PopoverController } from 'ionic-angular';
import { AlquilerFormPage } from '../alquiler-form/alquilerForm';
import { TituloService } from '../../servicio/tituloServicio';

@Component({
  selector: 'page-item-details',
  templateUrl: 'item-details.html'
})
export class TituloDetailsPage {
  selectedItem: any;
  busqueda:string = 't';
  consulta:string = '';
  items: any[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public tituloServicio:TituloService, 
    public popoverController:PopoverController) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');        
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
        plataforma: elementos[i].plataforma.descripcion
      });
    }
  }

  itemTapped(event, item) {
    //this.navCtrl.pop({item:item});    
    this.navCtrl.push(AlquilerFormPage, {item: item});    
  }
}
