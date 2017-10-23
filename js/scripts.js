$(document).ready(function(){
  var suits = ["Hearts", "Clubs", "Diamonds", "Spades"];
  var values = ["Ace", "King", "Queen", "Jack", "Ten", "Nine", "Eight", "Seven", "Six", "Five", "Four", "Three", "Two"]

  suits.forEach(function(suit){
    values.forEach(function(value){
      $("#deck").append("<li>" + value + " of " + suit +"</li>");
    });
  });
});
