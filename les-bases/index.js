// alert('Salut JS'); 
// Kamel Case mettre une majuscule à tous les nouveaux mots
let maSuperVariable = "Hello";

// ** Les Variables ** 
// Var = vieux JS 
var unTexte = "voici un texte"

// const = constante variable qui ne bouge pas 
const prenom = "Justine";

// Let = La variable peut évoluer 
let unChiffre = 24;
unChiffre = 22;

// \ pour echapper une guillemet simple si besoin 
let chaine = 'je suis une chaine de caractères';

let nouvelleChaine = "Chaine précédente : " + chaine + ". Voila c'étatit le contenu";  

// Concatenation avec guillemet altgr+7 
let autreConcatenation = `Chaine précédente : ${chaine}. Voila c'étatit le contenu`

// ** Types de données ** 

let string = "Je suis une chaine de caractère"
let number = 24
let boolean = false

// Tableau : il y a des crochets []
let array = ["je", "suis", 47, true]

// Objet : c'est des accolades {} 
let object = {
    prenom: 'audrey',
    age: 33,
    ville: "Bordeaux"
}

// On peut créer une boite sans définir de suite quelque chose à l'intérieur 
let abre;

// ** Les opérateurs ** 
// console.log(4+5);
// console.log(4-5);
// console.log(4*5);
// console.log(4/5);
// puissance
// console.log(4**5);

// ** Opérateurs d'affectations ** 
let total = 0;
total = total + 1
total++;

 total +=5;
 total -=4
 total *=2;

//  ** Structure de controle **

let x = 2;
let y = 5;

// if (x>y){
//      alert("Yes x plus gros que y");
// } else if (y>x) {
//     alert("Y plus grand !");
// } else{
//     alert("ILS SONT EGAUX");
// }

if (x){
    // console.log("x existe !");  
}

let a = 2;
let b = "2"

=== test l'égalité en type et valeur
if (x === y) {
    // console.log("Ils sont égaux");  
}else {
    // console.log("pas égaux");    
}

// == teste l'agalité de valeur sans prendre en compte le type 

if (a == b) {
    // console.log("Ils sont égaux");  
}else {
    // console.log("pas égaux");    
}

// || ou 
// && et

if (x < y || x > 1){
    // console.log("Oui"); 
}

// || sois l'un sois l'autre 
// && il faut que toutes les conditions soient réunis 
if (x < y && x > 1){
    // console.log("Oui"); 
}

// ** Les fonctions ** 

// fonction classique à l'ancienne 
function faireQuelqueChose(){
    console.log("je fais un truc");
    console.log(5 + 6);
    alert("Calcule terminé")
}
// Il faut impérativement appelé la fonction pour qu'elle se joue 
// Appel de la fonction : faireQuelqueChose();

// fonction fléchée
const addition = (a, b) =>{
    // console.log(a + b);
};
addition(4,3);
addition (432, 57869);

// ** La portée des variables **

function add2(){
    let num = 4;
    console.log(num + 2);
}