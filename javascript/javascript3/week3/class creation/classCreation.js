//Now lets make art!
class Circle {
        constructor(x, y, r, startAngle, endAngle, fillColor){
            this.x = x;
            this.y = y;
            this.r = r;
            this.startAngle = startAngle;
            this.endAngle = endAngle;
            this.fillColor = fillColor
        }
    
         draw (){
              const canvas = document.getElementById("Canvas");
              const ctx = canvas.getContext ("2d");
            
            if (canvas.getContext){
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
                
                 const start_degree = 0;
                 const startAngel = (Math.PI/180)* start_degree;
                 const end_degree = 360;
                
                 const endAngle = ( Math.PI/180)* end_degree;
                ctx.beginpath();
                ctx.arc(this.x, this.y, this.r, this.startAngle, this.endAngle,this.fillColor);
                ctx.strokeStyle = "blue";
                ctx.stroke();
                ctx.fillStyle = this.fillColor;
                ctx.fill();
                
            }
            
            
        }
    }
    // every half second create a new circle class and draw that to the canvas.
     for (let i = 0; i< 40; i ++){
                 const c = document.getElementById("canvas");
    
     const ctx = c.getContext ("2d");
    
         const x = Math.random()*window.innerWidth;
         const y = Math.random()*window.innerHeight;
         ctx.beginPath();
         ctx.arc(200,300,30,0,Math.PI*2,false)
         ctx.strokeStyle = 'blue';
         ctx.stroke();
     }