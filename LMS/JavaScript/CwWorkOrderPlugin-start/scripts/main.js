// Cityworks Site Address and API Token variables.
let token = localStorage.getItem('token');
let cityworksAddress = "https://training.cityworks.com/cityworks";
// Global variables for the Cityworks SDK.

// Define Function to load Cityworks SDK modules.
define(
  [ // First argument an array of module locations.
  ], // Second argument a function to set up global variables.
  function () {
    // Set up a connection to Cityworks server with address and token.
    // Use connection to server to set up various services.
    // Call the validate function.
  }
);

// Function to make the AuthenticationService/Validate API call.
function validate() {
    // Define the data object and include the needed parameters.
    // Make the validate API call and assign a callback function.
}

// Callback function for the AuthenticationService/Validate API call.
function validateCallback(response) {
    // Check the status and value of the response.
        // If the response and value are bad, redirect the user.
        // If the response and value are good, call the entityGroups function.
}

// Function to make the EntityService/Groups API call.
function entityGroups() {
    // Define the data object and include needed parameters.
    // Make the groups API call and assign a callback function.
}

// Function to make the EntityService/Types API call.
function entityTypes(response) {
    // Check the status of the response.
        // If the response is bad, inform the user of failure.
        // If the response is good, gather group modules from response into an array.
        // Define the data object and include the needed parameters.
        // Make the types API call and assign a callback function.
}

// Callback function for the EntityService/Types API call.
function entityTypesCallback(response) {
    // If the response is good, add entity types to entity drop-down list.
}

// Function to make the WorkOrderTemplateService/TemplateNames API call.
function workOrderTemplateNames() {
    // Define the data object and include needed parameters.
    // Make the API call and assign a callback function.
}

// Callback function for the WorkOrderTemplateService/TemplateNames API call.
function workOrderTemplateNamesCallback(response) {
    // If the response is good, add clear then populate the templates drop-down list.
}

// Function to make the WorkOrderService/Create API call.
function workOrderCreate() {
    // Define the data object and include the needed parameters.
    // Make the Create API call and assign a callback function.
}

// Callback function for the WorkOrderService/Create API call.
function workOrderCreateCallback(response) {
    // If the response is good, inform the user of successful work order creation.
        // Send the new Work Order Sid to the addComment function.
    // If the response is bad, inform the user of failure.
}

// Function to add a comment to the new work order.
function addComment(workOrderSid) {
    // Get contents of comment text field.
    // If a comment has been entered, run the API call. Otherwise, ignore.
        // Gather all needed parameters into data object.
        // Make the Add comment API call and assign a callback function.
        // If no comment has been entered, inform the user.
}

// Callback function for the CommentService/Add API call.
function addCommentCallback(response) {
    // If the response is good, inform the user of the new comment.
    // If the response is bad, inform the user of failure.
}