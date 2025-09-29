const prompt =  require("prompt-sync")();

let voiture = {
    marque : "Toyota",
    modele : "helux",
    annee  : "2011"
};

console.log("Marque : " , voiture.marque);
console.log("Modele : " , voiture.modele);
console.log("Annee : " , voiture.annee);


voiture.annee = 2025;

console.log("Marque : " , voiture.marque);
console.log("Modele : " , voiture.modele);
console.log("Annee : " , voiture.annee);


voiture.couleur = "blue";

console.log("Marque : " , voiture.marque);
console.log("Modele : " , voiture.modele);
console.log("Annee : " , voiture.annee);
console.log("Couleur : " , voiture.couleur);


delete voiture.modele;

console.log("Marque : " , voiture.marque);
console.log("Modele : " , voiture.modele);
console.log("Annee : " , voiture.annee);
console.log("Couleur : " , voiture.couleur);



