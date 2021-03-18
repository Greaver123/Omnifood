"use strict";

console.log("hello");

// $(document).ready(function () {
//   $("h1").click(function () {
//     $(this).css("background-color", "#ff0000");
//   });
// });

const nav = document.querySelector("nav");
const logo = document.querySelector(".logo");

nav.addEventListener("transitionend", function (e) {
  if (this.classList.contains("sticky-fade-out")) {
    this.classList.remove("sticky-fade-out");
    this.classList.remove("sticky");
  }
});

document.querySelector("h1").addEventListener("click", function () {
  this.style.backgroundColor = "red";
});

let options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.2,
};

let observer = new IntersectionObserver(function (entries, observer) {
  //   console.log("visible");
  console.log(entries, observer);
  if (!entries[0].isIntersecting) {
    // console.log("visible");
    nav.classList.add("sticky");
    nav.classList.add("sticky-fade-in");

    logo.src = "../assets/logos/logo.png";
  } else if (entries[0].isIntersecting && nav.classList.contains("sticky")) {
    nav.classList.remove("sticky-fade-in");
    nav.classList.add("sticky-fade-out");
    logo.src = "../assets/logos/logo-white.png";
  }
});

observer.observe(document.querySelector("header"));
