const form = document.getElementById("form");
const linkInput = document.getElementById("link");
const parent = document.getElementById("parent");

form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const originalLink = linkInput.value;
    const apiUrl = `https://api.shrtco.de/v2/shorten?url=${originalLink}`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log(data);
        let link = document.createElement("li");
        link.className = "output"
        link.innerHTML = `<a href="${data.result.full_short_link}" target="_blank">${data.result.full_short_link} </a>`;
        parent.prepend(link);

    } catch (e) {

        console.error(e);
        link.innerHTML = `<span>Something went wrong. Either your domain is blocked or invalid url</span>`;
    }

});