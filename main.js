console.log("War Baby!");

//1. first create the class*
//2. construct its properties*

class Cards {
    constructor(suit, rank, value) {
        this.suit = suit,
        this.rank = rank,
        this.value = value
    }
}

//3. create a new class called Deck*
//4. add value to the properties*

class Deck {
    constructor() {
        this.cards = []
            let suits = [
                "Clubs",
                "Diamonds",
                "Hearts",
                "Spades"
            ]
            let ranks = [
                "2",
                "3",
                "4",
                "5",
                "6",
                "7",
                "8",
                "9",
                "10",
                "Jack",
                "Queen",
                "King",
                "Ace"
            ]
            // 5. create a way to add 52 cards to the deck
            for(let i = 0; i < suits.length; i++) {
            for(let j = 0; j < ranks.length; j++) {
                let suit = suits[i]
                let rank = ranks[j]
                let value = j 
                // return this.cards.push(new Cards(rank, suit, value))
                // return will only call one set of cards and stop the loop.
                this.cards.push(new Cards(rank, suit, value))
            }
        } 
    }
}

const deck = new Deck();
//console.log(deck.cards);

// 6. create a shuffle function that will deal the deck to to players, will use Fisher-Yates 
function shuffle(deck) {
    let k = deck.length, temp, l;
  
    while (0 !== k) {
      l = Math.floor(Math.random() * k);
      k -= 1;
      let temp = deck[k];
      deck[k] = deck [l];
      deck[l] = temp;
    }
    return shuffle;    
}
    let shuffled = (deck.cards);
    console.log(shuffle(shuffled));
    

// 7. create player class that will add players and hold their cards(hands)

class Player {
    constructor() {
        this.hand = []
    }
}

const player1 = new Player();
const player2 = new Player();
// 8. add a way to get the players their hands

const hand1 = shuffled.slice(0, 26);
const hand2 = shuffled.slice(26)

player1.hand = hand1
player2.hand = hand2

//console.log(player1.hand);
//console.log(player2.hand);

// 9a. add a play game function that will allow you to play the game. 
// 9b. also loop it so that all cards are played.
// 9c. make sure to declare a winner after each game.
function playWar() {
    for(let m = 0; m < player1.hand.length; m++) {
        for(let n = 0; n < player2.hand.length; n++) {
           // added player 1 win argument
            if(player1.hand[m].value > player2.hand[n].value) {
            console.log("Player 1 wins round!");
            player1.hand.push(player1.hand[m]);
            player1.hand.push(player2.hand[n]);
            player1.hand.shift();
            player2.hand.shift();
            console.log(player1.hand[m]);
            console.log("Player 1 has " + player1.hand.length + " left");
            console.log(player2.hand[n]);
            console.log("Player 2 has " + player2.hand.length + " left");

            // added player 2 win argument  
        }else if(player1.hand[m].value < player2.hand[n].value) {
            console.log("Player 2 wins round!");
            player2.hand.push(player1.hand[m]);
            player2.hand.push(player2.hand[n]);
            player1.hand.shift();
            player2.hand.shift();
            console.log(player1.hand[m]);
            console.log("Player 1 has " + player1.hand.length + " left");
            console.log(player2.hand[n]);
            console.log("Player 2 has " + player2.hand.length + " left");
            
            // added tie argument.
        }else {
            console.log("Tie! You Both Suck!!!");
            player1.hand.push(player1.hand[m]);
            player2.hand.push(player2.hand[n]);
            player1.hand.shift();
            player2.hand.shift();
            console.log(player1.hand[m]);
            console.log("Player 1 has " + player1.hand.length + " left");
            console.log(player2.hand[n]);
            console.log("Player 2 has " + player2.hand.length + " left");
            // added game winner 
        }
        if(player1.hand.length === 52) {
            alert("Player 1 Wins War... Player 2 sucks!");
        }else if(player2.hand.length === 52) {
            alert("Player 2 Wins War... Player 1 sucks!")
        } 
        }
        
    }
    
}   
console.log(playWar());
// something is going on with my game its suit and rank is reversed and screwing uo the value