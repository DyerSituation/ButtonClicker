
//used for switch statement
var updateNumber= 0;
//loads window
$( window ).load(function() { show(); })
//first message
function show(){
	$('#msgBox').fadeIn(2000);
	setTimeout(function(){ intros();}, 3000)
}
//Game introduction!
function intros(){
	$("#lookAround").fadeIn(500);
	$("#lookAround").click(function(){ updates();})
}
//different messages from exploring the game
function updates(){
	switch (updateNumber++) {
    case 0:
				txtToScreen("There are tall, dark trees everywhere...", "Walk Around");
        break;
    case 1:
				txtToScreen("Woods as far as the eye can see...", "Keep Walking");
        break;
    case 2:
				txtToScreen("Oh, this bush has some blue berries on it!", "Eat a Berry");
        break;
    case 3:
				txtToScreen("Ack! They're poisonous! I'm dying!!", 'Accept Death');
        break;
    case 4:
				$("#lookAround").prop("disabled", true);
				$("#lookAround").html("Keep Exploring");
				$("#msgBoxContent").html("Just kidding, these are actually pretty good!");
				setTimeout(function(){ startGame();}, 2000)
        break;
			}
}
function txtToScreen(content, button){
	$("#lookAround").prop("disabled", true);
	$("#msgBoxContent").html(content);
	$("#lookAround").html(button);
	setTimeout(function(){ $("#lookAround").prop("disabled", false);}, 1000);
}

function eventText(content){
	$("#lookAround").prop("disabled", true);
	$("#msgBoxContent").html(content);
	setTimeout(function(){ $("#lookAround").prop("disabled", false);}, 4000);
}

function startGame(){
	$("#berryButton").fadeIn(1000);
	$("#basic").fadeIn(1500);
	setTimeout(function(){ $("#lookAround").prop("disabled", false);}, 2000);
	$("#lookAround").click(function(){ randomEvent(Math.random())})
}

function randomEvent(eventNumber){
	console.log(eventNumber);
	if (eventNumber < .33){
		string = "You befriended a random " + randomAnimal() +"!";
		eventText(string);
	}
	else if (eventNumber >= .33 && eventNumber < .67){
		if (eventNumber < .49){
			plant = "bush "
			prep = "behind ";
		}
		else {
			plant = "tree "
			prep = "in "
		}
		string = "That " + plant +  "just rustled! I wonder what's " + prep + "it...";
		eventText(string);
	}
	else if (eventNumber >= .67 && eventNumber < 1){
		string = "You found some " + randomAnimal() + " tracks.";
		eventText(string);
	}
}

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