interface Girl {
  name: string;
  age: number;
  bust: number;
  waistLine?: number;
  [propname: string]: any;
  say(): string;
}

interface Teacher extends Girl {
  teache(): string;
}

class XiaoJieJie implements Girl {
  name: string;
  age: number;
  bust: number;
  waistLine?: number;
  [propname: string]: any;
  say() {
    return "欢迎光临，红浪漫洗浴";
  }
}

const screenResume = (girl: Girl) => {
  girl.age < 24 && girl.bust >= 90 && console.log(girl.name + "进入面试");
  girl.age >= 24 || (girl.bust < 90 && console.log(girl.name + "被淘汰"));
};

const getResume = (girl: Teacher) => {
  console.log(girl.name + "年龄是" + girl.age);
  console.log(girl.name + "胸围是" + girl.bust);
  girl.waistLine && console.log(girl.name + "性别是" + girl.waistLine);
  girl.sex && console.log(girl.name + "性别是:" + girl.sex);
};

const girl: Teacher = {
  name: "大脚",
  age: 18,
  bust: 90,
  waistLine: 20,
  sex: "女",
  say() {
    return "欢迎光临，红浪漫洗浴";
  },
  teache() {
    return "我来教你如何做";
  },
};

screenResume(girl);
getResume(girl);
console.log(girl.say());
