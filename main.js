// const colorContainer = document.getElementById('color-container');

// This random number function will create color codes for the randomColor variable
function colorValue() {
  return Math.floor(Math.random() * 256);
}

function generateColor(){
  let randomColor = 'rgb(' + colorValue() + ', ' + colorValue() + ', ' + colorValue() + ')';
  return randomColor
}

function changeBackgroundColor() {
  const colorContainer = document.getElementById('color-container');
  colorContainer.style.backgroundColor = generateColor();
  document.getElementById('rgbCode').innerHTML = `${generateColor()}`
  colorContainer.style.border = '5px white solid'
  colorContainer.style.display = "flex"
}

