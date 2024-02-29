/// generate random color

 const randomColor = function () {
  const hex = '0123456789ABCDEF';
  let colour = '#';

  for (let i = 0; i < 6; i++) {
    colour += hex[Math.floor(Math.random()*16)];
  }
  console.log(colour);
  return colour;
};
//////////////////////

let intervalid;

const startchangeColor = function (){
 intervalid = setInterval(changebgcolor,1000);
 function changebgcolor(){
  document.body.style.backgroundColor = randomColor();
  document.body.style.color= 'black';
 } 
};

const stopchangeColor = function (){
  clearInterval(intervalid);
  console.log('Stopped');
};

document.querySelector('#start').addEventListener('click', startchangeColor);

document.querySelector('#stop').addEventListener('click', stopchangeColor); 



///////////// Second Try /////////////


/* const randomColor = function () {
  const hex = '0123456789ABCDEF';
  let color = '#';

  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

let interval;

const startchangingcolor = function (){
  interval = setInterval(changecolor,1000);
  function changecolor() {document.body.style.backgroundColor = randomColor();}
  
};

function stopchangingcolor() {
  clearInterval(interval);
 };

document.querySelector('#start').addEventListener('click',startchangingcolor);

document.querySelector('#stop').addEventListener('click',stopchangingcolor); */