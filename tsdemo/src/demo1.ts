// "noImplicitAny": true, 允许你的注解类型 any 不用特意声明
function hello(name: any) {
  return name;
}

// "strictNullChecks": true 不允许 null 值出现
const hi: string = "null";

// 