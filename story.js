//intro button delay time
var introDelay = 20;
//explore button delay time
var exploreDelay = 20;
//used for switch statement
var updateNumber = 0;
//Stone unlocked = true
var stone = false;
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
	$("#lookAround").click(function(){ randomEvent(Math.random());});
}

function randomEvent(eventNumber){
	console.log(eventNumber);
	if (eventNumber < .04){
		if(!stone){
			string = "You tripped and fell into a... crater?! "
			$("#msgBoxContent").html(string);
			$("#lookAround").html("Ouch!!");
			$("#lookAround").click(function(){discoverStone();});
			stone = true;
		}
		else {
			string = "\"There's a huge rusted structure sticking out ot the ground. I wonder what it used to be.... \"";
			eventText(string);
		}
	}
	else if (eventNumber >= .04 && eventNumber < .2){
		if (eventNumber < .12){
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
	else if (eventNumber >= .2 && eventNumber < .35){
		string = "You found some " + randomAnimal() + " tracks.";
		eventText(string);
	}
	else if (eventNumber >= .35 && eventNumber < .43){
		string = "\"..ZZZzzzzz\"";
		eventText(string);
	}
	else if (eventNumber >= .43 && eventNumber < .53){
		string = "You had a very introspective discussion on self identity with the local owl.";
		eventText(string);
	}
	else if (eventNumber >= .53 && eventNumber < .7){
		string = "You befriended a random " + randomAnimal() +"!";
		eventText(string);
	}
	else if (eventNumber >= .7 && eventNumber < .85){
		string = '\"What\'s this covered in vines? I think people used to live in it!\"';
		eventText(string);
	}
	else if (eventNumber >= .65 && eventNumber < 1){
		findGuide();
	}
	else if (eventNumber >= .8 && eventNumber < 1){
		string = '\"Achoo!\"';
		eventText(string);
	}
	else if (eventNumber >= .8 && eventNumber < 1){
		string = '\"What\'s this covered in vines? I think people used to live in it!\"';
		eventText(string);
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
	$("#lookAround").click(function(){ randomEvent(Math.random());});
}

function findGuide(){
	string = "It's a Journal!";
	$("#msgBoxContent").html(string);
	$("#stoneButton").fadeIn(1000);
	$("#lookAround").html("Keep Exploring");
	$("#lookAround").click(function(){ randomEvent(Math.random());});
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