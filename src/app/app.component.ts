import { Component } from '@angular/core';
import { FirebaseApp } from 'angularfire2';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  title = 'Soccer data';

  constructor(public app: FirebaseApp) { }
}
