import { Component, ElementRef, ViewChild } from '@angular/core';
import { DemochildComponent } from '../demochild/demochild.component';

@Component({
  selector: 'app-demoviewchild',
  templateUrl: './demoviewchild.component.html',
  styleUrls: ['./demoviewchild.component.css'],
})
export class DemoviewchildComponent {
  @ViewChild('dobInput') dateOfBirth: ElementRef;
  @ViewChild('ageInput') age: ElementRef;
  @ViewChild(DemochildComponent, { static: true }) demoComp;

  calculateAge() {
    console.log(this.dateOfBirth.nativeElement.value);
    let dobYear = new Date(this.dateOfBirth.nativeElement.value).getFullYear();
    let currentYear = new Date().getFullYear();

    let age = currentYear - dobYear;

    this.age.nativeElement.value = age;
  }
}
