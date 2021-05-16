const countThree: number = 918;
const myName: string = "hello";
// null,undefinde,boolean,void,symbol
const xiaoJieJieThree: {
  name: string;
  age: number;
} = {
  name: "大脚",
  age: 18,
};

const xiaoJieJies: string[] = ["谢大脚", "刘英", "晓红"];

class Person {}

const dajiao: Person = new Person();

const jianXiaoJieJie: () => string = () => {
  return "大脚";
};
// 对象类型 数组类型 累类型 函数类型

console.log(jianXiaoJieJie())
