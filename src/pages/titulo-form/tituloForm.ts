import { Component } from '@angular/core';

import { NavController, NavParams, AlertController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { TituloService } from '../../servicio/tituloServicio';

@Component({
  selector: 'titulo-form-list',
  templateUrl: 'tituloForm.html'
})
export class TituloFormPage {

  icons: string[];
  items: Array<{documento: string, nombre: string, icon: string}>;
  productores: Array<{id: number, descripcion: string}>;
  plataformas: Array<{id: number, descripcion: string}>;
  selectedItem: any;
  form : FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController,public tituloServicio:TituloService,private formBuilder: FormBuilder) {
    this.selectedItem = navParams.get('item'); 

    this.tituloServicio.getProductor()
    .subscribe(data=>{
      this.productores = data;
    })
    this.tituloServicio.getPlataforma()
    .subscribe(data=>{
      this.plataformas = data;
    })

    this.form =  this.formBuilder.group({
      id: [],
      nombre: [null,[ Validators.required,Validators.maxLength(50)]],
      year: ['2020',[ Validators.required,Validators.maxLength(4)]],
      protagonista: ['',[ Validators.required]],
      director: ['',[ Validators.required]],
      plataforma: ['',[ Validators.required]],
      productor: ['',[ Validators.required]],
      inventario: ['',[ Validators.required,Validators.min(0)]],
      valoralquiler: [0.0,[ Validators.required,Validators.min(0)]]
    });

    if(this.selectedItem.editar){                
        this.tituloServicio.getTitulo(this.selectedItem.id).subscribe((i)=>{
          Object.keys(i).forEach(e=>{ 
            if(this.form.controls[e] !== undefined)
              if(typeof i[e] != 'object'){                
                this.form.controls[e].setValue(i[e]);
              }else this.form.controls[e].setValue(i[e].id);
           })            
          //this.form.plataforma = i.plataforma.id;
          //this.form.productor = i.productor.id;
          //this.form.valoralquiler = i.valorAlquiler;*/
        });    
    }
  }    

  itemAgregar(event) {    
    if(this.form.valid){
      this.tituloServicio.postTitulo(this.form.value).subscribe((i)=>{                
        this.showAlert('Agregado');
      });
    }
  }

  itemEditar(event) {
    this.tituloServicio.putTitulo(this.form.value).subscribe((i)=>{        
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
