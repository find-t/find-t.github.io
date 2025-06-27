// Function to open links on clickable rows 
document.querySelectorAll('.clickable-row').forEach(row => {
    row.addEventListener('click', () => {
        window.open(row.dataset.href, '_blank'); // Open the link in a new tab
    });
});




const tableButtons = document.querySelectorAll("th button");


const updateButtonWithArrow = (button, direction) => {

    tableButtons.forEach(btn => {
        const originalText = btn.innerText.replace(/[\u2191\u2193]/g, '');
        btn.innerText = originalText;
    });


    const arrow = direction === "asc" ? "↑" : "↓";
    button.innerText += ` ${arrow}`;
};


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


const resetButtons = (event) => {
    [...tableButtons].map((button) => {
        if (button !== event.target) {
            button.removeAttribute("data-dir");
        }
    });
};


const filterData = (searchTerm) => {
    const filteredData = response.pokedata.filter(obj => {

        const matchFound = Object.keys(obj).some(key => {
            if (typeof obj[key] === 'string') {
                return obj[key].toLowerCase().includes(searchTerm);
            } else if (typeof obj[key] === 'object') {

                return Object.values(obj.details).some(val => 
                    typeof val === 'string' && val.toLowerCase().includes(searchTerm)
                );
            }
            return false;
        });
        return matchFound;
    });


    getTableContent(filteredData);
};


window.addEventListener("load", () => {
    getTableContent(response.pokedata);

    [...tableButtons].map((button) => {
        button.addEventListener("click", (e) => {
            resetButtons(e);
            const currentDir = e.target.getAttribute("data-dir") || "asc"; 
            const newDir = currentDir === "asc" ? "desc" : "asc"; 

            sortData(response.pokedata, e.target.id, newDir);
            e.target.setAttribute("data-dir", newDir);


            updateButtonWithArrow(e.target, newDir);
        });
    });


    searchInput.addEventListener("input", (e) => {
        const searchTerm = e.target.value.toLowerCase();
        filterData(searchTerm);
    });
});
