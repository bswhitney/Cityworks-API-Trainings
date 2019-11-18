// Global Variables to hold services, token.
var apiService, authService, woService, entityService, wotempService;
var token = localStorage.getItem('token');

// Define Function to load Cityworks SDK modules.
define([
],
    function (auth, wo) {
        // Define the global API service variable.
        // Define the global variables for the various services using the API service variable.
        // Authentication Service
        // Work Order Service
        // Validate the token.
    }
);

// Function to make the AuthenticationService/Validate API call.
function validate() {
    // Define the data object and include the needed parameters.
    // Make the validate API call and assign a callback function.
}

// Callback function for the AuthenticationService/Authenticate API call.
function validateCallback(response) {
    // Check the status and value of the response. If either is bad, force the user to log in.
}

// Function to make the WorkOrderService/Create API call.
function workOrderCreate() {
    // Define the data object and include the needed parameters.
    // Make the validate API call and assign a callback function.
}

// Callback function for the WorkOrderService/Create API call.
function workOrderCreateCallback(response) {
    // Check the status of the response. If the response is good...
    // If the response is bad...
}