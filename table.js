console.log("Script loaded.");

const response = {
  "pokedata": [
    {
        "name": "Nasjonalmuseet",
        "construct": "Legal Entity",
        "type": "Institution",
        "status": "Active",
        "ownership": "Norwegian State",
        "details": {
            "description": "Nasjonalmuseet is the largest museum of art, design and architecture in Scandinavia.",
            "image": "https://culture360.asef.org/media/2013/8/Nasjonalmuseet.jpeg",
            "related": ["Brynjulf Bulls plass 1", "Statsbygg", "Nasjonalgalleriet"],
            "links": []
        }
    },
    {
        "name": "Museet for Samtidskunst",
        "construct": "Legal Entity",
        "type": "Institution",
        "status": "Closed",
        "ownership": "Norwegian State",
        "details": {
            "description": "Museet for Samtidskunst was a contemporary art museum located in Oslo.",
            "image": "https://kunsthalloslo.no/wordpress/wp-content/uploads/2017/11/MUSEUMJPG-256x256.jpg",
            "related": [],
            "links": [
                { "text": "Reasons for closure", "url": "#" }
            ]
        }
    },
    {
        "name": "Jens Thiis",
        "construct": "Person",
        "type": "Art Historian",
        "status": "Deceased",
        "ownership": "",
        "details": {
            "description": "Jens Thiis was the first director of <a href=\"#\" class=\"modal-link\" data-name=\"Nasjonalgalleriet\">Nasjonalgalleriet</a>.",
            "image": "https://media.lex.dk/media/149194/standard_compressed_OB.RP14217a.jpg",
            "related": ["Nasjonalmuseet"],
            "links": []
        }
    },
    {
        "name": "Nasjonalgalleriet",
        "construct": "Given Name",
        "type": "Building",
        "status": "Closed",
        "ownership": "Statsbygg",
        "details": {
            "image": "https://media.snl.no/media/182833/standard_nasjonalgalleriet.jpg",
            "consyear": "1881",
            "consfunction": "Museum",
            "closyear": "2019",
            "closfunction": "None",
            "related": ["Nasjonalmuseet", "Jens Thiis"],
            "links": [
                { "text": "Reasons for closure", "url": "directory/nasjonalgalleriet.html" },
                { "text": "Timeline", "url": "#" }
            ],
        }
      },
      {
          "name": "Statsbygg",
          "construct": "Legal Entity",
          "type": "Government Agency",
          "status": "Active",
          "ownership": "Norwegian State",
          "details": {
              "image": "https://files.nettsteder.regjeringen.no/wpuploads01/blogs.dir/397/files/2020/10/statsbygg-logo-800x800-1-400x400.png",
              "description":"Statsbygg (Norwegian Directorate of Public Construction and Property) is a Norwegian government agency that manages the real estate portfolio of the Government of Norway.",
              "consyear": "",
              "consfunction": "",
              "closyear": "",
              "closfunction": "",
              "related": ["Nasjonalmuseet", "Nasjonalgalleriet"],
              "links": [],
          }
     },
     {
          "name": "Kunstindustrimuseet",
          "construct": "Legal Entity",
          "type": "Institution",
          "status": "Closed",
          "ownership": "",
          "details": {
              "image": "",
              "consyear": "",
              "consfunction": "",
              "closyear": "",
              "closfunction": "",
              "related": [""],
              "links": [
                  { "text": "Reasons for closure", "url": "" },
                  { "text": "Timeline", "url": "#" }
              ],
          }
     },
     {
          "name": "Arkitekturmuseet",
          "construct": "Legal Entity",
          "type": "Institution",
          "status": "Closed",
          "ownership": "",
          "details": {
              "image": "",
              "consyear": "",
              "consfunction": "",
              "closyear": "",
              "closfunction": "",
              "related": [""],
              "links": [
                  { "text": "Reasons for closure", "url": "" },
                  { "text": "Timeline", "url": "#" }
              ],
          }
     },
     {
          "name": "Sparebankstiftelsen DNB",
          "construct": "Legal Entity",
          "type": "Foundation",
          "status": "Active",
          "ownership": "DNB NOR",
          "details": {
              "image": "https://upload.wikimedia.org/wikipedia/commons/e/e7/Logo_Sparebankstiftelsen_DNB.jpg",
              "consyear": "",
              "consfunction": "",
              "closyear": "",
              "closfunction": "",
              "related": ["Nasjonalmuseet, Nasjonalgalleriet"],
              "links": [],
          }
     },
     {
          "name": "Christiania Sparebank",
          "construct": "Legal Entity",
          "type": "Bank",
          "status": "Mutated",
          "ownership": "",
          "details": {
              "image": "",
              "consyear": "",
              "consfunction": "",
              "closyear": "",
              "closfunction": "",
              "related": ["Nasjonalgalleriet", "Sparebankstiftelsen DNB"],
              "links": [],
          }
     },
     {
          "name": "Billedkunstsamlingene",
          "construct": "",
          "type": "Art Collection",
          "status": "Active",
          "ownership": "Nasjonalmuseet",
          "details": {
              "image": "",
              "consyear": "",
              "consfunction": "",
              "closyear": "",
              "closfunction": "",
              "related": ["Nasjonalmuseet"],
              "links": [],
          }
     },
     {
          "name": "Designsamlingene",
          "construct": "",
          "type": "Art Collection",
          "status": "Active",
          "ownership": "Nasjonalmuseet",
          "details": {
              "image": "",
              "consyear": "",
              "consfunction": "",
              "closyear": "",
              "closfunction": "",
              "related": ["Nasjonalmuseet"],
              "links": [],
          }
     },
     {
          "name": "Arkitektursamlingene",
          "construct": "",
          "type": "Art Collection",
          "status": "Active",
          "ownership": "Nasjonalmuseet",
          "details": {
              "image": "",
              "consyear": "",
              "consfunction": "",
              "closyear": "",
              "closfunction": "",
              "related": ["Nasjonalmuseet"],
              "links": [],
          }
     },
     {
          "name": "The Fredriksen Family Collection",
          "construct": "Legal Entity",
          "type": "Art Collection",
          "status": "Active",
          "ownership": "Fredriksen Family Art Company Ltd.",
          "details": {
              "description":"The Fredriksen Family Collection has 28 of its works displayed at the National Museum. The owner, Fredriksen Family Art Company Ltd., is registered in Cyprus.",
              "image": "",
              "consyear": "",
              "consfunction": "",
              "closyear": "",
              "closfunction": "",
              "related": ["Nasjonalmuseet"],
              "links": [],
          }
     },
     {
          "name": "Bankplassen 3",
          "construct": "Adress",
          "type": "Building",
          "status": "Unused",
          "ownership": "",
          "details": {
              "image": "",
              "consyear": "",
              "consfunction": "",
              "closyear": "",
              "closfunction": "",
              "related": ["Nasjonalmuseet"],
              "links": [
                  { "text": "Reasons for closure", "url": "" },
                  { "text": "Timeline", "url": "#" }
              ],
          }
     },
     {
          "name": "Bankplassen 4",
          "construct": "Adress",
          "type": "Building",
          "status": "Unused",
          "ownership": "Statsbygg",
          "details": {
              "image": "",
              "consyear": "",
              "consfunction": "",
              "closyear": "",
              "closfunction": "",
              "related": ["Museet for Samtidskunst", "Nasjonalmuseet", "Statsbygg"],
              "links": [
                  { "text": "Reasons for closure", "url": "" },
                  { "text": "Timeline", "url": "#" }
              ],
          }
     },
     {
          "name": "St Olavs Gate 1",
          "construct": "Adress",
          "type": "Building",
          "status": "Repurposed",
          "ownership": "",
          "details": {
              "image": "",
              "consyear": "",
              "consfunction": "",
              "closyear": "",
              "closfunction": "",
              "related": ["Kunstindustrimuseet", "Nasjonalmuseet"],
              "links": [
                  { "text": "Reasons for closure", "url": "" },
                  { "text": "Timeline", "url": "#" }
              ],
          }
     },
     {
          "name": "Toyengata 53",
          "construct": "Adress",
          "type": "Building",
          "status": "Repurposed",
          "ownership": "",
          "details": {
              "image": "",
              "consyear": "",
              "consfunction": "",
              "closyear": "",
              "closfunction": "",
              "related": ["Munchmuseet", "Edvard Munch", "Nasjonalmuseet"],
              "links": [
                  { "text": "Reasons for closure", "url": "" },
                  { "text": "Timeline", "url": "#" }
              ],
          }
     },
     {
          "name": "Universitetsgata 13",
          "construct": "Adress",
          "type": "Building",
          "status": "Unused",
          "ownership": "Statsbygg",
          "details": {
              "image": "",
              "consyear": "1881",
              "consfunction": "Museum",
              "closyear": "2019",
              "closfunction": "None",
              "related": ["Nasjonalgalleriet", "Jens Thiis", "Nasjonalmuseet"],
              "links": [
                  { "text": "Reasons for closure", "url": "" },
                  { "text": "Timeline", "url": "#" }
              ],
          }
     },
     {
          "name": "Brynjulf Bulls plass 1",
          "construct": "Adress",
          "type": "Building",
          "status": "Active",
          "ownership": "Statsbygg",
          "details": {
              "image": "",
              "consyear": "2022",
              "consfunction": "Museum",
              "closyear": "",
              "closfunction": "",
              "related": ["Nasjonalmuseet", "Statsbygg"],
              "links": [],
          }
     },
     {
          "name": "Munch Plass 1",
          "construct": "Adress",
          "type": "Building",
          "status": "Active",
          "ownership": "",
          "details": {
              "image": "",
              "consyear": "2021",
              "consfunction": "Museum",
              "closyear": "",
              "closfunction": "",
              "related": ["Munchmuseet", "Edvard Munch"],
              "links": [],
          }
     },
     {
          "name": "Arbeiderpartiet",
          "construct": "Legal Entity",
          "type": "Political Party",
          "status": "Active",
          "ownership": "",
          "details": {
              "image": "",
              "consyear": "",
              "consfunction": "",
              "closyear": "",
              "closfunction": "",
              "related": [],
              "links": [],
          }
     },
     {
          "name": "Høyre",
          "construct": "Legal Entity",
          "type": "Political Party",
          "status": "Active",
          "ownership": "",
          "details": {
              "image": "",
              "consyear": "",
              "consfunction": "",
              "closyear": "",
              "closfunction": "",
              "related": [],
              "links": [],
          }
     },
     {
          "name": "Senterpartiet",
          "construct": "Legal Entity",
          "type": "Political Party",
          "status": "Active",
          "ownership": "",
          "details": {
              "image": "",
              "consyear": "",
              "consfunction": "",
              "closyear": "",
              "closfunction": "",
              "related": [],
              "links": [],
          }
     },
     {
          "name": "Fremskrittspartiet",
          "construct": "Legal Entity",
          "type": "Political Party",
          "status": "Active",
          "ownership": "",
          "details": {
              "image": "",
              "consyear": "",
              "consfunction": "",
              "closyear": "",
              "closfunction": "",
              "related": [],
              "links": [],
          }
     },
     {
          "name": "Sosialistisk Venstreparti",
          "construct": "Legal Entity",
          "type": "Political Party",
          "status": "Active",
          "ownership": "",
          "details": {
              "image": "",
              "consyear": "",
              "consfunction": "",
              "closyear": "",
              "closfunction": "",
              "related": [],
              "links": [],
          }
     },
     {
          "name": "Venstre",
          "construct": "Legal Entity",
          "type": "Political Party",
          "status": "Active",
          "ownership": "",
          "details": {
              "image": "",
              "consyear": "",
              "consfunction": "",
              "closyear": "",
              "closfunction": "",
              "related": [],
              "links": [],
          }
     },
     {
          "name": "Kristelig Folkeparti",
          "construct": "Legal Entity",
          "type": "Political Party",
          "status": "Active",
          "ownership": "",
          "details": {
              "image": "",
              "consyear": "",
              "consfunction": "",
              "closyear": "",
              "closfunction": "",
              "related": [],
              "links": [],
          }
     },
     {
          "name": "Gamle Munch",
          "construct": "Legal Entity",
          "type": "Association",
          "status": "Active",
          "ownership": "",
          "details": {
              "image": "",
              "consyear": "",
              "consfunction": "",
              "closyear": "",
              "closfunction": "",
              "related": [],
              "links": [],
          }
     },
     {
          "name": "Munchmuseet",
          "construct": "Legal Entity",
          "type": "Institution",
          "status": "Active",
          "ownership": "City of Oslo",
          "details": {
              "image": "https://admin.itsnicethat.com/images/VRXtmi4Ds3UgnREO4FseaMhOsxM=/186780/format-webp%7Cwidth-2880/munch_museum_identity_north_graphic_design_itsnicethat1.jpg",
              "consyear": "",
              "consfunction": "",
              "closyear": "",
              "closfunction": "",
              "related": [],
              "links": [],
          }
     },
     {
          "name": "Stenersens Samling",
          "construct": "Given Name",
          "type": "Art Collection",
          "status": "Active",
          "ownership": "City of Oslo",
          "details": {
              "image": "",
              "consyear": "",
              "consfunction": "",
              "closyear": "",
              "closfunction": "",
              "related": [],
              "links": ["Munchmuseet"],
          }
     },
     {
          "name": "Munch Arven",
          "construct": "Given Name",
          "type": "Art Collection",
          "status": "Active",
          "ownership": "City of Oslo",
          "details": {
              "image": "",
              "consyear": "",
              "consfunction": "",
              "closyear": "",
              "closfunction": "",
              "related": [],
              "links": ["Munchmuseet"],
          }
     },
     {
          "name": "Rolf Stenersen",
          "construct": "Person",
          "type": "Art Collector",
          "status": "Deceased",
          "ownership": "",
          "details": {
              "image": "",
              "consyear": "",
              "consfunction": "",
              "closyear": "",
              "closfunction": "",
              "related": [],
              "links": ["Munchmuseet"],
          }
     },
     {
          "name": "Ludvig O. Ravensberg",
          "construct": "Person",
          "type": "Art Collector",
          "status": "Deceased",
          "ownership": "",
          "details": {
              "image": "",
              "consyear": "",
              "consfunction": "",
              "closyear": "",
              "closfunction": "",
              "related": ["Munchmuseet"],
              "links": [],
          }
     },
     {
          "name": "Amaldus Nielsen",
          "construct": "Person",
          "type": "Art Collector",
          "status": "Deceased",
          "ownership": "",
          "details": {
              "image": "",
              "consyear": "",
              "consfunction": "",
              "closyear": "",
              "closfunction": "",
              "related": ["Munchmuseet"],
              "links": [],
          }
     },
     {
          "name": "Heinrich Ernst Schirmer",
          "construct": "Person",
          "type": "Architect",
          "status": "Deceased",
          "ownership": "",
          "details": {
              "image": "",
              "consyear": "",
              "consfunction": "",
              "closyear": "",
              "closfunction": "",
              "related": ["Nasjonalgalleriet"],
              "links": [],
          }
     },
     {
          "name": "Edvard Munch",
          "construct": "Person",
          "type": "Artist",
          "status": "Deceased",
          "ownership": "",
          "details": {
              "description": "Edvard Munch (1863-1944) is generally considered by Norwegians to be the country's most important artist. A <a href=\"#\" class=\"modal-link\" data-name=\"Toyengata 53\">museum dedicated solely to his work was first opened in 1963</a>, then subsequently replaced by a new one in 2021.",
              "image": "",
              "consyear": "",
              "consfunction": "",
              "closyear": "",
              "closfunction": "",
              "related": [],
              "links": [],
          }
     },
     {
          "name": "Stiftelsen Kunstindustrimuseet",
          "construct": "Legal Entiyt",
          "type": "Foundation",
          "status": "Active",
          "ownership": "",
          "details": {
              "image": "",
              "consyear": "",
              "consfunction": "",
              "closyear": "",
              "closfunction": "",
              "related": ["Nasjonalmuseet"],
              "links": [],
          }
     },
     {
          "name": "Acquisition Committee (National Museum)",
          "construct": "Legal Entity",
          "type": "Committee",
          "status": "Active",
          "ownership": "Nasjonalmuseet",
          "details": {
              "image": "",
              "consyear": "",
              "consfunction": "",
              "closyear": "",
              "closfunction": "",
              "related": ["Nasjonalmuseet"],
              "links": [],
          }
     },
     {
          "name": "Board (National Museum)",
          "construct": "Legal Entity",
          "type": "Committee",
          "status": "Active",
          "ownership": "Nasjonalmuseet",
          "details": {
              "image": "",
              "consyear": "",
              "consfunction": "",
              "closyear": "",
              "closfunction": "",
              "related": ["Nasjonalmuseet"],
              "links": [
                { "text": "Board Composition", "url": "#" }
              ],
          }
     },
     {
          "name": "Trond Giske",
          "construct": "Person",
          "type": "Politician",
          "status": "Active",
          "ownership": "",
          "details": {
              "image": "",
              "consyear": "",
              "consfunction": "",
              "closyear": "",
              "closfunction": "",
              "related": [],
              "links": [],
          }
     },
     {
          "name": "Jonas Gahr Støre",
          "construct": "Person",
          "type": "Politician",
          "status": "Active",
          "ownership": "",
          "details": {
              "image": "",
              "consyear": "",
              "consfunction": "",
              "closyear": "",
              "closfunction": "",
              "related": [],
              "links": [],
          }
     },
     {
          "name": "Fjordbyen",
          "construct": "Given Name",
          "type": "Project",
          "status": "In Development",
          "ownership": "",
          "details": {
              "image": "",
              "consyear": "",
              "consfunction": "",
              "closyear": "",
              "closfunction": "",
              "related": [],
              "links": [],
          }
     },
     {
          "name": "Vestbanen",
          "construct": "",
          "type": "",
          "status": "",
          "ownership": "",
          "details": {
              "image": "",
              "consyear": "",
              "consfunction": "",
              "closyear": "",
              "closfunction": "",
              "related": [],
              "links": [],
          }
     },
     {
          "name": "",
          "construct": "",
          "type": "",
          "status": "",
          "ownership": "",
          "details": {
              "image": "",
              "consyear": "",
              "consfunction": "",
              "closyear": "",
              "closfunction": "",
              "related": [],
              "links": [],
          }
     },
     {
          "name": "",
          "construct": "",
          "type": "",
          "status": "",
          "ownership": "",
          "details": {
              "image": "",
              "consyear": "",
              "consfunction": "",
              "closyear": "",
              "closfunction": "",
              "related": [],
              "links": [],
          }
     },
     {
          "name": "",
          "construct": "",
          "type": "",
          "status": "",
          "ownership": "",
          "details": {
              "image": "",
              "consyear": "",
              "consfunction": "",
              "closyear": "",
              "closfunction": "",
              "related": [],
              "links": [],
          }
     },
     {
          "name": "",
          "construct": "",
          "type": "",
          "status": "",
          "ownership": "",
          "details": {
              "image": "",
              "consyear": "",
              "consfunction": "",
              "closyear": "",
              "closfunction": "",
              "related": [],
              "links": [],
          }
     },
     {
          "name": "",
          "construct": "",
          "type": "",
          "status": "",
          "ownership": "",
          "details": {
              "image": "",
              "consyear": "",
              "consfunction": "",
              "closyear": "",
              "closfunction": "",
              "related": [],
              "links": [],
          }
     },
     {
          "name": "",
          "construct": "",
          "type": "",
          "status": "",
          "ownership": "",
          "details": {
              "image": "",
              "consyear": "",
              "consfunction": "",
              "closyear": "",
              "closfunction": "",
              "related": [],
              "links": [],
          }
     },
     {
          "name": "",
          "construct": "",
          "type": "",
          "status": "",
          "ownership": "",
          "details": {
              "image": "",
              "consyear": "",
              "consfunction": "",
              "closyear": "",
              "closfunction": "",
              "related": [],
              "links": [],
          }
     },
  ]
};


