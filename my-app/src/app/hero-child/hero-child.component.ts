import { Component, Input, OnChanges, SimpleChanges, Output, EventEmitter } from "@angular/core";
import { Hero } from '../model/hero';

@Component({
  selector: 'hero-child',
  templateUrl: './hero-child.component.html'
})

export class HeroChildComponent implements OnChanges {
  ngOnChanges(changes: SimpleChanges): void {
    window.console.log(JSON.stringify(changes));
  }

  private _name = '';
  public publicName ='publicName';
  @Input() hero:Hero;
  @Input()
  set master(name) {
    this._name = `${name}appendSet`
  }

  get master() {
    return `${this._name}appendGet`
  }

  @Output('vote') emitClick = new EventEmitter()

  childClick() {
    this.emitClick.emit(this.hero);
  }

}