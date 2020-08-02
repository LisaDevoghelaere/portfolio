//-------------------------------------------------Header-----------------------------------------------
const circle = document.querySelector('.circle');
const burger = document.querySelector('.burger');
const closeNav = document.querySelector('nav>p>a');
const goPages = document.querySelectorAll('nav>ul>li>a')
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
closeNav.addEventListener('click', function(e){
   e.preventDefault();
   toggleNavBar();
});
for(goPage of goPages){
   goPage.addEventListener('click', function(e){
      toggleNavBar();
   });
}

//--------------------------------------------------Qui-suis-je?------------------------------------------------------------

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

//--------------------------------------------------------Portfolio------------------------------------------------------

//---------------------------------------------Tri-----------------------------------------------
//Déclaration des variables
const buttonWeb = document.querySelector('.button-web');
const buttonPrint = document.querySelector('.button-print');
const buttonAll = document.querySelector('.button-all');

//Ajout de l'évènement click pour le bouton de sélection web
buttonWeb.addEventListener('click', function(e){
   e.preventDefault();
   const graphPictures = document.querySelectorAll('.graph-pic');
   for(let graphPicture of graphPictures){
      graphPicture.classList.toggle('suppr');
      
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
      webPicture.classList.toggle('suppr');
   }
   const graphPictures = document.querySelectorAll('.graph-pic');
   for(let graphPicture of graphPictures){
      graphPicture.classList.remove('suppr');
   }
   
});

//----------------Rétablit toutes les miniatures-----------------
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

// ---------------------------Open Modals---------------------------
// Créer une fonction qui permet de créer une fenêtre pour le projet
const dashboard = document.getElementById('dashboard');
const multiplication = document.getElementById('multiplication');
const chessCastle = document.getElementById('chess-castle');
const collage = document.getElementById('collage');
const musique = document.getElementById('musique');
const rechauffement = document.getElementById('rechauffement');


const closeModals = document.querySelectorAll('.close');

// console.log(dashboard);
dashboard.addEventListener('click', function(e){
   e.preventDefault();
   const modalDashboard = document.querySelector('.dashboard');
   modalDashboard.classList.remove('hidden');

});
multiplication.addEventListener('click', function(e){
   e.preventDefault();
   const modalMultiplication = document.querySelector('.multiplication');
   modalMultiplication.classList.remove('hidden');

});
chessCastle.addEventListener('click', function(e){
   e.preventDefault();
   const modalChessCastle = document.querySelector('.chess-castle');
   modalChessCastle.classList.remove('hidden');   
});
collage.addEventListener('click', function(e){
   e.preventDefault();
   const modalCollage = document.querySelector('.collage');
   modalCollage.classList.remove('hidden');   
});
musique.addEventListener('click', function(e){
   e.preventDefault();
   const modalMusique = document.querySelector('.musique');
   modalMusique.classList.remove('hidden');   
});
rechauffement.addEventListener('click', function(e){
   e.preventDefault();
   const modalRechauffement = document.querySelector('.rechauffement');
   modalRechauffement.classList.remove('hidden');   
});

//-------------------------------CLOSE MODAL---------------------------------
for(closeModal of closeModals){
closeModal.addEventListener('click', function(e){
   e.preventDefault();
   this.parentElement.parentElement.classList.add('hidden');
});
}