const baseURL = "https://mazzac15.github.io/wdd230/";
const linksURL = "https://mazzac15.github.io/wdd230/chamber/data/members.json";

async function getMembers() {
    const response = await fetch(linksURL);
    const data = await response.json();
    
    displayMembers(data.members);
}

getMembers();

const displayMembers = (members) => {
    const cardsContainer = document.getElementById('cards');
    
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
        logo.setAttribute('width', '250');
        logo.setAttribute('height', '250');

        name.textContent = member.name;
        address.textContent = `Address: ${member.address}`;
        phone.textContent = `Phone: ${member.phone}`;
        website.textContent = 'Website';
        website.setAttribute('href', member.website);

        card.appendChild(logo);
        card.appendChild(name);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(website);

        cardsContainer.appendChild(card);
    })
}
