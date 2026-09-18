function filterCards(category, btnElement) {
    // Update active state on buttons
    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    btnElement.classList.add('active');

    // Filter cards
    const cards = document.querySelectorAll('.card-wrapper');
    cards.forEach(card => {
        if (category === 'all') {
            card.classList.remove('hide-card');
        } else {
            if (card.getAttribute('data-category') === category) {
                card.classList.remove('hide-card');
            } else {
                card.classList.add('hide-card');
            }
        }
    });
} 