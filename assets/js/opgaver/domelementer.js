/* DOMcelementer */

/* Opgave 1.1
Du skal finde elementet med id="redFigure" og console logge det.
Du skal finde elementet med id="yellowFigure" og console logge det. 
*/

// din kode her
const red = document.getElementById('redFigure');
const yellow = document.getElementById('yellowFigure');

/* opgave 1.2
Du skal ændre baggrundsfarve på de to elementer du har fundet i opgave 1.1
farven på elementerne skal være blå. brug evt. elelement.style.backgroundColor
*/
red.style.backgroundColor = 'blue';
yellow.style.backgroundColor = 'blue';

// din kode her

/* opgave 2.1
Du skal oprette følgende HTML elementer i Elementet med id opgaveTwo.
- et h2 med teksten: Opgave 2.1 løsning
- et p med teksten: Jeg har løst opgave 2.1
*/

// din kode her
const el = document.getElementById('opgaveTwo');
const h2 = document.createElement('h2');
const p = document.createElement('p');
h2.innerText = 'Opgave 2.1 løsning';
p.innerText = 'Jeg har løst opgave 2.1';
el.appendChild(h2);
el.appendChild(p);
// opgave 3 liveHTML lists
/* opgave 3.1
Du skal finde alle elementer med klassen purpleFigures og console logge resultatet
*/

// din kode her
const classes = document.getElementsByClassName('purpleFigures');
console.log(classes);

/* opgave 3.2
Du skal finde alle elementer med klassen purpleFigures og bruge array.from() til at konvertere listen
til et array hvor du kan bruge map funktionen til at ændre baggrundsfarven til rød.
array.from beskrivelse HER: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from
*/

// din kode her
const classArray = Array.from(classes);
classArray.map((i) => {
  i.style.backgroundColor = 'red';
});
/* opgave 3.3
Brug din array til at ændre h3 elementets, inden i purpleFigures, tekst til RED. du kan bruge
myElement.children[0].innerHTML til at ændre 1. child elements inner html.
*/
for (item in classArray) {
  classArray[item].innerHTML = 'RED';
}
// din kode her

/* opgave 4
opret DOM elementer i elementet med id opgaveFour, udfra data objectet myData.
Du skal vælge element tags der giver mening i forbindelse med HTML5 semantisk tagging.
Fyld dine elementers innerHtML eller andre atributter med dine data
*/

const myData = {
  name: 'tiger',
  image: 'assets/img/standard_tiger.jpg',
  description: 'En tiger er et stort, katteagtig rovdyr med orange og sort striber i pelsen og skarpe tænder og kløer.',
};

// din kode her
const data = document.getElementById('opgaveFour');
const section = document.createElement('section');
const navn = document.createElement('h2');
const image = document.createElement('img');
const info = document.createElement('p');

navn.innerHTML = myData.name;
image.src = myData.image;
info.innerHTML = myData.description;

data.appendChild(section);
section.appendChild(navn);
section.appendChild(image);
section.appendChild(info);
