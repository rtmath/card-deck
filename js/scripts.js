var counter = 0;
var suitcounter = 0
var suitArray = ["clubs", "diamonds", "spades", "hearts"]
var cardArray = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", "Ace"]
var lineArray = [];

$("document").ready(function() {

  suitArray.forEach(function(suit) {
    suit = suitArray[suitcounter];
    cardArray.forEach(function(card) {
      card = cardArray[counter];
      $("#deckshow").append("<li>" + cardArray[counter] + " of " + suit + "</li>");
      counter++ ;
    });
    counter = 0;
    suitcounter++;
  });

console.log(suitArray.randomElement());
console.log(cardArray.randomElement());
});

Array.prototype.randomElement = function () {
    return this[Math.floor(Math.random() * this.length)]
}
