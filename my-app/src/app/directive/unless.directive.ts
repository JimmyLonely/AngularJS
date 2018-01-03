import { Directive, Input, TemplateRef, ViewContainerRef } from "@angular/core";



@Directive({
  selector: '[ngUnless]'
})

export class UnlessDirective {
  constructor (
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef
  ) {}

  private hasView = false;

  @Input() set ngUnless(condition) {
    window.console.log(condition)
    if (condition && this.hasView) {
      this.viewContainerRef.clear();
      this.hasView = false;
    } else if (!condition && !this.hasView) {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
      this.hasView = true;
    }
  }
}