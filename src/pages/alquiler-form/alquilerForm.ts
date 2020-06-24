import { Component } from '@angular/core';

import { NavController, NavParams, AlertController } from 'ionic-angular';

import { ClienteService } from '../../servicio/clienteServicio';
import { TituloService } from '../../servicio/tituloServicio';
import { AlquilerService } from '../../servicio/alquilerServicio';

@Component({
  selector: 'alquiler-form-list',
  templateUrl: 'alquilerForm.html'
})
export class AlquilerFormPage {

  clientes: Array<{id: number, descripcion: string}> = [];
  titulos: Array<{id: number, descripcion: string}> = [];
  icons: string[];  
  selectedItem: any;
  _cliente:any;
  _titulo:any;
  form : any = {
    cliente: 0,
    titulo: 0,
    dias: 1,
    observacion: ''    
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController,
    public clienteServicio:ClienteService,
    public tituloServicio:TituloService,
    public alquilerServicio:AlquilerService) {

      this.clienteServicio.getClientes().subscribe((i)=>{
        i.forEach(element => {          
          this.clientes.push({id:element.id, descripcion:element.documento +'-'+ element.apellidos + ' ' + element.nombres})  
        });        
      })

      this.tituloServicio.getT().subscribe((i)=>{
        i.forEach(element => {          
          this.titulos.push({id:element.id, descripcion:element.nombre})  
        });        
      })

    this.selectedItem = navParams.get('item'); 
    if(this.selectedItem.editar){        
        console.log(this.selectedItem)        
    }
  }    

  itemAgregar(event) {    
    this.alquilerServicio.postAlquiler(this.form).subscribe((i)=>{        
        //this.headerProperty = i.headers.get('property name here');
        this.showAlert();
    });    
  }

  itemEditar(event) {    
  }

  itemCancelar(event) {
    //this.navCtrl.push(ItemDetailsPage, {item: item});
    this.navCtrl.pop();
  }

  showAlert() {
    const alert = this.alertCtrl.create({
      title: 'New Friend!',
      subTitle: 'Your friend, Obi wan Kenobi, just accepted your friend request!',
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
