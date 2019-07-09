// from data.js
var tableData = data;

// Display UFO sightings
var tbody = d3.select("tbody");

// Make a function to create a table
function createTable(data){
    // Clear table for new data
    tbody.html("");
    data.forEach(dataRow => {
        console.table(dataRow);
        let row = tbody.append("tr");

       console.table(Object.values(dataRow));
       Object.values(dataRow).forEach((val) => {
           let cell = row.append("td");
           cell.text(val);
       });
    });
}

// Pressing enter refreshes page. Create function to prevent it.
function stopRefresh(){
    d3.event.preventDefault()
    
    let date = d3.select("#datetime").property("value");
    let filterData = tableData;

    // Keep only rows that match the filtered date value
    if (date){
        filterData = filterData.filter((row) => row.datetime === date);
    }
    // Recreate table for filtered data
    createTable(filterData);
}

d3.selectAll("#filter-btn").on("click", stopRefresh);
createTable(tableData);