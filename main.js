



let rgbValues = [];



// This random number function will create color codes for the randomColor variable
function colorValue() {
  return Math.floor(Math.random() * 256);
};



function generateColor() {
  let red = colorValue();
  let green = colorValue();
  let blue = colorValue();
  rgbValues.push(red, green, blue);
  let randomColor = `rgb(${red}, ${green}, ${blue})`;
  return randomColor;
};

//These set of functions help change the RGB to Hex

function valueToHex(c) {
  var hex = c.toString(16);
  return hex
};

function rgbToHex(r, g, b) {
  return ("#" + valueToHex(r) + valueToHex(g) + valueToHex(b));
};

function bgColor() {
  let color = "(" + rgbValues[0] + ", " + rgbValues[1] + ", " + rgbValues[2] + ")";
  return color
}



function changeBackgroundColor() {
  const colorContainer = document.getElementById('color-container');
  colorContainer.style.backgroundColor = generateColor();
  document.getElementById('rgbCode').innerHTML = `${bgColor()}`;
  document.getElementById('hexCode').innerHTML = `${rgbToHex(rgbValues[0], rgbValues[1], rgbValues[2])}`
  colorContainer.style.border = '5px white solid';
  colorContainer.style.display = "flex";
  rgbValues.length = 0
};


