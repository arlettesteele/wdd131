document.addEventListener("DOMContentLoaded", () => {
    createcard(temples); 
});

const mainnav = document.querySelector('nav');
const hambutton = document.querySelector('#hamburger-btn');

hambutton.addEventListener('click', () =>
{
    mainnav.classList.toggle('open');
    hambutton.classList.toggle('open');
});


let temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/aba-nigeria-temple/aba-nigeria-temple-5087-main.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/manti-utah-temple/manti-utah-temple-40551-main.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/payson-utah-temple/payson-utah-temple-38451-main.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/yigo-guam-temple/yigo-guam-temple-26495-main.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/washington-d.c.-temple/washington-d.c.-temple-14992-main.jpg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/lima-peru-temple/lima-peru-temple-12721-main.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/mexico-city-mexico-temple/mexico-city-mexico-temple-4060-main.jpg"
    },
    {
        templeName: "Córdoba Argentina",
        location: "Córdoba, Argentina",
        dedicated: "2015, May, 17",
        area: 34369,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/cordoba-argentina-temple/cordoba-argentina-temple-11093-main.jpg"
    },
    {
        templeName: "Sydney Australia",
        location: "Sydney, Australia",
        dedicated: "1991, November, 24",
        area: 30067,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/sydney-australia-temple/sydney-australia-temple-43342-main.jpg"
    },
    {
        templeName: "Melbourne Australia",
        location: "Melbourne, Australia",
        dedicated: "2000, June, 16",
        area: 10700,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/melbourne-australia-temple/melbourne-australia-temple-58608-main.jpg"
    },
];



const homeLink = document.querySelector("#home");
homeLink.addEventListener("click", () => {
    createcard(temples);
})

const oldLink = document.querySelector("#old");
oldLink.addEventListener("click", () => {

    const oldTemples = temples.filter(temple => {
        const year = parseInt(temple.dedicated.split(',')[0]);
        return year < 1900;
    });
    createcard(oldTemples);
});

const newLink = document.querySelector("#new");
newLink.addEventListener("click", () => {
    const newTemples = temples.filter(temple => {
        const year = parseInt(temple.dedicated.split(',')[0]);
        return year > 2000;
    });
    createcard(newTemples);
});

const largeLink = document.querySelector("#large");
largeLink.addEventListener("click", () => {
    const largeTemples = temples.filter(temple => temple.area > 90000);
    createcard(largeTemples);
});

const smallLink = document.querySelector("#small");
smallLink.addEventListener("click", () => {
    const smallTemples = temples.filter(temple => temple.area < 10000);
    createcard(smallTemples);
});


function createcard(filteredTemples) {
    document.querySelector(".container").innerHTML = "";
    filteredTemples.forEach(temple => {

        let card = document.createElement('section');
    
        let name = document.createElement('h2');
        name.textContent = temple.templeName;
    
        let location = document.createElement('p');
        location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
    
        let dedicated = document.createElement('p');
        dedicated.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
    
        let areaTemple = document.createElement('p');
        areaTemple.innerHTML = `<span class="label">Size:</span> ${temple.area}`;

        let image = document.createElement('img');
        image.src = temple.imageUrl;
        image.alt = `Image of ${temple.templeName}`;
        image.loading = "lazy";

        
        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedicated);
        card.appendChild(areaTemple);
        card.appendChild(image);
    
        document.querySelector(".container").appendChild(card);
    })
    
}

createcard(temples);





