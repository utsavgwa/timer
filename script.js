const inputContainer = document.getElementById('input-container');
// to get results from input field
const countdownForm = document.getElementById('countdownForm');
// to modify input date element
const dateEl = document.getElementById('date-picker');

const countdownEl = document.getElementById('countdown');
const countdownElTitle = document.getElementById('countdown-title');
const countdownElBtn = document.getElementById('countdown-button');
const timeElements = document.querySelectorAll('span')

const second = 1000;
const minute = second*60;
const hour = minute*60;
const day = hour*24;

let countdownTitle = '';
let countdownDate = '';
// countdownValue is set with Date Object
let countdownValue = Date;

// set minimum date input with today's date
const today = new Date().toISOString().split('T')[0];

// console.log(today);
dateEl.setAttribute('min', today);


// function to populate countdown
function updateDOM(){

    // getting current moment and time, and how far from jan 1, 1970 it is
    const now = new Date().getTime();
    const distance = countdownValue - now;
    console.log(distance);

    const days = Math.floor(distance/day);
    const hours = Math.floor((distance%day)/hour);
    const minutes = Math.floor((distance%hour)/minute);
    const seconds = Math.floor((distance%minute)/second);
    console.log(days, hours, minutes, seconds);
    //populating countdown elements
    countdownElTitle.textContent = `${countdownTitle}`;
    timeElements[0].textContent= `${days}`;
    timeElements[1].textContent= `${hours}`;
    timeElements[2].textContent= `${minutes}`;
    timeElements[3].textContent= `${seconds}`;

    // hide input container
    inputContainer.hidden = true;
    // show countdown
    countdownEl.hidden = false;
}
// take values from form
function updateCountdown(e){
    e.preventDefault();
    countdownTitle = e.srcElement[0].value;
    countdownDate = e.srcElement[1].value;
    console.log(countdownTitle, countdownDate);

    // get number version of current date, then update DOM
    // how far the given date in countdown timer is away from 1970
    countdownValue = new Date(countdownDate).getTime();
    console.log(countdownValue);
    updateDOM();
}

// event listener
countdownForm.addEventListener('submit', updateCountdown)