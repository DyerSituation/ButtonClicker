$("#msgbox").hide();
start();
function start(){
  console.log("start");
  $("#intro").hide();
  $("#introClick").hide();
  $("#intro").html("In the beginning there was nothing.");
  $("#intro").fadeIn(6000);
  $("#msgbox").hide();
  console.log("fade done");
  $("#intro").fadeOut(4000);
  $("#msgbox").hide();
  setTimeout(function(){ stepOne() }, 10000);
}
function stepOne(){
    $('#intro').html("But then there was a single...");
    $("#intro").fadeIn(4000);
    setTimeout(function(){ a() }, 6000);


}
function a(){
  $('#introClick').fadeIn(250);
  $('#introClick').click(function(){clear();})
  // console.log("start1");
  // var FirstClick = document.createElement('input');
  // FirstClick.type = "button";
  // FirstClick.addEventListener('click', function(){    clear();});
  // FirstClick.setAttribute("value", "Click!");


  console.log("end1")
}

function clear(){
    $("#midgame").hide();
    $('#intro').remove();
    $("body").css("background-color","white");
    stepTwo();
}

function stepTwo(){
  $("#msgbox").fadeIn();
  console.log("problem");
  for (i = 0; i < 3; i++) {
    $("#introClick").click(function(){ messages(i); })
  }
}
function messages(i){
  switch(i) {
    case 0:
      $("#msgbox").html("0");
        break;
    case 1:
      $("#msgbox").html("1");
        break;
    case 2:
    $("#msgbox").html("2");
      break;
}
}