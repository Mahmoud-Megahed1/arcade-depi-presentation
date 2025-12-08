// ========================================
// Online Electronics Store Presentation
// Professional Animated JavaScript
// ========================================

let currentSlide = 0;
const totalSlides = 13;

// Initialize presentation
document.addEventListener('DOMContentLoaded', () => {
    createParticles();
    updateSlide();
    setupKeyboardNavigation();
    animateCurrentSlide();
});

// Create animated background particles
function createParticles() {
    const particlesBg = document.createElement('div');
    particlesBg.className = 'particles-bg';
    document.body.prepend(particlesBg);

    for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 15 + 's';
        particle.style.animationDuration = (15 + Math.random() * 10) + 's';
        particle.style.width = (4 + Math.random() * 4) + 'px';
        particle.style.height = particle.style.width;
        particlesBg.appendChild(particle);
    }
}

// Animate elements in current slide
function animateCurrentSlide() {
    const activeSlide = document.querySelector('.slide.active');
    if (!activeSlide) return;

    const animatables = activeSlide.querySelectorAll('.card, .feature-card, .oos-card, .use-case-card, .security-card, .entity-badge, .benefit, .layer, .matrix-cell, .roadmap-item, .check-item, .team-member, .tech-item');

    animatables.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';

        setTimeout(() => {
            el.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, 100 + (index * 80));
    });
}

// Go to specific slide
function goToSlide(index) {
    if (index >= 0 && index < totalSlides) {
        const slides = document.querySelectorAll('.slide');
        const currentActive = document.querySelector('.slide.active');

        if (currentActive) {
            currentActive.style.animation = 'fadeOut 0.3s ease forwards';
            setTimeout(() => {
                currentActive.classList.remove('active');
                currentActive.style.animation = '';

                currentSlide = index;
                slides[currentSlide].classList.add('active');
                animateCurrentSlide();
                updateSlide();
            }, 300);
        } else {
            currentSlide = index;
            slides[currentSlide].classList.add('active');
            animateCurrentSlide();
            updateSlide();
        }
    }
}

// Previous slide
function prevSlide() {
    if (currentSlide > 0) {
        goToSlide(currentSlide - 1);
    }
}

// Next slide
function nextSlide() {
    if (currentSlide < totalSlides - 1) {
        goToSlide(currentSlide + 1);
    }
}

// Update UI elements
function updateSlide() {
    document.getElementById('slideCounter').textContent = `${currentSlide + 1} / ${totalSlides}`;

    const progress = ((currentSlide + 1) / totalSlides) * 100;
    document.getElementById('progressFill').style.width = `${progress}%`;

    document.getElementById('prevBtn').disabled = currentSlide === 0;
    document.getElementById('nextBtn').disabled = currentSlide === totalSlides - 1;

    const indicators = document.querySelectorAll('.indicator');
    indicators.forEach((indicator, index) => {
        indicator.classList.toggle('active', index === currentSlide);
    });
}

// Keyboard navigation
function setupKeyboardNavigation() {
    document.addEventListener('keydown', (e) => {
        switch (e.key) {
            case 'ArrowRight':
            case 'ArrowDown':
            case ' ':
            case 'PageDown':
                e.preventDefault();
                nextSlide();
                break;
            case 'ArrowLeft':
            case 'ArrowUp':
            case 'PageUp':
                e.preventDefault();
                prevSlide();
                break;
            case 'Home':
                e.preventDefault();
                goToSlide(0);
                break;
            case 'End':
                e.preventDefault();
                goToSlide(totalSlides - 1);
                break;
            case 'f':
            case 'F':
                e.preventDefault();
                toggleFullscreen();
                break;
        }
    });
}

// Touch navigation
let touchStartX = 0;
let touchEndX = 0;

document.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
}, false);

document.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
}, false);

function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;

    if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
            nextSlide();
        } else {
            prevSlide();
        }
    }
}

// Fullscreen toggle
function toggleFullscreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch(err => {
            console.log(`Error: ${err.message}`);
        });
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
    }
}

// Auto-play
let autoPlayInterval = null;
let autoPlayEnabled = false;

