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
var maxSkip = 2;
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
function updateResources(){
  document.getElementById("food").innerHTML = currentBerries;
  document.getElementById("wood").innerHTML = currentWoods;
  document.getElementById("mineral").innerHTML = currentMinerals;
}

function addInventoryItem(item){
  $("#inventory").fadeIn().css("display", "inline-block");
  if ($('#inventoryGlue').length > 0) {
    $("#glueCount").html(currentBerries);
}
else{
  string = "<tr id = 'inventoryGlue'><td>Glue</td><td id = 'glueCount'>"+"   x"+currentBerries+"</td>";
  $("#inventoryContent").append(item);
}
}



function axe(){
  if (currentGlues >= 1 && currentMinerals >= 50 && currentWoods >= 80){
    currentGlues = currentGlues - 1;
    currentMinerals = currentMinerals -50;
    currentWoods = currentWoods - 80;
    currentAxes++;
    updateResources();
    $("#woodButton").fadeIn();
    $("#woodTxt").fadeIn();
    $("#inventory").fadeIn().css("display", "inline-block");
    if ($('#inventoryAxe').length > 0) {
      $("#axeCount").html("x"+currentAxes);
    }
    else{
      string = "<tr id = 'inventoryAxe'><td>Axes</td><td id = 'axeCount'>"+"   x"+currentAxes+"</td>";
      $("#inventoryContent").append(string);
    }
    if (currentGlues == 0) {
      $("#inventoryGlue").remove();
    }
    else{
      $("#glueCount").html("x"+currentGlues);
    }
}
  if (!(currentBerries >= 0 && currentMinerals >= 50 && currentWoods >= 100)){
    $("#axeButton").prop("disabled", true);

  }
}



function juice(){
  if (currentBerries >= 40){
  currentBerries = currentBerries - 40;
  currentJuices++;
  updateResources();
  console.log(currentJuices);
}
$("#inventory").fadeIn().css("display", "inline-block");
  if ($('#inventoryJuice').length > 0) {
    $("#juicesCount").html("x"+currentJuices);
}
else{
  string = "<tr id = 'inventoryJuice'><td>Juice</td><td id = 'juicesCount'>"+"   x"+currentJuices+"</td>";
  $("#inventoryContent").append(string);
}
  if (currentBerries < 100){
    $("#juiceButton").prop("disabled", true);

  }
}

function glue(){
  if (currentBerries >= 60){
  currentBerries = currentBerries - 60;
  currentGlues++;
  updateResources();
  $("#inventory").fadeIn().css("display", "inline-block");
  if ($('#inventoryGlue').length > 0) {
    $("#glueCount").html("x"+currentGlues);
  }
  else{
    string = "<tr id = 'inventoryGlue'><td>Glue</td><td id = 'glueCount'>"+"   x"+currentGlues+"</td>";
    $("#inventoryContent").append(string);
}
}
  if (currentBerries < 60){
    $("#glueButton").prop("disabled", true);

  }
}

function worker(){
  if (currentBerries >= 20 && currentMinerals >= 20 && currentWoods >= 20){
  currentBerries = currentBerries - 20;
  currentMinerals = currentMinerals -20;
  currentWoods = currentWoods - 20;
  currentWorkers++;
  updateResources();
  document.getElementById("currentWorkers").innerHTML = currentWorkers;
  }
}
var that = this;
setInterval(function(){increment(that.currentWorkers);}, workerIncrement);
function increment(num){
  currentBerries = currentBerries + num;
  currentWoods = currentWoods + num;
  currentMinerals = currentMinerals + num;
  updateResources();
  //enable juice
    if (currentBerries >= 40){
      $("#juiceButton").prop("disabled", false);
    }
  //enable glue
    if (currentBerries >= 60){
      $("#glueButton").prop("disabled", false);
    }
  //enable axe
    if (currentGlues >= 0 && currentMinerals >= 50 && currentWoods >= 80){
      $("#axeButton").prop("disabled", false);
    }
     if (currentAxes === 0){
      $("#woodButton").prop("disabled", true);
    }
    else{
      $("#woodButton").prop("disabled", false);
    }


}
