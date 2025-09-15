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

