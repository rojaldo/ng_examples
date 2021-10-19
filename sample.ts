class Tuple<T1 extends number, T2 extends number> { // Classes
    constructor(public item1: T1, public item2: T2) {
    }

    sum(): number {
        return this.item1 + this.item2;
    }
  }

    let tuple = new Tuple<string, number>('hello', 1);
    let tuple2 = new Tuple<number, string>(1, 'hello');
    let tuple3 = new Tuple<number, number>(0, 1);