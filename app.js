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
   const competenceDesign = document.querySelector('.show-design');
   competenceDesign.classList.remove('show-design');
});

const btnDesign = document.querySelector('.btn-design');
btnDesign.addEventListener('click', function(e){
   e.preventDefault();
   const competenceDesign = document.querySelector('.competence-design');
   competenceDesign.classList.toggle('show-design');

   const competenceWeb = document.querySelector('.show-web');
   competenceWeb.classList.remove('show-web');

});

//Portfolio
//Déclaration des variables
const buttonWeb = document.querySelector('.button-web');
const buttonPrint = document.querySelector('.button-print');
const buttonAll = document.querySelector('.button-all');

//Ajout de l'évènement click pour le bouton de sélection web
buttonWeb.addEventListener('click', function(e){
   e.preventDefault();
   const graphPictures = document.querySelectorAll('.graph-pic');
   for(let graphPicture of graphPictures){
      graphPicture.classList.add('suppr');
   }
   const webPictures = document.querySelectorAll('.web-pic');
   for(let webPicture of webPictures){
      webPicture.classList.remove('suppr');
   }
   
});
//Ajout de l'évènement click pour le bouton de sélection print
buttonPrint.addEventListener('click', function(e){
   e.preventDefault();
   const webPictures = document.querySelectorAll('.web-pic');
   for(let webPicture of webPictures){
      webPicture.classList.add('suppr');
   }
   const graphPictures = document.querySelectorAll('.graph-pic');
   for(let graphPicture of graphPictures){
      graphPicture.classList.remove('suppr');
   }
   
});

buttonAll.addEventListener('click', function(e){
   e.preventDefault();
   const graphPictures = document.querySelectorAll('.graph-pic');
   for(let graphPicture of graphPictures){
      graphPicture.classList.remove('suppr');
   }
   const webPictures = document.querySelectorAll('.web-pic');
   for(let webPicture of webPictures){
      webPicture.classList.remove('suppr');
   }
});