// var food = 0;
// var minerals = 0;
// var wood = 0;
// function done(method){
//   console.log(method);
//   method();
//   console.log("1");
// }
//
// function food(){
//   console.log("2");
// }
var foods = 0;
var woods = 0;
var minerals = 0;
var workers = 0;
var numbah = 5000;
var FoodButton = document.createElement('input');
FoodButton.type = "button";
FoodButton.addEventListener('click', function(){    done(food);});
FoodButton.setAttribute("value", "Food");
document.body.appendChild(FoodButton);

var WoodButton = document.createElement('input');
WoodButton.type = "button";
WoodButton.addEventListener('click', function(){    done(wood);});
WoodButton.setAttribute("value", "Wood");
document.body.appendChild(WoodButton);

var MineralButton = document.createElement('input');
MineralButton.type = "button";
MineralButton.addEventListener('click', function(){    done(mineral);});
MineralButton.setAttribute("value", "Minerals");
document.body.appendChild(MineralButton);

function done(method){  method();
}
function food(){
  foods++;
  document.getElementById("food").innerHTML = foods;
}

function wood(){
  woods++;
  document.getElementById("wood").innerHTML = woods;
}

function mineral(){
  minerals++;
  document.getElementById("mineral").innerHTML = minerals;
}

var WorkerButton = document.createElement('input');
WorkerButton.type = "button";
WorkerButton.addEventListener('click', function(){    worker();});
WorkerButton.setAttribute("value", "Craft Worker");
document.body.appendChild(WorkerButton);

function worker(){
  if (foods >= 20 && minerals >= 20 && woods >= 20){
  foods = foods - 20;
  minerals = minerals -20;
  woods = woods - 20;
  workers++;
  document.getElementById("food").innerHTML = foods;
  document.getElementById("wood").innerHTML = woods;
  document.getElementById("mineral").innerHTML = minerals;
  document.getElementById("workers").innerHTML = workers;
  }
}
var that = this;
setInterval(function(){increment(that.workers)}, numbah);

function increment(num){
  console.log(num);
  foods = foods + num;
  woods = woods + num;
  minerals = minerals + num;
  document.getElementById("food").innerHTML = foods;
  document.getElementById("wood").innerHTML = woods;
  document.getElementById("mineral").innerHTML = minerals;
}
