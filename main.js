// Save user preference (e.g., theme preference)
function savePreference(theme) {
  localStorage.setItem('theme', theme);
}

// Retrieve user preference
function getPreference() {
  return localStorage.getItem('theme');
}

// Trigger shake animation on button click
document.getElementById('animateButton').addEventListener('click', function () {
  const element = document.getElementById('animatedDiv');
  element.classList.add('shake');
  
  // After animation ends, remove the class to reset the animation
  element.addEventListener('animationend', function () {
    element.classList.remove('shake');
  });
});

// Check and apply stored theme preference
const savedTheme = getPreference();
if (savedTheme) {
  document.body.classList.add(savedTheme);
}
