/**
 *
 * Hoisting Behavior
 * All variables (var, let, and const) are hoisted to the top of their scope during the
 * memory creation phase.
 *
 * The difference is initialization:
 * var → initialized as undefined immediately.let & const → hoisted but not initialized
 * (they stay in the Temporal Dead Zone until declaration).
 *
 */

/**
 * Temporal Dead Zone (TDZ)
 * The TDZ is the time between entering the scope and the variable’s actual declaration line.
 *
 * Accessing a variable during TDZ throws a ReferenceError.
 * This prevents accidental usage of variables before they are safely initialized.
 */

// example for above

console.log(a); // ❌ ReferenceError
let a = 5;

/**
 *
 * Scope
 * var → function-scoped (or global if declared outside any function).
 * let & const → block-scoped (exist only within { }).
 *
 */

{
  let x = 10;
  var y = 20;
}
console.log(y); // ✅ 20
console.log(x); // ❌ ReferenceError

/**
 *
 * Re-declaration Rules
 * var can be re-declared and updated in the same scope.
 *
 * let can be updated but not re-declared in the same scope.
 *
 * const can neither be re-declared nor updated
 * (though its contents can be mutated if it’s an object or array).
 *
 */

var jj = 1;
var jj = 2; // ✅ allowed

let b = 1;
// let b = 2; ❌ SyntaxError

const c = 10;
// c = 20; ❌ TypeError

/**
 * Shadowing
 *
 * Variables declared with let or const can shadow var variables in an inner block scope.
 * This is valid and a common source of confusion.
 *
 */

var count = 100;
{
  let count = 10;
  console.log(count); // ✅ 10 (inner shadowed variable)
}
console.log(count); // ✅ 100 (outer variable)

/**
 * TDZ and Shadowing in Real Scenarios
 * If you accidentally reference a shadowed variable before its declaration, you’ll hit the TDZ:
 */

var message = "Hello";

{
  // console.log(message); // ❌ ReferenceError (TDZ)
  let message = "Hi";
  console.log(message); // ✅ "Hi"
}

/**
 * Real-World Impact (Async Loops Example)
 * In async code, let helps avoid closure issues with loops:
 */

for (var i = 1; i <= 3; i++) {
  setTimeout(() => console.log(i), 1000);
}
// Output: 4, 4, 4 (all reference same i)

for (let i = 1; i <= 3; i++) {
  setTimeout(() => console.log(i), 1000);
}
// Output: 1, 2, 3 (each has its own block-scoped i)
