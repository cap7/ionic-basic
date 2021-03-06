import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { CloudSettings, CloudModule } from '@ionic/cloud-angular';
import { HttpModule } from '@angular/http';
import { Camera } from '@ionic-native/camera';
import { FileTransfer } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { FilePath } from '@ionic-native/file-path';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {ListacontactoPage } from '../pages/listacontacto/listacontacto';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';

const cloudSettings: CloudSettings = {
  'core': {
    'app_id': '873339dc'
  }
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListacontactoPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    CloudModule.forRoot(cloudSettings)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListacontactoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthServiceProvider,
    Camera,
    FileTransfer,
    File,
    FilePath

  ]
})
export class AppModule {}
