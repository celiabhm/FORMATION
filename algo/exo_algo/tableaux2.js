// Écrire une fonction qui prend un tableau en entrée et affiche le dernier élément de ce tableau.
let array = [2,1,9];
function tableau(tab){
    
    let result = tab[tab.length-1];
    console.log(result);
}
tableau(array);
// NE PAS OUBLIER DAPPELER LA FONCTION //
// Écrire une fonction qui prend un tableau en entrée et retourne le dernier élément de ce tableau.
let tableaux =[10,50,90,120];
function displaytab(array){
    let result= array[array.length-1];
    return result; 
}

// Écrire une fonction qui prend en entrée un tableau et qui retourne le minimum de ce tableau.
let a=[]; 
function Minimum(tab){
    for(let i=0; i<tab.length; i++){
        if(tab[i]<a){
            a =tab[i] ; 
        }
    } return a;
}   

// Écrire une fonction qui prend en entrée un tableau et qui retourne le maximum de ce tableau.
let b=[]; 
function Maximum(tab){
    for(let i=0; i<tab.length; i++){
        if(tab[i] > b){
            b=tab[i];
        }
    }   return b;
}   


// [Plus difficile - bonus] Écrire une fonction qui prend en entrée un tableau de nombres positifs et qui retourne la deuxième plus grande valeur du tableau.
let n=[]; 
function Nombres(tab){
    for(let i=0; i<tab.length; i++){
        if(tab[i]>n); 
        n=tab[i];
    }
    return n;
}
// Écrire une fonction qui prend en entrée un tableau et un nombre et qui retourne le nombre de fois que ce nombre apparaît dans le tableau.
function compteur(tab,n){
    for(let i=0; i<tab.length; i++){
        if(tab[i]=n){
            i += 1;
        }
        else {
            i = 0;
        }
    }
}
// Écrire une fonction qui prend en entrée un tableau et un nombre et qui retourne true si le nombre existe dans le tableau, false sinon.// Il continuera de faire des tours de boucle jusqu'a la derniere valeur du tableau //
function tabl(array,b){
    for(i=0; i<tab1.length; i++){
        if(tab1 == b); 
        return true ;
    } 
        return false
}   

// [Bonus] Suite de l'exo : on **sait** que le tableau reçu est trié (on ne le vérifie pas). Comment exploiter cette information pour améliorer la recherche d'un élément ?

// Créer un tableau qui contient [1,2,3,...,7777].
let arr=[]; 
for(i=0; i<7777; i++){
    arr[i]= i+1; 
}
// Créer un tableau qui contient [10,20,30,...,77770].
let tab=[]; 
for(i=0; i<77770; i++){
    tab[i] = i+10;
}
// En se servant du tableau précédent, créer un tableau qui contient [5,10,15,...,38885].
let tabb=[]; 
for(i=0; i<38885; i++){
    tabb[i]= i+5; 
}
// Écrire une fonction qui prend un tableau en entrée et qui en supprime les dernières valeurs, tant qu'elles sont inférieures à 50.
let tb=[1,45,88,54,23,-100,12]; 
function Valeurs(tab){
    while(tab[tab.length-1]<50){
        tab.pop(); 
    }
    return tab;
}
console.log(Valeurs(tb));

// console.log(leNomDeVotreFonction([1,45,88,54,23,-100,12]); // doit afficher [1,45,88,54]; 