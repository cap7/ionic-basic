import { Component } from '@angular/core';
import { NavController,LoadingController, ToastController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

import { ListacontactoPage } from '../listacontacto/listacontacto';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  listaContato: any[] = [];

  loading: any;
  data: any;

  dataContacto = {};

  nombre: String;
  telefono: String;
  edad: number;

  

  constructor(public navCtrl: NavController,
    public autService: AuthServiceProvider,
    public loadingCtrl: LoadingController,
    private toastCtrl: ToastController) {

  }

  abrirListaContacto(item=[]) {
    this.navCtrl.push(ListacontactoPage,{item:item});
  }

  //test


  registrarContacto( nombre,
  telefono,
  edad){
    this.showLoader();
    this.dataContacto={nombre,telefono,edad}
    this.autService.apiRegistrarContacto(this.dataContacto).then((result) => {
      this.loading.dismiss();
      this.data = result;
      this.presentToast("Registro correcto") ;
      this.navCtrl.setRoot(HomePage);
    }, (error) => {
      this.loading.dismiss();
      this.presentToast(error) ;
    });
  }

  listarContacto(){
    this.autService.apiListarContacto().then(response => {
      this.listaContato = response;
      console.log(this.listaContato)
      this.abrirListaContacto(this.listaContato);
    }).catch(error =>{
      console.error(error);
    });
  }

  showLoader(){
    this.loading = this.loadingCtrl.create({
        content: 'Cargando'
    });

    this.loading.present();
  }

  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'bottom',
      dismissOnPageChange: true
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }
  

}
