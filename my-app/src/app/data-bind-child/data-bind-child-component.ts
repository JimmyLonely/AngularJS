import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: 'data-bind-child',
  templateUrl: './data-bind-child-component.html'
})

export class DataBindChildComponent {
  constructor (

  ) {}

 @Input() fontSizePx;


  add () {
    this.fontSizePx++;
    // this.delete();
  }

  del () {
    this.fontSizePx--;
    // this.delete();
  }

 @Output() sizeChange = new EventEmitter();
  delete() {
    this.sizeChange.emit(this.fontSizePx);
  }
}