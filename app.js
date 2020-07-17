const circle = document.querySelector('.circle');
const burger = document.querySelector('.burger');
const close = document.querySelector('nav>p>a');
// console.log(circle);
document.addEventListener('mousemove', function(e) {
   circle.setAttribute('style', 'top:'+(e.pageY - 150)+"px; left:"+(e.pageX - 150)+"px;")
});

//Burger et nav

function toggleNavBar(){
   const navBar = document.querySelector('nav');
   navBar.classList.toggle('show');
}
// ajout de l'évènement
burger.addEventListener('click', function(e){
   e.preventDefault();
   toggleNavBar();
});
// Ajout de l'évènement close
close.addEventListener('click', function(e){
   e.preventDefault();
   toggleNavBar();
});

const btnWeb = document.querySelector('.btn-web');
btnWeb.addEventListener('click', function(e){
   e.preventDefault();
   const competenceWeb = document.querySelector('.competence-web');
   competenceWeb.classList.toggle('show-web');
});

const btnDesign = document.querySelector('.btn-design');
btnDesign.addEventListener('click', function(e){
   e.preventDefault();
   const competenceDesign = document.querySelector('.competence-design');
   competenceDesign.classList.toggle('show-design');
});