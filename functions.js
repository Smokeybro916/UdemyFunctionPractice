/*
function rant(message){
    console.log(message.toUpperCase());
    console.log(message.toUpperCase());
    console.log(message.toUpperCase());
}

From Udemy the example was to have a argument to make the text uppercase on what you hate */

/*
const square = function (num) {
    return num * num;
}

example of a Function Expression. A Function expression is that the function is stored inside a variable. */

/*
const square = {
    area: function (side){
        return side * side;
    },
    perimeter: function(side){
        return side * 4;
    }
}

example of a methods */

/*
const hen = {
    name: 'Helen',
    eggCount: 0,
    layAnEgg() {
        this.eggCount++
        return 'EGG';
    }
}
An example of using "this" */

/*
const fullNames = [{first: 'Albus', last: 'Dumbledore'}, {first: 'Harry', last: 'Potter'}, {first: 'Hermione', last: 'Granger'}, {first: 'Ron', last: 'Weasley'}, {first: 'Rubeus', last: 'Hagrid'}, {first: 'Minerva', last: 'McGonagall'}, {first: 'Severus', last: 'Snape'}];

const firstNames = fullNames.map(function(name){
    return name.first;
});

 Using the .map to create an array with only the first names*/

 /*
 const greet = (person) => {
    return (`Hey ${person}!`);
}
const greet = person => `"Hey ${person}!"`;

 This is an example of using the arrow function and using implicit return*/