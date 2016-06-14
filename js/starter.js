$(document).ready(function() {
  console.log('loaded');
  var userHand = [];
  var dealerHand= [];
  var values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10','J', 'Q', 'K'];
  var suits = ['H', 'C', 'D', 'S'];
    // New card values are going to pushed in the empty cardDeck array.
  var cardDeck = [];

  var dealerScore = 0;
  var userScore = 0;
// TRY THIS BY JASON
// ['♠','♥','♦','♣'].map( sym=> [...Array(13).keys()] .map( num => ({ 0:'A', 10:'J', 11:'Q', 12:'K' }[num] || num+1 ) + sym ) )

  var $start = document.querySelector('#startBtn');
  var $hit = document.querySelector('#hitBtn');
  var $stand = document.querySelector('#standBtn');
  var $reset = document.querySelector('#resetBtn');

  // var cardValue1= [];
  // var cardValue2 = [];
  function createDeck() {
    for (var i = 0; i < values.length; i++) {
      for (var j = 0; j < suits.length; j++) {
        (values[i].length * suits[j].length) ;
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


$('#startBtn').off().on('click', startGame);

function startGame() {
  // Adding a card to the dealer and users hand.
  console.log(cardDeck);
  dealerHand.push(cardDeck.shift() );
  dealerHand.push(cardDeck.shift() );
  $('#dealerSide').append(dealerHand);
  // $('#dealer-hand').append(getCard);
  // Appending converted values
  dealerScore = $("#dealerSum").append(convertValue(dealerHand[0]) + convertValue(dealerHand[1])  );
  // $("#dealerSum").append(convertValue(dealerHand[1]) );
  console.log(dealerHand + " dealer hand");


  userHand.push(cardDeck.shift() );
  userHand.push(cardDeck.shift() );
  $('#userSide').append(userHand);
  // $('#user-hand').append(getCard);
// APPENDING  CONVERTED VALUES
  userScore = parseInt($("#userSum").append(convertValue(userHand[0]) + convertValue(userHand[1]) ) );
  console.log(userHand + " user Hand");
  console.log(userScore);

  if (dealerHand == '2D' ) {
    $('#dealer-hand').append("&#127170;" );
  } else if (dealerHand == '2H'){
    $('#dealer-hand').append("&#127170;" );
  } else if(dealerHand == '2S') {
    $('#dealer-hand').append("&#127138;" );
  } else if(dealerHand == '2C') {
    $('#dealer-hand').append("&#127186;" );
  } else if(dealerHand == '3D') {
    $('#dealer-hand').append("&#127171;" );
  } else if(dealerHand == '3H') {
    $('#dealer-hand').append("&#127155;" );
  } else if(dealerHand == '3S') {
    $('#dealer-hand').append("&#127139;" );
  } else if(dealerHand == '3C') {
    $('#dealer-hand').append("&#127187;" );
  } else if(dealerHand == '4D') {
    $('#dealer-hand').append("&#127172;" );
  }else if (dealerHand == '4H') {
    $('#dealer-hand').append("&#127156;" );
  }else if(dealerHand == '4S') {
    $('#dealer-hand').append("&#127140;" );
  }else if(dealerHand == '4C') {
    $('#dealer-hand').append("&#127188;" );
  }else if(dealerHand == '5D') {
    $('#dealer-hand').append("&#127173;" );
  }else if(dealerHand == '5H') {
    $('#dealer-hand').append("&#127157;" );
  }else if(dealerHand == '5S') {
    $('#dealer-hand').append("&#127141;" );
  }else if(dealerHand == '5C'){
    $('#dealer-hand').append("&#127189;" );
  } else if(dealerHand == '6D') {
    $('#dealer-hand').append("&#127174;" );
  } else if(dealerHand == '6H') {
    $('#dealer-hand').append("&#127158;" );
  }else if(dealerHand == '6S') {
    $('#dealer-hand').append("&#127142;" );
  }else if (dealerHand == '6C') {
    $('#dealer-hand').append("&#127190;" );
  }else if(dealerHand == '7D') {
    $('#dealer-hand').append("&#127175;" );
  }else if(dealerHand == '7H') {
    $('#dealer-hand').append("&#127159;" );
  }else if (dealerHand == '7S') {
    $('#dealer-hand').append("&#127143;" );
  }else if(dealerHand == '7C'){
    $('#dealer-hand').append("&#127191;" );
  }else if(dealerHand == '8D') {
    $('#dealer-hand').append("&#127176;" );
  }else if(dealerHand == '8H') {
    $('#dealer-hand').append("&#127160;" );
  } else if(dealerHand == '8S') {
    $('#dealer-hand').append("&#127144;" );
  }else if(dealerHand == '8C'){
    $('#dealer-hand').append("&#127192;" );
  }else if (dealerHand == '9D'){
    $('#dealer-hand').append("&#127177;" );
  }else if(dealerHand == '9H') {
    $('#dealer-hand').append("&#127161;" );
  }else if(dealerHand == '9S') {
    $('#dealer-hand').append("&#127145;" );
  }else if (dealerHand == '9C'){
    $('#dealer-hand').append("&#127193;" );
  }else if(dealerHand == '10D'){
    $('#dealer-hand').append("&#127178;" );
  }else if(dealerHand == '10H') {
    $('#dealer-hand').append("&#127162;" );
  }else if(dealerHand == '10S') {
    $('#dealer-hand').append("&#127146;" );
  }else if(dealerHand == '10C') {
    $('#dealer-hand').append("&#127194;" );
  }else if(dealerHand == 'JD') {
    $('#dealer-hand').append("&#127179;" );
  }else if (dealerHand == 'JH') {
    $('#dealer-hand').append("&#127163;" );
  }else if(dealerHand == 'JS') {
    $('#dealer-hand').append("&#127147;" );
  }else if(dealerHand == 'JC') {
    $('#dealer-hand').append("&#127195;" );
  }else if (dealerHand == 'QD') {
    $('#dealer-hand').append("&#127181;" );
  }else if(dealerHand == 'QH') {
    $('#dealer-hand').append("&#127165;" );
  }else if(dealerHand == 'QS') {
    $('#dealer-hand').append("&#127149;" );
  }else if(dealerHand == 'QC') {
    $('#dealer-hand').append("&#127197;" );
  }else if(dealerHand == 'KD') {
    $('#dealer-hand').append("&#127182;" );
  }else if (dealerHand == 'KH') {
    $('#dealer-hand').append("&#127166;" );
  }else if(dealerHand == 'KS') {
    $('#dealer-hand').append("&#127150;" );
  }else if (dealerHand == 'KC') {
    $('#dealer-hand').append("&#127198;" );
  }else if (dealerHand == 'AD') {
    $('#dealer-hand').append("&#127169;" );
  }else if(dealerHand == 'AH') {
    $('#dealer-hand').append("&#127153;" );
  }else if(dealerHand == 'AS') {
    $('#dealer-hand').append("&#127137;" );
  }else if(dealerHand == 'AC') {
    $('#dealer-hand').append("&#127185;" );
  }else {
    $('#dealer-hand').append("&#127185;" );
  }
  console.log('get the cards!');

  if (userHand == '2D' ) {
    $('#user-hand').append("&#127170;" );
  } else if (userHand == '2H'){
    $('#user-hand').append("&#127170;" );
  } else if(userHand == '2S') {
    $('#user-hand').append("&#127138;" );
  } else if(userHand == '2C') {
    $('#user-hand').append("&#127186;" );
  } else if(userHand == '3D') {
    $('#user-hand').append("&#127171;" );
  } else if(userHand == '3H') {
    $('#user-hand').append("&#127155;" );
  } else if(userHand == '3S') {
    $('#user-hand').append("&#127139;" );
  } else if(userHand == '3C') {
    $('#user-hand').append("&#127187;" );
  } else if(userHand == '4D') {
    $('#user-hand').append("&#127172;" );
  }else if (userHand == '4H') {
    $('#user-hand').append("&#127156;" );
  }else if(userHand == '4S') {
    $('#user-hand').append("&#127140;" );
  }else if(userHand == '4C') {
    $('#user-hand').append("&#127188;" );
  }else if(userHand == '5D') {
    $('#user-hand').append("&#127173;" );
  }else if(userHand == '5H') {
    $('#user-hand').append("&#127157;" );
  }else if(userHand == '5S') {
    $('#user-hand').append("&#127141;" );
  }else if(userHand == '5C'){
    $('#user-hand').append("&#127189;" );
  } else if(userHand == '6D') {
    $('#user-hand').append("&#127174;" );
  } else if(userHand == '6H') {
    $('#user-hand').append("&#127158;" );
  }else if(userHand == '6S') {
    $('#user-hand').append("&#127142;" );
  }else if (userHand == '6C') {
    $('#user-hand').append("&#127190;" );
  }else if(userHand == '7D') {
    $('#user-hand').append("&#127175;" );
  }else if(userHand == '7H') {
    $('#user-hand').append("&#127159;" );
  }else if (userHand == '7S') {
    $('#user-hand').append("&#127143;" );
  }else if(userHand == '7C'){
    $('#user-hand').append("&#127191;" );
  }else if(userHand == '8D') {
    $('#user-hand').append("&#127176;" );
  }else if(userHand == '8H') {
    $('#user-hand').append("&#127160;" );
  } else if(userHand == '8S') {
    $('#user-hand').append("&#127144;" );
  }else if(userHand == '8C'){
    $('#user-hand').append("&#127192;" );
  }else if (userHand == '9D'){
    $('#user-hand').append("&#127177;" );
  }else if(userHand == '9H') {
    $('#user-hand').append("&#127161;" );
  }else if(userHand == '9S') {
    $('#user-hand').append("&#127145;" );
  }else if (userHand == '9C'){
    $('#user-hand').append("&#127193;" );
  }else if(userHand == '10D'){
    $('#user-hand').append("&#127178;" );
  }else if(userHand == '10H') {
    $('#user-hand').append("&#127162;" );
  }else if(userHand == '10S') {
    $('#user-hand').append("&#127146;" );
  }else if(userHand == '10C') {
    $('#user-hand').append("&#127194;" );
  }else if(userHand == 'JD') {
    $('#user-hand').append("&#127179;" );
  }else if (userHand == 'JH') {
    $('#user-hand').append("&#127163;" );
  }else if(userHand == 'JS') {
    $('#user-hand').append("&#127147;" );
  }else if(userHand == 'JC') {
    $('#user-hand').append("&#127195;" );
  }else if (userHand == 'QD') {
    $('#user-hand').append("&#127181;" );
  }else if(userHand == 'QH') {
    $('#user-hand').append("&#127165;" );
  }else if(userHand == 'QS') {
    $('#user-hand').append("&#127149;" );
  }else if(userHand == 'QC') {
    $('#user-hand').append("&#127197;" );
  }else if(userHand == 'KD') {
    $('#user-hand').append("&#127182;" );
  }else if (userHand == 'KH') {
    $('#user-hand').append("&#127166;" );
  }else if(userHand == 'KS') {
    $('#user-hand').append("&#127150;" );
  }else if (userHand == 'KC') {
    $('#user-hand').append("&#127198;" );
  }else if (userHand == 'AD') {
    $('#user-hand').append("&#127169;" );
  }else if(userHand == 'AH') {
    $('#user-hand').append("&#127153;" );
  }else if(userHand == 'AS') {
    $('#user-hand').append("&#127137;" );
  }else if(userHand == 'AC') {
    $('#user-hand').append("&#127185;" );
  }
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
      // console.log((convertValue(userHand.shift()+ userScore) ));
      // parseInt($("#userSum").append(convertValue(userHand.shift() ) + userScore) );
      parseInt(userHand.push(convertValue(userHand.shift() ) + userScore) );
      parseInt($("#userSum").append(convertValue(userHand) )  );
      console.log(userHand);
      // return userScore;
      // console.log(userHand);
      // console.log(userScore);
      checkWinner();
    };
    function stand() {
      dealerHand.push(cardDeck.shift() );
      $('#dealerSide').append(dealerHand[dealerHand.length -1]);

      // console.log(dealerHand);
    };
// We want to check to see who is the winner and what will the ace value to.

function checkWinner() {
  if (userScore > 21 || dealerScore === 21 ) {
    alert("you lose");
  } else if(userScore = 21 || userScore > dealerScore) {
    alert('You won!')
  }
};
// checkWinner();

$('#resetBtn').on('click', function(){
  location.reload();
})








});
