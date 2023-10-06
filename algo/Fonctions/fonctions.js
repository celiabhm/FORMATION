// Écrire une fonction f1 qui ne prend rien en entrée, et qui affiche 17 dans la console.
function f1(){
    console.log(17);   
}   

// Utiliser la fonction f1 pour afficher 17 dans la console.
f1(); 
// Écrire une fonction f2 qui ne prend rien en entrée, et qui retourne 17.
function f2(){
    return 17;
}  
// Utiliser la fonction f2 pour afficher 17 dans la console.
console.log(f2());
// La fonction f2 a l'air moins pratique à utiliser. Quel intérêt pourrait-elle avoir par rapport à f1 ?
// Dans la fonction 2 on utilise return qui ne nous renvoi rien en retour sauf si l'on décide d'appeler la fonction à un moment donner, or que dans la fonction f1, on affiche le contenu de la fonction dans la console avec le console.log //
// La fonction f1 est spcécialisé pour afficher dans la console //la fonction f2 permet plus de liberté, on peut fiare ce que l'on veut du résultat (le mettre dans une variable, l'écrire dans la console, l'afficher dans un titre dans le html)

// Écrire une fonction f3 qui prend un nombre en entrée et qui affiche dans la console le double de ce nombre.
function f3(nombre){
    let calcul = nombre * 2;
    console.log(calcul); 
}
// Utiliser la fonction f3 pour écrire dans la console le double de 99.
f3(99); 
// Écrire une fonction f4 qui prend un nombre en entrée et qui retourne le double de ce nombre.
function f4(nombre){
    let calcul= nombre*2; 
    return calcul; 
}
// Utiliser la fonction f4 pour écrire dans la console le double de 99.
console.log(f4(99)); 
// console.log(15+2);
// console.log(17); 

// Utiliser la fonction f4 pour stocker dans une variable appelée a le double de 99.
let a = f4(99);
console.log("La valeur de la variable a est de " + 198);

// Écrire une fonction f5 qui prend en entrée deux nombres et qui affiche dans la console la somme de ces deux nombres.
function f5(nombre1,nombre2){
    calcul = nombre1 + nombre2; 
    console.log(calcul); 
}
// Utiliser la fonction f5 pour écrire dans la console la somme de 42 et 77.
(f5(42,77));

// Écrire une fonction f6 qui prend en entrée deux nombres et qui retourne la somme de ces deux nombres.
function f6(nombreA,nombreB){
    calcul = nombreA + nombreB; 
    return calcul;
}
// Utiliser la fonction f6 pour écrire dans la console la somme de 42 et 77.
console.log(f6(42,77));

// Utiliser la fonction f6 pour incrémenter la variable a de la somme de 42 et 77.
a = a + f6(42,77); 

// Incrémenter la variable a de la somme de 10 et 15 // 
a = a +f6(10,15); 
// OU // 
a += f6(10,15); 

// Écrire une fonction f7 qui prend deux nombres en entrée et qui retourne le plus grand des deux.
function f7(chiffre1,chiffre2){
    if(chiffre1<chiffre2){
        return chiffre2; 
    }
    else return chiffre1;
}   

// Écrire une fonction f8 qui prend trois nombres en entrée et qui retourne le plus grand des trois.
// (Au moins deux versions possibles : sans utiliser f7, et en utilisant f7).
function f8(nb1,nb2,nb3){
    if(nb1<nb2){
        return nb2; 
    } else if(nb2<nb1){
        return nb1; 
    } else return nb3;
}
// DEUXIEME FACON DE FAIRE //
//     if(n1>n2){
//         if(n1>3){
//             return n1; 
//     } else {
//         if(n2 > n3){
//             return 2; 
//         }else {
//             return n3; 
//         }
//     }
// }
    

// Écrire une fonction f9 qui prend un nombre et un mot en entrée, et qui affiche dans la console ce mot ce nombre de fois.
function f9(nombre1,mot1){
    for(let i=0; i<nombre1; i++){
        console.log(mot1);
    }
}   
f9(4,"Célia");