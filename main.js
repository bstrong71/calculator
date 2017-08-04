// Writing the JavaScript and interacting with the DOM is the main part of the project
// Start small by selecting some elements
// What algorithms do you need to implement?
// Create some functions to store repeatable steps
// You'll need to find a way to track the numbers pressed until the = is pressed


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

// Click button to show numbers or operators on display
num1.addEventListener('click', function() {
  viewer.innerHTML += 1;
});
num2.addEventListener('click', function() {
  viewer.innerHTML += 2;
});
num3.addEventListener('click', function() {
  viewer.innerHTML += 3;
});
num4.addEventListener('click', function() {
  viewer.innerHTML += 4;
});
num5.addEventListener('click', function() {
  viewer.innerHTML += 5;
});
num6.addEventListener('click', function() {
  viewer.innerHTML += 6;
});
num7.addEventListener('click', function() {
  viewer.innerHTML += 7;
});
num8.addEventListener('click', function() {
  viewer.innerHTML += 8;
});
num9.addEventListener('click', function() {
  viewer.innerHTML += 9;
});
num0.addEventListener('click', function() {
  viewer.innerHTML += 0;
});

divButton.addEventListener('click', function() {
  if(viewer.innerHTML === ""){
    viewer.innerHTML = "";
  } else {
    viewer.innerHTML += "/"};
});

multButton.addEventListener('click', function() {
  if(viewer.innerHTML === ""){
    viewer.innerHTML = "";
  } else {
    viewer.innerHTML += "*"};
});

subtrButton.addEventListener('click', function() {
  if(viewer.innerHTML === ""){
    viewer.innerHTML = "";
  } else {
    viewer.innerHTML += "-"};
});

plusButton.addEventListener('click', function() {
  if(viewer.innerHTML === ""){
    viewer.innerHTML = "";
  } else {
    viewer.innerHTML += "+"};
});

decimal.addEventListener('click', function() {
  viewer.innerHTML += ".";
});

cButton.addEventListener('click', function() {
  viewer.innerHTML = "";
});

eqButton.addEventListener('click', function(){
  if(eval(viewer.innerHTML) != parseInt(eval(viewer.innerHTML))){
    viewer.innerHTML = eval(viewer.innerHTML).toFixed(6);
  } else {
        viewer.innerHTML = eval(viewer.innerHTML);
    }

})
