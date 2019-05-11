import { Component } from '@angular/core';
import { AngularFireMessaging } from '@angular/fire/messaging';
import { mergeMapTo, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PritamFireDatabase';

  constructor(private afMessaging: AngularFireMessaging) { }

  listen() {
    this.afMessaging.messages
      .subscribe((message) => { console.log(message); });
  }

  requestPermission() {
    this.afMessaging.requestPermission
    .pipe(mergeMapTo(this.afMessaging.tokenChanges))
    .subscribe(
      (token) => { console.log('Permission granted! Save to the server!', token); },
      (error) => { console.error(error); },
    );
  }

  deleteToken() {
    this.afMessaging.getToken
      .pipe(mergeMap(token => this.afMessaging.deleteToken(token)))
      .subscribe(
        (token) => { console.log('Deleted!'); },
      );
  }
}
