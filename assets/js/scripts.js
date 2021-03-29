"use strict";

// $(document).ready(function () {
//   $("h1").click(function () {
//     $(this).css("background-color", "#ff0000");
//   });
// });

const nav = document.querySelector("nav");
const logo = document.querySelector(".logo");

// nav.addEventListener("transitionend", function (e) {
//   if (this.classList.contains("sticky-fade-out")) {
//     this.classList.remove("sticky-fade-out");
//     this.classList.remove("sticky");
//   }
// });

// document.querySelector("h1").addEventListener("click", function () {
//   this.style.backgroundColor = "red";
// });

// let options = {
//   root: null,
//   rootMargin: "0px",
//   threshold: 0.2,
// };

// let observer = new IntersectionObserver(function (entries, observer) {
//   //   console.log("visible");
//   console.log(entries, observer);
//   if (!entries[0].isIntersecting) {
//     // console.log("visible");
//     nav.classList.add("sticky");
//     nav.classList.add("sticky-fade-in");

//     logo.src = "../assets/logos/logo.png";
//   } else if (entries[0].isIntersecting && nav.classList.contains("sticky")) {
//     nav.classList.remove("sticky-fade-in");
//     nav.classList.add("sticky-fade-out");
//     logo.src = "../assets/logos/logo-white.png";
//   }
// });

// observer.observe(document.querySelector("header"));

//STICKY JQUERY

$(".js--section-features").waypoint(
  function (direction) {
    if (direction == "down") {
      $("nav").addClass("sticky");
    } else {
      $("nav").removeClass("sticky");
    }
  },
  {
    offset: "60px;",
  }
);

$(".js--scroll-to-plans").click(function (e) {
  $("html, body").animate(
    { scrollTop: $(".js--section-plans").offset().top },
    1000
  );
});

$(".js--scroll-to-start").click(function (e) {
  $("html, body").animate(
    { scrollTop: $(".js--section-features").offset().top },
    1000
  );
});

window.addEventListener("hashchange", function (e) {
  if (!location.hash) return;
  const section = location.hash.slice(1);
  document.querySelector(`.section-${section}`).scrollIntoView({
    behavior: "smooth",
  });
});

document.addEventListener("DOMContentLoaded", (event) => {
  if (!location.hash) return;
  const section = location.hash.slice(1);
  document.querySelector(`.section-${section}`).scrollIntoView({
    behavior: "smooth",
  });
});

//Animation on scroll
$(".js--wp-1").waypoint(
  function (direction) {
    $(".js--wp-1").addClass("animate__animated animate__fadeIn");
  },
  { offset: "50%" }
);

$(".js--wp-2").waypoint(
  function (direction) {
    $(".js--wp-2").addClass("animate__animated animate__fadeIn");
  },
  { offset: "50%" }
);

$(".js--wp-3").waypoint(
  function (direction) {
    $(".js--wp-3").addClass("animate__animated animate__fadeInUp");
  },
  { offset: "50%" }
);

$(".js--wp-4").waypoint(
  function (direction) {
    $(".js--wp-4").addClass("animate__animated animate__pulse");
  },
  { offset: "50%" }
);

//mobile nav
$(".js--nav-icon").click(function () {
  var nav = $(".js--main-nav");
  var icon = $(".js--nav-icon ion-icon");

  if (icon.attr("name") === "close") {
    icon.attr("name", "reorder-three-outline");
  } else {
    icon.attr("name", "close");
  }

  nav.slideToggle(200);
});
