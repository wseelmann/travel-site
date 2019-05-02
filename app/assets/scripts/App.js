var $ = require('jquery');
var Person = require('./modules/Person');

alert("Testing 123");

var john = new Person("John Doe", "blue");
john.greet();

var jane = new Person("Jane Smith", "green");
jane.greet();

// remove the h1 header with jquery when starts webpack on cmd!
// $("h1").remove();








// console.log("Hello, my name is John Doe and my favorite color is blue.");
// console.log("Hello, my name is Jane Smith and my favorite color is green.");

// function person(name, favColor) {
	// console.log("Hello, my name is " + name + " and my faforite color is " + favColor + ".");
// }

// var johnName = "John Doe";
// var johnFavColor = "blue";

// person(johnName, johnFavColor);
// person("Jane Smith","green");

