// Global Variables to hold services, token.
var apiService, authService, woService, entityService, wotempService;
var token = localStorage.getItem('token');

// Define Function to load Cityworks SDK modules.
define([
    '../cw-sdk/api/services/general/authenticationservice',
    '../cw-sdk/api/services/ams/workorderservice',
],
    function (auth, wo) {
        // Define the global API service variable.
        apiService = new auth.ApiService("https://training.cityworks.com/cityworks", token);
        // Define the global variables for the various services using the API service variable.
        authService = new auth.AuthenticationService(apiService); // Authentication Service
        woService = new wo.WorkOrderService(apiService); // Work Order Service
        // Validate the token.
        validate();
    }
);

// Function to make the AuthenticationService/Validate API call.
function validate() {
    // Define the data object and include the needed parameters.
    let data = { Token: token };
    // Make the validate API call and assign a callback function.
    authService.Validate(data).then(validateCallback);
}

// Callback function for the AuthenticationService/Authenticate API call.
function validateCallback(response) {
    // Check the status and value of the response. If either is bad, force the user to log in.
    if (response.Status !== 0 || !response.Value) { window.location = "login.html"; }
}

// Function to make the WorkOrderService/Create API call.
function workOrderCreate() {
    // Define the data object and include the needed parameters.
    data = {
        EntityType: document.getElementById('entityType').value,
        WOTemplateId: document.getElementById('woTemplate').value,
        Location: document.getElementById('location').value,
        Text1: document.getElementById('text1').value
    }
    // Make the validate API call and assign a callback function.
    woService.Create(data).then(workOrderCreateCallback);
}

// Callback function for the WorkOrderService/Create API call.
function workOrderCreateCallback(response) {
    // Check the status of the response. If the response is good...
    if (response.Status === 0) {
        document.getElementById('notes').innerHTML +=
            `Work Order ${response.Value[0].WorkOrderId}: ${response.Value[0].Description} has successfully been created.<br><br>`;
    }
    // If the response is bad...
    else {
        document.getElementById('notes').innerHTML +=
            `Failed to create new work order.<br><br>`;
    }
}