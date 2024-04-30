var menu = document.getElementById("navicon");
var items = document.getElementById("menu1");

items.style.right = "-360px";

menu.onclick = () => {
  if (items.style.right == "-360px") {
    items.style.right = "0";
  } else {
    items.style.right = "-360px";
  }
};

// Dot and blur circle with mouse pointers
let curser = document.querySelector("#cursor");
let blur = document.querySelector("#cursor-blur");
document.addEventListener("mousemove", function (move) {
  curser.style.left = move.x + "px";
  curser.style.top = move.y + "px";
  blur.style.left = move.x + "px";
  blur.style.top = move.y + "px";
});

// gsap to navbar animation based on scrolltrigger

gsap.to("#nav", {
  backgroundColor: "#000",
  duration: 0.5,
  height: "90px",
  scrollTrigger: {
    trigger: "#nav",
    scroller: "body",
    start: "top -10%",
    end: "top -11%",
    scrub: 1,
    // markers: true,
  },
});

// gsap to animate the page backgroung based on scrolltrigger

gsap.to("#main", {
  backgroundColor: "#000",
  scrollTrigger: {
    trigger: "#main",
    scroller: "body",
    start: "top -25%",
    end: "top -80%",
    // markers: true,
    scrub: 2,
  },
});

// Cursor to navbar interaction

let navli = document.querySelectorAll("#nav ul li");
navli.forEach((el) => {
  el.addEventListener("mouseenter", () => {
    curser.style.scale = 3;
    curser.style.border = "1px solid white";
    curser.style.backgroundColor = "transparent";
  });
  el.addEventListener("mouseleave", () => {
    curser.style.scale = 1;
    curser.style.border = "1px solid #95C11E ";
    curser.style.backgroundColor = "#95C11E";
  });
});

// gsap to animate about us section scrolling

gsap.from("#about-us img,.about-info", {
  y: 50,
  opacity: 0,
  duration: 4,
  stagger: 0.4,
  scrollTrigger: {
    trigger: "#about-us",
    scroller: "body",
    // markers: true,
    start: "top 60%",
    end: "top 55%",
    scrub: 3,
  },
});

gsap.from(".card", {
  scale: 0.8,
  // opacity:0,
  duration: 1,
  stagger: 0.1,
  scrollTrigger: {
    trigger: ".card",
    scroller: "body",
    // markers:false,
    start: "top 70%",
    end: "top 65%",
    scrub: 1,
  },
});

gsap.from("#colon1", {
  y: -70,
  x: -70,
  scrollTrigger: {
    trigger: "#colon1",
    scroller: "body",
    // markers:true,
    start: "top 55%",
    end: "top 45%",
    scrub: 4,
  },
});

gsap.from("#colon2", {
  y: 70,
  x: 70,
  scrollTrigger: {
    trigger: "#colon1",
    scroller: "body",
    // markers:true,
    start: "top 55%",
    end: "top 45%",
    scrub: 4,
  },
});

gsap.from(".scards-con h1", {
  y: 50,
  scrollTrigger: {
    trigger: ".scards-con h1",
    scroller: "body",
    // markers:true,
    start: "top 75%",
    end: "top 70%",
    scrub: 2,
  },
});
