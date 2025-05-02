// slideshow.js

document.addEventListener('DOMContentLoaded', function() {
    let slideIndex = 0;
    const slides = document.querySelectorAll('.slide');
    
    function showSlide() {
        slides.forEach((slide, idx) => {
            slide.style.display = idx === slideIndex ? 'block' : 'none';
        });
        
        slideIndex = (slideIndex + 1) % slides.length;
        setTimeout(showSlide, 3000); // Change image every 3 seconds
    }

    if (slides.length > 0) {
        showSlide();
    }
});
