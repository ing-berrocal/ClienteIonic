import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { ItemDetailsPage } from '../item-details/item-details';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  icons: string[];
  items: Array<{title: string, note: string, icon: string, url: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    'american-football', 'boat', 'bluetooth', 'build'];

    this.items = [];
    //for(let i = 1; i < 11; i++)
      this.items.push({
        title: 'Reporte cliente',
        note: 'Prestamos por clientes',
        icon: this.icons[Math.floor(Math.random() * this.icons.length)],
        url: 'cliente'
      },
      {
        title: 'Reporte título',
        note: 'Prestamos por títulos',
        icon: this.icons[Math.floor(Math.random() * this.icons.length)],
        url: 'titulo'
      },
      {
        title: 'Reporte por año',
        note: 'Prestamos por cada 10 años',
        icon: this.icons[Math.floor(Math.random() * this.icons.length)],
        url: '10'
      });
    
  }

  itemTapped(event, item) {
    this.navCtrl.push(ItemDetailsPage, {
      item: item
    });
  }
}
