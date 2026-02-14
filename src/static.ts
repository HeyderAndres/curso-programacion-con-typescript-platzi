class MyMath {
  static readonly PI = 3.14;

  static circleArea(radius: number) {
    return this.PI * radius * radius;
  }

  static max(...numbers: number[]) {
    return numbers.reduce((max, min) => (max > min ? max : min), numbers[0]);
  }


}

console.log(MyMath.PI);
console.log(MyMath.max(1,4,5,7,2,1));