const tableContent = document.getElementById("table-content");
const tableButtons = document.querySelectorAll("th button");
const searchInput = document.getElementById("search");
const modal = document.getElementById("modal");
const modalContent = document.getElementById("modal-content");
const modalClose = document.getElementById("modal-close");

// Create row function, excluding the details object
const createRow = (obj) => {
    const row = document.createElement("tr");
    const objKeys = Object.keys(obj).filter(key => key !== "details"); // Exclude details

    objKeys.map((key) => {
        const cell = document.createElement("td");
        cell.setAttribute("data-attr", key);
        cell.innerHTML = obj[key];
        row.appendChild(cell);
    });
    row.addEventListener("click", () => openModal(obj));
    return row;
};

// Function to get table content
const getTableContent = (data) => {
    tableContent.innerHTML = ''; // Clear existing content
    data.map((obj) => {
        const row = createRow(obj);
        tableContent.appendChild(row);
    });
};

// Array to store modal history
let modalHistory = [];

// Function to open modal and save history
const openModal = (obj) => {
    const { name, construct, type, status, ownership, details } = obj;

    // Save the current modal content (if any) to history before changing it
    if (modalContent.innerHTML.trim() !== "") {
        modalHistory.push(modalContent.innerHTML);  // Save current content to history
    }

    // Build modal content dynamically
    let content = `<br><p><strong>${name}</strong></p><br>`;
    
    if (details.image) {
        content += `<img src="${details.image}" alt="${name}"/>`;
    } else {
        content += `<p>NO IMAGE</p><br>`;
    }

    content += `<table class="modal-table">`;
    if (construct) content += `<tr><td>Construct</td><td>${construct}</td></tr>`;
    if (type) content += `<tr><td>Type</td><td>${type}</td></tr>`;
    if (status) content += `<tr><td>Status</td><td>${status}</td></tr>`;
    if (ownership) content += `<tr><td>Ownership</td><td>${ownership}</td></tr>`;
    if (details.consyear) content += `<tr><td>Construction Year</td><td>${details.consyear}</td></tr>`;
    if (details.consfunction) content += `<tr><td>Function</td><td>${details.consfunction}</td></tr>`;
    if (details.closyear) content += `<tr><td>Date of Closure</td><td>${details.closyear}</td></tr>`;
    if (details.closfunction) content += `<tr><td>New Function</td><td>${details.closfunction}</td></tr>`;
    content += `</table><br>`;

    // Add description
    if (details.description) {
        content += `<p>${details.description}</p><br>`;
    }

    // Relevant Information
    if (details.links && details.links.length > 0) {
        content += `<p><strong>Relevant Information:</strong> ${details.links.map(link => 
            `<a class="relevant-information" href="${link.url}">${link.text}</a>`).join(", ")}</p>`;
    }

    // Related entries
    if (details.related && details.related.length > 0) {
        content += `<br><p><strong>Related Entries:</strong> ${details.related.map(item => 
            `<span class="related-item" data-name="${item}">${item}</span>`).join(", ")}</p>`;
    }

    // Set modal content to the new content
    modalContent.innerHTML = content;

    // Show modal
    modal.style.display = "block";

    // Add click events to related items for modal navigation
    const relatedItems = document.querySelectorAll(".related-item");
    relatedItems.forEach(item => {
        item.addEventListener("click", (e) => {
            const relatedName = e.target.getAttribute("data-name");
            const relatedObj = response.pokedata.find(p => p.name === relatedName);
            openModal(relatedObj);
        });
    });

    // Update the URL with the name of the modal
    const newUrl = `/table-directory.html/${name.replace(/\s+/g, '')}`;  // e.g. /gallery/Nasjonalgalleriet
    history.pushState({ modal: name }, '', newUrl);

};

