let c1 = 1
let c2 = "1"
console.log(c1==c2);
console.log(c1===c2);


// Demande le prénom de la personne
let prenom = prompt("Entrez votre prénom :");

// Vérifie si le prénom comporte moins de 5 caractères
if (prenom.length < 5) {
  // Affiche une alerte si le prénom est trop court
alert("Ton nom est trop court");
}
// Génère deux nombres aléatoires entre 1 et 10
let nombre1 = Math.floor(Math.random() * 10) + 1;
let nombre2 = Math.floor(Math.random() * 10) + 1;

// Affiche l'addition à l'utilisateur
let resultat = prompt(`Combien font ${nombre1} + ${nombre2} ?`);

// Vérifie si l'utilisateur a répondu correctement
if (resultat == nombre1 + nombre2) {
  // Félicite l'utilisateur s'il a répondu correctement
  alert("Bravo, c'est correct !");
} else {
  // Dit à l'utilisateur que sa réponse est incorrecte
  alert("Désolé, ce n'est pas correct.");
}
// Génère deux nombres aléatoires entre 1 et 10
let nombre4 = Math.floor(Math.random() * 10) + 1;
let nombre5 = Math.floor(Math.random() * 10) + 1;

// Affiche la multiplication à l'utilisateur
let resultat2 = prompt(`Combien font ${nombre4} x ${nombre5} ?`);

// Vérifie si l'utilisateur a répondu correctement
if (resultat2 == nombre4 * nombre5) {
  // Félicite l'utilisateur s'il a répondu correctement
  alert(`Bravo, la réponse était bien ${nombre4 * nombre5} !`);
} else {
  // Calcule l'écart entre la réponse de l'utilisateur et la réponse correcte
  let ecart = Math.abs(resultat - nombre4 * nombre5);
  
  // Affiche à combien d'unités l'utilisateur était de la réponse correcte
  alert(`C'est dommage, tu n'étais qu'à ${ecart} unité(s) de la bonne réponse.`);
}


