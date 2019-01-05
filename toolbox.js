/* 
1.  V A R I A B L E S 
VARIABLES CAN STORE IMPORTANT *THINGS* SO YOU CAN USE THEM LATER ON

Example:
*/
var importantNumber = 5


/* 
VARIABLES CAN'T JUST STORE ANNNYTHING.
THEY CAN ONLY STORE CERTAIN 'DATA TYPES'


THE DATA TYPES ARE:
*/
var number = 2
var string = 'Oh hai'
var boolean = true
var array = ['apples', 'oranges', 'greps']
var object = { /* collections */
    eyeColor: 'blue',
    age: 23
}
var object2 = {
    eyeColor: 'green',
    age: 65
}

console.log(object2.age)



var func = function(parameter) {
    console.log('I am a function! Call me if you dare.');
}


/* 
2.  F U N C T I O N S
FUNCTIONS ARE NICE WRAPPERS FOR A FEW LINES OF CODE
WHEN YOU 'CALL' A FUNCTION, IT RUNS THE LINES OF CODE THAT ARE STORED INSIDE IT ONE BY ONE.

TO 'CALL' A FUNCTION NAME DoTheThing, TYPE doTheThing()
*/


/* HERE ARE SOME USEFUL FUNCTIONS THAT COMES WITH JAVASCRIPT */

console.log(string) // Prints out 'Oh hai' to the console
document.getElementById('id') // Gets you a 'reference' to an html element 




/* */
/* Manipulating HTML Objects through javascripts */
/* */

// First. Store a reference to the html element
var poodleObject = document.getElementById('div-poodle')



/*
3.  T H E   T O O L S

HERE'S WHAT YOU CAN DO:
*/

// Define a variable and store information in it
var myArray = [1,2,3]

// Create your own function
function doTheThing(amountOfTimes) {
    // ...
}

// You can even store an entire function in a variable
var functionVariable = function() {
    console.log('hallo');
}

// Run a nice for loop
for (var i = 0; i < myArray.length; i++ ) {
    console.log(myArray[i]);
}

// OBJECTS ARE V IMPORTANT
var kumachan = {
    color: 'brown',
    fuzzy: true,
    fiend: function(fiendLevel) {
        console.log('Kuma fiend-plays ' + fiendLevel);
    },
    friends: [
        { name: 'oso bearr', friendshipLevel: 'good'}, 
        { name: 'pusheen gato', friendshipLevel: 'best'},
        { name: 'rasta kitty', friendshipLevel: 'meh'},
        { name: 'owl', friendshipLevel: 'best'}
    ]
}

//kumachan.fiend('100%')

function getBestFriends() {
    var hommies = [];
    for (var i = 0; i < kumachan.friends.length; i++) {

        if (kumachan.friends[i].friendshipLevel == 'best'){

            hommies.push(kumachan.friends[i].name)

        }
    }

    return hommies

    // if (kumachan.friends[0].friendshipLevel == 'best'){
    //     return kumachan.friends[0].name 
    // } else if (kumachan.friends[1].friendshipLevel == 'best'){
    //     return kumachan.friends[1].name 
    // } else if (kumachan.friends[2].friendshipLevel == 'best') {
    //     return kumachan.friends[2].name 
    // }
}
console.log(getBestFriends())