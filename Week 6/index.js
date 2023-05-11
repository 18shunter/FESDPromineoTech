class Card {
  // The constructor takes two arguments: a rank and a value
  constructor(value, suit, faceValue) {
    this.value = value;
    this.suit = suit;
    this.faceValue = faceValue;
  }
}

// Define a class to represent a deck of cards
class Deck {
  constructor() {
    this.cards = [];
    const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    const suits = ['hearts', 'diamonds', 'clubs', 'spades'];
let faceValues = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
    // for (let suit of suits) {
    //   for (let value of values) {
    //     const card = new Card(values[value], suit, faceValues[value]);
    //     this.cards.push(card);
    //   }
    // }
    for (let i = 0; i < suits.length; i++) {
      for (let v = 0; v < values.length; v++) {
        const card = new Card(values[v], suits[i], faceValues[v]);
        this.cards.push(card);
      }
    }
    // Shuffle the deck 
    // for (let i = this.cards.length - 1; i > 0; i--) {
    //   const j = Math.floor(Math.random() * (i + 1));
    //   [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
    // }
  }

  // Define a method to deal one card from the deck
  deal() {
    return this.cards.pop();
  }
}
let gameDeck = new Deck()
console.log(gameDeck);

// Define a class for each player in the game
class Player {
  constructor(name) {
    this.name = name;
    this.score = 0;
    this.hand = [];
  }

  // Define a method to play one card from the player's hand
  playCard() {
    return this.hand.pop();
  }
}

// Define a class to represent the game itself
class Game {
  constructor() {
    this.deck = new Deck();
    this.players = [new Player("Player 1"), new Player("Player 2")];
    for (let i = 0; i < 26; i++) {
      this.players[0].hand.push(this.deck.deal());
      this.players[1].hand.push(this.deck.deal());
    }
    this.score = [0, 0];
  }

  // Define a method to play one turn of the game
 
  playTurn() {
    const card1 = this.players[0].playCard();
    const card2 = this.players[1].playCard();
    console.log(card1, card2);
    if (card1.faceValue > card2.faceValue) {
      this.score[0]++;
      return(this.score[0])
    } else if (card1.faceValue < card2.faceValue) {
      this.score[1]++;
    } else {  
    }
  }
}
let game = new Game()
console.log(game);
game.playTurn()
console.log(game.playTurn());

