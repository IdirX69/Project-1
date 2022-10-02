//ANIMATION CAPSULE

const logoText = document.querySelector(".logo-text");
const logoImg = document.querySelector(".rotate");

logoText.addEventListener('mouseover', function () {
    logoImg.classList.add("rotate-bis");
});

logoText.addEventListener('mouseleave', function () {
    logoImg.classList.remove("rotate-bis");
})