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
console.log(deck.cards);