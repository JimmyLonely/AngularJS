import { Component, ViewChild, ViewEncapsulation } from "@angular/core";
import { Hero } from '../model/hero';
import { HeroChildComponent } from '../hero-child/hero-child.component';

@Component({
  selector: 'hero-parent',
  templateUrl: './hero-parent.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  styleUrls: ['./hero.parent.component.css']
})

export class HeroParentComponent {
  heros: Hero[] = [
    new Hero(1, 'hero1'),
    new Hero(2, 'hero2'),
    new Hero(3, 'hero3')
  ]

  master='parent';
  @ViewChild(HeroChildComponent)
  private heroChildComponent: HeroChildComponent;

  childMaster = '';

  add() {
    this.childMaster = this.heroChildComponent.master;
    this.master = `${this.master}1`;
  }

  parentClick() {
    window.console.log(JSON.stringify(arguments));
  }

}