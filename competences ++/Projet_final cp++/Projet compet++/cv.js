// Message dans la console//
let texte = "Voici le cv de Herver Doegar avec ces expériences datant de";
let date = 2013;
console.log(texte, date);

// Template strings//
const laPresentation = {
    compet: "competences-Anglais",
    Hob: "Hobbies-Voyage",
};

const herve = laPresentation.compet + "/" + laPresentation.Hob;
console.log(herve);

// Array//
let array = ["email@email.com", "17 rue de la Réussite Paris"];
console.log(array);

//  évenement au click//
const titre = document.querySelector("h1");
const poste = document.querySelector("h2");
const image = document.querySelector("img");

image.addEventListener("click", function () {
    titre.classList.add("titleColor");
    poste.classList.add("titleColor");
});

// TextNode//
const contact = document.getElementsByClassName("liste-contact");
const nouv= document.createTextNode("Toutes les formation ont été qualifiantes");

document.body.appendChild(nouv);
console.log(document.body);

