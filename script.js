// Complete the js code
// Step 1: Create the Car constructor function
function Car(make, model) {
    this.make = make;
    this.model = model;
}

// Add a method to the Car prototype
Car.prototype.getMakeModel = function() {
    return `${this.make} ${this.model}`;
};

// Step 2: Create the SportsCar constructor function that inherits from Car
function SportsCar(make, model, topSpeed) {
    // Call the Car constructor to set make and model
    Car.call(this, make, model);
    this.topSpeed = topSpeed;
}

// Set up inheritance from Car's prototype
SportsCar.prototype = Object.create(Car.prototype);
SportsCar.prototype.constructor = SportsCar;

// Add a method to the SportsCar prototype
SportsCar.prototype.getTopSpeed = function() {
    return this.topSpeed;
};

// Example usage
const car = new SportsCar("Ferrari", "Testarossa", 200);

// Call getMakeModel() to get the make and model of the car
console.log(car.getMakeModel()); // Output: Ferrari Testarossa

// Call getTopSpeed() to get the top speed of the sports car
console.log(car.getTopSpeed()); // Output: 200
