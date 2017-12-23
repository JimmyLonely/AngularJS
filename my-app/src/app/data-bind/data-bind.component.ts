import { Component } from "@angular/core";

@Component({
  selector: 'data-bind',
  templateUrl: './data-bind.component.html'
})

export class DataBindComponent {
  name: String = 'Jimmy';

  sayName(): void {
    this.name = 'Lee';
    window.alert(this.name);
  }
}