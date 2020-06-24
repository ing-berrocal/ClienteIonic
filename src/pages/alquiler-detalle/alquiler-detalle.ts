import { Component } from '@angular/core';

import { NavController, NavParams, AlertController } from 'ionic-angular';

import { AlquilerFormPage } from '../alquiler-form/alquilerForm';

import { AlquilerService } from '../../servicio/alquilerServicio';

@Component({
  selector: 'alquiler-detalle',
  templateUrl: 'alquiler-detalle.html'
})
export class AlquilerDetallePage {
  icons: string[];
  item: any;
  fi:string = '2020-06-01';
  ff:string = '2020-06-30';
  selectedItem:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alquilerServicio:AlquilerService,public alertCtrl: AlertController,) {    
    this.selectedItem = navParams.get('item'); 
    this.item = this.selectedItem.item;    
    console.log(this.item)
  }

  setItems(elementos){    
  }

  itemTapped(event, item) {    
  }  

  itemEntregar(event) {    
    this.alquilerServicio.putAlquiler(this.item.id).subscribe((i)=>{
      this.showAlert()    
    })    
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
