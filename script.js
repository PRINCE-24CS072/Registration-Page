document.addEventListener('DOMContentLoaded', function () {
  const registerTab = document.getElementById('registerTab');
  const loginTab = document.getElementById('loginTab');
  const registerForm = document.getElementById('register');
  const loginForm = document.getElementById('login');

  // Tab switching
  registerTab.addEventListener('click', function () {
    registerTab.classList.add('active');
    loginTab.classList.remove('active');
    registerForm.style.display = 'flex';
    loginForm.style.display = 'none';
  });

  loginTab.addEventListener('click', function () {
    loginTab.classList.add('active');
    registerTab.classList.remove('active');
    loginForm.style.display = 'flex';
    registerForm.style.display = 'none';
  });

  // Show register form by default
  registerForm.style.display = 'flex';
  loginForm.style.display = 'none';

  // Password strength meter for registration
  const passwordInput = document.getElementById('register_password');
  const passwordStrength = document.getElementById('passwordStrength');
  if (passwordInput) {
    passwordInput.addEventListener('input', function () {
      const val = passwordInput.value;
      let strength = '';
      let color = '';
      if (val.length < 6) {
        strength = 'Too short';
        color = 'red';
      } else if (!/[A-Z]/.test(val) || !/[0-9]/.test(val)) {
        strength = 'Weak (add numbers & uppercase)';
        color = 'orange';
      } else if (val.length >= 8 && /[A-Z]/.test(val) && /[0-9]/.test(val) && /[@$!%*?&]/.test(val)) {
        strength = 'Strong';
        color = 'green';
      } else {
        strength = 'Moderate';
        color = 'blue';
      }
      passwordStrength.textContent = `Password Strength: ${strength}`;
      passwordStrength.style.color = color;
    });
  }

  // Registration form validation
  registerForm.addEventListener('submit', function (e) {
    e.preventDefault();
    let valid = true;

    // Clear previous errors
    document.getElementById('register_errorname').textContent = '';
    document.getElementById('errornumber').textContent = '';
    document.getElementById('erroremail').textContent = '';
    document.getElementById('errorpassword').textContent = '';

    // User ID validation
    const userid = document.getElementById('register_userid').value.trim();
    if (userid.length < 3) {
      document.getElementById('register_errorname').textContent = 'User ID must be at least 3 characters';
      valid = false;
    }

    // Mobile number validation
    const number = document.getElementById('number').value.trim();
    if (!/^\d{10}$/.test(number)) {
      document.getElementById('errornumber').textContent = 'Enter a valid 10-digit number';
      valid = false;
    }

    // Email validation
    const email = document.getElementById('email').value.trim();
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      document.getElementById('erroremail').textContent = 'Invalid email format';
      valid = false;
    }

    // Password validation
    const password = passwordInput.value;
    if (password.length < 6) {
      document.getElementById('errorpassword').textContent = 'Password must be at least 6 characters';
      valid = false;
    }

    // Checkbox validation
    const checkbox = registerForm.querySelector('.check-box');
    if (!checkbox.checked) {
      alert('You must agree to the terms and conditions.');
      valid = false;
    }

    if (valid) {
      alert('Registration Successful!');
      registerForm.reset();
      passwordStrength.textContent = '';
    }
  });

  // Login form validation
  loginForm.addEventListener('submit', function (e) {
    e.preventDefault();
    document.getElementById('login_errorname').textContent = '';
    document.getElementById('login_errorpassword').textContent = '';
    let valid = true;

    const userid = document.getElementById('login_userid').value.trim();
    if (userid.length < 3) {
      document.getElementById('login_errorname').textContent = 'User ID must be at least 3 characters';
      valid = false;
    }
    const password = document.getElementById('login_password').value;
    if (password.length < 6) {
      document.getElementById('login_errorpassword').textContent = 'Password must be at least 6 characters';
      valid = false;
    }
    if (valid) {
      alert('Login Successful!');
      loginForm.reset();
    }
  });
});