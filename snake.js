//bord
var blocksize = 25;
var rows = 20;
var cols = 20;
var bord;
var context;



window.onload = function() {
    bord = document.getElementById9("bord");    
    bord.height = rows * blocksize;
    bord.width = cols * blocksize;
    context = bord.getcontext("2d"); //used for drawing on the bord

update();
}

function update() {
    context.fillstyle-"blank";
    context.fillrect(0, 0, bord.width, bord.height);
    
}
