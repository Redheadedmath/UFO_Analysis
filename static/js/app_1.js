// import data from data.js
const tableData = data; 

// Reference the HTML table using d3
var tbody = d3.select("tbody");

function buildTable(data) {
    // clearing out previous data
    tbody.html("");

    // Next, loop through each object in the data
    // append a row and cells for each value in the row
    data.forEach((dataRow) => {
        
        //append a row to the table body
        let row = tbody.append("tr");

        // loop through each field in the dataRow 
        // add each value as a table cell (td)
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val); 
            }
        );
    });
}

function handleClick() {
    // Grab the datetime value from the filter
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;

    // Check for an entered date and filter the data
    if (date) {
        filteredData = filteredData.filter(row => row.datetime === date);
    };

    //Rebuild table around the filtered data
    // @NOTE: if no date was entered, then filteredData will
    // just be original tableData
    buildTable(filteredData);

};

// Attach an event to listen for the form button
d3.selectAll("#filter-btn").on("click", handleClick);

// Build the table when the page loads
buildTable(tableData);