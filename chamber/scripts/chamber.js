// hamburger menu button //
const hambutton = document.querySelector('#menu');
const mainnav = document.querySelector('nav ul');


hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('open');
    hambutton.classList.toggle('open');
})

document.addEventListener('DOMContentLoaded', function () {
    const bannerAd = document.querySelector('.banner-ad');
    const closeButton = document.querySelector('.banner-close');

    closeButton.addEventListener('click', function() {
        console.log('Close button clicked');
        bannerAd.style.display = 'none';
    });
});

// Benefit levels for membership join form //
function showBenefits(level) {
    const collapsibleContent = document.getElementById(`${level}-content`);
    const maxHeight = collapsibleContent.style.maxHeight;

    if (!maxHeight || maxHeight === "0px") {
        collapsibleContent.style.maxHeight = collapsibleContent.scrollHeight + "px";
    } else {
        collapsibleContent.style.maxHeight = "0";
    }
}

// Get Date //
const currentYearElement = document.getElementById('currentYear');
const currentYear = new Date().getFullYear();
currentYearElement.textContent = currentYear;

// Last date modified //
const lastModifiedElement = document.getElementById('lastModified');
const lastModifiedDate = new Date(document.lastModified);
lastModifiedElement.textContent = 'Last modified: ' + lastModifiedDate.toDateString();

//weather//
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const weatherDescription = document.querySelector('#weather-description');
const forecastTemp = document.querySelector('#forecast-temp');
const forecastIcon = document.querySelector('#forecast-icon');
const dayOfWeek = document.querySelector('#day-of-week');
const forecastDescription = document.querySelector('#forecast-description');
const currentURL = 'https://api.openweathermap.org/data/2.5/weather?lat=29.13&lon=-80.99&units=imperial&appid=aec580674ccfff0b30adc9d8b9af6b31'
const forecastURL = 'https://api.openweathermap.org/data/2.5/forecast/?lat=29.13&lon=-80.99&units=imperial&cnt=30&appid=aec580674ccfff0b30adc9d8b9af6b31'

async function apiFetch1() {
    try {
        const response = await fetch(currentURL);
        if (response.ok) {
            const data = await response.json();
            currentWeatherDisplay(data);
            console.log(data);
        
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
            console.log(error);
    }
}

async function apiFetch2() {
    try {
        const response = await fetch(forecastURL);
        if (response.ok) {
            const data = await response.json();
            forecastWeatherDisplay(data);
            console.log(data);
        
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
            console.log(error);
    }
}

apiFetch1();
apiFetch2();

const currentWeatherDisplay = (data) => {
    
    currentTemp.innerHTML = '';
    weatherDescription.textContent = '';

    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;

    currentTemp.innerHTML = `<div class="current-entry">
        <img class="current-icon" src="${iconsrc}" alt="${data.weather[0].description}">
        <span class="current-temp">${Math.floor(data.main.temp)}&deg;F</span>
        <figcaption class="current-description">${data.weather[0].description}</figcaption>
    </div>`;
};

const forecastWeatherDisplay = (data) => {
    forecastTemp.innerHTML = '';
    forecastDescription.textContent = '';

    const groupedData = groupDataByDay(data.list);
    const today = new Date().toLocaleDateString('en-US');
    let daysDisplayed = 0;

    groupedData.forEach(dayData => {
        const date = new Date(dayData[0].dt * 1000).toLocaleDateString('en-US');

        
        if (date !== today && daysDisplayed < 3) {
            const maxTempEntry = findMaxTemperature(dayData);
            if (maxTempEntry) {
                const forecastIconsrc = `https://openweathermap.org/img/w/${maxTempEntry.weather[0].icon}.png`;

                const forecastEntry = document.createElement('div');
                forecastEntry.classList.add('forecast-entry');

                const entryDate = new Date(maxTempEntry.dt * 1000);
                const dayOfWeek = entryDate.toLocaleDateString('en-US', { weekday: 'long' });

                forecastEntry.innerHTML = `
                    <div>${dayOfWeek}</div>
                    <img class="forecast-icon" src="${forecastIconsrc}" alt="${maxTempEntry.weather[0].description}">
                    <span class="forecast-temp">${Math.floor(maxTempEntry.main.temp_max)}&deg;F</span>
                    <figcaption class="forecast-description">${maxTempEntry.weather[0].description}</figcaption>
                `;

                forecastTemp.appendChild(forecastEntry);
                daysDisplayed++;
            }
        }    
    });
};

// Function to group data by day
const groupDataByDay = (data) => {
    const groupedData = {};

    data.forEach(entry => {
        const date = new Date(entry.dt * 1000).toLocaleDateString('en-US');

        if (!groupedData[date]) {
            groupedData[date] = [];
        }

        groupedData[date].push(entry);
    });

    return Object.values(groupedData);
};

const findMaxTemperature = (dayData) => {
    let maxTempEntry = null;
    let maxTemp = -Infinity;

    dayData.forEach(entry => {
        if (entry.main.temp_max > maxTemp) {
            maxTemp = entry.main.temp_max;
            maxTempEntry = entry;
        }
    });

    return maxTempEntry;
};


document.addEventListener('DOMContentLoaded', function () {
    if (localStorage.getItem('lastVisit')) {
        const lastVisitDate = new Date(localStorage.getItem('lastVisit'));
        const timeDifference = new Date() - lastVisitDate;
        const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

        if (daysDifference === 0) {
            document.getElementById('days').innerText = "Back so soon! Awesome!";
        } else {
            const message = (daysDifference === 1) ? "day" : "days";
            document.getElementById('days').innerText = `You last visited ${daysDifference} ${message} ago.`;
        }
    } else {
        document.getElementById('days').innerText = "Welcome! Let us know if you have any questions.";
    }

    const form = document.querySelector('form');
    form.addEventListener('submit', function () {
        const currentTimestamp = new Date().toISOString();
        document.getElementById('timestamp').value = currentTimestamp;
    });
    localStorage.setItem('lastVisit', new Date().toISOString());
});



    



    