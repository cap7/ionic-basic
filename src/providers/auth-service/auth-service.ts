import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { File } from '@ionic-native/file';
import 'rxjs/add/operator/map';

import { FileTransfer, FileUploadOptions, FileUploadResult, FileTransferError } from '@ionic-native/file-transfer';

/*
  Generated class for the AuthServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/


@Injectable()
export class AuthServiceProvider {

  public apiUrl: string;
  public fileURL: string;
  public updateSuccessImage: FileUploadResult;
  public updateErrorImage: FileTransferError;
  public transfr: FileTransfer;

  constructor(public http: Http, private transfer: FileTransfer, private file: File, ) {
    this.apiUrl = 'https://api.backendless.com/439EBE69-CEAA-9937-FF2D-2827A2E99000/41E48839-73FF-48CD-FFA9-C473E4B42000/';
  }

  apiListarContacto() {
    return this.http.get(this.apiUrl + "data/Contacto").map(res => res.json())
      .toPromise();
  }

  apiRegistrarContacto(data) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.apiUrl + "data/Contacto",
      JSON.stringify(data),
      { headers: headers }).map(res => res.json()).toPromise();
  }

  apiActualizarContacto(objectId, data) {
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      this.http.put(this.apiUrl + "data/Contacto/" + objectId,
        JSON.stringify(data),
        { headers: headers }).subscribe(res => {
          resolve(res.json());
        }, (error) => {
          reject(error);
        });
    });
  }


  apiStatePhoto(objectId) {
    let url = this.apiUrl + "files/fotos/" + objectId + ".png";
    return  this.http.get(url).map(res => res.url);
  }

  apiSavePhoto(imageSrc) {
    let targetPath = this.file.dataDirectory + imageSrc;
    let url = this.apiUrl + "files/fotos/" + imageSrc + "?overwrite=true";
    let options: FileUploadOptions = {
      fileKey: "file",
      fileName: imageSrc,
      chunkedMode: false,
      mimeType: "multipart/form-data",
      params: {
        'fileURL': imageSrc
      }
    }
    let fileTransfer = this.transfer.create();
    fileTransfer.upload(targetPath, url, options).then((data) => {
      this.updateSuccessImage.response = data.response;
    });
  }



 
}
