import { Component } from '@angular/core';

@Component({
  selector: 'app-notification',
  template: `<div class="alert alert-success" [hidden]="displayNotification">
    <p>This website uses cookies to provide the better user experience..</p>
  </div>`,
  styles: [
    '.notification-div{ margin: 10px, 0px; padding: 10px 20px; background-color: #FAD7A0; text-align: center;  }',
    'p{ font-size: 16px; }',
  ],
})
export class NotificationComponent {
  displayNotification: boolean = false;
}
