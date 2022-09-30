const left = document.querySelector('.left');
const right = document.querySelector('.right');

const slider = document.querySelector('.slidercarousel');

const indicatorParent = document.querySelector('.controlcarousel ul'); 
const indicators = document.querySelectorAll('.controlcarousel li');
index = 0;    /*definition d'une position 0 de la slide visible*/



indicators.forEach((indicator, i) => {
    indicator.addEventListener('click', () => {
      document.querySelector('.controlcarousel .selected').classList.remove('selected');/*déplace le statut "selected" d'un bouton a l'autre*/
      indicator.classList.add('selected');
      slider.style.transform = 'translateX(' + (i) * -25 + '%)';  
      index = i;
      
    });
  });




  left.addEventListener('click', function() {
    index = (index > 0) ? index -1 : 0; /*condition empechant d'utiliser le slider si l'on depasse pas le permier avis*/
    document.querySelector('.controlcarousel .selected').classList.remove('selected'); /*déplace le statut "selected" d'un bouton a l'autre*/
    indicatorParent.children[index].classList.add('selected'); /*synchonise l'action de la fleche et le status selected du bouton*/
    slider.style.transform = 'translateX(' + (index) * -25 + '%)'; /*event et fonction pour glisser le slider de 25% car 
    4 avis utilisation concatenation*/
  });


  right.addEventListener('click', function() {
    index = (index < 4 - 1) ? index+1 : 3; /*condition empechant d'utiliser le slider si l'on depasse pas le dernier avis*/
    document.querySelector('.controlcarousel .selected').classList.remove('selected'); /*déplace le statut "selected" d'un bouton a l'autre*/
    indicatorParent.children[index].classList.add('selected'); /*synchonise l'action de la fleche et le status selected du bouton*/
    slider.style.transform = 'translateX(' + (index) * -25 + '%)'; /*event et fonction pour glisser le slider de 25% car 
    4 avis utilisation concatenation*/
  });



