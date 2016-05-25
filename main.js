var canvas = document.getElementById("canvas");

// Set width and height
canvas.width = Math.min(4000, window.innerWidth);
canvas.height = Math.min(4000, window.innerHeight);

var ctx = canvas.getContext("2d");

ctx.fillStyle = "#990000";
ctx.rect(0, 0, canvas.width, canvas.height);
ctx.fill();

// Disable scrolling
document.ontouchmove = function(e) { e.preventDefault() };