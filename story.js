//intro button delay time
var introDelay = 2000;
//explore button delay time
var exploreDelay = 4000;
//used for switch statement
var updateNumber = 0;
//Stone unlocked = true
var stone = false;
//journal found = true
var guide = false;
//loads window


$( window ).load(function() { show(); })
//first message.
function show(){
	$('#msgBox').fadeIn(2000);
	setTimeout(function(){ intros();}, 3000)
}
//Game introduction!
function intros(){
	$("#lookAround").fadeIn(500);
	$("#lookAround").click(function(){ updates();})
}
//Introduction sequence of events
function updates(){
	switch (updateNumber++) {
    case 0:
				introSequence("There are tall, dark trees everywhere...", "Walk Around");
        break;
    case 1:
				introSequence("Woods as far as the eye can see...", "Keep Walking");
        break;
    case 2:
				introSequence("Oh, this bush has some blue berries on it!", "Eat a Berry");
        break;
    case 3:
				introSequence("Ack! They're poisonous! I'm dying!!", 'Accept Death');
        break;
    case 4:
				$("#lookAround").prop("disabled", true);
				$("#lookAround").html("Keep Exploring");
				$("#msgBoxContent").html("Just kidding, these are actually pretty good!");
				setTimeout(function(){ startGame();}, 2000)
        break;
			}
}
//Used as a part of the introduction.
function introSequence(content, button){
	$("#lookAround").prop("disabled", true);
	$("#msgBoxContent").html(content);
	$("#lookAround").html(button);
	setTimeout(function(){ $("#lookAround").prop("disabled", false);}, introDelay);
}

function eventText(content){
	$("#lookAround").prop("disabled", true);
	$("#msgBoxContent").html(content);
	setTimeout(function(){ $("#lookAround").prop("disabled", false);}, exploreDelay);
}

function startGame(){
	$("#berryButton").fadeIn(1000);
	$("#basic").fadeIn(1000);
	$("#foodTxt").fadeIn(1500);
	setTimeout(function(){ $("#lookAround").prop("disabled", false);}, 2000);
	$("#lookAround").attr("onclick","randomEvent(Math.random())");
}

function randomEvent(eventNumber){
	console.log("eventNumber");
	if (eventNumber < .07){
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
	else if (eventNumber < .28){
		if (eventNumber < .16){
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
	else if (eventNumber < .40){
		string = "You found some " + randomAnimal() + " tracks.";
		eventText(string);
	}
	else if (eventNumber < .44){
		string = "You stepped in some berries! Wow, they are sticky..";
		eventText(string);
		$("#glueButton").prop("disabled", true);
		$("#glueButton").fadeIn();
	}
	else if (eventNumber < .46){
		string = "You had a very introspective discussion on self identity with the local owl.";
		eventText(string);
	}
	else if (eventNumber < .60){
		string = "You befriended a random " + randomAnimal() +"!";
		eventText(string);
	}
	else if (eventNumber < .62){
		string = '\"What\'s this covered in vines? I think people used to live in it!\"';
		eventText(string);
	}
	else if (eventNumber < .64){
		string = 'You can see your reflection in the lake... and.. are those fish?!';
		eventText(string);
	}
	else if (eventNumber < .64){
		string = '\"Achoo!\"';
		eventText(string);
	}
	else if (eventNumber < .68){
		string = 'Howls can be heard in the distance. Perhaps its not safe to go exploring now.';
		eventText(string);
	}
	else if (eventNumber < .85){
		string = 'You found a small pile of logs. +10 Wood!';
		currentWoods += 10;
		$("#woodTxt").fadeIn(1000);
		$("#wood").html(currentWoods)
		eventText(string);
	}
	else if (eventNumber < .90){
		string = 'Wow, these berries are REALLY good! Animals seem to love them too...';
		eventText(string);
		$("#juiceButton").prop("disabled", true);
		$("#juiceButton").fadeIn();
	}
	else if (eventNumber < 1){
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
}
//Introduces stone button.
function discoverStone(){
	string = "Hey, It's an abandoned rock query!";
	$("#msgBoxContent").html(string);
	$("#stoneButton").fadeIn(1000);
	$("#mineral").fadeIn(1000);
	$("#stoneTxt").fadeIn(1000);
	$("#lookAround").html("Keep Exploring");
	$("#lookAround").attr("onclick","randomEvent(Math.random())");
	// $("#lookAround").click(function(){ randomEvent(Math.random());});
}

function findGuide(){
	string = "It says: \n to make an axe, you need 50 stone and 100 wood...";
	$("#msgBoxContent").html(string);
	$("#axeButton").prop("disabled", true);
	$("#axeButton").fadeIn();
	$("#lookAround").html("Keep Exploring");
	$("#lookAround").attr("onclick","randomEvent(Math.random())");
	// $("#lookAround").click(function(){ randomEvent(Math.random());});
}
//Random animals and their probabilities of appearing.
function randomAnimal(){
	var num = Math.random();
	if( num < .2){
		return "ant";
	}
	else if(num >= .2 && num < .4){
		return "caterpillar";
	}
	else if(num >= .4 && num < .6){
		return "mouse";
	}
	else if(num >= .6 && num < .7){
		return "mouse";
	}
	else if(num >= .7 && num < .8){
		return "ant eater";
	}
	else if(num >= .8 && num < .85){
		return "wildcat";
	}
	else if(num >= .85 && num < .9){
		return "bear";
	}
	else if(num >= .9 && num < .95){
		return "human";
	}
	else if(num >= .95 && num < 2){
		return "pikachu";
	}
}