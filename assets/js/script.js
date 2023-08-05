"use strict";

let turists = 0;
let treners = 0;
let years = 0;
const turistBlock = document.querySelector(".numbers1");
const trenersBlock = document.querySelector(".numbers3");
const yearsBlock = document.querySelector(".numbers4");
const block = document.querySelector(".numbers>div>span");

window.addEventListener("scroll", () => {
  var elementPosition = block.getBoundingClientRect();
  var windowHeight = window.innerHeight;

  if (elementPosition.top <= windowHeight) {
    setInterval(() => {
      if (turists < 450) {
        turists++;
        turistBlock.textContent = turists;
      }

      if (treners < 10) {
        treners++;
        trenersBlock.textContent = treners;
      }

      if (years < 365) {
        years++;
        yearsBlock.textContent = years;
      }
    }, 10);
  }
});


// slide 

$('.blog__images').slick({
    dots: true,
    infinite: true,
    speed: 1000,
    fade: true,
    cssEase: 'linear',
    autoplay: true,
    autoplaySpeed: 2000,
  });


  // navbar

  // let hamburger = document.querySelector("#hamburger");
  // let navBar = document.querySelector(".navbar");

  // hamburger.addEventListener("onclick", () => {
  //   navBar.classList.toggle("active")
  // })


  let hamburger = document.querySelector(".bi-list");

      function myFunction() {
        let nav = document.querySelector(".navbar");
        nav.classList.toggle("active");

        hamburger.classList.toggle("bi-x-lg");
      }