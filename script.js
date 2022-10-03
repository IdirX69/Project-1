//ANIMATION CAPSULE

const logoText = document.querySelector(".logo-text");
const logoImg = document.querySelector(".rotate");

logoText.addEventListener("mouseover", function () {
  logoImg.classList.add("rotate-bis");
});

logoText.addEventListener("mouseleave", function () {
  logoImg.classList.remove("rotate-bis");
});
//section beer presentation start
const turtleImg = document.querySelector(".turtle-img-pres");
const turtleP = document.querySelector(".turtle-paragraph");
const foxImg = document.querySelector(".fox-img-pres");
const foxP = document.querySelector(".fox-paragraph");
const beeImg = document.querySelector(".bee-img-pres");
const beeP = document.querySelector(".bee-paragraph");

window.addEventListener("scroll", () => {
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
    foxImg.style.transform = "translateX(-160px)";
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
    beeImg.style.transform = "translateX(160px)";
  }
  if (window.scrollY > 580) {
    beeP.style.animation = "beer-paragraph-bee normal 2s forwards";
  } else {
    beeP.style.animation = "none";
  }
});

const bubbleMaker = () => {
  const bubble = document.createElement("span");
  bubble.classList.add("bubble");
  document.body.appendChild(bubble);

  const size = Math.random() * 10 + "px";

  bubble.style.height = size;
  bubble.style.width = size;
  bubble.style.top = Math.random() * 100 + 40 + "%";
  bubble.style.left = Math.random() * 100 + "%";
  const plusMinus = Math.random() > 0.5 ? 1 : -1;
  bubble.style.setProperty("--left", Math.random() * 100 * plusMinus + "%");
  setTimeout(() => {
    bubble.remove();
  }, 8000);
};
setInterval(bubbleMaker, 200);

//Section beer presentation end
