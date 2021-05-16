const numberArray: number[] = [1, 2, 3];
const stringArray: string[] = ["a", "b", "c"];
const undefinedArray: undefined[] = [undefined, undefined];
const array: (string | number)[] = [1, "str", 2];

type Lady = { name: string; age: number };
class Madam {
  name: string;
  age: number;
}

// type alias 类型别名
const xiaoJieJieArray: Madam[] = [
  { name: "刘英", age: 18 },
  { name: "谢大脚", age: 28 },
];
let madam: Madam = new Madam();
let lady: Lady = new Madam();
