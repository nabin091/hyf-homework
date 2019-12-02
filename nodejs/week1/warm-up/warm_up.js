//Create a warmup.js file where you will write the code for circle calculator. Run it using node.

class Circle {
    constructor (radius){
        this.radius = radius;
    }
    getDiameter(){
        return this.radius * 2;
    }
    getCircumstance(){
        return (2 * 3.14 * this.radius);// c = 2πr where π= 3.1459
    }
    getArea(){
        //The Math.pow() function returns the base to the exponent power, that is, base exponent(square)
        return (3.14 * Math.pow(this.radius, 2)); //πr2
    }
}
const circle = new Circle(10);
console.log("Diameter is ", circle.getDiameter());
console.log("Circumstance  is ", circle.getCircumstance().toFixed(2));
console.log("Area  is ", circle.getArea());


