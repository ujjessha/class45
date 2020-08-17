var tiles=[];
var player;
var games=[];
var index=0;
var displayAverage;


function setup() {
  createCanvas(400,400);
  games[index]=0
  var resolution=100;
  var rows=height/resolution;
  var columns=width/resolution;
  var direction=1;
  var x=0;
  var y=(rows-1)*resolution;
  displayAverage=createP("");


   for(var i=0;i<rows*columns;i++){
    var tile=new Tile(x,y,resolution,i,i+1);
    tiles.push(tile);
    x=x+resolution*direction
    //console.log(tile);
    if(x>=width|| x<0){
      direction=direction*(-1);
      y=y-resolution;
      x=x+resolution*direction;
    }
  }
  player=new Player();
 // console.log(tiles);
}

function draw() {
  background(255,255,255);  
 
  for(var tile of tiles){
    tile.show();
  }
  player.roll();
  games[index]++
  var gameOver=false;
  console.log(games);

  if(player.spot>=tiles.length-1){
    player.spot=tiles.length-1;
    //console.log("game over")
    gameOver=true;
  }
  if(gameOver){
    player.reset();
    index++;
    games[index]=0;
   
  }
  var average=0
  var sum=0
  for(var i=0; i<games.length;i++){
    sum=sum+games[i];
    
  }
  average=sum/games.length;
  displayAverage.html(average);
  

  player.display(tiles);

 
 // console.log(tiles);
}