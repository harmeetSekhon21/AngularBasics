import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  slogan: string = 'Your one stop shop for everything.';
  source: string = '/assets/shopping.jpg';

  getSlogan() {
<<<<<<< HEAD
    return 'This is a new slogan for this web application';
=======
    return 'This is new slogan for the website.';
>>>>>>> f81cbc9791b9ba2a2e8ee7a204c5835430c43b35
  }
}
