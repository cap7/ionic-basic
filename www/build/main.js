webpackJsonp([1],{

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_file__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_file_transfer__ = __webpack_require__(230);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/*
  Generated class for the AuthServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var AuthServiceProvider = (function () {
    function AuthServiceProvider(http, transfer, file) {
        this.http = http;
        this.transfer = transfer;
        this.file = file;
        this.apiUrl = 'https://api.backendless.com/439EBE69-CEAA-9937-FF2D-2827A2E99000/41E48839-73FF-48CD-FFA9-C473E4B42000/';
    }
    AuthServiceProvider.prototype.apiListarContacto = function () {
        return this.http.get(this.apiUrl + "data/Contacto").map(function (res) { return res.json(); })
            .toPromise();
    };
    AuthServiceProvider.prototype.apiRegistrarContacto = function (data) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.apiUrl + "data/Contacto", JSON.stringify(data), { headers: headers }).map(function (res) { return res.json(); }).toPromise();
    };
    AuthServiceProvider.prototype.apiActualizarContacto = function (objectId, data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.append('Content-Type', 'application/json');
            _this.http.put(_this.apiUrl + "data/Contacto/" + objectId, JSON.stringify(data), { headers: headers }).subscribe(function (res) {
                resolve(res.json());
            }, function (error) {
                reject(error);
            });
        });
    };
    AuthServiceProvider.prototype.apiEliminarContacto = function (objectId) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.delete(this.apiUrl + "data/Contacto/" + objectId).map(function (res) { return res.json(); }).toPromise();
    };
    AuthServiceProvider.prototype.apiEliminarFotoContacto = function (objectId) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.delete(this.apiUrl + "files/fotos/" + objectId + ".png").toPromise();
    };
    AuthServiceProvider.prototype.apiStatePhoto = function (objectId) {
        var url = this.apiUrl + "files/fotos/" + objectId + ".png";
        return this.http.get(url).map(function (res) { return res.url; });
    };
    AuthServiceProvider.prototype.apiSavePhoto = function (imageSrc) {
        var _this = this;
        var targetPath = this.file.dataDirectory + imageSrc;
        var url = this.apiUrl + "files/fotos/" + imageSrc + "?overwrite=true";
        var options = {
            fileKey: "file",
            fileName: imageSrc,
            chunkedMode: false,
            mimeType: "multipart/form-data",
            params: {
                'fileURL': imageSrc
            }
        };
        var fileTransfer = this.transfer.create();
        fileTransfer.upload(targetPath, url, options).then(function (data) {
            _this.updateSuccessImage.response = data.response;
        });
    };
    return AuthServiceProvider;
}());
AuthServiceProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_file_transfer__["a" /* FileTransfer */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_file__["a" /* File */]])
], AuthServiceProvider);

//# sourceMappingURL=auth-service.js.map

/***/ }),

