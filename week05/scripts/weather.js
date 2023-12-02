const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const url = 'https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.63&units=imperial&appid=aec580674ccfff0b30adc9d8b9af6b31'

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayResults(data);
            // console.log(data);
        
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
            console.log(error);
    }
}

apiFetch();

const displayResults = (data) => {
    currentTemp.innerHTML = `${data.main.temp}&deg/F`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;

    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = `${desc}`;

    

    
}