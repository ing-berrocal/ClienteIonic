import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { ReporteService } from '../../servicio/reporteServicio';

@Component({
  selector: 'page-item-details',
  templateUrl: 'item-details.html'
})
export class ItemDetailsPage {
  selectedItem: any;

  items: any[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public reporteServicio: ReporteService) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');
    this.items = [];
    switch(this.selectedItem.url){
      case 'cliente':
        this.reporteServicio.getReporteCliente().subscribe((d)=>{
          d.forEach(i => {
            this.items.push({nombre:(i.documento+' - '+i.apellidos+' '+i.nombres),cant:i.freq})
          });          
        })        
        break;
        case 'titulo':
          this.reporteServicio.getReporteTitulo().subscribe((d)=>{
            d.forEach(i => {
              this.items.push({nombre:(i.nombre),cant:i.freq})
            });          
          })        
          break;
    }
  }
}
