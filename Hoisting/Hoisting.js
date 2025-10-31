greet(); // Good Morning
console.log(firstName); // undefined
console.log(greet); // return copy of greet function {..}
console.log(greet2); // undefined
console.log(greet3); // undefined

/*
 * This is because of the execution context in first place i.e. memroy allocation phase
 * in the first line it will the function is invoked - so it will directly create another
 * Execution context (Ec2) and returns the result to Ec1 and Ec1 will print and terminates the Ec1
 * when there is no EC then GEC will also be terminated and call stack will be empty
 * in the second line it is hoisted and put a placeholder value called - undefined
 * in the third line function is not invoked but just refred the function that is - why it returns the copy of greet function
 *
 * coming to 4th & 5th line it also return the undefined because function is created in variable fashion
 * at the end it is anyway variable it is just hoisted and returns the undefined
 *
 * only function function_name () {} - will only return the entire copy of function
 */

var firstName = "seshu";

function greet() {
  console.log("Good Morning");
}

// arrow functions

const greet2 = () => {
  console.log("Good Afternoon");
};

// function expression

const greet3 = function () {
  console.log("Good Evening");
};
