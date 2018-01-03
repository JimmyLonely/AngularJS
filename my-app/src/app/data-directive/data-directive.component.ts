import { Component } from "@angular/core";
import { Hero } from '../model/hero';

@Component({
  selector: 'data-directive',
  templateUrl: './data-directive.component.html'
})

export class DataDirectiveComponent {
  unless = true;
  color='blue';
  defaultColor = "violet";


  heroes = [
    new Hero(1, 'jimmy1'),
    new Hero(2, 'jimmy2'),
    new Hero(3, 'jimmy3'),
    new Hero(4, 'jimmy4')
  ]

  toggle () {
    this.unless = !this.unless;
  }
}