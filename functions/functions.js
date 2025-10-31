var x = 1;
a(); // 10
b(); // 100
console.log(x); // 1

/**
 * the scope of functions is differ from scope of the other variables in js
 *
 * for example in global scope x = 1
 *
 * in a() - x = 10
 * in b() - x = 100
 *
 * because anything inside this have different scope from the global
 *
 * “Each function in JavaScript has its own local execution context and scope.
 * Variables declared with var, let, or const inside a function are scoped to
 * that function and shadow variables from outer scopes with the same name.”
 */

function a() {
  var x = 10;
  console.log(x);
}

function b() {
  var x = 100;
  console.log(x);
}
