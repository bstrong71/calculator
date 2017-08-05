// Button assignments
let cButton = document.getElementById('cButton');
let viewer = document.getElementById('screen');
let num7 = document.getElementById('num7');
let num8 = document.getElementById('num8');
let num9 = document.getElementById('num9');
let divButton = document.getElementById('divButton');
let num4 = document.getElementById('num4');
let num5 = document.getElementById('num5');
let num6 = document.getElementById('num6');
let multButton = document.getElementById('multButton');
let num1 = document.getElementById('num1');
let num2 = document.getElementById('num2');
let num3 = document.getElementById('num3');
let subtrButton = document.getElementById('subtrButton');
let num0 = document.getElementById('num0');
let decimal = document.getElementById('decimal');
let eqButton = document.getElementById('eqButton');
let plusButton = document.getElementById('plusButton');
let modButton = document.getElementById('modu');
let sqRtButton = document.getElementById('sqRt');

// Click button to show numbers or operators on display; includes square root calculator
num1.addEventListener('click', function() {
  if(viewer.innerHTML.endsWith("sqRt")){
    viewer.innerHTML = Math.sqrt(1);
  } else {viewer.innerHTML += 1;}
});
num2.addEventListener('click', function() {
  if(viewer.innerHTML.endsWith("sqRt")){
    viewer.innerHTML = Math.sqrt(2).toFixed(6);
  } else {viewer.innerHTML += 2;}
});
num3.addEventListener('click', function() {
  if(viewer.innerHTML.endsWith("sqRt")){
    viewer.innerHTML = Math.sqrt(3).toFixed(6);
  } else {viewer.innerHTML += 3;}
});
num4.addEventListener('click', function() {
  if(viewer.innerHTML.endsWith("sqRt")){
    viewer.innerHTML = Math.sqrt(4);
  } else {viewer.innerHTML += 4;}
});
num5.addEventListener('click', function() {
  if(viewer.innerHTML.endsWith("sqRt")){
    viewer.innerHTML = Math.sqrt(5).toFixed(6);
  } else {viewer.innerHTML += 5;}
});
num6.addEventListener('click', function() {
  if(viewer.innerHTML.endsWith("sqRt")){
    viewer.innerHTML = Math.sqrt(6).toFixed(6);
  } else {viewer.innerHTML += 6;}
});
num7.addEventListener('click', function() {
  if(viewer.innerHTML.endsWith("sqRt")){
    viewer.innerHTML = Math.sqrt(7).toFixed(6);
  } else {viewer.innerHTML += 7;}
});
num8.addEventListener('click', function() {
  if(viewer.innerHTML.endsWith("sqRt")){
    viewer.innerHTML = Math.sqrt(8).toFixed(6);
  } else {viewer.innerHTML += 8;}
});
num9.addEventListener('click', function() {
  if(viewer.innerHTML.endsWith("sqRt")){
    viewer.innerHTML = Math.sqrt(9);
  } else {viewer.innerHTML += 9;}
});
num0.addEventListener('click', function() {
  if(viewer.innerHTML.endsWith("sqRt")){
    viewer.innerHTML = Math.sqrt(0);
  } else {viewer.innerHTML += 0;}
});


// Operator buttons have if statement to prevent them being entered first or in succession
divButton.addEventListener('click', function() {
  if(viewer.innerHTML === ""){
    viewer.innerHTML = "";
  } else if (viewer.innerHTML.endsWith("/")){
      viewer.innerHTML = viewer.innerHTML;
    } else {viewer.innerHTML += "/";}
});

multButton.addEventListener('click', function() {
  if(viewer.innerHTML === ""){
    viewer.innerHTML = "";
  } else if (viewer.innerHTML.endsWith("*")){
      viewer.innerHTML = viewer.innerHTML;
    } else {viewer.innerHTML += "*"};
});

subtrButton.addEventListener('click', function() {
  if(viewer.innerHTML === ""){
    viewer.innerHTML = "";
  } else if (viewer.innerHTML.endsWith("-")){
      viewer.innerHTML = viewer.innerHTML;
    } else {viewer.innerHTML += "-"};
});

plusButton.addEventListener('click', function() {
  if(viewer.innerHTML === ""){
    viewer.innerHTML = "";
  } else if (viewer.innerHTML.endsWith("")){
      viewer.innerHTML = viewer.innerHTML;
    } else {
      viewer.innerHTML += "+"};
});

decimal.addEventListener('click', function() {
  if(viewer.innerHTML === "."){
    viewer.innerHTML = ".";
  } else if(viewer.innerHTML.endsWith(".")) {
      viewer.innerHTML = viewer.innerHTML;
    } else {viewer.innerHTML += ".";
  }
});

cButton.addEventListener('click', function() {
  viewer.innerHTML = "";
});

// Equals button set to limit decimal output to 6 places as needed
eqButton.addEventListener('click', function(){
  if(eval(viewer.innerHTML) != parseInt(eval(viewer.innerHTML))){
    viewer.innerHTML = eval(viewer.innerHTML).toFixed(6);
  } else {
      viewer.innerHTML = eval(viewer.innerHTML);
    }
})

// Add Modulus and Square Root buttons
modButton.addEventListener('click', function() {
  if(viewer.innerHTML === ""){
    viewer.innerHTML = "";
  } else if (viewer.innerHTML.endsWith("%")){
      viewer.innerHTML = viewer.innerHTML;
    } else {viewer.innerHTML += "%"};
});

sqRtButton.addEventListener('click', function() {
    viewer.innerHTML = "sqRt";
});

// This code will prevent a decimal from being repeated in the same number, but doesn't allow a decimal to be used in a later number of the same equation...so it doesn't work like I wanted it to, but wanted to keep for reference.

// decimal.addEventListener('click', function() {
//   if(viewer.innerHTML === "."){
//     viewer.innerHTML = ".";
//   } else if((viewer.innerHTML.endsWith(".")) || (viewer.innerHTML.indexOf(".") !== -1)){
//       viewer.innerHTML = viewer.innerHTML;
//     } else {viewer.innerHTML += ".";
//   }
// });
