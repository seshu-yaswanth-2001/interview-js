function a() {
  function b() {
    console.log(c);
  }
  b();
}

var c = 10;
a();

// output: 10; - Here, b() → searches its own scope → then a() → then global → finds d.

/**
 * The Scope Chain in JavaScript is the process the engine uses to find variables.
 *
 * Each function has a Lexical Environment — its own local memory plus a reference to its,
 * parent’s environment (based on where the function is written, not called).
 *
 * When JS tries to access a variable, it first looks in its local scope, then moves up the,
 * chain — function → outer function → global — until it reaches the end (null).
 *
 * The Global Execution Context has no parent, so its outer reference is null.
 *
 * A Lexical Environment is the place where variables and functions are stored for a
 * particular scope, and it also contains a reference to its parent environment (outer lexical environment).
 *
 */

// Real World Example
function createCart(discountCode) {
  const basePrice = 1000;

  function applyDiscount() {
    const discount = discountCode === "WELCOME10" ? 0.1 : 0.05;

    function calculateFinalPrice(taxRate) {
      const tax = basePrice * taxRate;
      const finalPrice = basePrice - basePrice * discount + tax;
      console.log("Final Price:", finalPrice);
    }

    calculateFinalPrice(0.18);
  }

  applyDiscount();
}

createCart("WELCOME10");
