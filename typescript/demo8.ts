// interface Girl {
//   name: string;
//   age: number;
//   bust: number;
//   waistLine?: number;
// }
// const girl: Girl = {
//   name: "大脚",
//   age: 18,
//   bust: 90,
//   waistLine: 20
// };

// // type Girl1 = string;

// const screenResume = (girl: Girl) => {
//   girl.age < 24 && girl.bust >= 90 && console.log(girl.name + "进入面试");
//   girl.age >= 24 || (girl.bust < 90 && console.log(girl.name + "被淘汰"));
// };

// const getResume = (girl: Girl) => {
//   console.log(girl.name + "年龄是" + girl.age);
//   console.log(girl.name + "胸围是" + girl.bust);
//   girl.waistLine && console.log(girl.name + "腰围是" + girl.waistLine);
// };

// screenResume(girl);
// getResume(girl);
