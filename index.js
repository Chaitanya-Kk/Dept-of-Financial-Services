// Carousel Pause Button
    const inner = document.querySelector('.inner');
    const pauseBtn = document.querySelector('.pause-btn');
    let isPaused = false;

    pauseBtn.addEventListener('click', () => {
      isPaused = !isPaused;
      inner.style.animationPlayState = isPaused ? 'paused' : 'running';
      pauseBtn.textContent = isPaused ? 'Play' : 'Pause';
      pauseBtn.setAttribute('aria-label', isPaused ? 'Play carousel animation' : 'Pause carousel animation');
    });

    // Theme Toggle
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    // Load saved theme from localStorage
    if (localStorage.getItem('theme') === 'dark') {
      body.classList.add('dark');
      themeToggle.checked = true;
    }

    themeToggle.addEventListener('change', () => {
      body.classList.toggle('dark');
      localStorage.setItem('theme', body.classList.contains('dark') ? 'dark' : 'light');
    });