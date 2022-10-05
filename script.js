//ANIMATION CAPSULE

const logoText = document.querySelector(".logo-text");
const logoImg = document.querySelector(".rotate");

logoText.addEventListener("mouseover", function () {
  logoImg.classList.add("rotate-bis");
});

logoText.addEventListener("mouseleave", function () {
  logoImg.classList.remove("rotate-bis");
});

//HAMBURGER

const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");

  // toggle nav

  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");

    //Animate links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0
        }s`;
      }
    });

    //Burger Animation

    burger.classList.toggle("toggle");
  });
};

navSlide();

//validation age

const txt = document.querySelector(".text-verif");
const bout1 = document.querySelector(".btn-1");
const bout2 = document.querySelector(".btn-2");
const hiddenDiv = document.querySelector(".hidden-div");
const sectionAge = document.querySelector(".sec-age");

hiddenDiv.style.display = "none";

bout1.addEventListener("click", function (event) {
  txt.innerHTML = "Vous n'avez pas l'âge requis pour accéder à ce site !";
  sectionAge.style.display = "none";
  hiddenDiv.style.display = "contents";
});

bout2.addEventListener("click", function (event) {
  txt.innerHTML = "Vous n'avez pas l'âge requis pour accéder à ce site !";
});

//section beer presentation start
const turtleImg = document.querySelector(".turtle-img-pres");
const turtleP = document.querySelector(".turtle-paragraph");
const foxImg = document.querySelector(".fox-img-pres");
const foxP = document.querySelector(".fox-paragraph");
const beeImg = document.querySelector(".bee-img-pres");
const beeP = document.querySelector(".bee-paragraph");

// Resolution is 1024x768 or above

window.addEventListener("scroll", () => {
  if (window.matchMedia("(max-width: 1200px)").matches) {
    if (window.scrollY > 980) {
      turtleImg.style.animation = "beer-anim-img normal 2s forwards";
    } else {
      turtleImg.style.animation = "none";
    }
    if (window.scrollY > 981) {
      turtleP.style.animation = "beer-paragraph-anim normal 2s forwards";
    } else {
      turtleP.style.animation = "none";
    }
    if (window.scrollY > 20) {
      foxImg.style.animation = "beer-anim-img normal 2s forwards";
    } else {
      foxImg.style.animation = "none";
      foxImg.style.transform = "translateX(-40px)";
    }
    if (window.scrollY > 20) {
      foxP.style.animation = "beer-paragraph-anim normal 2s forwards";
    } else {
      foxP.style.animation = "none";
    }
    if (window.scrollY > 580) {
      beeImg.style.animation = "beer-img-bee normal 2s forwards";
    } else {
      beeImg.style.animation = "none";
      beeImg.style.transform = "translateX(40px)";
    }
    if (window.scrollY > 580) {
      beeP.style.animation = "beer-paragraph-bee normal 2s forwards";
    } else {
      beeP.style.animation = "none";
    }
  }
});

const bubbleMaker = () => {
  const bubble = document.createElement("span");
  bubble.classList.add("bubble");
  document.body.appendChild(bubble);

  const size = Math.random() * 10 + "px";

  bubble.style.height = size;
  bubble.style.width = size;
  bubble.style.top = Math.random() * 100 + "%";
  bubble.style.left = Math.random() * 100 + "%";
  const plusMinus = Math.random() > 0.5 ? 1 : -1;
  bubble.style.setProperty("--left", Math.random() * 100 * plusMinus + "%");
  setTimeout(() => {
    bubble.remove();
  }, 8000);
};
setInterval(bubbleMaker, 200);

//Section beer presentation end

//caroussel

const left = document.querySelector(".left");
const right = document.querySelector(".right");

const slider = document.querySelector(".slidercarousel");

const indicatorParent = document.querySelector(".controlcarousel ul");
const indicators = document.querySelectorAll(".controlcarousel li");
index = 0; /*definition d'une position 0 de la slide visible*/

indicators.forEach((indicator, i) => {
  indicator.addEventListener("click", () => {
    document
      .querySelector(".controlcarousel .selected")
      .classList.remove(
        "selected"
      ); /*déplace le statut "selected" d'un bouton a l'autre*/
    indicator.classList.add("selected");
    slider.style.transform = "translateX(" + i * -25 + "%)";
    index = i;
  });
});

left.addEventListener("click", function () {
  index =
    index > 0
      ? index - 1
      : 0; /*condition empechant d'utiliser le slider si l'on depasse pas le permier avis*/
  document
    .querySelector(".controlcarousel .selected")
    .classList.remove(
      "selected"
    ); /*déplace le statut "selected" d'un bouton a l'autre*/
  indicatorParent.children[index].classList.add(
    "selected"
  ); /*synchonise l'action de la fleche et le status selected du bouton*/
  slider.style.transform =
    "translateX(" +
    index * -25 +
    "%)"; /*event et fonction pour glisser le slider de 25% car 
    4 avis utilisation concatenation*/
});

right.addEventListener("click", function () {
  index =
    index < 4 - 1
      ? index + 1
      : 3; /*condition empechant d'utiliser le slider si l'on depasse pas le dernier avis*/
  document
    .querySelector(".controlcarousel .selected")
    .classList.remove(
      "selected"
    ); /*déplace le statut "selected" d'un bouton a l'autre*/
  indicatorParent.children[index].classList.add(
    "selected"
  ); /*synchonise l'action de la fleche et le status selected du bouton*/
  slider.style.transform =
    "translateX(" +
    index * -25 +
    "%)"; /*event et fonction pour glisser le slider de 25% car 
    4 avis utilisation concatenation*/
});
