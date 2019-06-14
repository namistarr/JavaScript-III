/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Global Object Binding means that without binding the "this" keyword to anything the value of "this" will be the window object.
* 2. Implicit Binding means that "this" points to what is to the left of the period when the function is called.
* 3. New Binding means that the "new" keyword constructs a ndw object, and "this" points to it.
* 4. Explicit Binding means that we can set "this" to point to a certain value using "call", "apply", or "bind".
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

function vampire() {
    console.log(this.vampire);
}
vampire();

// Principle 2

// code example for Implicit Binding

const vampireSlayer = {
    name: 'Buffy',
    seasons: '7 Seasons!',
    slayer: function (){
        console.log(this.name);
    }
}

vampireSlayer.slayer();

// Principle 3

// code example for New Binding

function VampireSlayer(name) {
    this.name = name;
}

let vampireSlayer = new Slayer('Buffy the Vampire Slayer');
console.log(vampireSlayer.name);

// Principle 4

// code example for Explicit Binding
const yourObject = {
    name: 'Jessica Morrison',
    city: 'Las Vegas',
    favoriteFood: '🍕'
  }
  
  const thingsYouEnjoy = ['Cooking', 'Travel', 'Videogames']
  
  function tellUsAboutYourself(thing1, thing2, thing3){
    return `Hi! My name is ${this.name}, I live in ${this.city}, and I enjoy ${thing1}, ${thing2}, and ${thing3}. I love to eat ${this.favoriteFood}.`
  }
  
  tellUsAboutYourself.apply(yourObject, thingsYouEnjoy)