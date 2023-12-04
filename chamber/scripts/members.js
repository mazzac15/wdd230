const baseURL = "https://mazzac15.github.io/wdd230/";
const linksURL = "https://mazzac15.github.io/wdd230/chamber/data/members.json";

async function getMembers() {
    const response = await fetch(linksURL);
    const data = await response.json();
    console.log(data)
    // displayMembers(data.members);
}

getMembers();
