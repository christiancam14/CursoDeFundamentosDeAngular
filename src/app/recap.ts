const username: string | number = 'christian';
const sum = (a: number, b: number) => {
  return a+b;
}

sum(1,3);

class Person {
  constructor(public age: number, public lastName: string){
  }
}

const chris = new Person(23, "Camacho");
chris.age;