/***/ 127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__listacontacto_listacontacto__ = __webpack_require__(172);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = (function () {
    function HomePage(navCtrl, autService, loadingCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.autService = autService;
        this.loadingCtrl = loadingCtrl;
        this.navParams = navParams;
        this.listaContato = [];
        this.listaContato = this.navParams.data.listacontacto;
    }
    HomePage.prototype.ionViewDidEnter = function () {
        this.listarContacto();
    };
    HomePage.prototype.abrirContactoDetalle = function (objectId, nombre, telefono, edad) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__listacontacto_listacontacto__["a" /* ListacontactoPage */], { objectId: objectId, nombre: nombre, telefono: telefono, edad: edad });
    };
    HomePage.prototype.abrirListaContacto = function (item) {
        if (item === void 0) { item = []; }
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__listacontacto_listacontacto__["a" /* ListacontactoPage */], { item: item });
    };
    HomePage.prototype.abrirRegistroContacto = function () {
        this.operacion = "registrar";
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__listacontacto_listacontacto__["a" /* ListacontactoPage */], { operacion: this.operacion });
    };
    HomePage.prototype.listarContacto = function () {
        var _this = this;
        this.autService.apiListarContacto().then(function (response) {
            _this.listaContato = response;
        }).catch(function (error) {
            console.error(error);
        });
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"D:\Proyecto_Ionic\CrudUserApp\ContactosApp\src\pages\home\home.html"*/'<ion-header>\n  <ion-toolbar>\n    <ion-title>Contactos</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only color="royal" (click)="abrirRegistroContacto()">\n        <ion-icon name="person-add"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-list>\n    <ion-item *ngFor="let contacto of listaContato" (click)="abrirContactoDetalle(contacto.objectId,contacto.nombre,contacto.telefono,contacto.edad)">\n      <h2>{{ contacto.nombre | uppercase }}</h2>\n      <p hidden>{{ contacto.objectId }}</p>\n      <p>Edad: {{ contacto.edad }}</p>\n      <p>{{ contacto.telefono }}</p>\n    </ion-item>\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"D:\Proyecto_Ionic\CrudUserApp\ContactosApp\src\pages\home\home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListacontactoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_file__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_file_path__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_home__ = __webpack_require__(127);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the ListacontactoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ListacontactoPage = (function () {
    function ListacontactoPage(navCtrl, autService, loadingCtrl, toastCtrl, navParams, camera, file, filePath) {
        this.navCtrl = navCtrl;
        this.autService = autService;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.navParams = navParams;
        this.camera = camera;
        this.file = file;
        this.filePath = filePath;
        this.imageDefault = "assets/image/contacto.png";
        this.editTextNombreIsenabled = true;
        this.editTextTelefonoIsenabled = true;
        this.editTextEdadIsenabled = true;
        this.dataContacto = {};
        this.dataNuevoContacto = [];
        this.operacion = navParams.data.operacion;
        this.objectId = navParams.data.objectId;
        this.nombre = navParams.data.nombre;
        this.telefono = navParams.data.telefono;
        this.edad = navParams.data.edad;
    }
    ListacontactoPage.prototype.ionViewDidLoad = function () {
        if (this.operacion == "registrar") {
            this.editTextNombreIsenabled = false;
            this.editTextTelefonoIsenabled = false;
            this.editTextEdadIsenabled = false;
            this.buttonGuardarHidden = true;
            this.buttonEditarHidden = false;
            this.buttonBorrarHidden = false;
            this.buttonPhotoHidden = true;
            this.imageContacto = this.imageDefault;
            this.imagePhoto = this.imageDefault;
        }
        else {
            this.cargarFoto(this.objectId);
            this.buttonGuardarHidden = false;
            this.buttonEditarHidden = true;
            this.buttonBorrarHidden = true;
            this.buttonPhotoHidden = false;
        }
    };
    ListacontactoPage.prototype.cargarFoto = function (objectId) {
        var _this = this;
        this.autService.apiStatePhoto(objectId).subscribe(function (response) {
            _this.imageContacto = response;
            _this.imagePhoto = response;
        }, function (error) {
            _this.imageContacto = _this.imageDefault;
            _this.imagePhoto = _this.imageDefault;
        });
    };
    ListacontactoPage.prototype.operacionContacto = function (nombre, telefono, edad) {
        if (this.operacion == "registrar") {
            this.registrarContacto(nombre, telefono, edad);
        }
        else {
            if (this.operacion == "actualizar") {
                this.actualizarContacto(this.objectId, nombre, telefono, edad);
            }
        }
    };
    ListacontactoPage.prototype.operacionActualizar = function () {
        this.editTextNombreIsenabled = false;
        this.editTextTelefonoIsenabled = false;
        this.editTextEdadIsenabled = false;
        this.buttonGuardarHidden = true;
        this.buttonPhotoHidden = true;
        this.operacion = "actualizar";
    };
    ListacontactoPage.prototype.registrarContacto = function (nombre, telefono, edad) {
        var _this = this;
        this.showLoader();
        this.dataContacto = { nombre: nombre, telefono: telefono, edad: edad };
        this.autService.apiRegistrarContacto(this.dataContacto).then(function (data) {
            _this.objectId = data.objectId;
            if (_this.imageContacto !== _this.imagePhoto) {
                _this.savePhoto(_this.imageContacto);
            }
        });
        this.loading.dismiss();
        this.presentToast("Registro correcto");
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__home_home__["a" /* HomePage */]);
    };
    ListacontactoPage.prototype.actualizarContacto = function (objectId, nombre, telefono, edad) {
        var _this = this;
        this.showLoader();
        this.dataContacto = { nombre: nombre, telefono: telefono, edad: edad };
        this.autService.apiActualizarContacto(objectId, this.dataContacto).then(function (result) {
            if (_this.imageContacto !== _this.imagePhoto) {
                _this.savePhoto(_this.imageContacto);
            }
            _this.loading.dismiss();
            _this.presentToast("Completado");
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__home_home__["a" /* HomePage */]);
        }, function (error) {
            _this.loading.dismiss();
            _this.presentToast(error);
        });
    };
    ListacontactoPage.prototype.operacionEliminar = function () {
        var _this = this;
        this.autService.apiEliminarContacto(this.objectId).then(function (data) {
            if (data.deletionTime) {
                _this.autService.apiEliminarFotoContacto(_this.objectId).then(function (data) {
                    _this.presentToast("Completado");
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__home_home__["a" /* HomePage */]);
                }, function (error) {
                    _this.presentToast("Completado");
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__home_home__["a" /* HomePage */]);
                });
            }
        });
    };
    ListacontactoPage.prototype.savePhoto = function (imageData) {
        var _this = this;
        this.filePath.resolveNativePath(imageData).then(function (filePath) {
            var currentName = imageData.substr(imageData.lastIndexOf('/') + 1);
            var correctPath = imageData.substr(0, imageData.lastIndexOf('/') + 1);
            var newName = _this.objectId + ".png";
            _this.file.copyFile(correctPath, currentName, _this.file.dataDirectory, newName).then(function (success) {
                _this.autService.apiSavePhoto(newName);
            }, function (error) {
                _this.presentToast('Error while storing file.');
            });
        });
    };
    ListacontactoPage.prototype.getPicture = function () {
        var _this = this;
        var options = {
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
        this.camera.getPicture(options).then(function (imageData) {
            _this.imageContacto = imageData;
        }, function (error) {
            _this.presentToast("Error al tomar foto");
        });
    };
    ListacontactoPage.prototype.showLoader = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Cargando'
        });
        this.loading.present();
    };
    ListacontactoPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 7000,
            position: 'bottom',
            dismissOnPageChange: true
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    return ListacontactoPage;
}());
ListacontactoPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-listacontacto',template:/*ion-inline-start:"D:\Proyecto_Ionic\CrudUserApp\ContactosApp\src\pages\listacontacto\listacontacto.html"*/'<!--\n  Generated template for the ListacontactoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-toolbar>\n      <ion-title>Contactos</ion-title>\n      <ion-buttons start>\n        <button ion-button icon-only color="royal" (click)="operacionActualizar()" *ngIf="buttonEditarHidden">\n          <ion-icon name="create"></ion-icon>\n        </button>\n      </ion-buttons>\n      <ion-buttons end>\n        <button ion-button icon-only color="royal" (click)="operacionEliminar()" *ngIf="buttonBorrarHidden">\n          <ion-icon name="trash"></ion-icon>\n        </button>\n      </ion-buttons>\n    </ion-toolbar>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <ion-grid>\n    <ion-item>\n      <img src="{{imageContacto}}" />\n    </ion-item>\n\n    <ion-item>\n      <button ion-button (click)="getPicture()" *ngIf="buttonPhotoHidden" clear icon-only> \n          <ion-icon name="camera"></ion-icon>\n      </button>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Nombre</ion-label>\n      <ion-input [(ngModel)]="nombre" name="nombre" type="text" [disabled]="editTextNombreIsenabled"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Telefono</ion-label>\n      <ion-input [(ngModel)]="telefono" name="telefono" type="number" [disabled]="editTextTelefonoIsenabled"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Edad</ion-label>\n      <ion-input [(ngModel)]="edad" name="edad" type="number" [disabled]="editTextEdadIsenabled"></ion-input>\n    </ion-item>\n    <ion-row justify-content-around>\n      <ion-col col-12>\n        <div padding>\n          <button ion-button block (click)="operacionContacto(nombre,telefono,edad)" *ngIf="buttonGuardarHidden">Gurdar</button>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>'/*ion-inline-end:"D:\Proyecto_Ionic\CrudUserApp\ContactosApp\src\pages\listacontacto\listacontacto.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_native_file__["a" /* File */],
        __WEBPACK_IMPORTED_MODULE_5__ionic_native_file_path__["a" /* FilePath */]])
], ListacontactoPage);

