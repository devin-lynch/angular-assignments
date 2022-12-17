import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username = ''

  usernameBlank = true

  onUpdateUsername(event: any) {
    if (this.username != '') {
      this.usernameBlank = false
    }
  }

  resetUsername() {
    this.username = ''
    this.usernameBlank = true
  }
}
