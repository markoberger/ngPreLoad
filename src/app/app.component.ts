import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pre-load';
  isToggled = false;

  onToggleHamburger() {
    this.isToggled = !this.isToggled;
  }
  onCloseMenu() {
    this.isToggled = false;
  }
}
