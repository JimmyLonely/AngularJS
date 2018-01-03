import { Directive, ElementRef, HostListener, Input } from "@angular/core";

@Directive({
  selector: '[appHightlight]'
})

export class HighLightDirective {
  constructor(
    private el: ElementRef
  ) { }

  @Input('appHightlight') highlightColor: string;
  @Input() defaultColor: string;

  @HostListener('mouseenter') onEnter() {
    this.highlight(this.highlightColor || this.defaultColor || 'grey');
  }

  @HostListener('mouseleave') onLeave() {
    this.highlight(null);
  }

  highlight(color) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}