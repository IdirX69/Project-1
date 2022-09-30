//section beer presentation start
const turtleImg = document.querySelector(".turtle-img");
const turtleP = document.querySelector(".turtle-paragraph");

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    turtleP.style.animation = "beer-paragraph-anim normal 2s forwards";
  } else {
    turtleP.style.animation = "none";
  }

  if (window.scrollY > 100) {
    turtleImg.style.animation = "beer-anim normal 2s forwards";
  } else {
    turtleImg.style.animation = "none";
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
