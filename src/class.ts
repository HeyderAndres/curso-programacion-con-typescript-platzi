const date = new Date();
date.getHours();
date.getTime();

class MyDate {
  private year: number;
  private month:number;
  private day: number;

  constructor(year: number, month: number, day: number) {
    this.year = year;
    this.month = month;
    this.day = day;
  }

  getYear() {
    return this.year;
  }

  getMonth() {
    return this.month;
  }

  getDay() {
    return this.day;
  }

  printFormat(): string {
    return `${this.year}/${this.month}/${this.day}`;

  }
}

const myDaate = new MyDate(2026, 3, 12);
console.log(myDaate);

console.log(myDaate.printFormat());

