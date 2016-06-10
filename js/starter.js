$(document).ready(function() {
  console.log('loaded');
  var userHand = [];
  var dealerHand= [];
  var values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10','J', 'Q', 'K'];
  var suits = ['H', 'C', 'D', 'S'];
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

// We now have to find random BlackJack value of the cardDeck values.
// Pulling from the already shuffled deck
function blackJackValue() {
  var randNum1 = Math.floor(Math.random() * cardDeck.length);
  var randNum2 = Math.floor(Math.random() * cardDeck.length);
  console.log(randNum1);
  console.log(randNum2);
  console.log(cardDeck);

  while (randNum1 === randNum2) {
    randNum2 = Math.floor(Math.random() * cardDeck.length);
  }
  var card1 = cardDeck[randNum1];
  var card2 = cardDeck[randNum2];
  console.log(card1);
  console.log(card2);
  // Attempting to invoke to get in iteger value for each card
  var cardValue1 = convertValue(card1);
  var cardValue2 = convertValue(card2);
  console.log(cardValue1 , cardValue2);
  return cardValue1 + cardValue2 ;
  $('#startBtn').on('click', startGame);
};
blackJackValue();

function convertValue(card) {
  // console.log("card = ", card)
  if (card[0] === 'A') {
    return 11;
  } else if (card[0] === 'J' || card[0] === 'Q' || card[0] === 'K' || card.length === 3){
    return 10;
  } else {
    return parseInt(card[0]);
  }
};
// convertValue();

function startGame() {
  // Adding a card to the dealer and users hand.
  dealerHand.push(cardValue1.shift() );
  dealerHand.push(cardValue1.shift() );
  $('#dealerSide').append(dealerHand);
    // console.log(dealerHand);
  userHand.push(cardValue2.shift() );
  userHand.push(cardValue2.shift() );
  $('#userSide').append(userHand);
  // cardDeck.pop(cardDeck[0]);
  // Event listeners
  $('#hitBtn').click(hitMe);
  $('#standBtn').click(stand);
  // $('#resetBtn').click(resetGame);
  // console.log(cardDeck);
};
// startGame();

    function hitMe() {
      userHand.push(cardDeck.shift() );
      $('#userSide').append(userHand[userHand.length -1]);
      // console.log(userHand);
    };
    function stand() {
      dealerHand.push(cardDeck.shift() );
      $('#dealerSide').append(dealerHand[dealerHand.length -1]);
      // console.log(dealerHand);
    };
// We want to check to see who is the winner and what will the ace value to.

function checkWinner() {
  if (userHand > 21 || dealerHand === 21 ) {
    console.log("you lose");
  } else {}
};







});
