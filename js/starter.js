$(document).ready(function() {
  console.log('loaded');
  var userHand = [];
  var dealerHand= [];
  var values = ['Hearts-', 'Clubs-', 'Diamonds-', 'Spades-'];
  var suits = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10','J', 'Q', 'K'];
    // New card values are going to pushed in the empty cardDeck array.
  var cardDeck = [];

  var $start = document.querySelector('#startBtn');
  var $hit = document.querySelector('#hitBtn');
  var $stand = document.querySelector('#standBtn');
  var $reset = document.querySelector('#resetBtn');

  function createDeck() {
    for (var i = 0; i < values.length; i++) {
      for (var j = 0; j < suits.length; j++) {
        var random = Math.floor(Math.random(values[i].length * suits[j].length) );
        // cardDeck.push(random);
        cardDeck.push(values[i] + suits[j]);
        // console.log(cardDeck);
      }
    }
  $('#startBtn').on('click', startGame);
  };
  createDeck();

function shuffle(){
  var randomArray = [];
  for (var i = cardDeck.length -1; i > 0; i--) {
    var j = Math.floor(Math.random() * i);
    var temp = cardDeck[j];
    cardDeck[j] = cardDeck[i];
    cardDeck[i]= temp;
  // Find the item
  // Then we want to place it in an array.
  }
};
shuffle();

function startGame() {
  // Adding a card to the dealer and users hand.
  dealerHand.push(cardDeck.shift() );
  dealerHand.push(cardDeck.shift() );
  $('#dealerSide').append(dealerHand);
    // console.log(dealerHand);
  userHand.push(cardDeck.shift() );
  userHand.push(cardDeck.shift() );
  $('#userSide').append(userHand);
  // cardDeck.pop(cardDeck[0]);
  // Event listeners
  $('#hitBtn').click(hitMe);
  $('#standBtn').click(stand);
  // $('#resetBtn').click(resetGame);
  console.log(cardDeck);
};

    function hitMe() {
      userHand.push(cardDeck.shift() );
      $('#userSide').append(userHand[userHand.length -1]);
      console.log('hello');
    };
    function stand() {
      dealerHand.push(cardDeck.shift() );
      $('#dealerSide').append(dealerHand[dealerHand.length -1]);
    };







});
