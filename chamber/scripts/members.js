const baseURL = "https://mazzac15.github.io/wdd230/";
const membersURL = "https://mazzac15.github.io/wdd230/chamber/data/members.json";
const cards = document.querySelector('#cards');

async function getMembers() {
    const response = await fetch(membersURL);
    const data = await response.json();
    // console.table(data.members)
    
    displayMembers(data.members);
}

getMembers();

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

        cards.appendChild(card);
    })
}

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
