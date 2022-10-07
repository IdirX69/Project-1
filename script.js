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
const navBarScroll = document.querySelector("nav");

if (window.matchMedia("(max-width: 1200px)").matches) {
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
  });
}

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

let lastScrollValue = 0;

document.addEventListener("scroll", () => {
  let top = document.documentElement.scrollTop;
  if (lastScrollValue < top) {
    navBarScroll.classList.add("hidden");
  } else {
    navBarScroll.classList.remove("hidden");
  }
  lastScrollValue = top;
});

//Section beer presentation end

//QUIZZ

const els = {
  welcomeScreen: null,
  questionScreen: null,
  endScreen: null,
  welcomeBtn: null,
  answers: null,
  endBtn: null,
  answersContainer: null,
};

let questionIndex = 0;

const questions = [
  {
    question:
      "Vous dormiez jusqu’au moment où un moustique est venu voler juste au-dessus de votre lit :",
    answers: [
      {
        title: "Armé(e) de votre chaussure, vous tapez tous azimuts",
        house: "WildBear",
      },
      {
        title: "Vous allez dormir ailleurs",
        house: "WildShark",
      },
      {
        title: "Vous allumez la lumière dans la pièce à côté pour l'y attirer",
        house: "WildFox",
      },
      {
        title: "Vous attendez qu'il se pose et vous le tuez",
        house: "WildPanda",
      },
      {
        title:
          "Vous filez chercher de la bombe anti-moustiques et vous en aspergez la chambre",
        house: "WildBee",
      },
      {
        title:
          "Vous vous enfoncez dans votre lit sans laisser dépasser un centimère de peau",
        house: "WildTurtle",
      },
    ],
  },
  {
    question:
      "Ce qui vous fascine le plus lorsque vous regardez un feu dans une cheminée :",
    answers: [
      {
        title: "La chaleur qui s'en dégage",
        house: "WildPanda",
      },
      {
        title: "La couleur des flammes et leurs mille nuances",
        house: "WildTurtle",
      },
      {
        title: "La musique du feu, son crépitement",
        house: "WildFox",
      },
      {
        title: "La puissance du feu",
        house: "WildBear",
      },
      {
        title: "La valse des flammes, leur danse",
        house: "WildBee",
      },
      {
        title: "Le côté vivant avec son mouvement permanent",
        house: "WildShark",
      },
    ],
  },
  {
    question:
      "Selon vous, la qualité primordiale pour qu’un homme politique reste longtemps au pouvoir :",
    answers: [
      {
        title: "Sa capacité à encaisser des coups",
        house: "WildTurtle",
      },
      {
        title: "Sa détermination",
        house: "WildPanda",
      },
      {
        title: "Sa force de caractère",
        house: "WildBear",
      },
      {
        title: "Sa perspicacité dans le choix de ses collaborateurs",
        house: "WildBee",
      },
      {
        title: "Son énergie hors norme",
        house: "WildShark",
      },
      {
        title: "Son intelligence hors pair",
        house: "WildFox",
      },
    ],
  },
  {
    question: "Lorsque vous êtes à bout, vous avez envie :",
    answers: [
      {
        title: "D'aller vous cacher dans un trou de souris",
        house: "WildTurtle",
      },
      {
        title: "De crier pour vous défouler",
        house: "WildBear",
      },
      {
        title: "De dire tout haut ce que vous pensez tout bas",
        house: "WildShark",
      },
      {
        title: "De dormir pour tout oublier",
        house: "WildPanda",
      },
      {
        title: "De partir à l'autre bout de la terre",
        house: "WildBee",
      },
      {
        title: "De tout envoyer promener",
        house: "WildFox",
      },
    ],
  },
  {
    question: "Ce qu’il peut vous arriver d’envier aux animaux :",
    answers: [
      {
        title: "Ils ne sont pas obligés de travailler",
        house: "WildPanda",
      },
      {
        title: "Ils ne sont pas obligés d'obéir",
        house: "WildShark",
      },
      {
        title: "Ils n'ont pas de problème d'argent",
        house: "WildFox",
      },
      {
        title: "Ils ont moins de problèmes relationnels",
        house: "WildTurtle",
      },
      {
        title: "Ils sont libres",
        house: "WildBee",
      },
      {
        title: "Ils suivent leur instinct",
        house: "WildBear",
      },
    ],
  },
];

const recordedAnswers = [];

const init = () => {
  console.log("Page has loaded");

  els.welcomeScreen = document.querySelector(".welcome-screen");
  els.questionScreen = document.querySelector(".question-screen");
  els.endScreen = document.querySelector(".end-screen");
  els.welcomeBtn = els.welcomeScreen.querySelector("button");
  els.endBtn = els.endScreen.querySelector("button");
  els.answersContainer = els.questionScreen.querySelector("ul");

  els.welcomeBtn.addEventListener("click", () => {
    displayScreen("question");
    displayQuestion(questionIndex);
  });
  els.endBtn.addEventListener("click", () => {
    displayScreen("welcome");
    questionIndex = 0;
  });

  els.answersContainer.addEventListener("click", ({ target }) => {
    if (target.tagName !== "LI") {
      return;
    }
    const house = target.getAttribute("data-house");
    recordedAnswers.push(house);

    questionIndex++;

    if (questionIndex >= questions.length) {
      calculateScore();
      displayScreen("end");
    } else {
      displayQuestion(questionIndex);
    }
  });
};

const calculateScore = () => {
  const house = recordedAnswers
    .sort((a, b) => {
      return (
        recordedAnswers.filter((answer) => answer === a).length -
        recordedAnswers.filter((answer) => answer === b).length
      );
    })
    .pop();
  // console.log('house', house);

  const houseInFrench = {
    WildFox: "img/1.png",
    WildBee: "img/2.png",
    WildTurtle: "img/3.png",
    WildShark: "img/4.png",
    WildPanda: "img/5.png",
    WildBear: "img/6.png",
  };

  els.endScreen.querySelector("img").src = houseInFrench[house];
};

const displayQuestion = (index) => {
  const currentQuestion = questions[index];

  const questionEl = els.questionScreen.querySelector("h2");

  const answerEls = currentQuestion.answers.map((answer) => {
    const liEl = document.createElement("li");
    liEl.textContent = answer.title;
    liEl.setAttribute("data-house", answer.house);
    return liEl;
  });

  questionEl.textContent = currentQuestion.question;
  els.answersContainer.textContent = "";
  els.answersContainer.append(...answerEls);
};

const displayScreen = (screenName) => {
  // console.log('screenName', screenName);
  els.welcomeScreen.style.display = "none";
  els.questionScreen.style.display = "none";
  els.endScreen.style.display = "none";

  const screen = els[screenName + "Screen"];
  // console.log('screen', screen);
  screen.style.display = "flex";
};

window.addEventListener("load", init);

//caroussel

let slides = document.querySelectorAll(".slide-container");
let index = 0;

function next() {
  slides[index].classList.remove("active");
  index = (index + 1) % slides.length;
  slides[index].classList.add("active");
}

function prev() {
  slides[index].classList.remove("active");
  index = (index - 1 + slides.length) % slides.length;
  slides[index].classList.add("active");
}
