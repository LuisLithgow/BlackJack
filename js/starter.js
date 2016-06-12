$(document).ready(function() {
  console.log('loaded');
  var userHand = [];
  var dealerHand= [];
  var values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10','J', 'Q', 'K'];
  var suits = ['H', 'C', 'D', 'S'];
    // New card values are going to pushed in the empty cardDeck array.
  var cardDeck = [];

  var dealerScore;
  var userScore;


  var $start = document.querySelector('#startBtn');
  var $hit = document.querySelector('#hitBtn');
  var $stand = document.querySelector('#standBtn');
  var $reset = document.querySelector('#resetBtn');

  // var cardValue1= [];
  // var cardValue2 = [];
  function createDeck() {
    for (var i = 0; i < values.length; i++) {
      for (var j = 0; j < suits.length; j++) {
        var random = Math.floor(Math.random(values[i].length * suits[j].length) );
        // cardDeck.push(random);
        cardDeck.push(values[i] + suits[j]);
        // console.log(cardDeck);
      }
    }
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
  // console.log(randNum1);
  // console.log(randNum2);
    // console.log(cardDeck);

  while (randNum1 === randNum2) {
    randNum2 = Math.floor(Math.random() * cardDeck.length);
  }
  var card1 = cardDeck[randNum1];
  var card2 = cardDeck[randNum2];
  // console.log(card1);
  // console.log(card2);
  // Attempting to invoke to get in iteger value for each card
  var cardValue1 = convertValue(card1);
  var cardValue2 = convertValue(card2);
  // console.log(cardValue1 , cardValue2);
  return cardValue1 + cardValue2 ;
  // $('#startBtn').on('click', startGame);
};
blackJackValue();

function convertValue(card) {
  // console.log("card = ", card)

  if (card[0]  === 'A') {
    return 11;
  } else if (card[0] === 'J' || card[0] === 'Q' || card[0] === 'K' || card.length === 3){
    return 10;
  } else {
    return parseInt(card[0]);
  }
};

// Matching dealerHand 's value with the UTF-8 card codes
function getCard() {
  if (dealerHand === '2D' ) {
    $('#dealer-hand').append('&#127170;');
  } else if (dealerHand === '2H'){
    $('#dealer-hand').append('&#127170;');
  } else if(dealerHand == '2S') {
    $('#dealer-hand').append('&#127138;');
  } else if(dealerHand === '2C') {
    $('#dealer-hand').append('&#127186;');
  } else if(dealerHand === '3D') {
    $('#dealer-hand').append('&#127171;');
  } else if(dealerHand === '3H') {
    $('#dealer-hand').append('&#127155;');
  }
};

$('#startBtn').off().on('click', startGame);

function startGame() {
  // Adding a card to the dealer and users hand.
  console.log(cardDeck);
  dealerHand.push(cardDeck.shift() );
  dealerHand.push(cardDeck.shift() );
  $('#dealerSide').append(dealerHand);
  $('#dealer-hand').append(getCard);
  // Appending converted values
  dealerScore = $("#dealerSum").append(convertValue(dealerHand[0]) + convertValue(dealerHand[1])  );
  // $("#dealerSum").append(convertValue(dealerHand[1]) );
  console.log(dealerHand + " dealer hand");

  userHand.push(cardDeck.shift() );
  userHand.push(cardDeck.shift() );
  $('#userSide').append(userHand);
// APPENDING  CONVERTED VALUES
 userScore = $("#userSum").append(convertValue(userHand[0]) + convertValue(userHand[1]) ).text();
  console.log(userHand + " user Hand");
  console.log(userScore);

  // Event listeners
  $('#hitBtn').off().click(hitMe);
  $('#standBtn').off().click(stand);
  // $('#resetBtn').click(resetGame);
  // console.log(cardDeck);
};
// startGame();

    function hitMe() {
      // console.log(cardDeck)
      userHand.push(cardDeck.shift() );
      $('#userSide').append(userHand[userHand.length -1]);
      $('#userSum').remove();
      $('.userScore').after('<div id="userSum">');
      console.log(userHand);
      console.log((convertValue(userHand[2]) + userScore));
      // $("#userSum").append(convertValue(userHand[2]) + userScore);
      // return userScore;
      // console.log(userHand);
      // console.log(userScore);
    };
    function stand() {
      dealerHand.push(cardDeck.shift() );
      $('#dealerSide').append(dealerHand[dealerHand.length -1]);

      // console.log(dealerHand);
    };
// We want to check to see who is the winner and what will the ace value to.

function checkWinner() {
  if (userScore > 21 || dealerScore === 21 ) {
    console.log("you lose");
  } else {}
};
// checkWinner();

$('#resetBtn').on('click', function(){
  location.reload();
})








});
