import { Input, Component } from "@angular/core";

@Component({
  selector: 'ad-1',
  templateUrl: './ad-1.component.html'
})

export class Ad1Component {
  @Input() data;
}