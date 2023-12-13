const baseURL = "https://mazzac15.github.io/wdd230/";
const linksURL = "https://mazzac15.github.io/wdd230/data/links.json";

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data.weeks);
}

getLinks();

const displayLinks = (weeks) => {
    let card = document.querySelector('.card1')
    let title = document.createElement('h3');
    let learningActivities = document.createElement('div');

    title.textContent = 'Learning Activities';
    card.appendChild(title);
    card.appendChild(learningActivities);
    
    weeks.forEach((week) => {
        let weekElement = document.createElement('p');
       
        weekElement.textContent = `${week.week}: `;

        week.links.forEach((link) => {
            const linkElement = document.createElement('a');
            linkElement.href = `${baseURL}${link.url}`;
            linkElement.textContent = link.title;

            weekElement.appendChild(linkElement);

            const seperator = document.createTextNode(` | `);
            weekElement.appendChild(seperator);
        });
        
        learningActivities.appendChild(weekElement);
  
        weekElement.removeChild(weekElement.lastChild);  
        
        
        
    })
}