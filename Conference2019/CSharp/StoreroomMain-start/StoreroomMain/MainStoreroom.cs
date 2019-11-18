using System;
using System.Collections.Generic;
using System.Windows.Forms;
using Cityworks.Core;

namespace StoreroomMain
{
    public partial class MainStoreroom : Form
    {
        #region Initialization and Validation
        // Declare the global services variable to handle all API calls.

        public MainStoreroom() // Called upon initialization.
        {
            InitializeComponent();
            // Get the host URL from .NET storage.
            // Get the token from .NET storage and save to an AuthToken object.
            // Define the global services variable with the host URL and the AuthToken objects.
            // Call the function to validate the token.
        }

        // Function to make the Authentication/Validate API call.
        private void ValidateToken()
        {
            // Declare the object to make the Authentication/Validate API call.
            // Set the validate object's Token parameter.
            // Make the API call and set a callback function.
        }

        // Callback function for the Authentication/Validate API call.
        private void ValidateTokenCallback(AuthenticationService.ValidateResponse response)
        {
            // Check the status and value of the response. If the response is bad or the token invalid...
            if (response.Status != CoreResponseStatus.Ok || !response.Value) // Can also use ...response.Status == 0...
            {
                // Open the Login window. This will close when a valid token has been received.
                // Get the new token from .NET storage and save it to an Authtoken object.
                // Redefine the global services object with the new AuthToken object.
                // Call the function to load the list box and the combo box.
                LoadPresets();
            }
        }
        #endregion

        #region Receive Materials into the Main Storeroom
        // Event handler for the receive button being clicked. Make the Storeroom/AddReceive API call.
        private void btnReceive_Click(object sender, EventArgs e)
        {
            // Declare the object to make the Storeroom/AddReceive API call.
            // Set all the necessary parameters, including Destination, MaterialSid, and Quantity.
            // Make the API call and set a callback function.
        }

        // Callback function for the Storeroom/AddReceive API call.
        private void AddReceiveCallback(StoreroomService.AddReceiveResponse response)
        {
            // Check the status of the response. If the response is good...
            if (response.Status == 0)
            {
                // Inform the user of success.
                // Call the function to refresh the storeroom stocks list box.
            }
            // If the response is bad...
            else
            {
                // Inform the user of failure.
            }
        }
        #endregion

        #region Transfer Materials from the Main Storeroom
        // Event handler for the transfer button being clicked. Make the Storeroom/AddTransfer API call.
        private void btnTransfer_Click(object sender, EventArgs e)
        {
            // Declare the object to make the Storeroom/AddTransfer API call.
            // Set all the necessary parameters, including Source, Destination, MaterialSid, and Quantity.
            // Make the API call and set a callback function.
        }

        // Callback function for the Storeroom/AddTransfer API call.
        private void AddTransferCallback(StoreroomService.AddTransferResponse response)
        {
            // Check the status of the response. If the response is good...
            if (response.Status == 0)
            {
                // Inform the user of success.
                // Call the function to refresh the storeroom stocks list box.
            }
            // If the response is bad...
            else
            {
                // Inform the user of failure.
            }
        }
        #endregion

        #region Prewritten Functionality
        // Function to call the functions that fill combo boxes and lists automatically.
        private void LoadPresets()
        {
            // Call the function to fill the list box with main storeroom stocks.
            StoreroomStocks();
            // Call the function to fill the combo box with destination storerooms.
            Storerooms();
        }

        // Function to make the Storeroom/StoreroomStock API call.
        private void StoreroomStocks()
        {
            // Declare the object to make the Storeroom/StoreroomStocks API call.
            StoreroomService.StoreroomStocks stocks = new StoreroomService.StoreroomStocks();
            // Set "MAIN" as the Storeroom parameter.
            stocks.Storeroom = "MAIN";
            // Make the API call and set a callback function.
            _services.AMS.Storeroom(stocks, StoreroomStocksCallback);
        }

        // Callback function for the Storeroom/StoreroomStocks API call.
        private void StoreroomStocksCallback(StoreroomService.StoreroomStocksResponse response)
        {
            // Check the status of the response. If the response is good...
            if (response.Status == 0)
            {
                // Set up a list to carry the IDs of all materials in the response.
                List<int> ids = new List<int>();
                // Iterate through the response value and add each material's ID to the list.
                foreach (StorermStock stock in response.Value) ids.Add(stock.MaterialSid);
                // Declare the object to make the Material/ByIds API call.
                MaterialService.ByIds byIds = new MaterialService.ByIds();
                // Set the new list as the MaterialSids parameter.
                byIds.MaterialSids = ids;
                // Make the API call and set a callback function.
                _services.AMS.Material(byIds, MaterialByIdsCallback);
            }
        }

        // Callback function for the Material/ByIds API call.
        private void MaterialByIdsCallback(MaterialService.ByIdsResponse response)
        {
            // Check the status of the response. If the response is good...
            if (response.Status == 0)
            {
                // Configure the list box using DataSource, ValueMember, and DisplayMember.
                lbxMainStocks.DataSource = response.Value;
                lbxMainStocks.ValueMember = "MaterialSid";
                lbxMainStocks.DisplayMember = "Description";
            }
        }

        // Event handler for change in selected list box item.
        private void lbxMainStocks_SelectedIndexChanged(object sender, EventArgs e)
        {
            // Get the selected material.
            MaterialBase selectedMaterial = (MaterialBase)lbxMainStocks.SelectedItem;
            // Get the stock in the main storeroom.
            decimal onHand = _services.AMS.Storeroom(new StoreroomService.StoreroomStocks { MaterialSid = selectedMaterial.MaterialSid }).Value[0].StockOnHand;
            // Change the rich text box below the stocks list to display information about the selected material.
            rtbStockInfo.Text =
                $"ID:\t\t{selectedMaterial.MaterialSid}\n" +
                $"Unit:\t\t{selectedMaterial.UnitOfMeasure}\n" +
                $"Quantity:\t\t{onHand}\n" +
                $"Unit Price:\t${selectedMaterial.UnitCost}";
            // Limit the maximum transferable quantity to the stock on hand.
            numTransferQuantity.Maximum = onHand;
            // Reset the transfer quantity.
            numTransferQuantity.Value = 0;
        }

        // Event handler for the refresh button being clicked.
        private void btnRefreshStocks_Click(object sender, EventArgs e)
        {
            // Call the function to redisplay the storeroom stocks in the list box.
            StoreroomStocks();
        }

        // Function to make the Storeroom/Storerooms API call.
        private void Storerooms()
        {
            // Make the Storeroom/Storerooms API call and set a callback function.
            _services.AMS.Storeroom(new StoreroomService.Storerooms(), StoreroomsCallback);
        }

        // Callback function for the Storeroom/Storerooms API call.
        private void StoreroomsCallback(StoreroomService.StoreroomsResponse response)
        {
            // Check the status of the response. If the response is good...
            if (response.Status == 0)
            {
                // Remove MAIN, which is the first item in the response value.
                response.Value.RemoveAt(0);
                // Configure the combo box using DataSource, ValueMember, and DisplayMember.
                cboDestinationStoreroom.DataSource = response.Value;
                cboDestinationStoreroom.ValueMember = "Code";
                cboDestinationStoreroom.DisplayMember = "Description";
            }
        }
        #endregion
    }
}
