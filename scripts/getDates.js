const hambutton = document.querySelector('#menu');
const mainnav = document.querySelector('nav ul');


hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('open');
    hambutton.classList.toggle('open');
})

const myBtn = document.querySelector('#darkBtn');
const body = document.body;

myBtn.addEventListener('click', () => {
    myBtn.classList.toggle('dark');
    body.classList.toggle('dark-mode')

})

const pswd1 = document.querySelector("#password");
const pswd2 = document.querySelector("#password2");
const message = document.getElementById("message");

pswd2.addEventListener("focusout", checkSame);

function checkSame() {
    if (pswd1.value !== pswd2.value) {
        message.textContent = "❗Passwords DO NOT MATCH!";
        message.style.visibility = "visible";
		pswd2.style.backgroundColor = "#fff0f3";
		pswd2.value = "";
		pswd2.focus();
        
	} else {
		message.style.visibility = "hidden";
		pswd2.style.backgroundColor = "#fff";
		pswd2.style.color = "#000";
        
	}
}

document.querySelector('form').addEventListener('submit', function(event) {
    const emailInput = document.getElementById('email');
    const emailPattern = /^[a-zA-Z0-9._%+-]+@byui\.edu$/i;
    const errorMessage = document.getElementById('emailError')

    if (!emailPattern.test(emailInput.value)) {
        console.log("Invalid email address");
        errorMessage.textContent = "Please enter a valid email address with the byui.edu domain";
        emailInput.value = '';
        emailInput.focus();
        event.preventDefault();
    }
});

const rangeValue = document.getElementById("rangeValue");
const range = document.getElementById("rating");


range.addEventListener('change', displayRatingValue);
range.addEventListener('input', displayRatingValue);

function displayRatingValue() {
    rangeValue.innerHTML = range.value;
}

const currentYearElement = document.getElementById('currentYear');
const currentYear = new Date().getFullYear();
currentYearElement.textContent = currentYear;

const lastModifiedElement = document.getElementById('lastModified');
const lastModifiedDate = new Date(document.lastModified);
lastModifiedElement.textContent = 'Last modified: ' + lastModifiedDate.toDateString();

const visitsDisplay = document.querySelector(".visits");
let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

if (numVisits !== 0) {
    visitsDisplay.textContent = numVisits;
} else {
    visitsDisplay.textContent = 'Welcome, this is your first visit!';
}

numVisits++;

localStorage.setItem("numVisits-ls", numVisits);