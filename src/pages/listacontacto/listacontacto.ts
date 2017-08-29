import { Component } from '@angular/core';
import { IonicPage, NavController, LoadingController, ToastController, NavParams } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { File } from '@ionic-native/file';
import { FilePath } from '@ionic-native/file-path';

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
  imageDefault: string  = "assets/image/contacto.png";
  imagePhoto: string;
  imageContacto: string;
  operacion: String;
  objectId: String;
  nombre: String;
  telefono: String;
  edad: String;
  fileURL: string;

  editTextNombreIsenabled: boolean = true;
  editTextTelefonoIsenabled: boolean = true;
  editTextEdadIsenabled: boolean = true;

  buttonGuardarHidden: boolean;
  buttonEditarHidden: boolean;
  buttonPhotoHidden: boolean;
  dataContacto = {};

  loading: any;
  data: any;
  dataNuevoContacto = [];

  constructor(public navCtrl: NavController,
    public autService: AuthServiceProvider,
    public loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    public navParams: NavParams,
    private camera: Camera,
    private file: File,
    private filePath: FilePath) {
    this.operacion = navParams.data.operacion;
    this.objectId = navParams.data.objectId;
    this.nombre = navParams.data.nombre;
    this.telefono = navParams.data.telefono;
    this.edad = navParams.data.edad;
    
  }

  ionViewDidLoad(){

    if (this.operacion == "registrar") {
      this.editTextNombreIsenabled = false;
      this.editTextTelefonoIsenabled = false;
      this.editTextEdadIsenabled = false;
      this.buttonGuardarHidden = true;
      this.buttonEditarHidden = false;
      this.buttonPhotoHidden = true;
      this.imageContacto = this.imageDefault;
      this.imagePhoto = this.imageDefault;
    } else {
      this.cargarFoto(this.objectId);
      this.buttonGuardarHidden = false;
      this.buttonEditarHidden = true;
      this.buttonPhotoHidden = false;
    }
    
  }

  cargarFoto(objectId){
    this.autService.apiStatePhoto(objectId).subscribe(response => {
      this.imageContacto = response;
      this.imagePhoto = response;
    },(error)=>{
      this.imageContacto = this.imageDefault;
      this.imagePhoto = this.imageDefault;
    });
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
    this.buttonPhotoHidden = true;
    this.operacion = "actualizar";
  }


  registrarContacto(nombre,
    telefono,
    edad) {
    this.showLoader();
    this.dataContacto = { nombre, telefono, edad }
    this.autService.apiRegistrarContacto(this.dataContacto).then(data => {
      this.objectId = data.objectId;
      if (this.imageContacto !== this.imagePhoto) {
        this.savePhoto(this.imageContacto);
      }
    });
    this.loading.dismiss();
    this.presentToast("Registro correcto");
    this.navCtrl.setRoot(HomePage);

  }

  actualizarContacto(objectId, nombre,
    telefono, edad) {
    this.showLoader();
    this.dataContacto = { nombre, telefono, edad }
    this.autService.apiActualizarContacto(objectId, this.dataContacto).then((result) => {
      if (this.imageContacto !== this.imagePhoto) {
        this.savePhoto(this.imageContacto);
      }
      this.loading.dismiss();
      this.presentToast("Completado");
      this.navCtrl.setRoot(HomePage);
    }, (error) => {
      this.loading.dismiss();
      this.presentToast(error);
    });
  }

  savePhoto(imageData) {
    this.filePath.resolveNativePath(imageData).then(filePath => {
      var currentName = imageData.substr(imageData.lastIndexOf('/') + 1);
      var correctPath = imageData.substr(0, imageData.lastIndexOf('/') + 1);
      let newName = this.objectId + ".png";
      this.file.copyFile(correctPath, currentName, this.file.dataDirectory, newName).then(success => {
        this.autService.apiSavePhoto(newName);
      }, error => {
        this.presentToast('Error while storing file.');
      });
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
    this.camera.getPicture(options).then((imageData) => {
      this.imageContacto = imageData;
    },(error) => {
      this.presentToast("Error al tomar foto") });
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
      duration: 7000,
      position: 'bottom',
      dismissOnPageChange: true
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }




}
