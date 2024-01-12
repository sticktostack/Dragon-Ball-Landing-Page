let cursor = document.querySelector(".cursor");
let main = document.querySelector("#main");
let button = document.querySelector("#one");
let button2 = document.querySelector("#two");
let button3 = document.querySelector("#three");

//FOLLOWING CURSOR

main.addEventListener("mouseenter", () => {
  cursor.style.transform = "translate(-50% , -50%)scale(1)";
});
main.addEventListener("mouseleave", () => {
  cursor.style.transform = "translate(-50% , -50%)scale(0)";
});
main.addEventListener("mousemove", (dets) => {
  cursor.style.left = dets.x + "px";
  cursor.style.top = dets.y + "px";
});

// BUTTON TAPPING ANIMATION

let flag = 0; 
button.addEventListener("click", function () {
  if (flag === 0) {
    flag = 1;
    button.style.transform = "scale(0.9)";
    button.style.color = "yellow";
  } else {
    flag = 0;
    button.style.transform = "scale(1.2)";
    button.style.color = "#fff";
  }
});

let flag2 = 0;
button2.addEventListener("click", function () {
  if (flag2 === 0) {
    flag2 = 1;
    button2.style.transform = "scale(0.9)";
    button2.style.color = "orange";
  } else {
    flag2 = 0;
    button2.style.transform = "scale(1.2)";
    button2.style.color = "#fff";
  }
});

let flag3 = 0;
button3.addEventListener("click", function () {
  if (flag3 === 0) {
    flag3 = 1;
    button3.style.transform = "scale(0.9)";
    button3.style.color = "red";
  } else {
    flag3 = 0;
    button3.style.transform = "scale(1.2)";
    button3.style.color = "#fff";
  }
});
