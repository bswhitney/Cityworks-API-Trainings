using System;
using System.Windows.Forms;
// Add the using statement for Cityworks Core.

namespace Examples
{
    public partial class LoginForm : Form
    {
        // Declare the global services variable.
        private Services _services;

        public LoginForm()
        {
            InitializeComponent();

            // Retrieve the server path from .NET storage.
            // Create an AuthToken object.
            // Retrieve token from .NET storage and save it to the AuthToken object.
            // Initialize the services object with the path and AuthToken object.
        }

        // Event handler that is called when the login button is clicked.
        private void buttonLogin_Click(object sender, EventArgs e)
        {
            // Create an authenticate object to pass to the API.
            // Set the LoginName and Password to user inputs.
            // Make the authenticate API call and give it a callback function.
        }

        // Callback function that is called when the authenticate API call is returned.
        private void LoginCallback(AuthenticationService.AuthenticateResponse response)
        {
            // Check the status of the response. If the response is bad:
            if (response.Status != CoreResponseStatus.Ok)
            {
                labelResponse.Text = "Invalid Credentials or Server\nError. Please Try Again.";
            }
            // If the response is good:
            else
            {
                // Get the roken from the response and update the token in .NET storage.
                Properties.Settings.Default.token = response.Value.Token;
                Properties.Settings.Default.Save();
                Properties.Settings.Default.Upgrade();
                // Close the login form.
                Close();
            }
        }
    }
}
