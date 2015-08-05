/* All events in ButtonClicker
There are three types of events:
  Story events:
    Events that lead to a progression in the story line
  Action events:
    Events that lead to further possible Action
  Text events:
    Events that have no dynamic functionality attached.
  Discovery event:
    Events that allow for crafting new material
*/
var randitems = [currentBerries, currentWoods, currentMinerals];
var maxSkip = 2;
// STONE
function StoneStoryEvent(exp){
  if(!stone){
    string = "You tripped and fell into a... crater?! ";
    $("#msgBoxContent").html(string);
    $("#lookAround").html("Ouch!!");
    $("#lookAround").attr("onclick","discoverStone()");
    // $("#lookAround").click(function(){discoverStone();});
    stone = true;
  }
  else {
    string = "\"There's a huge rusted structure sticking out ot the ground. I wonder what it used to be.... \"";
    eventText(string);
  }
}


function PlantActiveEvent(exp){
  if (Math.random() < .5){
    plant = "bush "
    prep = "behind ";
  }
  else {
    plant = "tree "
    prep = "in "
  }
  string = "\"That " + plant +  "just rustled! I wonder what's " + prep + "it...\"";
  eventText(string);
}


function TracksActiveEvent(exp){
  string = "You found some " + randomAnimal() + " tracks.";
  eventText(string);
}

function BerryGlueDiscoveryEvent(exp){
  string = "You stepped in some berries! Wow, they are sticky..";
  eventText(string);
  $("#glueButton").prop("disabled", true);
  $("#glueButton").fadeIn();
}

function BefriendActionEvent(exp){
  animal = randomAnimal();
  string = "You befriended a random " + animal +"!";
  eventText(string);
  if (juiceToAnimal){
    $("#b").html("offer berry juice").fadeIn().prop("disabled", true); //all fade
    $("#b").attr("onclick","randomItem(animal)");
    if (currentJuices > 0){
        $("#b").prop("disabled", false)
        currentJuices = currentJuices -1;
    }
  }
}

function FishActionEvent(exp){
  string = 'You can see your reflection in the lake... and.. are those fish?!';
  $("#b").fadeIn().html("Go for swim (Coming Soon!)").attr("onclick", null); //all fade
  if (currentMinerals > 0){
    $("#c").fadeIn().html("Skip Stone").attr("onclick","stoneSkip()"); //all fade
    }
  eventText(string);
}
function stoneSkip(){
    if (currentMinerals > 0){
        maxSkip = Math.ceil(maxSkip * (Math.random()+.7));
        string = "Your stone went " + maxSkip + " jumps!";
        eventText(string);
        currentMinerals --;
        updateResources();
    }
}
function DangerActionEvent(exp){
  string = 'Howls can be heard in the distance. Perhaps its not safe to go exploring now.';
  eventText(string);
}
function StoneResourceEvent(exp){
  string = 'You found a small pile of stones. +5 Stone!';
  currentMinerals += 5;
  $("#stoneTxt").fadeIn(1000);
  $("#mineral").html(currentMinerals);
  eventText(string);
}

function WoodResourceEvent(exp){
  string = 'You found a small pile of logs. +10 Wood!';
  currentWoods += 10;
  $("#woodTxt").fadeIn(1000);
  $("#wood").html(currentWoods)
  eventText(string);
}

function BerryJuiceEvent(exp){
  string = 'Wow, these berries are REALLY good! Animals seem to love them too...';
  eventText(string);
  $("#juiceButton").prop("disabled", true);
  $("#juiceButton").fadeIn();
}

