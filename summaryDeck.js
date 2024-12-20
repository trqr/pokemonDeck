import { cartes } from "./data/cartes.js";
import { deck, removeCardFromDeck } from "./data/deck.js";

function renderDeck() {
    let deckHTML = "";
    let cardData = {};
    let totalPrice = 0;

    deck.forEach((deckCard) => {
        cartes.forEach(carte => {
            if (deckCard.name === carte.name) {
                cardData = carte;
                totalPrice += cardData.price * deckCard.quantity
            }
        })
        deckHTML += `
            <div class="carte-container carte-deck-container-${cardData.name}">
                <div class="carte-image-container"><img class="carte-image" src=${cardData.image}></div>
                <div class="quantity-box">${deckCard.quantity}</div>

                <div class="carte-name">
                    ${cardData.name}
                </div>

                <div class="carte-prix">
                    ${(cardData.price * deckCard.quantity / 100).toFixed(2)}€
                </div>
                <div>
                <button class="remove-from-deck remove-from-deck-${cardData.name}" data-card-name="${cardData.name}">Remove</button>
                </div>
            </div>
    `;
    })
    let deckPriceHTML = `
    <footer class="price-summary">
                <div class="">

                <div class="">
                    
                </div>

                <div class="total-price-box">
                    ${(totalPrice / 100).toFixed(2)}€
                </div>
                <div>
                <button class="buy-button">Buy</button>
                </div>
            </footer>
    `;
    deckHTML += deckPriceHTML;

    document.querySelector(".deck-grid").innerHTML = deckHTML;

    document.querySelectorAll(".remove-from-deck")
        .forEach(button => {
            button.addEventListener('click', () => {
                const cardName = button.dataset.cardName;
                document.querySelector(`.remove-from-deck-${cardName}`).classList.add("rfdonclick");
                removeCardFromDeck(cardName);
                console.log(deck);
                renderDeck();
            })
        })
}




renderDeck();