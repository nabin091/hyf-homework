// // class creation time
// // lets create a class called circle. 
// // to convert the degree into radian const radians = (Math.PI/180)*degrees

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
class Circle {
    constructor(x, y, r, startAngle, endAngle, fillColor){
        this.x = x;
        this.y = y;
        this.r = r;
        this.startAngle = startAngle;
        this.endAngle = endAngle;
        this.fillColor = fillColor;
    }
    draw() {  
        const canvas = document.getElementById("Canvas");
        const ctx = canvas.getContext ("2d");  
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, this.startAngle, this.endAngle, this.fillColor)
        ctx.strokeStyle = "green";
        ctx.stroke();
        ctx.fillStyle = this.fillColor;
        ctx.fill();
        ctx.lineWidth = 5;
    }
    
}

const c1 = new Circle(50, 50, 30, 0, 2 * Math.PI, '#000000');
const c2 = new Circle(200, 100, 50, 0, 2 * Math.PI, 'blue');
const c3 = new Circle(160,200, 70, 0, 2 * Math.PI, 'red');
// we call the draw 
c1.draw()
c2.draw()
c3.draw()
