import { Directive, OnInit, OnDestroy, OnChanges, SimpleChanges } from "@angular/core";
import { LoggerService } from '../service/logger.service';
import { SimpleChange } from "@angular/core/src/change_detection/change_detection_util";
import { DoCheck } from "@angular/core/src/metadata/lifecycle_hooks";

@Directive({
  selector: '[spy]'
})

export class SpyDirective implements OnInit, OnDestroy, OnChanges, DoCheck {
  constructor (
    private loggerService: LoggerService
  ) {}

  nextId = 0;

  ngOnInit() {
    this.logIt('init');
  }

  ngOnDestroy() {
    this.logIt('destory');
  }

  ngOnChanges(changes: SimpleChanges) {
    this.logIt('change');
  }

  ngDoCheck() {
    this.logIt('do Check');
  }

  private logIt(msg: string) {
    this.loggerService.log(`Spy #${this.nextId++} ${msg}`);
  }

}