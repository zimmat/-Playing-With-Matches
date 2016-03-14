function newRandomNumber(){
  window.location.reload();
}
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
      var el = document.querySelectorAll(".random");

      var upDate = function() {
        for (i = 0; i < el.length; i++) {
          el[i].innerHTML = getRandomNumber(1, 9);
        }
      };
      var matchingRows = function() {
        var matchRowOne = document.getElementById("messageOne");
        var matchRowTwo = document.getElementById("messageTwo");
        var matchRowThree = document.getElementById("messageThree");

        if (el[0].innerHTML === el[1].innerHTML) {
          el[0].classList.add("highlight");
          el[1].classList.add("highlight");
          matchRowOne.innerHTML = "In row one" + " " + el[0].innerHTML + " " + "is a matching number";

        }

        if (el[0].innerHTML === el[2].innerHTML) {
          el[0].classList.add("highlight");
          el[2].classList.add("highlight");
          matchRowOne.innerHTML = "In row one" + " " + el[0].innerHTML + " " + "is a matching number";
        }


        if (el[1].innerHTML === el[2].innerHTML) {
          el[1].classList.add("highlight");
          el[2].classList.add("highlight");
          matchRowOne.innerHTML = "In row one" + " " + el[2].innerHTML + " " + "is a matching number"  ;
      }
      if (el[0].innerHTML === el[1].innerHTML === el[2].innerHTML ) {
        el[0].classList.add("highlight");
        el[1].classList.add("highlight");
        el[2].classList.add("highlight");
        matchRowOne.innerHTML = "In row three" + " " + el[1].innerHTML + " " + "is a matching number" ;
      }


        if (el[3].innerHTML === el[5].innerHTML) {
          el[3].classList.add("highlight");
          el[5].classList.add("highlight");
          matchRowTwo.innerHTML = "In row two" + " " + el[3].innerHTML + " " + "is a matching" ;

        }

        if (el[3].innerHTML === el[4].innerHTML) {
          el[3].classList.add("highlight");
          el[4].classList.add("highlight");
          matchRowTwo.innerHTML = "In row two" + " " + el[4].innerHTML + " " + "is a matching number"  ;
        }


        if (el[4].innerHTML === el[5].innerHTML) {
          el[4].classList.add("highlight");
          el[5].classList.add("highlight");
          matchRowTwo.innerHTML =  "In row two" + " " + el[5].innerHTML + " " + "is a matching number" ;
        }
        if (el[3].innerHTML === el[4].innerHTML === el[5]) {
          el[3].classList.add("highlight");
          el[4].classList.add("highlight");
          el[5].classList.add("highlight");
          matchRowTwo.innerHTML = "In row three" + " " + el[5].innerHTML + " " + "is a matching number" ;
        }
        if (el[6].innerHTML === el[8].innerHTML) {
          el[6].classList.add("highlight");
          el[8].classList.add("highlight");
          matchRowThree.innerHTML = "In row three" + " " + el[6].innerHTML + " " + "is a matching number"  ;

        }

        if (el[6].innerHTML === el[7].innerHTML) {
          el[6].classList.add("highlight");
          el[7].classList.add("highlight");
          matchRowThree.innerHTML = "In row three" + " " + el[7].innerHTML + " " + "is a matching number" ;
        }


        if (el[7].innerHTML === el[8].innerHTML) {
          el[7].classList.add("highlight");
          el[8].classList.add("highlight");
          matchRowThree.innerHTML = "In row three" + " " + el[8].innerHTML + " " + "is a matching number" ;
        }
        if (el[6].innerHTML === el[7].innerHTML === el[8].innerHTML) {
          el[6].classList.add("highlight");
          el[7].classList.add("highlight");
          el[8].classList.add("highlight");
          matchRowThree.innerHTML = "In row three" + " " + el[8].innerHTML + " " + "is a matching number" ;
        }

      };
      upDate();
      matchingRows();
