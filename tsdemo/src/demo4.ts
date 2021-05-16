function join<T, P>(first: T, second: P) {
  return `${first}${second}`;
}

join<string, number>("hello", 1);

function myFun<T>(params: Array<T>) {
  return params;
}

myFun<String>(["111", "222"]);