// Back button functionality
const backLink = document.getElementById("back-link");
backLink.addEventListener("click", (e) => {
    e.preventDefault(); // Prevent default behavior

    // Check if there's any previous modal content in the history
    if (modalHistory.length > 0) {
        const previousContent = modalHistory.pop(); // Get the last modal content
        modalContent.innerHTML = previousContent; // Restore previous modal content
    } else {
        // If no history exists, reload the page
        window.location.reload(); // This will take you back to the main table
    }
});





// Function to add an arrow to the button
const updateButtonWithArrow = (button, direction) => {
    // Clear the previous arrow from all buttons
    tableButtons.forEach(btn => {
        const originalText = btn.innerText.replace(/[\u2191\u2193]/g, ''); // Remove arrows
        btn.innerText = originalText;
    });

    // Update the clicked button with the appropriate arrow
    const arrow = direction === "asc" ? "↑" : "↓";
    button.innerText += ` ${arrow}`;
};

// Sorting function remains the same but now includes updateButtonWithArrow
const sortData = (data, param, direction = "asc") => {
    tableContent.innerHTML = '';
    const sortedData =
        direction == "asc"
            ? [...data].sort(function (a, b) {
                if (a[param] < b[param]) {
                    return -1;
                }
                if (a[param] > b[param]) {
                    return 1;
                }
                return 0;
            })
            : [...data].sort(function (a, b) {
                if (b[param] < a[param]) {
                    return -1;
                }
                if (b[param] > a[param]) {
                    return 1;
                }
                return 0;
            });

    getTableContent(sortedData);
};