//# sourceMappingURL=listacontacto.js.map

/***/ }),

/***/ 183:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 183;

/***/ }),

/***/ 226:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/listacontacto/listacontacto.module": [
		841,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 226;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 483:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(484);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(488);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 488:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_cloud_angular__ = __webpack_require__(531);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_camera__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_file_transfer__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_file__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_file_path__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_component__ = __webpack_require__(840);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_home_home__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_listacontacto_listacontacto__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_auth_service_auth_service__ = __webpack_require__(124);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var cloudSettings = {
    'core': {
        'app_id': '873339dc'
    }
};
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_12__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_listacontacto_listacontacto__["a" /* ListacontactoPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/listacontacto/listacontacto.module#ListacontactoPageModule', name: 'ListacontactoPage', segment: 'listacontacto', priority: 'low', defaultHistory: [] }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_5__ionic_cloud_angular__["a" /* CloudModule */].forRoot(cloudSettings)
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_12__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_listacontacto_listacontacto__["a" /* ListacontactoPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_14__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_file_transfer__["a" /* FileTransfer */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_file_path__["a" /* FilePath */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 840:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(127);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"D:\Proyecto_Ionic\CrudUserApp\ContactosApp\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"D:\Proyecto_Ionic\CrudUserApp\ContactosApp\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ })

},[483]);
//# sourceMappingURL=main.js.map