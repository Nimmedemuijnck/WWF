// JavaScript Document
console.log("hi");

var toonMenu = document.querySelector("nav button"); 
var hetMenu = document.querySelector("nav"); 
// stap 2: laat de menu-button luisteren naar kliks en voer dan een functie uit
toonMenu.onclick = openMenu;

// stap 3: voeg in de functie een class toe aan de nav
function openMenu() {
hetMenu.classList.toggle("toonMenu"); 
}