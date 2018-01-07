import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'plus',
  pure: false
})

export class PlusPipe {
  transform(value1:Date, value2, value3) {
    return `${value1.getFullYear()}年${value1.getMonth()}月${value1.getDate()}日`;
  }
}