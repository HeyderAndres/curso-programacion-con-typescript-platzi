const date = new Date();
date.getHours();
date.getTime();

export class MyDate {


  constructor(
    private _year: number,
    private _month: number,
    private _day: number) {}

  get year() {
    return this._year;
  }

  get month() {
    return this._month;
  }

  get day() {
    return this._day;
  }

  printFormat(): string {
    return `${this.year}/${this._month}/${this._day}`;
  }

  set day(day: number) {
    if (day <1 || day > 31) {
      throw new Error('invalid day value');
    }else{
      this._day = day;
    }
  }

}

const myDaate = new MyDate(2026, 3, 12);
console.log(myDaate);

console.log(myDaate.printFormat());
