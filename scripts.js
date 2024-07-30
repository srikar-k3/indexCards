document.addEventListener('DOMContentLoaded', () => {
    const stack = document.getElementById('stack');

    function addCard() {
        const card = document.createElement('div');
        card.className = 'card';

        const cardContent = document.createElement('div');
        cardContent.className = 'card-content';
        cardContent.contentEditable = true;
        cardContent.innerText = 'New card content';

        card.appendChild(cardContent);
        card.style.left = '0px';
        card.style.top = '0px';
        card.style.transform = 'translate(0, 0)'; // Initial transform
        card.addEventListener('mousedown', onMouseDown);
        stack.appendChild(card);
    }

    function onMouseDown(event) {
        const card = event.target.closest('.card');
        if (!card) return;

        const rect = card.getBoundingClientRect();
        const offsetX = event.clientX - rect.left;
        const offsetY = event.clientY - rect.top;

        function onMouseMove(event) {
            // Calculate the new position based on mouse movement
            const newLeft = event.clientX - offsetX;
            const newTop = event.clientY - offsetY;

            // Apply transform to the card
            card.style.transform = `translate(${newLeft}px, ${newTop}px)`;
        }

        function onMouseUp() {
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseup', onMouseUp);
        }

        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
    }

    window.addCard = addCard; // Make the addCard function globally accessible
});
