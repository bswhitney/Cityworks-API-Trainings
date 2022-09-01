// Global Variables to hold services, token.
var apiService, authService;

// Define Function to load Cityworks SDK modules.
define(['../cw-sdk/api/services/general/authenticationservice',],
    function (auth) {
        // Define the global API service variable and the authentication service.
        apiService = new auth.ApiService("https://training.cityworks.com/cityworks");
        authService = new auth.AuthenticationService(apiService); // Authentication Service
    }
);

// Function to make the AuthenticationService/Authenticate API call.
function authenticate() {
    // Define the data object and include the needed parameters.
    let data = {
        LoginName: document.getElementById('username').value,
        Password: document.getElementById('password').value
    };
    // Make the authenticate API call and assign a callback function.
    authService.Authenticate(data).then(authenticateCallback);
}

// Callback function for the AuthenticationService/Authenticate API call.
function authenticateCallback(response) {
    // Check the status of the response. If the response is good...
    if (response.Status === 0) {
        localStorage.setItem('token', response.Value.Token);
        window.location = "index.html";
    }
}