const searchBar = document.querySelector('.header__input');
const line = document.querySelector('.cards');
const cards = document.querySelectorAll('.card')
const navigation = document.querySelectorAll(".nav")
const themeBtn = document.querySelector('.header__theme-button');

const cardArr = [
{
    title: "DevLens",
    text: "Quickly inspect page layouts and visualize element boundaries",
    completed: false,
    img: "/assets/images/logo-devlens.svg",
    id: 1,
},
{
    title: "StyleSpy",
    text: "Instantly analyze and copy CSS from any webpage element",
    completed: false,
    img: "/assets/images/logo-style-spy.svg",
    id: 2,
},
{
    title: "SpeedBoost",
    text: "Optimizes browser resource usage to accelerate page loading",
    completed: false,
    img: "/assets/images/logo-speed-boost.svg",
    id: 3,
},
{
    title: "JSONWizard",
    text: "Formats, validates, and prettifies JSON responses in browser",
    completed: false,
    img: "/assets/images/logo-json-wizard.svg",
    id: 4,
},
{
    title: "TabMasterPro",
    text: "Organizes browser tabs into groups and sessions",
    completed: false,
    img: "/assets/images/logo-tab-master-pro.svg",
    id: 5,
},
{
    title: "ViewportBuddy",
    text: "Simulates various screen resolutions directly within the browser",
    completed: false,
    img: "/assets/images/logo-viewport-buddy.svg",
    id: 6,
},
{
    title: "Markup Notes",
    text: "Enables annotation and notes directly onto webpages for collaborative debugging",
    completed: false,
    img: "/assets/images/logo-markup-notes.svg",
    id: 7,
},
{
    title: "GridGuides",
    text: "Overlay customizable grids and alignment guides on any webpage",
    completed: false,
    img: "/assets/images/logo-grid-guides.svg",
    id: 8,
},
{
    title: "Palette Picker",
    text: "Instantly extracts color palettes from any webpage",
    completed: false,
    img: "/assets/images/logo-palette-picker.svg",
    id: 9,
},
{
    title: "LinkChecker",
    text: "Scans and highlights broken links on any page",
    completed: false,
    img: "/assets/images/logo-link-checker.svg",
    id: 10,
},
{
    title: "Dom Snapshot",
    text: "Capture and Export DOM structures quickly",
    completed: false,
    img: "/assets/images/logo-dom-snapshot.svg",
    id: 11,
},
{
    title: "ConsolePlus",
    text: "Enhanced developer console with advanced filtering and logging",
    completed: false,
    img: "/assets/images/logo-console-plus.svg",
    id: 12,
},
]
let currentFilter = "All"

function updateCards(){
    line.innerHTML = "";

    const cardsFilter = FilterCards(currentFilter)

    cardArr.forEach(card => {
        const cardContainer = document.createElement('div');
        cardContainer.classList.add("card")
        
        const cardHeader = document.createElement('div'); 
        cardHeader.classList.add("card__header")

        const cardFooter = document.createElement('div');
        cardFooter.classList.add("card__footer")

        cardContainer.appendChild(cardHeader)
        cardContainer.appendChild(cardFooter)


        const headerImg = document.createElement('img');
        headerImg.classList.add("card__image", "card__icon");
        headerImg.setAttribute("src", `${card.img}`);

        const cardDescription = document.createElement('div');
        cardDescription.classList.add("card__description")

        cardHeader.appendChild(headerImg)
        cardHeader.appendChild(cardDescription)


        const cardTitle = document.createElement("h2");
        cardTitle.classList.add("card__description")
        cardTitle.textContent = card.title;

        const cardText = document.createElement('p');
        cardText.classList.add("card__text")
        cardText.textContent = card.text;

        cardDescription.appendChild(cardTitle)
        cardDescription.appendChild(cardText)


        const cardDeleteButton = document.createElement('button');
        cardDeleteButton.classList.add("card__delete-button")
        cardDeleteButton.textContent = "Remove";

        const cardLabel = document.createElement('label')
        cardLabel.classList.add("card__switch")

        cardFooter.appendChild(cardDeleteButton)
        cardFooter.appendChild(cardLabel)


        const cardInput = document.createElement('input');
        cardInput.type = "checkbox";
        if(card.completed) cardInput.checked
        cardInput.addEventListener("change", () => ToggleCards(card.id))

        const cardSlider = document.createElement('span');
        cardSlider.classList.add("card__slider");

        cardLabel.appendChild(cardInput)
        cardLabel.appendChild(cardSlider)

        line.appendChild(cardContainer)
    })
}













navigation.forEach(nav =>{
    nav.addEventListener("click", (e) => {
        setActiveFilter(nav.getAttribute("data-attribute"));
        updateCards()
    })
})

const setActiveFilter = (filter) => {
    currentFilter = filter;

    navigation.forEach(nav => {
        if (nav.getAttribute("data-attribute") === filter){
            nav.classList.add(".active-button")
        }else{
            nav.classList.remove(".active-button")
        }
    })
}


const FilterCards = (filter) => {
        if (filter === "Active") return cardArr.filter(card => !card.completed);
        if (filter === "Inactive") return cardArr.filter(card => card.completed);
        if (filter === "All") return cardArr;
}

updateCards()



