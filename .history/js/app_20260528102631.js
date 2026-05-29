// ============================================================
//  Ma ToDo — point de départ
//  Écran unique, sans routage.
// ============================================================

var $$ = Dom7; // utilitaire DOM intégré à Framework7

var app = new Framework7({
    el: '#app',
    name: 'MaToDo',
    theme: 'auto',
});

// ------------------------------------------------------------
//  SÉANCE 2 — déclarer le tableau des tâches, puis :
//    - une fonction afficher() qui construit la liste
//    - une fonction ajouterTache(texte)
//    - une fonction supprimerTache(id)

var taches = [ 
  { id: 1, texte: "Faire la session1", fait: false }, 
  { id: 2, texte: "Faire la session2", fait: true  }, 
  { id: 1, texte: "Faire la session3", fait: false }, 
  { id: 2, texte: "Completez le tp",   fait: true  }, 
];


function ligneTache(t) { 
  return '<li class="item-content" data-id="' + t.id + '">' + 
    '<div class="item-media">' + 
      '<label class="checkbox">' + 
        '<input type="checkbox" ' + (t.fait ? 'checked' : '') + '>' + 
        '<i class="icon-checkbox"></i>' + 
      '</label>' + 
    '</div>' + 
    '<div class="item-inner">' + 
      '<div class="item-title">' + t.texte + '</div>' + 
      '<div class="item-after">' + 
        '<a href="#" class="btn-suppr"><i class="icon f7-icons">trash</i></a>' + 
      '</div>' + 
    '</div>' + 
  '</li>'; 
} 
  
function afficher() { 
  $$('.liste-taches').html(taches.map(ligneTache).join('')); 
} 
  
afficher(); // premier affichage 


//
//  SÉANCE 3 — ajouter :
//    - basculerTache(id) pour cocher / décocher
//    - le compteur de tâches restantes
//    - les filtres (Toutes / À faire / Faites)
//    - chargerTaches() et sauvegarder() avec localStorage
// ------------------------------------------------------------

// Exemple de structure de données (à activer en séance 2) :
// var taches = [
//   { id: 1, texte: "Réviser l'algorithmique", fait: false },
// ];