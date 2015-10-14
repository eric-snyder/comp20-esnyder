// load images in
var background = new Image();
background.src = 'duckhunt-background.gif';

var duck = new Image();
duck.src = 'duckhunt_various_sheet.png'; //can slice image while drawing by using drawImage()

// create the <canvas> object

var canvas = document.getElementById('game_canvas');
var ctx = canvas.getContext('2d');

//function called init() that draws images into canvas

function init() {

ctx.drawImage(background, 0, 0, 256, 240, 0, 0, 600, 800);
ctx.drawImage(duck, 0, 115, 35, 30, 100, 60, 70, 70);
ctx.drawImage(duck, 170, 115, 35, 30, 60, 100, 70, 70);

};
