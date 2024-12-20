import { cartes } from "./data/cartes.js";
import { addToDeck, deck } from "./data/deck.js";

let cartesHTML = "";

cartes.forEach((carte) => {
    cartesHTML += `
            <div class="carte-container">
                <div class="carte-image-container"><img class="carte-image" src=${carte.image}></div>

                <div class="carte-name">
                    ${carte.name}  /  ${carte.rarity}
                </div>

                <div class="carte-prix">
                    ${(carte.price / 100).toFixed(2)}€
                </div>
                <div class="product-spacer"></div>
                <button class="add-to-deck add-to-deck-${carte.name}" data-card-name="${carte.name}">Add to deck</button>
            </div>
    `;
})

document.querySelector(".cartes-grid").innerHTML = cartesHTML;

document.querySelectorAll('.add-to-deck')
    .forEach(button => {
        button.addEventListener('click', () => {
            const cardName = button.dataset.cardName;
            document.querySelector(`.add-to-deck-${cardName}`).classList.add("test");
            setTimeout(() => {
                document.querySelector(`.add-to-deck-${cardName}`).classList.remove("test")
            }
                , 2000);
            addToDeck(cardName);
            console.log(deck);
        })
    })

