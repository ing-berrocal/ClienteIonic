import { Component } from '@angular/core';

import { NavController, NavParams, AlertController } from 'ionic-angular';

import { ItemDetailsPage } from '../item-details/item-details';

import { ClienteService } from '../../servicio/clienteServicio';

@Component({
  selector: 'cliente-form-list',
  templateUrl: 'clienteForm.html'
})
export class ClienteFormPage {

  icons: string[];
  items: Array<{documento: string, nombre: string, icon: string}>;
  selectedItem: any;
  form : any = {
      documento:'',
      apellidos:'',
      nombres:'',
      telefono:'',
      direccion:'',
      email:'',
        fechaNacimiento: '1990-02-19',        
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController,public clienteServicio:ClienteService) {
    this.selectedItem = navParams.get('item'); 
    if(this.selectedItem.editar){
        console.log(this.selectedItem)
        this.clienteServicio.getCliente(this.selectedItem.documento).subscribe((i)=>{
            //console.log(i);      
            this.form = i;            
        },erro=>{console.log('error')});    
    }
  }    

  itemAgregar(event) {
    this.clienteServicio.postCliente(this.form).subscribe((i)=>{
        //console.log(i);      
        //this.headerProperty = i.headers.get('property name here');
        this.showAlert('Cliente agregado');
    },error=>{ 
        this.showAlert(error.error.message) 
    });    
  }

  itemCancelar(event) {
    //this.navCtrl.push(ItemDetailsPage, {item: item});
    this.navCtrl.pop();
  }

  showAlert(mensaje) {
    const alert = this.alertCtrl.create({
      title: 'Cliente',
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
