import { Component, ViewChild, ComponentFactoryResolver, AfterViewInit, OnDestroy } from "@angular/core";
import { AdDirective } from "../ad-directive/ad.directive";
import { Ad1Component } from "../ad-1/ad-1.component";
import { Ad2Component } from "../ad-2/ad-2.component";
import { ViewContainerRef } from "@angular/core/src/linker/view_container_ref";

@Component({
  templateUrl: './ad-banner.component.html'
})

export class AdBannerComponent implements AfterViewInit, OnDestroy {

  @ViewChild(AdDirective)
  private adDirective: AdDirective;
  private ads = [
    Ad1Component, Ad2Component
  ]

  private intervalId;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver
  ) {}

  ngAfterViewInit(): void {
    this.intervalId = window.setInterval(() => {

      // Get Component
      let adIndex = Math.floor(Math.random()*2);
      let adComponent = this.ads[adIndex];

      // Use componnetFactory to instance componnet
      let adComponentInstance = this.componentFactoryResolver.resolveComponentFactory(adComponent);

      // get directive viewContainerRef
      let adViewContainerRef = this.adDirective.viewContainerRef;
      adViewContainerRef.clear();

      // Inject component instance to viewContainerRef.
      let componentRef =  adViewContainerRef.createComponent(adComponentInstance);

      // add data for componnet
      componentRef.instance.data = 'data bind';
    }, 3000)

  }
  ngOnDestroy(): void {
    window.clearInterval(this.intervalId);
  }


}