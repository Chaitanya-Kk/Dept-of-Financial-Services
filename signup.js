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

// Form Handling
const loginTab = document.getElementById('login-tab');
const signupTab = document.getElementById('signup-tab');
const submitBtn = document.getElementById('submit-btn');
const resetBtn = document.getElementById('reset-btn');
const signupFields = document.getElementById('signup-fields');
const formContent = document.getElementById('form-content');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const nameInput = document.getElementById('name');
const confirmPasswordInput = document.getElementById('confirm-password');
const passwordToggle = document.getElementById('password-toggle');
const confirmPasswordToggle = document.getElementById('confirm-password-toggle');
let isSignup = false;

// Tab Switching
loginTab.addEventListener('click', () => {
  isSignup = false;
  loginTab.classList.add('active');
  signupTab.classList.remove('active');
  loginTab.setAttribute('aria-selected', 'true');
  signupTab.setAttribute('aria-selected', 'false');
  submitBtn.textContent = 'Login';
  signupFields.classList.add('hidden');
  formContent.setAttribute('aria-labelledby', 'login-tab');
  resetForm();
});

signupTab.addEventListener('click', () => {
  isSignup = true;
  signupTab.classList.add('active');
  loginTab.classList.remove('active');
  signupTab.setAttribute('aria-selected', 'true');
  loginTab.setAttribute('aria-selected', 'false');
  submitBtn.textContent = 'Signup';
  signupFields.classList.remove('hidden');
  formContent.setAttribute('aria-labelledby', 'signup-tab');
  resetForm();
});

// Password Visibility Toggle
function togglePasswordVisibility(input, toggle) {
  const isPassword = input.type === 'password';
  input.type = isPassword ? 'text' : 'password';
  toggle.innerHTML = isPassword
    ? '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.542-7a9.975 9.975 0 011.662-3.255M9.879 9.879l4.243 4.243M14.121 14.121L9.879 9.879M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7a9.975 9.975 0 01-1.662 3.255" />'
    : '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />';
}

passwordToggle.addEventListener('click', () => togglePasswordVisibility(passwordInput, passwordToggle));
confirmPasswordToggle.addEventListener('click', () => togglePasswordVisibility(confirmPasswordInput, confirmPasswordToggle));

// Validation
function validateEmail() {
  const email = emailInput.value;
  const emailError = document.getElementById('email-error');
  const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  emailInput.classList.toggle('invalid', !isValid && email);
  emailError.classList.toggle('hidden', isValid || !email);
  return isValid || !email;
}

function validatePassword() {
  const password = passwordInput.value;
  const passwordError = document.getElementById('password-error');
  const isValid = password.length >= 8;
  passwordInput.classList.toggle('invalid', !isValid && password);
  passwordError.classList.toggle('hidden', isValid || !password);
  return isValid || !password;
}

function validateName() {
  const name = nameInput.value;
  const nameError = document.getElementById('name-error');
  const isValid = name.trim().length > 0;
  nameInput.classList.toggle('invalid', !isValid && name);
  nameError.classList.toggle('hidden', isValid || !name);
  return isValid || !name;
}

function validateConfirmPassword() {
  const password = passwordInput.value;
  const confirmPassword = confirmPasswordInput.value;
  const confirmPasswordError = document.getElementById('confirm-password-error');
  const isValid = password === confirmPassword && confirmPassword.length > 0;
  confirmPasswordInput.classList.toggle('invalid', !isValid && confirmPassword);
  confirmPasswordError.classList.toggle('hidden', isValid || !confirmPassword);
  return isValid || !confirmPassword;
}

emailInput.addEventListener('input', validateEmail);
passwordInput.addEventListener('input', () => {
  validatePassword();
  if (isSignup) validateConfirmPassword();
});
nameInput.addEventListener('input', validateName);
confirmPasswordInput.addEventListener('input', validateConfirmPassword);

// Reset Form
function resetForm() {
  emailInput.value = '';
  passwordInput.value = '';
  nameInput.value = '';
  confirmPasswordInput.value = '';
  emailInput.classList.remove('invalid');
  passwordInput.classList.remove('invalid');
  nameInput.classList.remove('invalid');
  confirmPasswordInput.classList.remove('invalid');
  document.getElementById('email-error').classList.add('hidden');
  document.getElementById('password-error').classList.add('hidden');
  document.getElementById('name-error').classList.add('hidden');
  document.getElementById('confirm-password-error').classList.add('hidden');
  passwordInput.type = 'password';
  confirmPasswordInput.type = 'password';
  passwordToggle.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />';
  confirmPasswordToggle.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />';
}

resetBtn.addEventListener('click', resetForm);

// Submit Handling
submitBtn.addEventListener('click', () => {
  const emailValid = validateEmail();
  const passwordValid = validatePassword();
  let isValid = emailValid && passwordValid;

  if (isSignup) {
    const nameValid = validateName();
    const confirmPasswordValid = validateConfirmPassword();
    isValid = isValid && nameValid && confirmPasswordValid;

    if (isValid) {
      const name = nameInput.value;
      const email = emailInput.value;
      const password = passwordInput.value;
      console.log('Signup:', { name, email, password });
      // Add signup logic here (e.g., API call)
      alert('Signup successful! (Demo)');
      resetForm();
      window.location.href = "dashboard.html";
    }
  } else {
    if (isValid) {
      const email = emailInput.value;
      const password = passwordInput.value;
      console.log('Login:', { email, password });
      // Add login logic here (e.g., API call)
      alert('Login successful! (Demo)');
      resetForm();
      window.location.href = "dashboard.html"; // Redirect to dashboard.html after login
    }
  }
});