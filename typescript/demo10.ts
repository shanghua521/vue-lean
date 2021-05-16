class Ladyten {
  content = "Hi,帅哥！";
  sayHello() {
    return this.content;
  }
}

class XiaoJieJieTen extends Ladyten {
  sayHello() {
    return super.sayHello() + "你好";
  }
  sayLove() {
    return "I Love You";
  }
}

const goddess: XiaoJieJieTen = new XiaoJieJieTen();
console.log(goddess.sayHello());
console.log(goddess.sayLove());
