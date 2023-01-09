import { Component } from '@angular/core';

@Component({
  selector: 'app-demochild',
  templateUrl: './demochild.component.html',
  styleUrls: ['./demochild.component.css'],
})
export class DemochildComponent {
  sayHelloFromChild() {
    console.log('Hello from demo child class');
  }
}
