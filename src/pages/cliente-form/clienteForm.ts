import { Component } from '@angular/core';

import { NavController, NavParams, AlertController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ClienteService } from '../../servicio/clienteServicio';

@Component({
  selector: 'cliente-form-list',
  templateUrl: 'clienteForm.html'
})
export class ClienteFormPage {

  icons: string[];
  items: Array<{documento: string, nombre: string, icon: string}>;
  selectedItem: any;
  //private todo : FormGroup;
  private form : FormGroup;
    //documento:'',apellidos:'',nombres:'',telefono:'',direccion:'',email:'',fechaNacimiento: '1990-02-19',          

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController,public clienteServicio:ClienteService, private formBuilder: FormBuilder) {
    this.selectedItem = navParams.get('item'); 

    this.form =  this.formBuilder.group({
      documento: ['',[ Validators.required,Validators.maxLength(15)]],
      apellidos: ['',[ Validators.required]],
      nombres: ['',[ Validators.required]],
      telefono: ['',[ Validators.required]],
      email: ['',[ Validators.required,Validators.email]],
      direccion: ['',[ Validators.required]],
      fechaNacimiento: ['',[ Validators.required]]
    });

    if(this.selectedItem.editar){        
        this.clienteServicio.getCliente(this.selectedItem.documento).subscribe((i)=>{          
          Object.keys(i).forEach(e=>{ 
            if(this.form.controls[e] !== undefined)
              this.form.controls[e].setValue(i[e]);            
           })            
        },erro=>{console.log('error')});    
    }
  }    

  itemAgregar(event) {    
    if(this.form.valid){
      this.clienteServicio.postCliente(this.form.value).subscribe((i)=>{
        //console.log(i);      
        //this.headerProperty = i.headers.get('property name here');
        this.showAlert('Cliente agregado',() => {this.navCtrl.pop();});
      },error=>{ 
        this.showAlert(error.error.message,()=>{}) 
      });
    }else{
      this.showAlert('Error en los campos del formulario',()=>{})       
    }    
  }

  itemEditar(event) {    
    if(this.form.valid){
      this.clienteServicio.putCliente(this.form.value).subscribe((i)=>{
        //console.log(i);      
        //this.headerProperty = i.headers.get('property name here');
        this.showAlert('Cliente Editado',() => {this.navCtrl.pop();});
      },error=>{ 
        this.showAlert(error.error.message,()=>{}) 
      });
    }else{
      this.showAlert('Error en los campos del formulario',()=>{})       
    }    
  }

  itemCancelar(event) {
    //this.navCtrl.push(ItemDetailsPage, {item: item});
    this.navCtrl.pop();
  }

  showAlert(mensaje, funcion) {
    const alert = this.alertCtrl.create({
      title: 'Cliente',
      subTitle: mensaje,
      buttons: [{
        text: 'OK',
        //handler: data => {this.navCtrl.pop();}
        handler: funcion
      }]
    });
    alert.present();
  }
}
