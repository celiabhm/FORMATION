// Exercice 1 : écrire 50 fois "Bonjour" dans la console.
// TODO
console.log("Exercice 1");
for(let i=0; i<50; i++){
    console.log("Bonjour");
}

// Exercice 2 : écrire dans la console :
// A
// B
// A
// B
// A
// B
// A
// B
// A
// B

// TODO
console.log("Exercice 2");
let lettre1="A"; 
let lettre2="B"; 

for(i=0; i<10; i++){
    if(i%2 == 0){
        console.log(lettre1);
    }
    else{
        console.log(lettre2);
    }
}


// Exercice 3 : écrire dans la console :
// A
// A
// A
// A
// A
// B
// A
// A
// A
// A
// A
// B
// A
// A
// A
// A
// A
// B

// TODO
console.log("Exercice 3");
for(let i=0; i<3; i++){
    for(let j=0; j<5; j++){
        console.log("A"); 
    }   console.log("B"); 
}   


// Exercice 4 : écrire dans la console :
// 0
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9

// TODO
console.log("Exercice 4");
for(let i=0; i<10; i++){
    console.log(i);
}  
// Exercice 5 : écrire dans la console :
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10
// 11
// 12

// TODO
console.log("Exercice 5");
for(let i=3; i<13; i++){
    console.log(i);
}  


// Exerice 6 : écrire dans la console :
// 0
// 1
// 2
// 3
// 0
// 1
// 2
// 3
// 0
// 1

// TODO
console.log("Exercice 6");
let x=0; 

for(let i=0; i<3; i++){
    for(let i=0; i<4; i++){
        x++; 
        if(x<=10){
            console.log(i);
        }
        
    }  

}


// Exercice 7 : écrire dans la console :
// 0
// 1
// 2
// 3
// 4
// A
// A
// A
// 8
// 9

// TODO
console.log("Exercice 7");
for(let i=0; i<10; i++){
    if(i<5 || i>7){
        console.log(i);
    }
    else{
        console.log("A");
    }
}  
// OU // 
// for(let i = 0 ; i < 10 ; i++) {
//     if(i == 5 || i == 6 || i ==7) { // Si i vaut 5 ou i vaut 6 ou i vaut 7
//         console.log("A");
//     } else {
//         console.log(i);
//     }
// }


// Exercice 8 : écrire dans la console :
// 0->100 // console.log(i+100);
// 1->1 // console.log(i);
// 2->2 // console.log(i);
// 3->103 // console.log(i+100);
// 4->4 // console.log(i);
// 5->5 // console.log(i);
// 6->106 // console.log(i+100);
// 7->7 // console.log(i);
// 8->8 // console.log(i);
// 109 // console.log(i+100);

// TODO
console.log("Exercice 8");
for(let i=0; i<10; i++){
    if(i%3 == 0){
        console.log(i+100);
    } else {
        console.log(i);
    }
}  


// Exercice 9 : écrire dans la console :
// 0
// 101
// 202
// 3
// 104
// 205
// 6
// 107
// 208
// 9

// TODO
console.log("Exercice 9");
for(let i = 0 ; i < 10 ; i++) {
    if(i%3 == 0) {
        console.log(i);
    } else {
        if(i%3 == 1) {
            console.log(i + 100);
        } else {
            console.log(i + 200);
        }
    }
}

// console.log("Exercice 9 bis");
// for(let i = 0 ; i < 10 ; i++) {
//     console.log(i + (i%3)*100);
// }


// Exercice 10 : écrire dans la console tous les résultats possibles de lancers de deux dés :
// 1 1
// 1 2
// 1 3
// ...
// 6 4
// 6 5
// 6 6 

// TODO
console.log("Exercice 10");


// Exercice 11 : adapter l'exercice précédent pour enlever les doublons (on ne veut pas afficher 1 2 et 2 1, mais seulement l'un des deux).
// TODO
console.log("Exercice 11");


// Exercice 12 : en prenant des dés à 20 faces, combien de résultats différents (sans doublon) peut-on afficher ? (Autrement dit : adapter le code précédent pour compter les résultats au lieu de les afficher)
console.log("Exercice 12");
// TODO

// Exercice 13 : afficher la table de multiplication de 1 (de 1 à 9):
// 1x1 = 1
// 1x2 = 2
// 1x3 = 3
// 1x4 = 4
// 1x5 = 5
// 1x6 = 6
// 1x7 = 7
// 1x8 = 8
// 1x9 = 9
console.log("Exercice 13");

let n=1;
for(let i=1; i<=9; i++){
    console.log(n+"x"+i+"="+n*i);
}
// TODO

// Exercice 14 : que faut-il modifier du code précédent pour obtenir la table de 2 :
// 2x1 = 2
// 2x2 = 4
// 2x3 = 6
// 2x4 = 8
// 2x5 = 10
// 2x6 = 12
// 2x7 = 14
// 2x8 = 16
// 2x9 = 18
console.log("Exercice 14");
let c14 =2;

for(let i=1; i<=9; i++){
    console.log(c14+"x"+i+"="+c14*i);
}
// TODO

// Exercice 15 : comment généraliser pour afficher toutes les tables de multiplication de 1 à 9 :
// 1x1 = 1
// 1x2 = 2
// 1x3 = 3
// 1x4 = 4
// ...
// 9x7 = 63
// 9x8 = 72
// 9x9 = 81
console.log("Exercice 15");
let c15 =1;

for(let i=1; i<=9; i++){
    for(let i=0; i<=9; i++){ 
    }console.log(c15+"x"+i+"="+c15*i);
        i +=1;
}
// TODO

// Exercice 16 : calculer 1+2+3+4+...+99+100. (Vous devriez trouver 5050)
console.log("Exercice 16");
let nombre=1;
let chiffre=2;  
for(let i=0; i<100; i++){
    for(let j=0; j<100; j++){
    }
    console.log(i+j+i);
}
// TODO

// Exercice 17 : trouver le nombre n tel que 1+2+3+4+5+...+(n-1)+n = 302253
console.log("Exercice 17");
// TODO

// Exercice 18 : Afficher :
// 1
// 1
// 2
// 3
// 5
// 8
// 13
// 21
// 34
// 55
console.log("Exercice 18");
// TODO

// Exercice 19 : compter combien il y a de nombres multiples de 3 ou de 7 entre 1234 et 5678
console.log("Exercice 19");
// TODO

// Exercice 20 : afficher dans la console :
/*
*
**
***
****
*****
*/
console.log("Exercice 20");
// TODO

// Exercice 21 : afficher dans la console :
/*
    *
   **
  ***
 ****
*****
*/
console.log("Exercice 21");
// TODO

// Exercice 22 : afficher dans la console :
/*
    *
   ***
  *****
 *******
*********
*/
console.log("Exercice 22");
// TODO

// Exercice 23 : afficher dans la console :
/*
    *
   ***
  *****
 *******
*********
 *******
  *****
   ***
    *
*/
console.log("Exercice 23");
// TODO
