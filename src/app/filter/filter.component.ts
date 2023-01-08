import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
})
export class FilterComponent {
  @Input('total') all: number = 0; // total is alias to 'all' property
  @Input() free: number = 0;
  @Input() premium: number = 0;

  selectedProductRadioBtn: string = 'All';

  @Output() filterRadioButtonSelectionChanged: EventEmitter<string> =
    new EventEmitter<string>();

  onRadioButtonSelectionChanged() {
    this.filterRadioButtonSelectionChanged.emit(this.selectedProductRadioBtn);
    //console.log(this.selectedProductRadioBtn);
  }
}
