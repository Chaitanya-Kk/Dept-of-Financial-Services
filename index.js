// DOM Ready
document.addEventListener('DOMContentLoaded', function() {
   // Initialize all functions
    initDateTime();
    initThemeToggle();
    initCarousel();
    initSlider();
    initBackToTop();
    initSearch();
    initVisitorCounter();
    initFontSizeControl();
    initAccessibility();
    initChatWidget();
});

// Date and Time Display
function initDateTime() {
    function updateDateTime() {
        const now = new Date();
        const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };
        const timeOptions = { hour: '2-digit', minute: '2-digit', second: '2-digit' };
        
        document.getElementById('currentDate').textContent = now.toLocaleDateString('en-IN', dateOptions);
        document.getElementById('currentTime').textContent = now.toLocaleTimeString('en-IN', timeOptions);
    }
    
    updateDateTime();
    setInterval(updateDateTime, 1000);
}

// Theme Toggle (Dark Mode)
function initThemeToggle() {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
        themeToggle.checked = true;
    }
    
    themeToggle.addEventListener('change', function() {
        if (this.checked) {
            body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark');
        } else {
            body.classList.remove('dark-mode');
            localStorage.setItem('theme', 'light');
        }
    });
}

// 3D Carousel Control
function initCarousel() {
    const pauseBtn = document.querySelector('.pause-btn');
    const inner = document.querySelector('.inner');
    let isPaused = false;
    
    if (pauseBtn && inner) {
        pauseBtn.addEventListener('click', function() {
            isPaused = !isPaused;
            if (isPaused) {
                inner.classList.add('paused');
                pauseBtn.textContent = 'Play';
            } else {
                inner.classList.remove('paused');
                pauseBtn.textContent = 'Pause';
            }
        });
        
        // Keyboard navigation for carousel
        document.querySelectorAll('.card').forEach((card, index) => {
            card.addEventListener('keydown', function(e) {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    const link = this.querySelector('a');
                    if (link) link.click();
                }
            });
        });
    }
}

// Hero Slider
function initSlider() {
    let currentSlide = 0;
    const slides = document.querySelectorAll('.slide');
    
    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
    }
    
    window.changeSlide = function(direction) {
        currentSlide += direction;
        if (currentSlide >= slides.length) currentSlide = 0;
        if (currentSlide < 0) currentSlide = slides.length - 1;
        showSlide(currentSlide);
    };
    
    // Auto advance slider
    if (slides.length > 0) {
        setInterval(() => {
            changeSlide(1);
        }, 5000);
    }
}

// Back to Top Button
function initBackToTop() {
    const backToTopBtn = document.getElementById('backToTop');
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopBtn.classList.remove('hidden');
        } else {
            backToTopBtn.classList.add('hidden');
        }
    });
    
    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Search Functionality
function initSearch() {
    const searchInput = document.getElementById('searchInput');
    
    if (searchInput) {
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                const searchTerm = this.value.trim();
                if (searchTerm) {
                    // Redirect to search results page
                    window.location.href = `search.html?q=${encodeURIComponent(searchTerm)}`;
                }
            }
        });
    }
}

// Visitor Counter (Simulated)
function initVisitorCounter() {
    const visitorCount = document.getElementById('visitorCount');
    const todayVisitors = document.getElementById('todayVisitors');
    const pageViews = document.getElementById('pageViews');
    
    if (visitorCount) {
        // Simulate visitor count increment
        let count = parseInt(localStorage.getItem('visitorCount') || '1636158');
        count++;
        localStorage.setItem('visitorCount', count.toString());
        visitorCount.textContent = count.toLocaleString();
    }
    
    if (todayVisitors) {
        // Simulate today's visitors
        const today = Math.floor(Math.random() * 1000) + 2000;
        todayVisitors.textContent = today.toLocaleString();
    }
    
    if (pageViews) {
        // Simulate page views
        let views = parseInt(localStorage.getItem('pageViews') || '5234789');
        views += Math.floor(Math.random() * 10) + 1;
        localStorage.setItem('pageViews', views.toString());
        pageViews.textContent = views.toLocaleString();
    }
}

// Font Size Control
function changeFontSize(action) {
    const body = document.body;
    const currentSize = parseInt(window.getComputedStyle(body).fontSize);
    
    switch(action) {
        case 'increase':
            if (currentSize < 20) {
                body.style.fontSize = (currentSize + 2) + 'px';
            }
            break;
        case 'decrease':
            if (currentSize > 12) {
                body.style.fontSize = (currentSize - 2) + 'px';
            }
            break;
        case 'normal':
            body.style.fontSize = '16px';
            break;
    }
}

// Accessibility Features
function initAccessibility() {
    // Skip to main content link
    const skipLink = document.querySelector('a[href="#main-content"]');
    if (skipLink) {
        skipLink.addEventListener('click', function(e) {
            e.preventDefault();
            const mainContent = document.getElementById('main-content');
            if (mainContent) {
                mainContent.focus();
                mainContent.scrollIntoView();
            }
        });
    }
    
    // Keyboard navigation improvements
    document.addEventListener('keydown', function(e) {
        // Alt + H for Home
        if (e.altKey && e.key === 'h') {
            e.preventDefault();
            window.location.href = 'index.html';
        }
        // Alt + S for Search
        if (e.altKey && e.key === 's') {
            e.preventDefault();
            const searchInput = document.getElementById('searchInput');
            if (searchInput) searchInput.focus();
        }
    });
}

// Chat Widget
function initChatWidget() {
    window.toggleChat = function() {
        const chatBox = document.getElementById('chatBox');
        chatBox.classList.toggle('hidden');
    };
    
    window.sendMessage = function(event) {
        event.preventDefault();
        const input = document.getElementById('chatInput');
        const messagesContainer = document.getElementById('chatMessages');
        
        if (input.value.trim()) {
            // Add user message
            const userMessage = document.createElement('div');
            userMessage.className = 'bg-blue-100 p-3 rounded mb-2 ml-auto max-w-xs';
            userMessage.innerHTML = `<p class="text-sm">${input.value}</p>`;
            messagesContainer.appendChild(userMessage);
            
            // Simulate response
            setTimeout(() => {
                const botMessage = document.createElement('div');
                botMessage.className = 'bg-gray-100 p-3 rounded mb-2 max-w-xs';
                botMessage.innerHTML = `<p class="text-sm">Thank you for your message. A support representative will assist you shortly.</p>`;
                messagesContainer.appendChild(botMessage);
                messagesContainer.scrollTop = messagesContainer.scrollHeight;
            }, 1000);
            
            input.value = '';
            messagesContainer.scrollTop = messagesContainer.scrollHeight;
        }
    };
}

// Print functionality
window.printPage = function() {
    window.print();
};

// Form Validation (for other pages)
window.validateForm = function(formId) {
    const form = document.getElementById(formId);
    if (!form) return false;
    
    const inputs = form.querySelectorAll('input[required], textarea[required], select[required]');
    let isValid = true;
    
    inputs.forEach(input => {
        if (!input.value.trim()) {
            input.classList.add('border-red-500');
            isValid = false;
        } else {
            input.classList.remove('border-red-500');
        }
    });
    
    return isValid;
};

// Lazy Loading for Images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img.lazy').forEach(img => {
        imageObserver.observe(img);
    });
}

// Service Worker Registration (for PWA support)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => console.log('SW registered:', registration))
            .catch(error => console.log('SW registration failed:', error));
    });
}