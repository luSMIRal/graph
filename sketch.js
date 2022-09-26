var canvas = document.getElementById("canvas")
var ctx = canvas.getContext("2d")		

let angle = 0;
let x1 = 150;
let y1 = 0;
var x = 300
var y = 0	
let A = 10;
let w1 = 0.4;
let w2 = 0.5;
let t = 0;


// ctx.fillStyle = "black"
// ctx.fillRect(0, 0, 400, 400)	




var render = function(){		

    x += 0.1
    
    // t += 1;

    // y = 200 + 30 * Math.cos(2 * x * Math.PI/180) 		
    y =200 + 2*A * Math.sin(0.5 * x * ( w1+w2))*Math.cos(0.5 * x * ( w2-w1));
    
    
    ctx.fillStyle = "lime"
    ctx.fillRect(x, y, 3, 3)
    
    requestAnimationFrame(render)

    
    
}



render()