function oldWomanEvent(exp){
  string = "You come across an ancient hut, floating two feet above the ground.";
  eventText(string);
  $("#b").html("Enter Hut").fadeIn(); //all fade
  $("#b").attr("onclick","goInside()");
}
function goInside(){
  string = "You see an old witch in the corner, muttering something under her breath...";
  eventText(string);
  $("#b").html("offer 100 berries");
  $("#b").attr("onclick", "getAdvice()");
  $("#c").html("offer 40 wood").fadeIn(); //all fade
  $("#c").attr("onclick", "getStone()");
}
function getAdvice(){
  if (currentBerries>99){
    currentBerries = currentBerries - 100;
    //all slides
    $("#b").fadeOut(250);
    $("#c").fadeOut(250);
    string = "KAKAKAKA berries!! c-crush them up, and I shall have ACKAKEEEK berry juice!";
    eventText(string);
    $("#juiceButton").prop("disabled", true);
    $("#juiceButton").fadeIn();
  }
}
function getStone(){
  if (currentWoods>39){
    currentWoods = currentWoods - 40;
    //all slides
    $("#b").fadeOut(250);
    $("#c").fadeOut(250);
    string = "'AAYY LMAO! Wood?! YEEEEET!!' The witch turned your wood into stone.";
    eventText(string);
    $("#stoneTxt").fadeIn();
    currentMinerals += 30;
  }
}
function forestGuruEvent(exp){
  string = "The fat hiker from the pokeon games is up ahead";
  eventText(string);
  $("#b").html("chat with hiker").fadeIn(); //all fade
  $("#b").attr("onclick","goHike()");
}
function goHike(){
  if (!guide){
    string = "'Hey there!'";
    eventText(string);
    $("#b").html("offer 10 wood");
    $("#b").attr("onclick", "getAxeAdvice()");
  if (9 > currentWoods){
    $("#b").prop("disabled", true);
    }
  else{
    $("#b").prop("disabled", false);
    }
  }
  else{
    string = "'Hey there! Got my axe, kid?'";
    eventText(string);
    $("#b").html("Flaunt axe (Coming soon, sorry!)").attr("onclick", null);;
    $("#c").html("Offer axe").fadeIn(); //all fade
    if (1 >= currentAxes ){
      $("#c").prop("disabled", true);
    }
    else{
      $("#c").prop("disabled", false);
    }
    $("#c").attr("onclick", "axeToMap()");
  }
  $("#d").html("offer Berry Juice").fadeIn(); //all fade
  $("#d").attr("onclick", "getAnimalAdvice()");
    if (1 > currentJuices){
    $("#d").prop("disabled", true);
    }
  else{
    $("#d").prop("disabled", false);
    }
}
function axeToMap(){
    currentAxes = currentAxes -1;
    $("#b").fadeOut(250);
    $("#c").fadeOut(250);
    $("#d").fadeOut(250);
    $("#e").fadeOut(250);
  string = "Hey, you're not half bad, kid. Heres a map you can used to find me. Come visit any time you like."
  eventText(string);
  string2 = "<tr id = 'inventorymap'><td>Map</td><td id = 'mapCount'>"+"   x"+1+"</td>";
  $("#inventoryContent").append(string2);

}
function getAxeAdvice(){
  if (currentWoods>=10){
    $("#b").fadeOut(250);
    $("#c").fadeOut(250);
    $("#d").fadeOut(250);
    string = "Ha! only 10 wood? Make an axe, then we'll talk.";
    eventText(string);
    $("#axeButton").prop("disabled", true);
    $("#axeButton").fadeIn();
    guide = true;
  }
}
function getAnimalAdvice(){
  if (currentJuices>0){
    currentJuices = currentJuices - 1;
    $("#b").fadeOut(250);
    $("#c").fadeOut(250);
    string = "Nice! You know, animals love this stuff.";
    eventText(string);
    juiceToAnimal = true;
    currentJuices--;
  if (currentJuices == 1) {
    $("#inventoryJuice").remove();
}
else{
  string = "<tr id = 'inventoryJuice'><td>Juice</td><td id = 'juicesCount'>"+"   x"+currentJuices+"</td>";
  $("#inventoryContent").append(string);
}
  if (!(currentBerries >= 100)){
    $("#juiceButton").prop("disabled", true);

  }
  }
}

function OwlTextEvent(exp){
  string = "You had a very introspective discussion on self identity with the local owl.";
  eventText(string);
}

function HutTextEvent(exp){
  string = '\"What\'s this covered in vines? I think people used to live in it!\"';
  eventText(string);
}
function randomItem(){
  num = Math.random();
  if (num < .15){
    currentBerries += 30;
    gift = "30 berries";
  }
  else if (num <.30){
    currentWoods += 30;
    gift = "30 wood";
   }
   else if (num <.50){
     currentWoods += 30;
     gift = "a special stick. Its pointy! (Need to program the stick later. Here's some wood for your trouble.)";
    }
  else{
    currentMinerals += 20;
    gift = "30 stone";
   }
  test = "The " + animal + " gave you " + gift + "!";
  eventText(test);
  $("#b").fadeOut(250);
}

