/* class Personfourteen {
  public readonly _name: string;
  constructor(name: string) {
    this._name = name;
  }
}

const personfourteen = new Personfourteen("hello");
// personfourteen._name = "谢广坤";
console.log(personfourteen._name); */

abstract class GirlFourteen {
  abstract skill(): void;
}

class Waiter extends GirlFourteen {
  skill() {
    console.log("大爷，给您倒水");
  }
}

class BaseTeache extends GirlFourteen {
  skill() {
    console.log("大爷，给您来个全身按摩");
  }
}

class seniorTeache extends GirlFourteen {
  skill() {
    console.log("大爷，给您倒水SPA全身按摩");
  }
}
