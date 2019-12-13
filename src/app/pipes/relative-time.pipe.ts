import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'relativeTime'
})
export class RelativeTimePipe implements PipeTransform {

  transform(date: any, ...args: any[]): any {
    date = date.replace('Z', '');
    return moment(date).fromNow();
  }

}
