// Function to open links on clickable rows 
document.querySelectorAll('.clickable-row').forEach(row => {
    row.addEventListener('click', () => {
        window.open(row.dataset.href, '_blank'); // Open the link in a new tab
    });
});


// NOT WORKING BELOW HERE:

const tableButtons = document.querySelectorAll("th button");

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
