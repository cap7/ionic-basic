import { Component } from '@angular/core';
import { IonicPage, NavController, LoadingController, ToastController, NavParams } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { Camera, CameraOptions } from '@ionic-native/camera';

import { HomePage } from '../home/home';
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

  image: string = ''; // src de imagen
  operacion: String;
  objectId: String;
  nombre: String;
  telefono: String;
  edad: String;

  editTextNombreIsenabled: boolean = true;
  editTextTelefonoIsenabled: boolean = true;
  editTextEdadIsenabled: boolean = true;

  buttonGuardarHidden: boolean;
  buttonEditarHidden: boolean;
  dataContacto = {};

  loading: any;
  data: any;

  constructor(public navCtrl: NavController,
    public autService: AuthServiceProvider,
    public loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    public navParams: NavParams,
    private camera: Camera) {
    this.operacion = navParams.data.operacion;
    this.objectId = navParams.data.objectId;
    this.nombre = navParams.data.nombre;
    this.telefono = navParams.data.telefono;
    this.edad = navParams.data.edad;
    if (this.operacion == "registrar") {
      this.editTextNombreIsenabled = false;
      this.editTextTelefonoIsenabled = false;
      this.editTextEdadIsenabled = false;
      this.buttonGuardarHidden = true;
      this.buttonEditarHidden = false;
    } else {
      this.buttonGuardarHidden = false;
      this.buttonEditarHidden = true;
    }
    console.log(this.objectId + "," + this.nombre + "," + this.telefono + "," + this.edad);
  }


  operacionContacto(nombre,
    telefono,
    edad) {
    if (this.operacion == "registrar") {
      this.registrarContacto(nombre,
        telefono,
        edad)
    } else {
      if (this.operacion == "actualizar") {
        this.actualizarContacto(this.objectId, nombre,
          telefono, edad)
      }
    }
  }

  operacionActualizar() {
    this.editTextNombreIsenabled = false;
    this.editTextTelefonoIsenabled = false;
    this.editTextEdadIsenabled = false;
    this.buttonGuardarHidden = true;
    this.operacion = "actualizar";
  }


  registrarContacto(nombre,
    telefono,
    edad) {
    this.showLoader();
    this.dataContacto = { nombre, telefono, edad }
    this.autService.apiRegistrarContacto(this.dataContacto).then((result) => {
      this.loading.dismiss();
      this.data = result;
      this.presentToast("Registro correcto");
      this.navCtrl.setRoot(HomePage);
    }, (error) => {
      this.loading.dismiss();
      this.presentToast(error);
    });
  }

  actualizarContacto(objectId, nombre,
    telefono, edad) {
    this.showLoader();
    this.dataContacto = { nombre, telefono, edad }
    this.autService.apiActualizarContacto(objectId, this.dataContacto).then((result) => {
      this.loading.dismiss();
      this.data = result;
      this.presentToast("Completado");
      this.navCtrl.setRoot(HomePage);
    }, (error) => {
      this.loading.dismiss();
      this.presentToast(error);
    });
  }

  getPicture() {
    const options: CameraOptions = {
      quality: 100,
      targetHeight: 100,
      targetWidth: 100,
      correctOrientation: true,
      allowEdit: true,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.PNG,
      mediaType: this.camera.MediaType.PICTURE,
      cameraDirection: this.camera.Direction.FRONT
    };

    this.camera.getPicture(options)
      .then((imageData) => {
        this.image = imageData;
      },
      (error) => { console.log("Error al tomar foto") });
  }

  showLoader() {
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


  ionViewDidLoad() {
    console.log('ionViewDidLoad ListacontactoPage');
  }

}
