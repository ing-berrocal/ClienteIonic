import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';

import { ClientePage } from '../pages/cliente/cliente';
import { ClienteFormPage } from '../pages/cliente-form/clienteForm';

import { TituloPage } from '../pages/titulo/titulo';
import { TituloFormPage } from '../pages/titulo-form/tituloForm';

import { AlquilerPage } from '../pages/alquiler/alquiler';
import { AlquilerFormPage } from '../pages/alquiler-form/alquilerForm';
import { AlquilerDetallePage } from '../pages/alquiler-detalle/alquiler-detalle';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { ClienteService } from '../servicio/clienteServicio';
import { TituloService } from '../servicio/tituloServicio';
import { AlquilerService } from '../servicio/alquilerServicio';
import { ReporteService } from '../servicio/reporteServicio';

import { HTTPInterceptor } from '../servicio/HttpInterceptor';

@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    ClientePage,ClienteFormPage,
    TituloPage,TituloFormPage,
    AlquilerPage,AlquilerFormPage,AlquilerDetallePage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    ClientePage,ClienteFormPage,
    TituloPage,TituloFormPage,
    AlquilerPage,AlquilerFormPage,AlquilerDetallePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ClienteService,TituloService,AlquilerService,
    ReporteService,
    { provide: HTTP_INTERCEPTORS, useClass: HTTPInterceptor, multi: true },
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
