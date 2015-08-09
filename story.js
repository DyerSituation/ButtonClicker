//intro button delay time
var introDelay = 150;
//explore button delay time
var exploreDelay = 1000;
//used for switch statement
var updateNumber = 0;

var exp = 0;

var  EventsArray = [PlantActiveEvent, TracksActiveEvent, BefriendActionEvent];

//Stone unlocked = true
var stone = false;
//journal found = true
var guide = false;
//loads window
var juiceToAnimal = false;


$( window ).load(function() { show(); });
//first message.
function show(){
	$('#msgBox').fadeIn(2000);
	setTimeout(function(){ intros();}, 3000);
}
//Game introduction!
function intros(){
	$("#lookAround").fadeIn(500);
	$("#lookAround").click(function(){ updates();});
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
				setTimeout(function(){ startGame();}, 2000);
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
	$("#berryButton").fadeIn(1000).css("display", "inline-block");
	$("#resources").fadeIn(1000).css("display", "inline-block");
	$("#foodTxt").fadeIn(1500);
	setTimeout(function(){ $("#lookAround").prop("disabled", false);}, 2000);
	$("#lookAround").attr("onclick","randomEvent(Math.random())");
}

function randomEvent(eventNumber){
	//all slides
    $("#b").fadeOut(250).prop("disabled", false);
    $("#c").fadeOut(250).prop("disabled", false);
    $("#d").fadeOut(250).prop("disabled", false);
    $("#e").fadeOut(250).prop("disabled", false);
    $("#f").fadeOut(250).prop("disabled", false);
    $("#g").fadeOut(250).prop("disabled", false);
	exp +=5;
	console.log(exp);
	$("#exp").html(exp);
	if (exp == 15){
		EventsArray.push(HutTextEvent);
		EventsArray.push(OwlTextEvent);
		EventsArray.push(WoodResourceEvent);
		EventsArray.push(WoodResourceEvent);
	}
	if (exp == 35){
		EventsArray.push(BerryGlueDiscoveryEvent);
		EventsArray.push(BerryGlueDiscoveryEvent);
		EventsArray.push(BerryGlueDiscoveryEvent);
		EventsArray.push(PlantActiveEvent);
		EventsArray.push(BefriendActionEvent);
		EventsArray.push(FishActionEvent);
		EventsArray.push(StoneResourceEvent);
	}
	if (exp == 45){
		EventsArray.push(DangerActionEvent);
		EventsArray.push(DangerActionEvent);
		EventsArray.push(StoneResourceEvent);
		EventsArray.push(WoodResourceEvent);
		EventsArray.push(StoneResourceEvent);
		EventsArray.push(WoodResourceEvent);
		EventsArray.push(FishActionEvent);
		EventsArray.push(FishActionEvent);
		EventsArray.push(StoneResourceEvent);
	}
	if (exp == 60){
		EventsArray.push(oldWomanEvent);
		EventsArray.push(oldWomanEvent);
		EventsArray.push(forestGuruEvent);
		EventsArray.push(forestGuruEvent);
		EventsArray.push(forestGuruEvent);
		EventsArray.push(StoneResourceEvent);
	}
	if (exp == 180){
		EventsArray.push(WoodResourceEvent);
		EventsArray.push(StoneStoryEvent);
		EventsArray.push(StoneStoryEvent);
		EventsArray.push(StoneResourceEvent);
	}

	instanceEvent = EventsArray[Math.floor(Math.random() * EventsArray.length)];
	console.log(instanceEvent);
	instanceEvent();
}
//Introduces stone button.
function discoverStone(){
	string = "Hey, It's an abandoned rock query!";
	$("#msgBoxContent").html(string);
	$("#stoneButton").fadeIn(1000);
	$("#mineral").fadeIn(1000);
	$("#ston-eTxt").fadeIn(1000);
	$("#lookAround").html("Keep Exploring");
	$("#lookAround").attr("onclick","randomEvent(Math.random())");
	// $("#lookAround").click(function(){ randomEvent(Math.random());});
}

//Random animals and their probabilities of appearing.
function randomAnimal(){
	var num = Math.random();
	if( num < .04){
		return "ant";
	}
	else if(num < .08){
		return "caterpillar";
	}
	else if(num < .12){
		return "mouse";
	}
	else if(num < .18){
		return "turtle";
	}
	else if(num < .24){
		return "aardvark";
	}
	else if(num < .26){
		return "bobcat";
	}
	else if(num < .28){
		return "brown bear";
	}
	else if(num < .285){
		return "Donald Trump";
	}
	else if(num < .3){
		return "pikachu";
	}
	else if(num < .31){
		return "digimon";
	}
	else if(num < .38){
		return "racoon";
	}
	else if(num < .46){
		return "deer";
	}
	else if(num < .5){
		return "squirrel";
	}
	else if(num < .52){
		return "nine tailed fox";
	}
	else if(num < .6){
		return "eagle";
	}
	else if(num < .65){
		return "owl";
	}
	else if(num < .7){
		return "moose";
	}
	else if(num < .77){
		return "sloth";
	}
	else if(num < .8){
		return "zombie";
	}
	else if(num < .9){
		return "fish";
	}
	else if(num < .91){
		return "孙悟空";
	}
	else if(num < .93){
		return "けつばん";
	}
	else if(num < .97){
		return "Hyena";
	}
	else if(num < .98){
		return "decepticon";
	}
	else if(num < .99){
		return "developer";
	}
}