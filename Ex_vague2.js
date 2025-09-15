//ex 1 
/* Créez un objet personne avec les propriétés vous concernant suivantes : prenom, nom, age, ville
Affichez les propriétés prenom, nom, age et ville de l'objet personne dans des console.log() séparés. */

let personne = {
    prenom: "Adrien",
    nom: "Barbet",
    age: 19,
    ville: "Caen",
};

console.log("Prenom : " +personne.prenom);
console.log("Nom : " +personne.nom);
console.log("Age : " +personne.age,"ans");
console.log("Ville : " +personne.ville);

console.log("_________________________________________________________________________");
console.log("\n");
//ex2
/*Créez un tableau personnes contenant les objets suivants :
- {prenom: "John", nom: "Doe", age: 25, ville: "Rouen"}
- {prenom: "Jane", nom: "Doe", age: 30, ville: "Paris"}
- {prenom: "Jim", nom: "Doe", age: 35, ville: "Caen"}
Affichez le tableau personnes dans la console avec log() et table().*/

let personnes = [

    { prenom:"John",nom: "Doe", age:"25", ville:"Rouen"},
    { prenom:"Jan",nom: "Doe", age:"30", ville:"Paris"},
    { prenom:"Jim",nom: "Doe", age:"35", ville:"Caen"},

];

personnes.push({ prenom: "Marc", nom: "Doe", age: 32, ville: "Marseille" });

personnes[0].prenom = "Jean";

personnes.splice(1, 1);

console.log("Affichage avec console.log() :");
console.log(personnes);

console.log("Affichage avec console.table() :");
console.table(personnes);

console.log("_________________________________________________________________________");
console.log("\n");

/*Exercice 3 :
Ajoutez un objet à la fin du tableau personnes avec la méthode push() :
- {prenom: " Marc", nom: "Doe", age: 32, ville: "Marseille"}
Affichez le tableau personnes dans la console avec log() et table().*/

console.log ("Ajout de Marc Doe, 32 ans de Marseille a l'exercice 2");

console.log("_________________________________________________________________________");
console.log("\n");

/*Exercice 4 :
Modifiez le premier objet du tableau personnes en utilisant la syntaxe suivante : personnes[0].prenom = "Jean"
Supprimez le deuxième objet du tableau personnes en utilisant la méthode splice()
Affichez le tableau personnes dans la console avec log() et table().*/

console.log ("Modification du premier objet et suppression du deuxieme a l'exercice 2");

console.log("_________________________________________________________________________");
console.log("\n");

/*
Exercice 5 :
Créez un tableau contenant les nombres de 1 à 10.
 - Affichez le premier élément du tableau.
 - Affichez le dernier élément du tableau.
 - Affichez la longue
*/

let nombres = [1,2,3,4,5,6,7,8,9,10];

console.log("Premier élément : " + nombres[0]);
console.log("Dernier élément : " + nombres[nombres.length - 1]);
console.log("Longueur du tableau : " + nombres.length);


console.log("_________________________________________________________________________");
console.log("\n");

/*
Exercice 6 :
Créez un tableau contenant les chiffres de 10 à 100 de 10 en 10.
- Affichez le tableau.
- Inversez le tableau avec la méthode reverse() puis affichez le tableau.*/

let chiffres = [10,20,30,40,50,60,70,80,90,100];

console.log("Tableau original :");
console.table(chiffres);

chiffres.reverse();

console.log("Tableau inversé :");
console.table(chiffres);

console.log("_________________________________________________________________________");
console.log("\n");

/*Exercice 7 :
Créez un tableau numbers = [ 2, 5, 1, 9, 0, 3, 7, 4, 6, 8 ]
- Affichez le tableau.
- Triez le tableau avec la méthode sort() puis affichez le tableau */

let numbers = [2, 5, 1, 9, 0, 3, 7, 4, 6, 8];

console.log("Tableau original :");
console.log(numbers);
numbers.sort((a, b) => a - b);

console.log("Tableau trié :");
console.log(numbers);


console.log("_________________________________________________________________________");
console.log("\n");

/*Exercice 8 :
En repartant du tableau numbers trié :
- Ajoutez le nombre 11 à la fin du tableau avec la méthode push().
- Affichez le tableau.
- Ajoutez le nombre 0 au début du tableau avec la méthode unshift().
- Affichez le tableau.
- Supprimez le dernier élément du tableau avec la méthode pop().
- Affichez le tableau.*/

let number = [0,1,2,3,4,5,6,7,8,9];

numbers.push(11);
console.log("Après push(11) :");
console.log(number);

numbers.unshift(0);
console.log("Après unshift(0) :");
console.log(number);

numbers.pop();
console.log("Après pop() :");
console.log(number);

console.log("_________________________________________________________________________");
console.log("\n");