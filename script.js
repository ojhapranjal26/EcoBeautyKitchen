new Swiper('.card-wrapper', {
    loop: true,
    spaceBetween: 30,

    //pagination bullets
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        },
    }
});
// Show the popup after a delay
window.onload = function () {
    setTimeout(function () {
        document.getElementById('newsletter').style.display = 'flex';
    }, 30000); // Display after 2 seconds
};

// Close the popup when the close button is clicked
document.getElementById('close-btn').onclick = function () {
    document.getElementById('newsletter').style.display = 'none';
};
// Add a click event listener to the "BACK TO TOP" link
const backToTopLink = document.querySelector('footer a[href="#top"]');
backToTopLink.addEventListener('click', (event) => {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

document.querySelectorAll('.question').forEach(item => {
    item.addEventListener('click', function () {
        const answer = this.nextElementSibling;
        this.classList.toggle('active');
        answer.classList.toggle('active');
    });
});
