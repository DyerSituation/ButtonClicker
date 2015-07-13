// document.getElementById("intro").style.color = "white";
console.log("start");
$("#intro").hide();
$("#intro").html("In the beginning there was nothing.");
 console.log("fadein");
$("#intro").fadeIn(500);
console.log("fade done");
$("#intro").fadeOut(500);
setTimeout(function(){ stepOne() }, 1000);

function stepOne(){
    $('#intro').html("But then there was a single Click!");
    $("#intro").fadeIn(500);
    setTimeout(function(){ a() }, 500);

}
function a(){
  $('body').click(function(){
      clear();
  })
}

function clear(){
    $('#intro').remove();
    $("body").css("background-color","white");

}
