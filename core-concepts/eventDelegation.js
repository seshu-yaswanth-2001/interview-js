document.querySelector("#container").addEventListener("click", (e) => {
  console.log(e.target);
});

document.getElementById("container-two").addEventListener("keyup", (e) => {
  if(e.target.dataset.uppercase !== undefined) {
    e.target.value = e.target.value.toUpperCase();
  }
});

/**
 * Benefits of event delegation:
1) improves memory space
2) mitigates risk of performance bottle neck
3) Dom manipulation
4) when elements get added dynamically, the process of adding events is slow
Limitations:
1) All the events are not bubbled up, some events like blur, focus are not bubbled up
2) if e.stopPropogation is used in child, then events are not bubbled up
 */