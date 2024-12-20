export let deck;

loadFromStorage()

export function loadFromStorage() {
    deck = JSON.parse(localStorage.getItem("deck"));

    if (!deck) {
        deck = [{
            name: "Noadkoko",
            quantity: 1
        }];
    }
}

export function saveToStorage() {
    localStorage.setItem("deck", JSON.stringify(deck));
}

export function addToDeck(cardName) {
    let matchingCard;
    deck.forEach(deckCard => {
        if (cardName === deckCard.name) {
            matchingCard = cardName;
            deckCard.quantity += 1;
        }
    });
    if (matchingCard) {
    }
    else {
        deck.push({
            name: cardName,
            quantity: 1
        })
    }
    saveToStorage()
}

export function removeCardFromDeck(cardName) {
    const newDeck = [];

    deck.forEach(deckCard => {
        if (cardName !== deckCard.name) {
            newDeck.push(deckCard)
        }
    })
    deck = newDeck;
    saveToStorage();
    document.querySelector(`.carte-deck-container-${cardName}`).remove()
}