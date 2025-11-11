document.getElementById("grandParent").addEventListener(
  "click",
  () => {
    console.log("Grand Parent Clicked!");
  },
  false
);

document.getElementById("parent").addEventListener(
  "click",
  (e) => {
    console.log("Parent Clicked!");
  },
  false
);

document.getElementById("child").addEventListener(
  "click",
  (e) => {
    console.log("Child Clicked!");
    e.stopPropagation();
  },
  false
);
