let dog;
let happyDog;
let database;
let foodS;
let foodStock;

function preload()
{
  dogImg = loadImage("./images/dogImg.png");
  dogImg2 = loadImage("./images/dogImg.png");
}

function setup() {
  createCanvas(500, 500);
  database = firebase.database();
  foodStock = database.ref('Food')
    foodStock.on("value", readStock)
  
  dog = createSprite(250, 240, 30, 30);
  dog.addImage(dogImg)
  
}


function draw() { 
  background(46, 139, 87); 

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(dogImg2)
  }

  drawSprites();
  //add styles here

}

function readStock(data){
  foodS = data.val();
}

function writeStock(x){
  database.ref('/').update({
    Food:x
  })
}