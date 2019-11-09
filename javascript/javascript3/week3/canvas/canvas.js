// First add the canvas element to your html. 
//Now draw a circle on the canvas using js. 
// When you have added a normal circle, try filling 
// it out so it has a color. !

const canvas = document.getElementById('myCanvas');
      const context = canvas.getContext('2d');
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const radius = 70;

      context.beginPath();
      context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
      context.fillStyle = 'green';
      context.fill();
      context.lineWidth = 5;
      context.strokeStyle = '#003300';
      context.stroke();