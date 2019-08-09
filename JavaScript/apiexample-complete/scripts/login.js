// Declare global variables for the API and authentication service.
var apiService, authService;

// Use Require.JS's define function to load needed modules from the SDK.
define([ // First argument is an array of module locations.
    '../cw-sdk/api/services/general/authenticationservice'
    ],
    // Second argument is a function that takes arguments for each module.
    function (api) {
        // Define the global API service variable.
        apiService = new api.ApiService("https://training.cityworks.com/cityworks");
        // Define the global authentication API service variable.
        authService = new api.AuthenticationService(apiService);
    }
);

// Function to make the Authentication/Authenticate API call.
function authenticate() {
    // Get the username and password from the document.
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    // Declare the data object and populate it with the username and password.
    let data = { LoginName:username, Password:password };
    // Make the API call and assign the response a callback function.
    authService.Authenticate(data).then(authenticateCallback);
}

// Callback function for the Authentication/Authenticate API call.
function authenticateCallback(response) {
    // Check the status of the response.
    // If the response is good...
    if (response.Status === 0) {
        // Save the token to local storage.
        localStorage.setItem('token', response.Value.Token)
        // Push the user to the main page.
        window.location = "example.html";
    }
    // If the response is bad...
    else {
        // Inform the user of the error.
        alert(response.ErrorMessages[0].Name);
    }
}