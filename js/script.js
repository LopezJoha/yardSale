
let div = '';
let red;
let green;
let blue;


function randomRGB(){
  red =  Math.floor(Math.random() * 256);
  green = Math.floor(Math.random() * 256);
  blue = Math.floor(Math.random() * 256);

  return `rgb( ${red}, ${green}, ${blue})`;
}

for (let i = 0; i <= 10; i++){
  div += `<div style="background-color: ${randomRGB()}">${i}</div>`;
}; 

document.querySelector('footer').innerHTML = div;

// SOLUCION 2 

let html='';
const randomValue=() => Math.floor (Math.random()*256);
function randomRGB (value){
  const color=`rgb( ${value ()}, ${value()}, ${value ()} )`
  return color;
}
for(leti=1;i<= 10; i++){
  html += `<div style="background-color: ${randomRGB (randomValue) }">${i}</div>`
}; 