const baseURL = "https://mazzac15.github.io/wdd230/";
const membersURL = "https://mazzac15.github.io/wdd230/chamber/data/members.json";
const container = document.querySelector('#cards');
const direct = document.querySelector('.directory-main');

async function getMembers(page) {
    try {
        const response = await fetch(membersURL);
        const data = await response.json();
        console.table(data.members)

        if (page === 'directory') {
            displayMembers(data.members);  
        } else if (page === 'home') {
            displayGoldSilverMembers(data.members);
            rotateSpotlights(data.members);
        } else {
            console.error('Error fetchin or displaying members:', error);
        }
    } catch (error) {
    }
    
}
//directory page
getMembers('directory');


const displayMembers = (members) => {
    members.forEach((member) => {
        let card = document.createElement('section');
        let name = document.createElement('h2');
        let logo = document.createElement('img');
        let address = document.createElement('p');
        let phone = document.createElement('p');
        let website = document.createElement('a');
        
        logo.setAttribute('src', member.image)
        logo.setAttribute('alt', `company logo`)
        logo.setAttribute('loading', 'lazy');
        logo.setAttribute('width', '340');
        logo.setAttribute('height', '440');

        name.textContent = `${member.name}`;
        address.innerHTML = `${member.address}<br>${member.city}`;
        phone.textContent = `${member.phone}`;
        website.textContent = `${member.website}`
        website.setAttribute('href', member.website);

        card.appendChild(logo);
        card.appendChild(name);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(website);

        container.appendChild(card);
})
}



// spotlights on home page

function displayGoldSilverMembers(members) {
    const spotlightMembers = members.filter(member =>
        ['Gold', 'Silver'].includes(member.membership)
    );
    displaySpotlightMembers(spotlightMembers);
}



function displaySpotlightMembers(members) {
    const spotlightContainer = document.getElementById('spotlight-container');
    spotlightContainer.innerHTML = '';

    members.forEach(member => {
        const spotlightCard = document.createElement('section');
        spotlightCard.classList.add('spotlight-card');

        const logo = document.createElement('img');
        logo.setAttribute('src', member.image);
        logo.setAttribute('alt', `company logo`);
        logo.setAttribute('loading', 'lazy');
        logo.setAttribute('width', '100');
        logo.setAttribute('height', '100');

        const name = document.createElement('h2');
        name.textContent = member.name;

        const address = document.createElement('p');
        address.textContent = member.address;

        const phone = document.createElement('p');
        phone.textContent = `Phone: ${member.phone}`;

        const website = document.createElement('a');
        website.textContent = 'Visit Website';
        website.setAttribute('href', member.website);

        spotlightCard.appendChild(logo);
        spotlightCard.appendChild(name);
        spotlightCard.appendChild(address);
        spotlightCard.appendChild(phone);
        spotlightCard.appendChild(website);

        spotlightContainer.appendChild(spotlightCard);
    });
}
const spotlightContainer = document.getElementById('spotlight-container')

function rotateSpotlights(members) {
    let goldSilverMembers = members.filter(member =>
        ['Gold', 'Silver'].includes(member.membership));

    goldSilverMembers = shuffleArray(goldSilverMembers);

    let counter = 0;

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }
    
    const displayMember = () => {
        const member = goldSilverMembers[counter];
        console.log('Displaying member:', member)

        displaySpotlightMembers([member]);
      
        counter = (counter + 1) % goldSilverMembers.length;

        if (counter === 0) {
            goldSilverMembers = shuffleArray(goldSilverMembers);
        }
    };
    displayMember();

    console.log('rotating spotlight');

    setInterval(() => {
        displayMember();
        console.log('Rotating spotlight');
    }, 10000);
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

getMembers('home');


const gridButton = document.querySelector("#grid-view");
const listButton = document.querySelector("#list-view");
const display = document.querySelector(".directory-main")

gridButton.addEventListener("click", () => {
    display.classList.add("grid-view");
    display.classList.remove("list-view");
});

listButton.addEventListener("click", () => {
    display.classList.remove("grid-view");
    display.classList.add("list-view");
});


