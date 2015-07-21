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

function StoneStoryEvent(exp){
  if(!stone){
    string = "You tripped and fell into a... crater?! "
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
  string = "You befriended a random " + randomAnimal() +"!";
  eventText(string);
}

function FishActionEvent(exp){
  string = 'You can see your reflection in the lake... and.. are those fish?!';
  eventText(string);
}

function DangerActionEvent(exp){
  string = 'Howls can be heard in the distance. Perhaps its not safe to go exploring now.';
  eventText(string);
}
function StoneResourceEvent(exp){
  string = 'You found a small pile of logs. +5 Stone';
  currentWoods += 5;
  $("#stoneTxt").fadeIn(1000);
  $("#mineral").html(currentWoods)
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

function JournalStoryEvent(exp){
  if(!guide){
    string = "Oh, what's this in the dirt? Looks like some sort of journal!"
    $("#msgBoxContent").html(string);
    $("#lookAround").html("Open Journal");
    $("#lookAround").attr("onclick","findGuide()");
    // $("#lookAround").click(function(){discoverStone();});
    guide = true;
  }
  else {
    string = "\"There's a huge rusted structure sticking out ot the ground. I wonder what it used to be.... \"";
    eventText(string);
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
//
// 	else if (eventNumber < .62){
// 		string = '\"What\'s this covered in vines? I think people used to live in it!\"';
// 		eventText(string);
// 	}
// 	else if (eventNumber < .64){
// 		string = '\"Achoo!\"';
// 		eventText(string);
// 	}
// 	else if (eventNumber < .68){
//
// 	}
//
// 	else if (eventNumber < 1){
// 			if(!guide){
// 				string = "Oh, what's this in the dirt? Looks like some sort of journal!"
// 				$("#msgBoxContent").html(string);
// 				$("#lookAround").html("Open Journal");
// 				$("#lookAround").attr("onclick","findGuide()");
// 				// $("#lookAround").click(function(){discoverStone();});
// 				guide = true;
// 			}
// 			else {
// 				string = "\"There's a huge rusted structure sticking out ot the ground. I wonder what it used to be.... \"";
// 				eventText(string);
// 			}
// 		 }
// }