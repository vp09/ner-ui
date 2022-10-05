import { Component, VERSION } from '@angular/core';
import { NERComponent } from './ner/ner.component';
import { WelcomepageComponent } from './welcomepage/welcomepage.component';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'this is hello component ';
  shouldOpen: boolean = false;
  note: string;
  welcome: string;
  openCloseUI() {
    this.shouldOpen = !this.shouldOpen;
    console.log('hey');
  }
  getNER() {}
}
