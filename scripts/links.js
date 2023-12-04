const baseURL = "https://mazzac15.github.io/wdd230/";
const linksURL = "https://mazzac15.github.io/wdd230/links.json";

async function getLinksData() {
    const response = await fetch(linksURL);
    const data = await response.json();
    console.table(data);
    // displayLinksData(data.links);
}

getLinksData();