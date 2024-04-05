//ColorButton
document.getElementById("previewBtn").addEventListener("click", colorBtn);

function colorBtn() {
  //Input
  var red = document.getElementById("redBG").value;
  var green = document.getElementById("greenBG").value;
  var blue = document.getElementById("blueBG").value;

  //Process
  let coloring = `RGB(${red},${green},${blue})`;
  //Output
  document.getElementById("rgbText").innerHTML = coloring;
  document.getElementById("displayColor").style.backgroundColor = coloring;
}

//Black Button
document.getElementById("btnblack").addEventListener("click", cBlack);

function cBlack() {
  document.getElementById("displayColor").style.backgroundColor = "RGB(0,0,0)";
  document.getElementById("rgbText").innerHTML = "rgb(0,0,0)";
}

//White button
document.getElementById("btnwhite").addEventListener("click", cWhite);

function cWhite() {
  document.getElementById("displayColor").style.background = "RGB(255,255,255)";
  document.getElementById("rgbText").innerHTML = "rgb(255,255,255)";
}
