function filterCards(category, element) {
    // 1. Update active class on filter buttons
    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    element.classList.add('active');

    // 2. Get all card wrapper elements
    const cards = document.querySelectorAll('.card-wrapper');

    cards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        const isMatch = (category === 'all' || cardCategory === category);

        if (isMatch) {
            // Step A: Display block/grid layer restore karein
            card.classList.remove('d-none-filter');

            // Step B: Trigger Reflow so transition triggers properly
            void card.offsetWidth;

            // Step C: Animate In
            card.classList.remove('is-hidden');
        } else {
            // Step A: Animate Out
            card.classList.add('is-hidden');

            // Step B: Animation poori hone ke baad DOM layout se hide karein
            setTimeout(() => {
                if (card.classList.contains('is-hidden')) {
                    card.classList.add('d-none-filter');
                }
            }, 350); // CSS transition duration (350ms) se match karein
        }
    });
}