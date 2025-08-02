const form = document.getElementById('registrationForm');
const result = document.getElementById('result');


const password = document.getElementById('password');
const strengthMessage = document.getElementById('strengthMessage');
password.addEventListener('input', () => {
  const val = password.value;
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
  strengthMessage.textContent = `Password Strength: ${strength}`;
  strengthMessage.style.color = color;
});


function showError(id, message) {
  document.getElementById(id).textContent = message;
}


function clearErrors() {
  ['fullnameError','emailError','phoneError','usernameError','passwordError','confirmPasswordError'].forEach(id => showError(id, ''));
}

form.addEventListener('submit', function (e) {
  e.preventDefault();
  clearErrors();
  result.textContent = '';
  let valid = true;

  
  const fullname = document.getElementById('fullname').value.trim();
  if (fullname === '') {
    showError('fullnameError', 'Full Name is required');
    valid = false;
  }

  
  const email = document.getElementById('email').value.trim();
  if (email === '') {
    showError('emailError', 'Email is required');
    valid = false;
  } else if (!/^\S+@\S+\.\S+$/.test(email)) {
    showError('emailError', 'Invalid email format');
    valid = false;
  }

 
  const phone = document.getElementById('phone').value.trim();
  if (phone === '') {
    showError('phoneError', 'Phone number is required');
    valid = false;
  } else if (!/^\d{10}$/.test(phone)) {
    showError('phoneError', 'Enter a valid 10-digit number');
    valid = false;
  }

  const username = document.getElementById('username').value.trim();
  if (username === '') {
    showError('usernameError', 'Username is required');
    valid = false;
  }


  const pwd = password.value;
  if (pwd.length < 6) {
    showError('passwordError', 'Password must be at least 6 characters');
    valid = false;
  }


  const confirmPwd = document.getElementById('confirmPassword').value;
  if (confirmPwd !== pwd) {
    showError('confirmPasswordError', 'Passwords do not match');
    valid = false;
  }

  if (valid) {
    result.style.color = 'green';
    result.textContent = 'Registration Successful!';
    form.reset();
    strengthMessage.textContent = '';
    alert('Registration Successful!'); 
  } else {
    result.style.color = 'red';
    result.textContent = 'Please fix the errors above and try again.';
  }
});