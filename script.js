// Erik Dyer

//Initiate resources to 0
var currentBerries = 0; 
var currentWoods = 0;
var currentMinerals = 0;
var currentWorkers = 0;
var currentAxes = 0; 

//worker productivity interval
var workerIncrement = 2000;

//basic resource buttons
$("#berryButton").click(function(){    increase(food);});
$("#woodButton").click(function(){    increase(wood);});
$("#stoneButton").click(function(){    increase(mineral);});

//"Increase" method used to increment resources
function increase(method){  console.log(method);
  method();
}
//basic resource incrementation
function food(){
  currentBerries++;
  document.getElementById("food").innerHTML = currentBerries;
}
function wood(){
  currentWoods++;
  document.getElementById("wood").innerHTML = currentWoods;
}
function mineral(){
  currentMinerals++;
  document.getElementById("mineral").innerHTML = currentMinerals;
}

//updates basic resource count on screen
function updateBasic(){
  document.getElementById("food").innerHTML = currentBerries;
  document.getElementById("wood").innerHTML = currentWoods;
  document.getElementById("mineral").innerHTML = currentMinerals;
}

// var MineralButton = document.createElement('input');
// MineralButton.type = "button";
// MineralButton.addEventListener('click', function(){    increase(axe);});
// MineralButton.setAttribute("value", "Craft Axe");
// document.body.appendChild(MineralButton);
// var WorkerButton = document.createElement('input');
// WorkerButton.type = "button";
// WorkerButton.addEventListener('click', function(){    increase(worker);});
// WorkerButton.setAttribute("value", "Craft Worker");
// WorkerButton.setAttribute("id", "WorkerBttn")
// document.body.appendChild(WorkerButton);
function axe(){
  if (currentBerries >= 5 && currentMinerals >= 25 && currentWoods >= 75){
  currentBerries = currentBerries - 5;
  currentMinerals = currentMinerals -25;
  currentWoods = currentWoods - 75;
  currentAxes++;
  updateBasic();
  document.getElementById("currentAxes").innerHTML = currentAxes;
  }
}





function worker(){
  if (currentBerries >= 20 && currentMinerals >= 20 && currentWoods >= 20){
  currentBerries = currentBerries - 20;
  currentMinerals = currentMinerals -20;
  currentWoods = currentWoods - 20;
  currentWorkers++;
  updateBasic();
  document.getElementById("currentWorkers").innerHTML = currentWorkers;
  }
}

var that = this;
setInterval(function(){increment(that.currentWorkers)}, workerIncrement);

function increment(num){
  console.log(num);
  currentBerries = currentBerries + num;
  currentWoods = currentWoods + num;
  currentMinerals = currentMinerals + num;
  updateBasic();
}

