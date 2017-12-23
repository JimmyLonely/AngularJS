import { Component } from "@angular/core";
import { LoggerService } from "../service/logger.service";

@Component({
  selector: 'life-cycle-hook',
  templateUrl: './life-cycle-hook.component.html'
})

export class LifeCycleHookComponent {
  constructor (
    private loggerService: LoggerService
  ) {}

  name:String = 'Jimmy';
}