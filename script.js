
var button0 = document.getElementById('button0')
button0.addEventListener('click', function(){
    ud(0);
})
var button1 = document.getElementById('button1')
button1.addEventListener('click', function() {
    pushNum(1);
 })
var button2 = document.getElementById('button2');
button2.addEventListener('click', function() {
   ud(2);
 })
var button3 = document.getElementById('button3');
button3.addEventListener('click', function() {
    pushNum(3);
 })
var button4 = document.getElementById('button4');
button4.addEventListener('click', function() {
    pushNum(4);
 })
var button5 = document.getElementById('button5');
button5.addEventListener('click', function() {
    pushNum(5);
 })
var button6 = document.getElementById('button6')
button6.addEventListener('click', function() {
    pushNum(6);
 })
var button7 = document.getElementById('button7')
button7.addEventListener('click', function() {
    pushNum(7);
 })
var button8 = document.getElementById('button8')
button8.addEventListener('click', function() {
    pushNum(8);
 })
var button9 = document.getElementById('button9')
button9.addEventListener('click', function() {
    pushNum(9);
 })
var buttonD = document.getElementById('buttonD')
buttonD.addEventListener('click', function() {
    pushNum('.');
 })
var buttonAC = document.getElementById('buttonAC')
buttonAC.addEventListener('click', function() {
    numArray = [];
})
var buttonDEL = document.getElementById('buttonDEL')
buttonDEL.addEventListener('click', function() {
    numArray.pop();
})


var numArray = [];
function pushNum(num) {
    numArray.push(num);
    console.log(numArray)
 }

var disp = document.getElementById('disp')
function ud(n) {
    disp.innerHTML += n;
}

 /*var counter = ""
 function concatNum(num) {
    counter.concat(num);
    console.log(counter)

 }*/


 /* addEventListener("click", function(){
    document.getElementById("demo").innerHTML = "Hello World";
}); */

/* var button1 = document.getElementById('button1')
console.log('The type of button1 is ' + typeof button1);
console.log('Console is ' + typeof console); */
