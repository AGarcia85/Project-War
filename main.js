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
            let rank = [
                2,
                3,
                4,
                5,
                6,
                7,
                8,
                9,
                "Jack",
                "Queen",
                "King",
                "Ace"
            ]
    }
        
}