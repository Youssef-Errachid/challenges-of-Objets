let Levres2 = {
 livre1: {
    titre: "Contes",
    auteur: "Christian Andersen",
    annee: 1955
  },
  livre2: {
    titre: "Orgueil et Préjugés ",
    auteur: "Jane Austen",
    annee: 1923
  },
  livre3: { titre: "Le Père Goriot", 
    auteur: "Honoré de Balzac", 
    annee: 1942 },
    trouverLivre :function(titr){

 for (const key in Levres2) {

     if(Levres2[key].titre == titr){

     console.log(`${key}: ${Levres2[key]}`);

    }
}
    }
 }

 Levres2.trouverLivre("Contes");