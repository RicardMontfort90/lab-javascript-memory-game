class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];  // add the rest of the class properties here
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
   }

  shuffleCards() {
    if (this.cards === undefined) {
      return undefined
    } else {
      return this.cards.sort(() => Math.random() - 0.5);
    }
   }

  checkIfPair(card1, card2) {
    this.pairsClicked++

    if (card1 === card2) {
      this.pairsGuessed++
      return true
    } else {
      return false
    }
   }

  checkIfFinished() {
    if (this.pairsGuessed === this.cards.length/2) {
      return true;
    } else {
      return false;
    }
   }
  }
