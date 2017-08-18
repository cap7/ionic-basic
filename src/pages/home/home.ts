import { Component } from '@angular/core';
import { NavController,LoadingController,NavParams } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

import { ListacontactoPage } from '../listacontacto/listacontacto';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  listaContato= [];
  operacion: String;
  objectId: String;
  nombre: String;
  telefono: String;
  edad: number;

  

  constructor(public navCtrl: NavController,
    public autService: AuthServiceProvider,
    public loadingCtrl: LoadingController,
  public navParams: NavParams) {

    this.listaContato = this.navParams.data.listacontacto;
  }

 

  
  ionViewDidEnter(){
    
     this.listarContacto();
    //console.log(this.listaContato)
    //this.listaContato = this.navParams.data.listaContato;
  }

  abrirContactoDetalle(objectId,nombre,telefono,edad) {
    this.navCtrl.push(ListacontactoPage,{objectId:objectId,nombre:nombre,telefono:telefono,edad:edad});
  }

  abrirListaContacto(item=[]) {
    this.navCtrl.push(ListacontactoPage,{item:item});
  }

  abrirRegistroContacto(){
    this.operacion = "registrar";
    this.navCtrl.push(ListacontactoPage,{operacion:this.operacion});
  }
  

  

  listarContacto(){
    this.autService.apiListarContacto().then(response => {
      this.listaContato = response;
    }).catch(error =>{
      console.error(error);
    });
  }




  

}
