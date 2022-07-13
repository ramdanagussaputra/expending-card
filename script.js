'use strict';

const panelCotainer = document.querySelector('.container');

panelCotainer.addEventListener('click', function (e) {
    if (!e.target.classList.contains('panel')) return;
    const activePanel = e.target;

    // Panel sibling
    const panelSibling = Array.from(activePanel.closest('.container').children);

    // Remove active from sibling
    panelSibling.forEach((p) => {
        if (p === activePanel) return;

        p.classList.remove('active');
    });

    // Add active class
    activePanel.classList.add('active');
});
