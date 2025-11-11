// closure: A function binds together with its lexical environment is called a closure.
// when functions are returned from another function the returned function still remember the lexical scope.

function a() {
  var x = 7;
  function b() {
    console.log(x);
  }
  return b;
}

var c = a();
console.log(c);
c(); // this gives output as 7 because of when function is returned then it remembers its lexical env.

// example 2

function outer() {
  var a = 900;
  function inner() {
    var b = 800;
    function innest() {
      console.log(a, b); // this has closure of its env + inner and outer also this is called closure
    }
    innest();
  }
  inner();
}

outer();
