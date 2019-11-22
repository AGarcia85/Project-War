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
            // 5. create a way to split the deck in 2 for each player
        for(let i =0; i < suits.length; i++) {
            for(let j = 0; j < ranks.length; i++) {
                let suit = suits[i]
                let rank = ranks[i]
                let value = i 
                this.cards.push(`${ranks[rank]} of ${suits[suit]}`);

                
            }
            const deck = new Deck();
            console.log(deck.cards);
    } 
        }
}