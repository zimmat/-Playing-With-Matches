

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
var el = document.querySelectorAll(".random");

var upDate = function() {
  for(i=0; i < el.length; i++){

  el[i].innerHTML = getRandomNumber(1, 3);
}
};




var  matchingNumbers = function(){
  var match = document.getElementById("message");
  if(el[0].innerHTML === el[1].innerHTML){
    el[0].classList.add("highlight");
    el[1].classList.add("highlight");
    match.innerHTML = el[0].innerHTML + " " + "are matching";

  }

  if(el[0].innerHTML === el[2].innerHTML){
    el[0].classList.add("highlight");
    el[2].classList.add("highlight");
      match.innerHTML = el[0].innerHTML + " " + "are matching";
  }

  if(el[1].innerHTML === el[2].innerHTML){
    el[1].classList.add("highlight");
    el[2].classList.add("highlight");
      match.innerHTML = el[0].innerHTML + " " + "are matching";
  }
};

upDate();
matchingNumbers();
