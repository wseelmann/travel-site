function Person(fullName, favColor) {
	this.name = fullName;
	this.faforiteColor = favColor;
	this.greet = function() {
		console.log("Hello, my name is " + this.name + " and my faforite color is " + this.faforiteColor + ".");
	}
}

module.exports = Person;