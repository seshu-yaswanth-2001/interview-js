// call - will borrow the method from other functions. accept arguments as string values
// apply is also same but it accepts arguments as array of string values
// bind will take the copy of function and returns the function

const names = {
  firstName: "seshu",
  lastName: "yaswanth",
};

const printFullName = function (hometown, city) {
  console.log(
    this.firstName + " " + this.lastName + " " + hometown + " " + city
  );
};

printFullName.call(names, "AndhraPradesh", "Kadapa");
printFullName.apply(names, ["AndhraPradesh", "Kadapa"]);

const printName = printFullName.bind(names, "AndhraPradesh", "Kadapa");
printName();
