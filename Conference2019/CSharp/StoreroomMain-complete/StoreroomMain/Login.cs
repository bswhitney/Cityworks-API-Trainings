using System;
using System.Windows.Forms;
using Cityworks.Core;

namespace StoreroomMain
{
    public partial class Login : Form
    {
        private Services _services;

        public Login()
        {
            InitializeComponent();

            Uri path = new Uri(Properties.Settings.Default.hostUrl);
            AuthToken authToken = new AuthToken();
            authToken.Token = Properties.Settings.Default.token;
            _services = new Services(path, authToken);
        }

        private void btnLogin_Click(object sender, EventArgs e)
        {
            AuthenticationService.Authenticate authenticate = new AuthenticationService.Authenticate();
            authenticate.LoginName = txtUsername.Text;
            authenticate.Password = txtPassword.Text;
            _services.General.Authentication(authenticate, AuthenticationCallback);
        }

        private void AuthenticationCallback(AuthenticationService.AuthenticateResponse response)
        {
            if (response.Status == 0)
            {
                Properties.Settings.Default.token = response.Value.Token;
                Close();
            }
            else lblErrorMessage.Text = "An error has occurred. Please try again.";
        }
    }
}