// Function to reset button sorting directions
const resetButtons = (event) => {
    [...tableButtons].map((button) => {
        if (button !== event.target) {
            button.removeAttribute("data-dir");
        }
    });
};

// Function to filter data based on search input
const filterData = (searchTerm) => {
    const filteredData = response.pokedata.filter(obj => {
        // Check if any object property contains the search term
        const matchFound = Object.keys(obj).some(key => {
            if (typeof obj[key] === 'string') {
                return obj[key].toLowerCase().includes(searchTerm);
            } else if (typeof obj[key] === 'object') {
                // Check the 'details' object and related properties for the search term
                return Object.values(obj.details).some(val => 
                    typeof val === 'string' && val.toLowerCase().includes(searchTerm)
                );
            }
            return false;
        });
        return matchFound;
    });

    // Update the table with filtered data
    getTableContent(filteredData);
};

// Event listeners
window.addEventListener("load", () => {
    getTableContent(response.pokedata);

    [...tableButtons].map((button) => {
        button.addEventListener("click", (e) => {
            resetButtons(e);
            const currentDir = e.target.getAttribute("data-dir") || "asc"; // Default to ascending
            const newDir = currentDir === "asc" ? "desc" : "asc"; // Toggle direction

            sortData(response.pokedata, e.target.id, newDir);
            e.target.setAttribute("data-dir", newDir);

            // Update button with arrow
            updateButtonWithArrow(e.target, newDir);
        });
    });

    // Search functionality
    searchInput.addEventListener("input", (e) => {
        const searchTerm = e.target.value.toLowerCase();
        filterData(searchTerm);
    });
});
