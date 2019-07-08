import { Component } from '@angular/core';

@Component({
  selector: 'app-create-event-form',
  templateUrl: './date-utils.html'
})
export default class DateUtilsComponent {

  static createDateFromParams(obj: any) {

    const date = new Date();
    date.setFullYear(obj.year);
    date.setMonth(obj.monthValue);
    date.setDate(obj.dayOfMonth);
    date.setHours(obj.hour);
    date.setMinutes(obj.minute);
    date.setSeconds(obj.second);

    return date;
  }

  static getDateNow(): Date {
    return new Date();
  }

  static formatDateToStringDate(date: Date): string {

    let day: string;
    let month: string;
    const dd = date.getDay() + 1;
    const mm = date.getMonth() - 1;
    const yyyy = date.getFullYear();

    day = dd < 10 ? '0' + dd : '' + dd ;
    month = mm < 10 ? '0' + mm : '' + mm;

    return yyyy + '-' + month + '-' + day;
  }

  static formatDateToStringTime(date: Date): string {

    let hour: string;
    let minute: string;
    const hh = date.getHours();
    const mm = date.getMinutes();

    hour = hh < 10 ? '0' + hh : '' + hh;
    minute = mm < 10 ? '0' + mm : '' + mm;

    return hour + ':' + minute ;
  }

  static getNotLowerThanNow(date: Date): boolean {
    return date >= this.getDateNow();
  }
}
