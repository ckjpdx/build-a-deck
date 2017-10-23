$(document).ready(function(){
  var suits = ["Hearts", "Clubs", "Diamonds", "Spades"];
  var values = ["Ace", "King", "Queen", "Jack", "Ten", "Nine", "Eight", "Seven", "Six", "Five", "Four", "Three", "Two"]

  suits.forEach(function(suit){
    $("#deckBox").append("<ul id='" + suit +"'></ul>")
    values.forEach(function(value){
      $("#" + suit).append("<li>" + value + " of " + suit +"</li>");
    });
  });
});
