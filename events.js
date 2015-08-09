/* All events in ButtonClicker
Holds all events in game. Each event is a function which may employ helper functions. 
Event functions can added to EventsArray, 
and will be randomly selected from array when the Exploration button is pressed.
*/

//Allows user to gather stone. Late game event. 
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

//Currenty just a text event. Behind bush or in tree. 
function PlantActiveEvent(exp){
  if (Math.random() < 1/2){
    plant = "bush ";
    prep = "behind ";
  }
  else {
    plant = "tree ";
    prep = "in ";
  }
  string = "\"That " + plant +  "just rustled! I wonder what's " + prep + "it...\"";
  eventText(string);
}

//Currently just a text event. randomAnimal is in story.js
function TracksActiveEvent(exp){
  string = "You found some " + randomAnimal() + " tracks.";
  eventText(string);
}

//User discovers berryglue
function BerryGlueDiscoveryEvent(exp){
  
  string = "You stepped in some berries! Wow, they are sticky..";
  eventText(string);
  $("#glueButton").prop("disabled", true);
  $("#glueButton").fadeIn();
}

//User befirends animal. If berryJuice has been given to hiker, User can exchange juice for random item. 
function BefriendActionEvent(exp){
  animal = randomAnimal();
  string = "You befriended a random " + animal +"!";
  eventText(string);
  if (juiceToAnimal){
    $("#b").html("offer berry juice").fadeIn().prop("disabled", true); //all fade
    $("#b").attr("onclick","randomItem(animal)");
    if (currentJuices > 0){
        $("#b").prop("disabled", false);
    }
  }
}

//User finds lake. Go for swim currently does nothing
function FishActionEvent(exp){
  string = 'You can see your reflection in the lake... and.. are those fish?!';
  $("#b").fadeIn().html("Go for swim (Coming Soon!)").attr("onclick", null); //all fade
  if (currentMinerals > 0){
    $("#c").fadeIn().html("Skip Stone").attr("onclick","stoneSkip()"); //all fade
    }
  eventText(string);
}
//User skips stone on lake. Skips multiplied by random number
function stoneSkip(){
    if (currentMinerals > 0){
        maxSkip = Math.ceil(maxSkip * (Math.random()+ 3/5));
        string = "Your stone went " + maxSkip + " jumps!";
        eventText(string);
        currentMinerals --;
        updateResources();
    }
}
//Currently text event
function DangerActionEvent(exp){
  string = 'Howls can be heard in the distance. Perhaps its not safe to go exploring now.';
  eventText(string);
}

//user gains 5 stone
function StoneResourceEvent(exp){
  string = 'You found a small pile of stones. +5 Stone!';
  currentMinerals += 5;
  $("#stoneTxt").fadeIn(1000);
  $("#mineral").html(currentMinerals);
  eventText(string);
}

//user gains 10 wood
function WoodResourceEvent(exp){
  string = 'You found a small pile of logs. +15 Wood!';
  currentWoods += 15;
  $("#woodTxt").fadeIn(1000);
  $("#wood").html(currentWoods);
  eventText(string);
}

//User finds hut, has option to enter. 
function oldWomanEvent(exp){
  string = "You come across an ancient hut, floating two feet above the ground.";
  eventText(string);
  $("#b").html("Enter Hut").fadeIn(); //all fade
  $("#b").attr("onclick","goInside()");
}

// oldWomanEvent Helper. Initiates interaction.
function goInside(){
  string = "You see an old witch in the corner, muttering something under her breath...";
  eventText(string);
  $("#b").html("offer 100 berries");
  $("#b").attr("onclick", "getAdvice()");
  $("#c").html("offer 40 wood").fadeIn(); //all fade
  $("#c").attr("onclick", "getStone()");
}
//oldWomanEvent Helper. Unlockes berryJuice
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
//oldWomanEvent Helper. Grants stone for wood. 
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
//User finds hiker. 
function forestGuruEvent(exp){
  string = "The fat hiker from the pokeon games is up ahead";
  eventText(string);
  $("#b").html("chat with hiker").fadeIn(); //all fade
  $("#b").attr("onclick","goHike()");
}
//forestGuruEvent Helper. Offer wood or offer berryJuice. 
//If offered wood before, changes to offer axe. 
//flaunt axe is unprogramed 
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
    $("#b").html("Flaunt axe (Coming soon, sorry!)").attr("onclick", null);
    $("#c").html("Offer axe").fadeIn(); //all fade
    if (1 > currentAxes ){
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
//forestGuruEvent helper. Gives map, which doesnt do anythig yet/ 
function axeToMap(){
    currentAxes = currentAxes -1;
    $("#b").fadeOut(250);
    $("#c").fadeOut(250);
    $("#d").fadeOut(250);
    $("#e").fadeOut(250);
  string = "Hey, you're not half bad, kid. Heres a map you can used to find me. Come visit any time you like.";
  eventText(string);
  string2 = "<tr id = 'inventorymap'><td>Map</td><td id = 'mapCount'>"+"   x"+1+"</td>";
  $("#inventoryContent").append(string2);
  if (currentAxes === 0) {
      $("#inventoryAxe").remove();
    }
    else{
      $("#AxesCount").html("ammount updated:"+currentAxes);
    }
}
//forestGuruEvent Helper. Unlocks craft axe
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

//forestGuruEvent Helper. You can now give juice to animals. 
function getAnimalAdvice(){
  if (currentJuices>0){
    currentJuices --;
    $("#b").fadeOut(250);
    $("#c").fadeOut(250);
    $("#d").fadeOut(250);
    string = "Nice! Try giving this to animals, they love this stuff.";
    eventText(string);
    juiceToAnimal = true;
    if (currentJuices === 0) {
      $("#inventoryJuice").remove();
    }
    else{
      $("#juicesCount").html(" x"+currentJuices);
    }
    if (currentBerries < 40){
      $("#juiceButton").prop("disabled", true);
    }
  }
}
//Simple text event. 
function OwlTextEvent(exp){
  string = "You had a very introspective discussion on self identity with the local owl.";
  eventText(string);
}
//simple text event
function HutTextEvent(exp){
  string = '\"What\'s this covered in vines? I think people used to live in it!\"';
  eventText(string);
}
//generate random item for animal to give. 
function randomItem(){
  currentJuices --;
  num = Math.random();
  if (num < .15){
    currentBerries += 80;
    gift = "80 berries";
  }
  else if (num <.30){
    currentWoods += 80;
    gift = "80 wood";
   }
   else if (num <.50){
     currentWoods += 30;
     gift = "a special stick. Its pointy! (Need to program the stick later. Here's 30 wood for your trouble.)";
    }
  else{
    currentMinerals += 80;
    gift = "80 stone";
   }
  test = "The " + animal + " gave you " + gift + "!";
  eventText(test);
  $("#b").fadeOut(250);
      if (currentJuices === 0) {
      $("#inventoryJuice").remove();
    }
    else{
      $("#juiceCount").html("x"+currentJuices);
    }
}