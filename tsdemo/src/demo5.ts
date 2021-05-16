interface Girl {
  name: String;
}

/* class SelectGirl<T extends Girl> {
  constructor(private girls: T[]) {}
  getGirl(index: number): String {
    return this.girls[index].name;
  }
}

const selectGirl = new SelectGirl([
  { name: "大脚" },
  { name: "刘英" },
  { name: "晓红" },
]); */

class SelectGirl<T extends number | string> {
  constructor(private girls: T[]) {}
  getGirl(index: number): T {
    return this.girls[index];
  }
}

const selectGirl = new SelectGirl(["111", 222]);
console.log(selectGirl.getGirl(1));
