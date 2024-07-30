let cardCount = 0;

function addCard() {
    cardCount++;
    const stack = document.getElementById('stack');
    const card = document.createElement('div');
    card.className = 'card';
    card.contentEditable = 'true';
    card.setAttribute('data-index', cardCount);
    card.setAttribute('placeholder', 'Type here... (up to 10 lines)');
    stack.appendChild(card);

    // Adjust the card's height if content exceeds the limit (basic approach)
    card.addEventListener('input', () => {
        const lines = card.innerText.split('\n');
        if (lines.length > 10) {
            card.innerText = lines.slice(0, 10).join('\n');
        }
    });

    // Ensure that new cards stack on top
    const cards = stack.getElementsByClassName('card');
    for (let i = 0; i < cards.length; i++) {
        cards[i].style.zIndex = i + 1;
    }
}
