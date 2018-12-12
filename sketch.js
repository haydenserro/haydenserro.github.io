var pegusImgs = [];
var levelImgs = [];
var level = 1;
var won;
var stee = [];
var steeImg;
var showStee = false;

//check if Pegus clicked
var pegus = {
  checkClicked : function() {
    var w = 100;
    var h = 130;
    if (mouseIsPressed && mouseX > this.x && mouseX < this.x + w && mouseY > this.y && mouseY < this.y + h) {
      return true;
    }
    return false;
  }
}

function preload(){
  steeImg = loadImage("Stee.jpg");
//level advancer
  for (var i = 1; i <= 7; i++) {
    levelImgs[i-1] = loadImage("lvl" + i + ".jpg");
  }
//the 7 pegus'
  for (var i = 1; i <= 7; i++){
    pegusImgs[i-1] = loadImage("Pegus" + i + ".jpg");
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  //the 500 crazy stees
  for (var i = 0; i < 500; i++) {
    stee[i] = new Stee();
  }

}

function draw(){
//level 1 statement
 if (level == 1) {
   lvl1();
 }
//level 2 statement
 else if (level == 2){
   lvl2();
 }
//level 3 statement
 else if (level == 3){
   lvl3();
 }
//level 4 statement
 else if (level == 4){
   lvl4();
 }
//level 5 statement
 else if (level == 5){
   lvl5();
 }
//level 6 statement
 else if (level == 6){
   lvl6();
 }
//level 7 statement
 else if (level == 7){
   lvl7();
   if (showStee) {
     for(var i = 0; i < stee.length; i++)
      stee[i].display();
    }
 }
}
//when pegus clicked go to next level
function  mousePressed() {
  if(pegus.checkClicked()){
    level++;
  }
//where to click on stee for easteregg
  if (level == 7 && mouseX > 812 && mouseX < 900 && mouseY > 16 && mouseY < 150) {
    showStee = true;
  }
}
//level 1
function lvl1(){
  background(0);
  image(levelImgs[0], width, height);
  image(pegusImgs[0], pegus.x, pegus.y, pegusImgs[0].width*.48, pegusImgs[0].height*.46)
  pegus.x = 555;
  pegus.y = 120;
  textSize(140)
  fill(255)
  text("wheres pegus?", 200, 100)
  textSize(40)
  fill(255)
  text("click pegus' head to begin", 425, 650)
}
//level 2
function lvl2(){
  background(levelImgs[1]);
  image(pegusImgs[1], pegus.x, pegus.y, pegusImgs[1].width*.08, pegusImgs[1].height*.06)
  pegus.x = 280;
  pegus.y = 435;
}
//level 3
function lvl3(){
  background(levelImgs[2]);
  image(pegusImgs[2], pegus.x, pegus.y, pegusImgs[2].width*.09, pegusImgs[2].height*.07)
  pegus.x = 183;
  pegus.y = 335;
}
//level 4
function lvl4(){
  background(levelImgs[3]);
  image(pegusImgs[3], pegus.x, pegus.y, pegusImgs[3].width*.06, pegusImgs[3].height*.04)
  pegus.x = 690;
  pegus.y = 230;
}
//level 5
function lvl5(){
  background(levelImgs[4]);
  image(pegusImgs[4], pegus.x, pegus.y, pegusImgs[4].width*.07, pegusImgs[4].height*.05)
  pegus.x = 1310;
  pegus.y = 570;
}
//level 6
function lvl6(){
  background(levelImgs[5]);
  image(pegusImgs[5], pegus.x, pegus.y, pegusImgs[5].width*.05, pegusImgs[5].height*.03)
  pegus.x = 520;
  pegus.y = 5;
}
//level 7
function lvl7(){
  background(0);
  image(levelImgs[6], width/2 - levelImgs[6].width/2, height/2 - levelImgs[6].height/2);
  image(pegusImgs[6], pegus.x, pegus.y, pegusImgs[6].width*.43, pegusImgs[6].height*.37);
  pegus.x = 570;
  pegus.y = -60;
  image(steeImg, 821, 16, steeImg.width*.20, steeImg.height*.22)
  textSize(120)
  fill(255)
  text("y", 30, 60)
  fill(255)
  text("o", 70, 135)
  fill(255)
  text("u", 100, 210)
  fill(255)
  text(" ", 130, 285)
  fill(255)
  text("f", 160, 360)
  fill(255)
  text("o", 190, 435)
  fill(255)
  text("u", 220, 510)
  fill(255)
  text("n", 250, 585)
  fill(255)
  text("d", 280, 660)
  textSize(150)
  fill(255)
  text("p", 1000, 90)
  fill(255)
  text("e", 1060, 230)
  fill(255)
  text("g", 1120, 370)
  fill(255)
  text("u", 1180, 510)
  fill(255)
  text("s", 1240, 650)
  textSize(20)
  fill(255)
  text("where steedo?", 1000, 640)
}
//stee placement
function Stee() {
  this.x = random(0, width);
  this.y = random(0, height);
//stee movement
  this.display = function() {
    image(steeImg, this.x, this.y, steeImg.width*.20, steeImg.height*.22);
    this.x-=3;
    if(this.x < 0) this.x = width;
    this.y-=3;
    if(this.y < 0) this.y = height;
  }
}
