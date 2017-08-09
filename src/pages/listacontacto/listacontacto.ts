import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


/**
 * Generated class for the ListacontactoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-listacontacto',
  templateUrl: 'listacontacto.html',
})
export class ListacontactoPage {

  item=[];
  constructor(public navCtrl: NavController,
     public navParams: NavParams) {
       this.item = navParams.data.item;
       console.log(JSON.stringify( this.item))
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListacontactoPage');
  }

}
