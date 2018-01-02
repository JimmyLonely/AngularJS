import { Component } from "@angular/core";
import { Hero } from '../model/hero';

@Component({
  templateUrl: './data-bind-sample-1.component.html'
})

export class DataBindSample1Component {
  title = 'Tour of heroes';
  heroes = [
    new Hero(1, 'jimmy1'),
    new Hero(2, 'jimmy2'),
    new Hero(3, 'jimmy3'),
    new Hero(4, 'jimmy4')
  ]

  hero = this.heroes[0]
  today = new Date()
  showClass = undefined
  jimmyName = ''

  getVal() {
    return 2+2;
  }

  call(phone) {
    window.console.log(phone);
  }

  clickEvent() {
    window.alert(arguments);
  }

  fatherDelete() {
    window.alert(arguments.length);
  }
}