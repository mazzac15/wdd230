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

const currentYearElement = document.getElementById('currentYear');
const currentYear = new Date().getFullYear();
currentYearElement.textContent = currentYear;

const lastModifiedElement = document.getElementById('lastModified');
const lastModifiedDate = new Date(document.lastModified);
lastModifiedElement.textContent = 'Last modified: ' + lastModifiedDate.toDateString();