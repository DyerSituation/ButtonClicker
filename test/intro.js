// document.getElementById("intro").style.color = "white";
console.log("start");
$("#intro").hide();
$("#intro").html("In the beginning there was nothing.");
 console.log("fadein");
$("#intro").fadeIn(6000);
console.log("fade done");
$("#intro").fadeOut(4000);
setTimeout(function(){ stepOne() }, 10000);

function stepOne(){
    $('#intro').html("But then there was a single Click!");
    $("#intro").fadeIn(6000);
    setTimeout(function(){ a() }, 6000);

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