//
        var matchingColumns = function() {
          var matchColumnOne = document.getElementById("messageFour");
          var matchColumnTwo = document.getElementById("messageFive");
          var matchColumnThree = document.getElementById("messageSix");
          if (el[0].innerHTML === el[6].innerHTML) {
            el[0].classList.add("highlight");
            el[6].classList.add("highlight");
            matchColumnOne.innerHTML = "In Column one" + " " + el[0].innerHTML + " " + "is a matching number";

           }

//
          if (el[0].innerHTML === el[3].innerHTML) {
            el[0].classList.add("highlight");
            el[3].classList.add("highlight");
            matchColumnOne.innerHTML = "In Column one" + " " + el[0].innerHTML + " " + "is a matching number";
          }

//
          if (el[3].innerHTML === el[6].innerHTML) {
            el[3].classList.add("highlight");
            el[6].classList.add("highlight");
            matchColumnOne.innerHTML = "In Column one" + " " + el[6].innerHTML + " " + "is a matching number"  ;
        }

        if (el[0].innerHTML === el[3].innerHTML === el[6].innerHTML ) {
          el[0].classList.add("highlight");
          el[3].classList.add("highlight");
          el[6].classList.add("highlight");
          matchColumnOne.innerHTML = "In column three" + " " + el[6].innerHTML + " " + "is a matching number" ;
        }

          if (el[1].innerHTML === el[7].innerHTML) {
            el[1].classList.add("highlight");
            el[7].classList.add("highlight");
            matchColumnTwo.innerHTML = "In column two" + " " + el[7].innerHTML + " " + "is a matching" ;

          }

          if (el[1].innerHTML === el[4].innerHTML) {
            el[1].classList.add("highlight");
            el[4].classList.add("highlight");
            matchColumnTwo.innerHTML = "In column two" + " " + el[4].innerHTML + " " + "is a matching number"  ;
          }


          if (el[4].innerHTML === el[7].innerHTML) {
            el[4].classList.add("highlight");
            el[7].classList.add("highlight");
            matchColumnTwo.innerHTML =  "In column two" + " " + el[7].innerHTML + " " + "is a matching number" ;
          }
          if (el[1].innerHTML === el[4].innerHTML === el[7]) {
            el[1].classList.add("highlight");
            el[4].classList.add("highlight");
            el[7].classList.add("highlight");
            matchColumnTwo.innerHTML = "In column three" + " " + el[7].innerHTML + " " + "is a matching number" ;
          }


          if (el[2].innerHTML === el[8].innerHTML) {
            el[2].classList.add("highlight");
            el[8].classList.add("highlight");
            matchColumnThree.innerHTML = "In column three" + " " + el[2].innerHTML + " " + "is a matching number"  ;

          }

          if (el[2].innerHTML === el[5].innerHTML) {
            el[2].classList.add("highlight");
            el[5].classList.add("highlight");
            matchColumnThree.innerHTML = "In column three" + " " + el[5].innerHTML + " " + "is a matching number" ;
          }


          if (el[5].innerHTML === el[8].innerHTML) {
            el[5].classList.add("highlight");
            el[8].classList.add("highlight");
            matchColumnThree.innerHTML = "In column three" + " " + el[8].innerHTML + " " + "is a matching number" ;
          }
          if (el[2].innerHTML === el[5].innerHTML === el[8].innerHTML) {
            el[2].classList.add("highlight");
            el[5].classList.add("highlight");
            el[8].classList.add("highlight");
            matchColumnThree.innerHTML = "In Column three" + " " + el[8].innerHTML + " " + "is a matching number" ;
          }

        }

        matchingColumns();


//
var matchingDiagonals = function() {
  var matchingDiagonalOne = document.getElementById("messageSeven");
  var matchingDiagonalTwo = document.getElementById("messageEight");

  if (el[0].innerHTML === el[8].innerHTML) {
    el[0].classList.add("highlight");
    el[8].classList.add("highlight");
    matchingDiagonalOne.innerHTML = "In diagonal one" + " " + el[0].innerHTML + " " + "is a matching number";

  }

  if (el[0].innerHTML === el[4].innerHTML) {
    el[0].classList.add("highlight");
    el[4].classList.add("highlight");
    matchingDiagonalOne.innerHTML = "In diagonal one" + " " + el[0].innerHTML + " " + "is a matching number";
  }


  if (el[4].innerHTML === el[8].innerHTML) {
    el[4].classList.add("highlight");
    el[8].classList.add("highlight");
    matchingDiagonalOne.innerHTML = "In diagonal one" + " " + el[8].innerHTML + " " + "is a matching number"  ;
}
if (el[0].innerHTML === el[4].innerHTML === el[8].innerHTML ) {
  el[0].classList.add("highlight");
  el[4].classList.add("highlight");
  el[8].classList.add("highlight");
  matchingDiagonalOne.innerHTML = "In diagonal one" + " " + el[8].innerHTML + " " + "is a matching number" ;
}

  if (el[2].innerHTML === el[6].innerHTML) {
    el[2].classList.add("highlight");
    el[6].classList.add("highlight");
    matchingDiagonalTwo.innerHTML = "In diagonal two" + " " + el[6].innerHTML + " " + "is a matching" ;

  }

  if (el[2].innerHTML === el[4].innerHTML) {
    el[2].classList.add("highlight");
    el[4].classList.add("highlight");
    matchingDiagonalTwo.innerHTML = "In diagonal two" + " " + el[4].innerHTML + " " + "is a matching number"  ;
  }


  if (el[4].innerHTML === el[6].innerHTML) {
    el[4].classList.add("highlight");
    el[6].classList.add("highlight");
    matchingDiagonalTwo.innerHTML =  "In diagonal two" + " " + el[6].innerHTML + " " + "is a matching number" ;
  }
  if (el[2].innerHTML === el[4].innerHTML === el[6]) {
    el[2].classList.add("highlight");
    el[4].classList.add("highlight");
    el[6].classList.add("highlight");
    matchingDiagonalTwo.innerHTML = "In diagonal three" + " " + el[6].innerHTML + " " + "is a matching number" ;
  }
};
matchingDiagonals();
