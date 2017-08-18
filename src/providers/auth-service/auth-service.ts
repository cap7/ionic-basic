import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the AuthServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/

let apiUrl = 'https://api.backendless.com/439EBE69-CEAA-9937-FF2D-2827A2E99000/41E48839-73FF-48CD-FFA9-C473E4B42000/data/Contacto';

@Injectable()
export class AuthServiceProvider {

  constructor(public http: Http) {
    console.log('Hello AuthServiceProvider Provider');
  }

  apiRegistrarContacto(data) {
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');

      this.http.post(apiUrl,
        JSON.stringify(data),
        { headers: headers }).subscribe(res => {
          resolve(res.json());
        }, (error) => {
          reject(error);
        });
    });
  }

  apiActualizarContacto(objectId, data) {
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      this.http.put(apiUrl + "/" + objectId,
        JSON.stringify(data),
        { headers: headers }).subscribe(res => {
          resolve(res.json());
        }, (error) => {
          reject(error);
        });
    });
  }

  apiListarContacto() {
    return this.http.get(apiUrl).map(res => res.json())
      .toPromise();
  }


}
