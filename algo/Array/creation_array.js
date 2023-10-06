// Création d'un tableau
let tab = [2, 17, 23];
// Automatiquement, les cases sont numérotées 0, 1 et 2.

// Accéder à une case du tableau
tab[0] // La case numéro 0 du tableau tab
// Écrire dans la console le contenu de la case numéro 0 de tab :
console.log(tab[0]);
// Modifier la case numéro 1 de tab :
tab[1] = 47;

console.log(tab); // Attention, peut être trompeur !

// Ajouter une nouvelle case à la fin du tableau :
tab.push(99);

// Retirer la dernière case du tableau :
tab.pop();
// La fonction .pop donne un résultat : c'est ce qui était dans la case qui vient d'être supprimée.
console.log(tab.pop());

// Taille du tableau
// Variable qui contient automatiquement le nombre de cases du tableau
tab.length
// On va seulement lire cette variable, pas la modifier
console.log("Le tableau tab contient", tab.length, "cases.");