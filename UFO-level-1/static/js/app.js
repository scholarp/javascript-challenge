// Assign the data for UFO Sightings table from data.js
var UFOtableData = data;

// Use D3 to select the table body
var UFOtbody = d3.select("tbody");

// Function build table
function buildTable(data){
    // First, clear out existing data
    UFOtbody.html("");
    data.forEach(dataRow => {
        console.table(dataRow);
        let row = UFOtbody.append("tr");

       console.table(Object.values(dataRow));
       Object.values(dataRow).forEach((val) => {
           let cell = row.append("td");
           cell.text(val);
       });
    });
}

// Event that calls a function named handleClick
function handleClick(){
    
// Prevent the form from refreshing the page    
    d3.event.preventDefault() 
    
    let date = d3.select("#datetime").property("value");
    let filterData = UFOtableData;

    // Check to see if a date was entered and filter the data based on that date
    if (date){
        
        // Apply filter to the table data to keep the datetime values matches the filter values
        filterData = filterData.filter((row) => row.datetime === date);

    }

    buildTable(filterData);
}



d3.selectAll("#filter-btn").on("click", handleClick);
buildTable(UFOtableData);