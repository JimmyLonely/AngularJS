import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: 'data-bind-child',
  templateUrl: './data-bind-child-component.html'
})

export class DataBindChildComponent {
  constructor (

  ) {}

 @Input() hero = this.hero;
 @Input() a = 12;

 @Output() childDelete = new EventEmitter();
  delete($event) {
    this.childDelete.emit($event);
  }
}