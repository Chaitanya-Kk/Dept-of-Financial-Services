    // Theme Toggle
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    if (localStorage.getItem('theme') === 'dark') {
      body.classList.add('dark');
      themeToggle.checked = true;
    }

    themeToggle.addEventListener('change', () => {
      body.classList.toggle('dark');
      localStorage.setItem('theme', body.classList.contains('dark') ? 'dark' : 'light');
    });

    // Modal Functionality
    const modal = document.getElementById('profile-modal');
    const updateProfileBtn = document.getElementById('update-profile-btn');
    const closeBtn = document.querySelector('.close-button');
    const cancelBtn = document.getElementById('cancel-btn');
    const saveBtn = document.getElementById('save-btn');
    const profileImageUpload = document.getElementById('profile-image-upload');
    const modalProfileImage = document.getElementById('modal-profile-image');
    const profileImage = document.getElementById('profile-image');
    const profileName = document.getElementById('profile-name');
    const profileEmail = document.getElementById('profile-email');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');

    updateProfileBtn.addEventListener('click', () => {
      modal.style.display = 'block';
    });

    closeBtn.addEventListener('click', () => {
      modal.style.display = 'none';
    });

    cancelBtn.addEventListener('click', () => {
      modal.style.display = 'none';
      // Reset form to original values
      nameInput.value = profileName.textContent;
      emailInput.value = profileEmail.textContent;
      modalProfileImage.src = profileImage.src;
    });

    profileImageUpload.addEventListener('change', (event) => {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          modalProfileImage.src = e.target.result;
        };
        reader.readAsDataURL(file);
      }
    });

    saveBtn.addEventListener('click', () => {
      // Basic validation
      if (!nameInput.value.trim() || !emailInput.value.trim()) {
        alert('Please fill in all fields.');
        return;
      }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value)) {
        alert('Please enter a valid email address.');
        return;
      }

      // Update profile display
      profileName.textContent = nameInput.value;
      profileEmail.textContent = emailInput.value;
      profileImage.src = modalProfileImage.src;

      // Simulate form submission (log to console)
      console.log('Profile Updated:', {
        name: nameInput.value,
        email: emailInput.value,
        image: modalProfileImage.src
      });

      modal.style.display = 'none';
    });

    // Close modal when clicking outside
    window.addEventListener('click', (event) => {
      if (event.target === modal) {
        modal.style.display = 'none';
        // Reset form to original values
        nameInput.value = profileName.textContent;
        emailInput.value = profileEmail.textContent;
        modalProfileImage.src = profileImage.src;
      }
    });