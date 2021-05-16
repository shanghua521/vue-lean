class PersonTwelve {
  //   public name: string;
  constructor(public name: string) {
    this.name = name;
  }
}
class TeacherTwelve extends PersonTwelve {
  constructor(public age: number) {
    super("hello");
  }
}

/* const personTwelve: PersonTwelve = new PersonTwelve("jspang");
console.log(personTwelve.name); */
const teacherTwelve: TeacherTwelve = new TeacherTwelve(18);
console.log(teacherTwelve.name);
