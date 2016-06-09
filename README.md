# BlackJack

User Story
My game will entail of a normal Black Jack game but with a bit of a twist with much css styling..  
I plan on using certain CSS frameworks, such as Bootstrap.
For the programming code I will use vanilla Javascript, JQuery and possibly one more JS library or framework.

My ReadMe will be updated as my project progresses.

https://github.com/martinbean/blackjack-js/blob/master/assets/js/blackjack.js

Maintain the ace value as 11 for any card values that are less than 8 (soft hand) and ace as 1 for any card values higher than 9 (hard hand).

Approach:
dealButton will initialize startGame function and continue to execute playerHand function
playerHand function will automatically give you one card and then with each press of the dealButton will give you another card until player decides to stand or reset game. 
An array of of suits and numbers will be created
In the shuffle() function looped randomly to assign the suit and number for each card randomly picked to playerHand()
While playerHand function is running, dealerHand will also be running but will be logged in the console
Function hitMe() and stand() will also check to see if the user chooses another random card
The resetGame() will have a reset button to for the user to choose if he or she want to ever start all over again
declareWinner function will run to check will hand is the winner with an if and else statemets within a loop
A message will appear on a div or an alert will pop up of the status of the match

Rules for the user:
1.User will press the start game button and the dealer will deal one card.
2. User will be prompted to change "hit", which will prompt the user to get another random card. If user's cards are equal to 21 he or she wins automatically. If higher than 21, user loses automatically.
3. User can also choose to "stand" and wait for the dealers hand. If the dealers next card will total of anything greater than 21, the dealer loses. If less than 21, the two hands are compared and the winner is the person who has the closest hand to 21.
4. The user can also choose to reset the game.
