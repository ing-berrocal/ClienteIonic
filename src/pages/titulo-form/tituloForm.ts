import { Component } from '@angular/core';

import { NavController, NavParams, AlertController } from 'ionic-angular';

import { TituloService } from '../../servicio/tituloServicio';

@Component({
  selector: 'titulo-form-list',
  templateUrl: 'tituloForm.html'
})
export class TituloFormPage {

  icons: string[];
  items: Array<{documento: string, nombre: string, icon: string}>;
  selectedItem: any;
  form : any = {
    nombre: '',
    year: 2020,
    protagonista: '',
    director: '',
    plataforma: 1,    
    productor: 1,
    inventario: 1,    
    valoralquiler: 0.0,
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController,public tituloServicio:TituloService) {
    this.selectedItem = navParams.get('item'); 
    if(this.selectedItem.editar){                
        this.tituloServicio.getTitulo(this.selectedItem.id).subscribe((i)=>{
          this.form = i;
          this.form.plataforma = i.plataforma.id;
          this.form.productor = i.productor.id;
          this.form.valoralquiler = i.valorAlquiler;
        });    
    }
  }    

  itemAgregar(event) {
    this.tituloServicio.postTitulo(this.form).subscribe((i)=>{        
        //this.headerProperty = i.headers.get('property name here');
        this.showAlert('Agregado');
    });    
  }

  itemEditar(event) {
    this.tituloServicio.putTitulo(this.form).subscribe((i)=>{        
        //this.headerProperty = i.headers.get('property name here');
        this.showAlert('Editado');
    });    
  }

  itemCancelar(event) {
    //this.navCtrl.push(ItemDetailsPage, {item: item});
    this.navCtrl.pop();
  }

  showAlert(mensaje) {
    const alert = this.alertCtrl.create({
      title: 'Título',
      subTitle: mensaje,
      buttons: [{
        text: 'OK',
        handler: data => {
            this.navCtrl.pop();
        }
      }]
    });
    alert.present();
  }
}
