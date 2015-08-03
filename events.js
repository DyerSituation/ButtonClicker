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
var maxSkip = 1;
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
    $("#b").html("offer berry juice").slideDown().prop("disabled", true);
    $("#b").attr("onclick","randomItem(animal)");
    if (currentJuices > 0){
        $("#b").prop("disabled", false)
        currentJuices = currentJuices -1;
    }
  }
}

function FishActionEvent(exp){
  string = 'You can see your reflection in the lake... and.. are those fish?!';
  $("#b").slideDown().html("Go for swim");
  if (currentMinerals > 0){
    $("#c").slideDown().html("Skip Stone").attr("onclick","stoneSkip()");
    }
  eventText(string);
}
function stoneSkip(){
    if (currentMinerals > 0){
        maxSkip = Math.ceil(maxSkip * (Math.random()+.6));
        string = "Your stone went " + maxSkip + " jumps!";
        eventText(string);
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
  $("#b").html("Enter Hut").slideDown();
  $("#b").attr("onclick","goInside()");
}
function goInside(){
  string = "You see an old witch in the corner, muttering something under her breath...";
  eventText(string);
  $("#b").html("offer 100 berries");
  $("#b").attr("onclick", "getAdvice()");
  $("#c").html("offer 40 wood").slideDown();
  $("#c").attr("onclick", "getStone()");
}
function getAdvice(){
  if (currentBerries>99){
    currentBerries = currentBerries - 100;
    $("#b").slideUp();
    $("#c").slideUp();
    string = "KAKAKAKA berries!! c-crush them up, and I shall have ACKAKEEEK berry juice!";
    eventText(string);
    $("#juiceButton").prop("disabled", true);
    $("#juiceButton").fadeIn();
  }
}
function getStone(){
  if (currentWoods>39){
    currentWoods = currentWoods - 40;
    $("#b").slideUp();
    $("#c").slideUp();
    string = "'AAYY LMAO! Wood?! YEEEEET!!' The witch turned your wood into stone.";
    eventText(string);
    $("#stoneTxt").fadeIn();
    currentMinerals += 15;
  }
}
function forestGuruEvent(exp){
  string = "The fat hiker from the pokeon games is up ahead";
  eventText(string);
  $("#b").html("chat with hiker").slideDown();
  $("#b").attr("onclick","goHike()");
}
function goHike(){
  string = "'Hey there!'";
  eventText(string);
  $("#b").html("offer 10 wood");
  $("#b").attr("onclick", "getAxeAdvice()");
  $("#c").html("offer Berry Juice").slideDown();
  $("#c").attr("onclick", "getAnimalAdvice()");
}
function getAxeAdvice(){
  if (currentWoods>=10){
    $("#b").slideUp();
    $("#c").slideUp();
    string = "Ha! only 10 wood? Make an axe, then we'll talk.";
    eventText(string);
    $("#axeButton").prop("disabled", true);
    $("#axeButton").fadeIn();
  }
}
function getAnimalAdvice(){
  if (currentJuices>0){
    currentJuices = currentJuices - 1;
    $("#b").slideUp();
    $("#c").slideUp();
    string = "Nice! You know, animals love this stuff.";
    eventText(string);
    juiceToAnimal = true;
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
     gift = "a special stick. Its pointy! (Need to program the stick later.)";
    }
  else{
    currentMinerals += 20;
    gift = "30 stone";
   }
  test = "The " + animal + " gave you " + gift + "!";
  eventText(test);
  $("#b").slideUp();
}

