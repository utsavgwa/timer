const inputContainer = document.getElementById('input-container');

// to get results from input field
const countdownForm = document.getElementById('countdownForm');
// to modify input date element
const dateEl = document.getElementById('date-picker');

// set minimum date input with today's date
const today = new Date().toISOString().split('T')[0];
// console.log(today);
dateEl.setAttribute('min', today);