// Data store in the JS file to hold registered users
const savedUsers = [];

// Select form and inputs
const form = document.getElementById('registrationForm');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const retypePasswordInput = document.getElementById('retypePassword');
const messageDiv = document.getElementById('message');

form.addEventListener('submit', function (event) {
  event.preventDefault(); // Stop standard page reload

  const username = usernameInput.value.trim();
  const password = passwordInput.value;
  const retypePassword = retypePasswordInput.value;

  // 1. Check if any field is blank
  if (!username || !password || !retypePassword) {
    showMessage('All fields are required. Please fill in every field.', 'error');
    return;
  }

  // 2. Check if password and retype password match
  if (password !== retypePassword) {
    showMessage('Passwords do not match. Please try again.', 'error');
    return;
  }

  // 3. Save username and password into JS data structures
  const userData = {
    username: username,
    password: password,
    timestamp: new Date().toISOString()
  };

  // Saved in in-memory JS array
  savedUsers.push(userData);

  // Saved in browser local storage
  localStorage.setItem('userData', JSON.stringify(userData));

  console.log('Saved Users Array in JS:', savedUsers);

  // Success message and form reset
  showMessage('Account successfully registered and saved!', 'success');
  form.reset();
});

function showMessage(text, type) {
  messageDiv.textContent = text;
  messageDiv.className = `message ${type}`;
}