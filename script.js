// Erik Dyer

//Initiate resources to 0
var currentBerries = 0; 
var currentWoods = 0;
var currentMinerals = 0;
var currentWorkers = 0;
var currentAxes = 0; 
var currentJuices = 0;
var currentGlues = 0;
var limitBerries = 150;
var limitWoods = 50;
var limitMinerals = 75;


//worker productivity interval
var workerIncrement = 2000;

//basic resource buttons
$("#berryButton").click(function(){    increase(food);});
$("#woodButton").click(function(){    increase(wood);});
$("#stoneButton").click(function(){    increase(mineral);});
$("#axeButton").click(function(){    increase(axe);});
$("#juiceButton").click(function(){    increase(juice);});
$("#glueButton").click(function(){    increase(glue);});
//"Increase" method used to increment resources
function increase(method){  console.log(method);
  method();
}
//basic resource incrementation
function food(){
  currentBerries++;
  // if (currentBerries > limitBerries){
  //   currentBerries = limitBerries;
  //   $("#berryButton").prop("disabled", true);
  document.getElementById("food").innerHTML = currentBerries; //+ "/" + limitBerries;
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

function axe(){
  if (currentBerries >= 0 && currentMinerals >= 50 && currentWoods >= 100){
  currentBerries = currentBerries - 10;
  currentMinerals = currentMinerals -50;
  currentWoods = currentWoods - 100;
  currentAxes++;
  updateBasic();
  document.getElementById("axes").innerHTML = currentAxes;
}
  if (!(currentBerries >= 0 && currentMinerals >= 50 && currentWoods >= 100)){
    $("#axeButton").prop("disabled", true);

  }
}

function juice(){
  if (currentBerries >= 100){
  currentBerries = currentBerries - 100;
  currentJuices++;
  updateBasic();
  document.getElementById("axes").innerHTML = currentAxes;
  console.log(currentJuices);
}
  if (!(currentBerries >= 100)){
    $("#axeButton").prop("disabled", true);

  }
}

function glue(){
  if (currentBerries >= 175){
  currentBerries = currentBerries - 175;
  currentGlues++;
  updateBasic();
  document.getElementById("axes").innerHTML = currentAxes;
  console.log(currentGlues);
}
  if (!(currentBerries >= 175)){
    $("#axeButton").prop("disabled", true);

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
  currentBerries = currentBerries + num;
  currentWoods = currentWoods + num;
  currentMinerals = currentMinerals + num;
  updateBasic();
  //enable juice
    if (currentBerries >= 100){
      $("#juiceButton").prop("disabled", false);
    }
  //enable glue 
    if (currentBerries >= 175){
      $("#glueButton").prop("disabled", false);
    }
  //enable axe
    if (currentBerries >= 0 && currentMinerals >= 50 && currentWoods >= 100){
      $("#axeButton").prop("disabled", false);
    }
}

