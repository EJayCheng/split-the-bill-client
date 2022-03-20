import { Pipe, PipeTransform } from '@angular/core';
import { stringToColor } from '../../util/string-to-color';

@Pipe({
  name: 'stringToColor',
})
export class StringToColorPipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): string {
    return stringToColor(value);
  }
}
