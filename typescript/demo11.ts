// private protected public
class Person十一 {
  public name: string | undefined;
  public sayHello() {
    console.log(this.name + "sayHello");
  }
}

class Teacher extends Person {
  public sayBye() {
    return this.name + " sayBye";
  }
}

const person: Person = new Person();
person.name = "小明";
person.sayHello();
console.log(person.name);