function toggleAutoPlay(interval = 5000) {
    if (autoPlayEnabled) {
        clearInterval(autoPlayInterval);
        autoPlayEnabled = false;
    } else {
        autoPlayInterval = setInterval(() => {
            if (currentSlide < totalSlides - 1) {
                nextSlide();
            } else {
                goToSlide(0);
            }
        }, interval);
        autoPlayEnabled = true;
    }
}

// CSS for fadeOut animation
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeOut {
        from { opacity: 1; transform: translateY(0) scale(1); }
        to { opacity: 0; transform: translateY(-20px) scale(0.98); }
    }
`;
document.head.appendChild(style);

// Export API
window.presentationAPI = {
    goToSlide,
    nextSlide,
    prevSlide,
    toggleFullscreen,
    toggleAutoPlay,
    getCurrentSlide: () => currentSlide,
    getTotalSlides: () => totalSlides
};

// ========================================
// Lightbox for Images
// ========================================

// Create lightbox elements
function createLightbox() {
    const lightbox = document.createElement('div');
    lightbox.id = 'imageLightbox';
    lightbox.innerHTML = `
        <div class="lightbox-overlay"></div>
        <div class="lightbox-content">
            <img src="" alt="Enlarged Image" id="lightboxImage">
            <button class="lightbox-close">&times;</button>
            <p class="lightbox-hint">اضغط في أي مكان أو ESC للإغلاق</p>
        </div>
    `;
    document.body.appendChild(lightbox);

    // Add lightbox styles
    const lightboxStyle = document.createElement('style');
    lightboxStyle.textContent = `
        #imageLightbox {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 10000;
        }
        #imageLightbox.active {
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .lightbox-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.9);
            cursor: pointer;
        }
        .lightbox-content {
            position: relative;
            z-index: 10001;
            max-width: 95%;
            max-height: 95%;
            animation: lightboxZoomIn 0.3s ease;
        }
        @keyframes lightboxZoomIn {
            from { transform: scale(0.8); opacity: 0; }
            to { transform: scale(1); opacity: 1; }
        }
        #lightboxImage {
            max-width: 100%;
            max-height: 90vh;
            border-radius: 10px;
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
            cursor: pointer;
        }
        .lightbox-close {
            position: absolute;
            top: -40px;
            right: 0;
            background: none;
            border: none;
            color: white;
            font-size: 40px;
            cursor: pointer;
            transition: transform 0.2s;
        }
        .lightbox-close:hover {
            transform: scale(1.2);
        }
        .lightbox-hint {
            text-align: center;
            color: rgba(255, 255, 255, 0.6);
            margin-top: 15px;
            font-size: 14px;
        }
        /* Make images clickable */
        .slide img:not(.logo-left img):not(.logo-right img) {
            cursor: zoom-in;
            transition: transform 0.2s, box-shadow 0.2s;
        }
        .slide img:not(.logo-left img):not(.logo-right img):hover {
            transform: scale(1.02);
            box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
        }
    `;
    document.head.appendChild(lightboxStyle);

    // Close lightbox on overlay click
    lightbox.querySelector('.lightbox-overlay').addEventListener('click', closeLightbox);
    lightbox.querySelector('.lightbox-close').addEventListener('click', closeLightbox);
    lightbox.querySelector('#lightboxImage').addEventListener('click', closeLightbox);

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && lightbox.classList.contains('active')) {
            closeLightbox();
        }
    });
}

function openLightbox(imgSrc) {
    const lightbox = document.getElementById('imageLightbox');
    const lightboxImg = document.getElementById('lightboxImage');
    lightboxImg.src = imgSrc;
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    const lightbox = document.getElementById('imageLightbox');
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
}

// Initialize lightbox and attach to images
function initImageLightbox() {
    createLightbox();

    // Attach click handler to all content images (excluding logos)
    document.querySelectorAll('.slide-content img, .diagram-container img, .schema-image img').forEach(img => {
        img.addEventListener('click', (e) => {
            e.stopPropagation();
            openLightbox(img.src);
        });
    });
}

// Initialize lightbox when DOM is ready
document.addEventListener('DOMContentLoaded', initImageLightbox);
