document.addEventListener('DOMContentLoaded', function () {
  const registerTab = document.getElementById('registerTab');
  const loginTab = document.getElementById('loginTab');
  const registerForm = document.getElementById('register');
  const loginForm = document.getElementById('login');
  const passwordInput = document.getElementById('register_password');
  const passwordStrength = document.getElementById('passwordStrength');

  const popup = document.getElementById('popup');
  const popupMessage = document.getElementById('popup-message');
  const popupClose = document.getElementById('popup-close');

  function showPopup(message) {
    popupMessage.textContent = message;
    popup.style.display = 'flex';
  }

  popupClose.addEventListener('click', () => {
    popup.style.display = 'none';
  });

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

  registerForm.style.display = 'flex';
  loginForm.style.display = 'none';

  registerForm.addEventListener('submit', function (e) {
    e.preventDefault();
    let valid = true;

    document.getElementById('register_errorname').textContent = '';
    document.getElementById('errornumber').textContent = '';
    document.getElementById('erroremail').textContent = '';
    document.getElementById('errorpassword').textContent = '';

    const userid = document.getElementById('register_userid').value.trim();
    if (userid.length < 3) {
      document.getElementById('register_errorname').textContent = 'User ID must be at least 3 characters';
      valid = false;
    }

    const number = document.getElementById('number').value.trim();
    if (!/^\d{10}$/.test(number)) {
      document.getElementById('errornumber').textContent = 'Enter a valid 10-digit number';
      valid = false;
    }

    const email = document.getElementById('email').value.trim();
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      document.getElementById('erroremail').textContent = 'Invalid email format';
      valid = false;
    }

    const password = passwordInput.value;
    if (password.length < 6) {
      document.getElementById('errorpassword').textContent = 'Password must be at least 6 characters';
      valid = false;
    }

    const checkbox = registerForm.querySelector('.check-box');
    if (!checkbox.checked) {
      showPopup('You must agree to the terms and conditions.');
      valid = false;
    }

    if (valid) {
      showPopup('Registration Successful!');
      registerForm.reset();
      passwordStrength.textContent = '';
    }
  });

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
      showPopup('Login Successful!');
      loginForm.reset();
    }
  });
});
