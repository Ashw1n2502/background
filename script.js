var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById('gradient1');

setGradient();
function setGradient(){
	body.style.background = 'linear-gradient(to right, '+ color1.value + ',' + color2.value + ')';

	css.textContent = body.style.background + ';';
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);	


//Random background button
// var randomColor = Math.floor(Math.random()*16777215).toString(16);
var random = document.querySelector(".random1");

const randomRgbColor = () => {
  let r = Math.floor(Math.random() * 256); // Random between 0-255
  let g = Math.floor(Math.random() * 256); // Random between 0-255
  let b = Math.floor(Math.random() * 256); // Random between 0-255
  return 'rgb(' + r + ',' + g + ',' + b + ')';
};

var color1Random = randomRgbColor();
var color2Random = randomRgbColor();

function setRandom(){
		body.style.background = 'linear-gradient(to right, '+ color1Random + ',' + color2Random + ')';
}

random.addEventListener("click", setRandom);
