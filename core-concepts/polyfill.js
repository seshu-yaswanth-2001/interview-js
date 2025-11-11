const names = {
  firstName: "Seshu",
  lastName: "Yaswanth",
};

const printName = function (hometown, state, country) {
  console.log(
    `${this.firstName} ${this.lastName}, from ${hometown}, ${state}, ${country}`
  );
};

const printMyName = printName.bind(names, "AP", "India");
printMyName("Kadapa");

// own implementation of polyfill

Function.prototype.myBind = function (...args) {
  let obj = this;
  let params = args.slice(1);

  return function (...args2) {
    obj.apply(args[0], [...params, ...args2]);
  };
};

const printMyName2 = printName.myBind(names, "AP", "India");
printMyName2("Kadapa");
