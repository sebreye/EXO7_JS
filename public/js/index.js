let c1 = 1
let c2 = "1"
console.log(c1==c2);
console.log(c1===c2);



let prenom = prompt("Entrez votre prénom :");

if (prenom.length < 5) {

alert("Ton nom est trop court");
}

let nombre1 = Math.floor(Math.random() * 10) + 1;
let nombre2 = Math.floor(Math.random() * 10) + 1;


let resultat = prompt(`Combien font ${nombre1} + ${nombre2} ?`);


if (resultat == nombre1 + nombre2) {

  alert("Bravo, c'est correct !");
} else {

  alert("Désolé, ce n'est pas correct.");
}
let nombre4 = Math.floor(Math.random() * 10) + 1;
let nombre5 = Math.floor(Math.random() * 10) + 1;

let resultat2 = prompt(`Combien font ${nombre4} x ${nombre5} ?`);


if (resultat2 == nombre4 * nombre5) {

  alert(`Bravo, la réponse était bien ${nombre4 * nombre5} !`);
} else {

  let ecart = Math.abs(resultat - nombre4 * nombre5);

  alert(`C'est dommage, tu n'étais qu'à ${ecart} unité(s) de la bonne réponse.`);
}

let Tableau = [];


while (Tableau.length < 3) {

  let element = prompt("Entrez un élément pour le tableau :");
  

  Tableau.push(element);
}
alert(`Le contenu du tableau est : ${Tableau}`);





