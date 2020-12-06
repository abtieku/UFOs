// import the data from data.js - used once - 11.2.4
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

// 11.5.1 and 11.5.2
function buildTable(data) {
    // First, clear out any existing data
    tbody.html("");
  
    // Next, loop through each object in the data
    // and append a row and cells for each value in the row
    //data is the data being imported, foreach is the for loop, datarow is a parm that will be 
    //used as a value when function is called
    data.forEach((dataRow) => {
      // Append a row to the table body - let is only for this block
      // find the tbody tag and append a table row - tr
      let row = tbody.append("tr");
  
      // Loop through each field in the dataRow and add
      // each value as a table cell (td)
      Object.values(dataRow).forEach((val) => {
        let cell = row.append("td");
        cell.text(val);
        }
      );
    });
  }

  // 11.5.4
  function handleClick() {
    // Grab the datetime value from the filter
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;
  
     // Check to see if a date was entered and filter the
    // data using that date.
    if (date) {
      // Apply `filter` to the table data to only keep the
      // rows where the `datetime` value matches the filter value
      filteredData = filteredData.filter(row => row.datetime === date);
    }
  
     // Rebuild the table using the filtered data
    // @NOTE: If no date was entered, then filteredData will
    // just be the original tableData.
    buildTable(filteredData);
  }
  
  // Attach an event to listen for the form button
  // #filter-btn is the selector string - id for another HTML tag
  // #filter-btn is a unique id - we'll include it in button tags
  d3.selectAll("#filter-btn").on("click", handleClick);
  
  // Build the table when the page loads
  buildTable(tableData);
