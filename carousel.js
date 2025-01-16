document.addEventListener('DOMContentLoaded', () => {
    const images = [
        './asset/1.jpg',
        './asset/00.jpg',
        './asset/40.jpg',
        './asset/2.jpg',
        './asset/0.jpg',
        './asset/3.jpg',
        './asset/4.jpg',
        './asset/5.jpg',
        './asset/6.jpg',
        './asset/7.jpg',
        './asset/8.jpg',
        './asset/9.jpg',
        './asset/10.jpg',
        './asset/11.jpg',
        './asset/12.jpg',
        './asset/13.jpg',
        './asset/14.jpg',
        './asset/15.jpg',
        './asset/16.jpg',
        './asset/17.jpg',
        './asset/18.jpg',
        './asset/19.jpg',
        './asset/20.jpg',
        './asset/21.jpg',
        './asset/22.jpg',
        './asset/23.jpg',
        './asset/24.jpg',
        './asset/25.jpg',
        './asset/26.jpg',
        './asset/27.jpg',
        './asset/28.jpg',
        './asset/29.jpg',
        './asset/30.jpg',
        './asset/31.jpg',
        './asset/32.jpg',
        './asset/33.jpg',
        './asset/34.jpg',
        './asset/35.jpg',
        './asset/36.jpg',
        './asset/37.jpg',
        './asset/38.jpg',
        './asset/39.jpg',

    ];

    const carouselSlide = document.querySelector('.carousel-slide');
    const prevBtn = document.querySelector('#prevBtn');
    const nextBtn = document.querySelector('#nextBtn');
    const dotsContainer = document.querySelector('.dots-container');

    let currentIndex = 0;
    let isTransitioning = false;

    // Create and append image elements
    images.forEach((src, index) => {
        const img = document.createElement('img');
        img.src = src;
        img.alt = `Glass work ${index + 1}`;
        img.classList.toggle('active', index === 0);
        carouselSlide.appendChild(img);

        // Create dot for each image
        const dot = document.createElement('button');
        dot.classList.add('dot');
        dot.setAttribute('aria-label', `Go to image ${index + 1}`);
        dot.addEventListener('click', () => !isTransitioning && goToSlide(index));
        dotsContainer.appendChild(dot);
    });

    function updateCarousel() {
        isTransitioning = true;
        carouselSlide.style.transform = `translateX(-${currentIndex * 100}%)`;
        
        // Update active states
        document.querySelectorAll('.carousel-slide img').forEach((img, index) => {
            img.classList.toggle('active', index === currentIndex);
        });
        
        // Update dots
        document.querySelectorAll('.dot').forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });

        // Reset transition lock after animation
        setTimeout(() => {
            isTransitioning = false;
        }, 500);
    }

    function goToSlide(index) {
        if (isTransitioning) return;
        currentIndex = index;
        updateCarousel();
    }

    function goToNext() {
        if (isTransitioning) return;
        currentIndex = currentIndex >= images.length - 1 ? 0 : currentIndex + 1;
        updateCarousel();
    }

    function goToPrev() {
        if (isTransitioning) return;
        currentIndex = currentIndex <= 0 ? images.length - 1 : currentIndex - 1;
        updateCarousel();
    }

    // Event Listeners
    nextBtn.addEventListener('click', goToNext);
    prevBtn.addEventListener('click', goToPrev);

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (isTransitioning) return;
        if (e.key === 'ArrowLeft') goToPrev();
        if (e.key === 'ArrowRight') goToNext();
    });

    // Touch events
    let touchStartX = 0;
    let touchEndX = 0;

    carouselSlide.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    });

    carouselSlide.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    });

    function handleSwipe() {
        const swipeThreshold = 50;
        const swipeLength = touchEndX - touchStartX;

        if (Math.abs(swipeLength) > swipeThreshold) {
            if (swipeLength > 0) {
                goToPrev();
            } else {
                goToNext();
            }
        }
    }

    // Initialize carousel
    updateCarousel();

    // Auto-advance every 5 seconds
    let autoAdvance = setInterval(goToNext, 3000);

    // Pause auto-advance on hover
    carouselSlide.addEventListener('mouseenter', () => {
        clearInterval(autoAdvance);
    });

    carouselSlide.addEventListener('mouseleave', () => {
        autoAdvance = setInterval(goToNext, 5000);
    });
});