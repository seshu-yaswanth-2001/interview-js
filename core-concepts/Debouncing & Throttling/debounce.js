// used for optimizing performance
// limiting the rate of function call

let counter = 0;

function getData() {
  console.log("Fetching data: ", counter++);
}

function debounce(fn, delay) {
  let timer;
  return function () {
    const context = this;
    const args = arguments;
    clearInterval(timer);
    timer = setTimeout(() => {
      fn.apply(context, args);
    }, delay);
  };
}

const betterFunction = debounce(getData, 300);
