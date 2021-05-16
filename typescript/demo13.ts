// get set

/* class XiaoJieJiethirteen {
  constructor(private _age: number) {}

  get age() {
    return this._age;
  }
  set age(value: number) {
    this._age = value + 3;
  }
}

const dajiao = new XiaoJieJiethirteen(28);
dajiao.age = 15;

console.log(dajiao.age);
 */

// static
  
class Girl {
  static sayLove() {
    return "I Love You";
  }
}

console.log(Girl.sayLove());
