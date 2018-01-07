import { Component } from "@angular/core";

@Component({
  templateUrl: './pipe-origin.component.html'
})

export class PipeOriginComponent {
  today = new Date('2016-02-27');
  dateFormat = 'shortDate';
  toggle = false;

  toggleDate() {
    this.today.setMonth(this.today.getMonth() + 1);
    // this.today = new Date(this.today.valueOf());
  }
}