//intro button delay time
var introDelay = 20;
//explore button delay time
var exploreDelay = 2000;
//used for switch statement
var updateNumber = 0;

var exp = 0

var  EventsArray = [PlantActiveEvent, TracksActiveEvent, BefriendActionEvent];

//Stone unlocked = true
var stone = false;
//journal found = true
var guide = false;
//loads window
var juiceToAnimal = false;


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
	$("#berryButton").fadeIn(1000).css("display", "inline-block");
	$("#resources").fadeIn(1000).css("display", "inline-block");
	$("#foodTxt").fadeIn(1500);
	setTimeout(function(){ $("#lookAround").prop("disabled", false);}, 2000);
	$("#lookAround").attr("onclick","randomEvent(Math.random())");
}

function randomEvent(eventNumber){
    $("#b").slideUp();
    $("#c").slideUp();
	exp +=5;
	console.log(exp);
	$("#exp").html(exp);
	if (exp == 40){
		EventsArray.push(HutTextEvent);
		EventsArray.push(OwlTextEvent);
		EventsArray.push(WoodResourceEvent);
		EventsArray.push(WoodResourceEvent);
	}
	if (exp == 80){
		EventsArray.push(BerryGlueDiscoveryEvent);
		EventsArray.push(BerryGlueDiscoveryEvent);
		EventsArray.push(BerryGlueDiscoveryEvent);
		EventsArray.push(PlantActiveEvent);
		EventsArray.push(BefriendActionEvent);
		EventsArray.push(FishActionEvent);
		EventsArray.push(StoneResourceEvent);
	}
	if (exp == 120){
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
	if (exp == 150){
		EventsArray.push(oldWomanEvent);
		EventsArray.push(oldWomanEvent);
		EventsArray.push(forestGuruEvent);
		EventsArray.push(forestGuruEvent);
		EventsArray.push(StoneResourceEvent);
	}
	if (exp == 250){
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
	if( num < .1){
		return "ant";
	}
	else if(num< .2){
		return "caterpillar";
	}
	else if(num < .3){
		return "mouse";
	}
	else if(num < .4){
		return "aardvark";
	}
	else if(num < .5){
		return "Donald Trump";
	}
	else if(num < .6){
		return "bobcat";
	}
	else if(num < .65){
		return "Kane";
	}
	else if(num < .7){
		return "tucan";
	}
	else if(num < .75){
		return "朋友";
	}
	else if(num< .8){
		return "griffin";
	}
	else if(num < .9){
		return "我喜欢你啊";
	}
	else if(num < 7){
		return "cat";
	}
	else if(num < .8){
		return "ant eater";
	}
	else if(num < .85){
		return "wildcat";
	}
	else if(num < .9){
		return "bear";
	}
	else if(num < .95){
		return "human";
	}
	else if(num < 2){
		return "pikachu";
	}
}
