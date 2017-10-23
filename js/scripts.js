$(document).ready(function(){
  var suits = ["Hearts", "Clubs", "Diamonds", "Spades"];
  var values = ["Ace", "King", "Queen", "Jack", "Ten", "Nine", "Eight", "Seven", "Six", "Five", "Four", "Three", "Two"]

  var numberCards = function(){
    var valueList = "";
    values.forEach(function(value){
      valueList += "<li>" + value + "</li>";
    });
    return valueList;
  }

  suits.forEach(function(suit){
    $("#deckBox").append("<h3>"+suit+"</h3><ul>"+numberCards()+"</ul>")
  });
});
