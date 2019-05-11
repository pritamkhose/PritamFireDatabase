import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material-module';

import { AppComponent } from './app.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { EditUserResolver } from './edit-user/edit-user.resolver';
import { HomeComponent } from './home/home.component';

// https://www.npmjs.com/package/@angular/fire
// https://firebaseopensource.com/projects/angular/angularfire2/
// https://console.firebase.google.com/u/1/project/angularweb-d8624/database/firestore/
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
// https://github.com/angular/angularfire2/blob/master/docs/messaging/messaging.md
import { AngularFireMessagingModule } from '@angular/fire/messaging';
// https://github.com/angular/angularfire2/blob/master/docs/storage/storage.md
import { AngularFireStorageModule } from '@angular/fire/storage';
// https://github.com/angular/angularfire2/blob/master/docs/auth/getting-started.md
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { environment } from '../environments/environment';
import { FirebaseService } from './services/firebase.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EditUserComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireMessagingModule,
    AngularFireStorageModule,
    AppRoutingModule
  ],
  providers: [
    FirebaseService,
    EditUserResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
