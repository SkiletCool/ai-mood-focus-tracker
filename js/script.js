console.log('App initialized');
const focusRange = document.getElementById('focusRange');
const focusValue = document.getElementById('focusValue');

focusRange.addEventListener('input', () => {
  focusValue.textContent = focusRange.value;
});
