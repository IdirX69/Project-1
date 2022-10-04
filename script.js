//ANIMATION CAPSULE

const logoText = document.querySelector(".logo-text");
const logoImg = document.querySelector(".rotate");

logoText.addEventListener('mouseover', function () {
    logoImg.classList.add("rotate-bis");
});

logoText.addEventListener('mouseleave', function () {
    logoImg.classList.remove("rotate-bis");
})



//HAMBURGER

const hamburgerButton = document.querySelector(".nav-toggler");

const navigation = document.querySelector("nav");

hamburgerButton.addEventListener("click", toggleNav);


function toggleNav() {
    hamburgerButton.classList.toggle("active");
    navigation.classList.toggle("active");
}


//validation age

const txt = document.querySelector('.text-verif');
const bout1 = document.querySelector('.btn-1');
const bout2 = document.querySelector('.btn-2');
const hiddenDiv = document.querySelector('.hidden-div');
const sectionAge = document.querySelector('.sec-age');

hiddenDiv.style.display = "none";

bout1.addEventListener("click", function (event) {
    txt.innerHTML = "Vous n'avez pas l'âge requis pour accéder à ce site !"
    sectionAge.style.display = "none";
    hiddenDiv.style.display = "contents";
});

bout2.addEventListener("click", function (event) {
    txt.innerHTML = "Vous n'avez pas l'âge requis pour accéder à ce site !"
});


