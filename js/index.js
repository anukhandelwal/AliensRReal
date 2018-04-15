var $tbody = document.querySelector("tbody");

//set inputs for date, shape,country, state and city
var $shapeInput = document.querySelector("#shape");
var $searchBtnShape = document.querySelector("#searchshape");

var $stateInput = document.querySelector("#state");
var $searchBtnState = document.querySelector("#searchstate");

var $datenput = document.querySelector("#date");
var $searchBtnDate = document.querySelector("#searchdate");


var $cityInput = document.querySelector("#city");
var $searchBtnCity = document.querySelector("#searchcity");

var $countryInput = document.querySelector("#country");
var $searchBtnCountry = document.querySelector("#searchcountry");


// Add an event listener to the searchButtons, call handleSearchButtonClick when clicked
$searchBtnShape.addEventListener("click", handleSearchButtonClickShape);
$searchBtnState.addEventListener("click", handleSearchButtonClickState);
$searchBtnDate.addEventListener("click", handleSearchButtonClickDate);
$searchBtnCity.addEventListener("click", handleSearchButtonClickCity);
$searchBtnCountry.addEventListener("click", handleSearchButtonClickCountry);

// Set ufoSightings to dataSet initially
var ufoSightings = dataSet;

// renderTable renders the ufoSIghtings dataSet to the tbody
function renderTable() {
  $tbody.innerHTML = "";
  for (var i = 0; i < ufoSightings.length; i++) {
    // Get get the current sightings object and its fields
    var sightings = ufoSightings[i];
    var fields = Object.keys(sightings);
    // Create a new row in the tbody, set the index to be i + startingIndex
    var $row = $tbody.insertRow(i);
    for (var j = 0; j < fields.length; j++) {
      // For every field in the sightings object, create a new cell at set its inner text to be the current value at the current sightings field
      var field = fields[j];
      var $cell = $row.insertCell(j);
      $cell.innerText = sightings[field];
    }
  }
}

//function to handle Search by Shape
function handleSearchButtonClickShape() {
  // Format the user's search by removing leading and trailing whitespace
  var filterShape = $shapeInput.value.trim().toLowerCase();

  // Set ufoSightings to an array of all dataSet whose "date" matches the filter
  ufoSightings = dataSet.filter(function(sightings) {
    var sightingShape = sightings.shape.toLowerCase();

    // If true, add the sighting to the filterState, otherwise don't add it to filterState
    return sightingShape === filterShape;
  });
  renderTable();
}

//function to handle search by State
function handleSearchButtonClickState() {
  // Format the user's search by removing leading and trailing whitespace
  var filterState = $stateInput.value.trim().toLowerCase();

  // Set ufoSightings to an array of all dataSet whose "date" matches the filter
  ufoSightings = dataSet.filter(function(sightings) {
    var sightingState = sightings.state.toLowerCase();

    // If true, add the sighting to the filterState, otherwise don't add it to filterState
    return sightingState === filterState;
  });
  renderTable();
}

//function to handle Search by Date
function handleSearchButtonClickDate() {
  // Format the user's search by removing leading and trailing whitespace
  var filterDate = $dateInput.value.trim().toLowerCase();

  // Set ufoSightings to an array of all dataSet whose "date" matches the filter
  ufoSightings = dataSet.filter(function(sightings) {
    var sightingDate = sightings.date.toLowerCase();

    // If true, add the sighting to the filterState, otherwise don't add it to filterState
    return sightingDate === filterDate;
  });
  renderTable();
}

//function to handle Search by City
function handleSearchButtonClickCity() {
  // Format the user's search by removing leading and trailing whitespace
  var filterCity = $cityInput.value.trim().toLowerCase();

  // Set ufoSightings to an array of all dataSet whose "date" matches the filter
  ufoSightings = dataSet.filter(function(sightings) {
    var sightingCity = sightings.city.toLowerCase();

    // If true, add the sighting to the filterState, otherwise don't add it to filterState
    return sightingCity === filterCity;
  });
  renderTable();
}

//function to handle Search by Country
function handleSearchButtonClickCountry() {
  // Format the user's search by removing leading and trailing whitespace
  var filterCountry = $countryInput.value.trim().toLowerCase();

  // Set ufoSightings to an array of all dataSet whose "date" matches the filter
  ufoSightings = dataSet.filter(function(sightings) {
    var sightingCountry = sightings.country.toLowerCase();

    // If true, add the sighting to the filterState, otherwise don't add it to filterState
    return sightingCountry === filterCountry;
  });
  renderTable();
}


// Render the table for the first time on page load
renderTable();


