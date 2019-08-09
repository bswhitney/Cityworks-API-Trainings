using System;
using System.Windows.Forms;
using System.Collections.Generic;
using System.Net;
using System.IO;
// Add the using statement for Cityworks Core.

namespace Examples
{
    public partial class WoForm : Form
    {
        #region Initialization and Validation ***************************************************************
        // Declare the global services variable.
        
        public WoForm()
        {
            InitializeComponent();

            // Retrieve the server path from .NET storage.
            // Create an AuthToken object.
            // Retrieve token from .NET storage and save it to the AuthToken object.
            // Initialize the services object with the path and AuthToken object.
            // Create a validate object. 
            // Retrieve token from .NET storage and save it to the validate object.
            // Make the validate API call and give it a callback function.

            SetupComboBoxes();
        }

        // Callback function that is called when the validate API call is returned.
        private void ValidationCallback(AuthenticationService.ValidateResponse response)
        {
            // Check both the status and value of the response.
            // If the status is bad or the value is false:
                // Open the login form. The window will not close until a valid token has been received.
                // Get the new token from .NET storage and save it to a new auth token object.
                // Reinitialize the services object with the new token.
        }
        #endregion

        #region Search for Work Orders in .NET **************************************************************
        // Event handler that is called when the load work order list button is clicked.
        private void buttonRefreshWorkOrders_Click(object sender, EventArgs e)
        {
            // Call the function that refreshes the work order list.
        }

        // Function that makes the work order search API call.
        private void LoadWorkOrderList()
        {
            // Make the work order search API call and give it a callback function.
        }

        // Callback function that makes the work order by IDs API call.
        private void WorkOrderSearchCallback(WorkOrderService.SearchResponse response)
        {
            // Check the response status. If the response is good:
                // Create a work order by IDs object.
                // Save the response value to the WorkOrderIds property of the by IDs object.
                // Make the work order by IDs API call and give it a callback function.
            // If the response is bad, inform the user.
        }

        // Callback function that populates the work order list.
        private void WorkOrdersByIdsCallback(WorkOrderService.ByIdsResponse response)
        {
            // Check the response status. If the response is good:
                // Populate the work order list box by setting the data source, value member, and display member.
            // If the response is bad, inform the user.
        }
        #endregion

        #region Display Work Order Attributes ***************************************************************
        // Event handler that is called when the work order list selection is changed.
        private void listBoxWorkOrders_SelectedIndexChanged(object sender, EventArgs e)
        {
            // Get the currently selected work order.
            // Display attributes of the selected work order.
        }
        #endregion

        #region Search for Inspections in .NET **************************************************************
        // Event handler that is called when the load inspections list button is clicked.
        private void buttonRefreshInspections_Click(object sender, EventArgs e)
        {
            // Create an inspection search object.
            // Make the inspection search API call and give it a callback function.
        }

        // Callback function that makes the inspection by IDs API call.
        private void SearchInspectionCallback(InspectionService.SearchResponse response)
        {
            // Check the response status. If the response is good:
                // Create an inspections by IDs object.
                // Save the response value to the InspectionIds property of the by IDs object.
                // Make the work order by IDs API call and give it a callback function.
            // If the response is bad:
        }

        // Callback function that populates the inspection list box.
        private void InspectionsByIdsCallback(InspectionService.ByIdsResponse response)
        {
            // Check the response status. If the response is good:
                // Populate the inspection list box by setting the data source, value member, and display member.
            // If the response is bad, inform the user.
        }
        #endregion

        #region Display Inspection Attributes ***************************************************************
        // Event handler that is called when the inspection list selection is changed.
        private void listBoxInspections_SelectedIndexChanged(object sender, EventArgs e)
        {
            // Get the currently selected inspection.
            // Display attributes of the selected inspection.
        }
        #endregion

        #region SKILLS CHECK: Search for Service Requests in .NET, Display Service Request Attributes *******
        // Event handler that is called when the load service request list button is clicked.
        private void buttonRefreshSRs_Click(object sender, EventArgs e)
        {
            // Make the service request search API call.
        }

        // Callback function that makes the service requests by IDs API call.
        private void ServiceRequestSearchCallback(ServiceRequestService.SearchResponse response)
        {
            // Check the response status. If the response is good:
            // Create a service request by IDs object.
            // Save the response value to the RequestIds property of the by IDs object.
            // Make the service request by IDs API call and give it a callback function.
            // If the response is bad:
        }

        // Callback function that populates the service request list.
        private void ServiceRequestByIdsCallback(ServiceRequestService.ByIdsResponse response)
        {
            // Check the status of the response. If the response is good:
                // Populate the service request list box by setting the data source, value member, and display member.
            // If the response is bad, inform the user.
        }

        // Event handler that is called when the service request list selection is changed.
        private void listBoxServiceRequests_SelectedIndexChanged(object sender, EventArgs e)
        {
            // Get the currently selected service request.
            // Display attributes of the selected service request.
        }
        #endregion

        #region Create a Work Order in .NET *****************************************************************
        // Event handler that is called when the create work order button is clicked.
        private void buttonCreateWorkOrder_Click(object sender, EventArgs e)
        {
            // Check the contents of the inspection ID. If there is no inspection ID provided:
                // Declare a work order create object.
                // Set the properties of the create object to the contents of the various inputs.
                // Call the work order create API and give it a callback.
            // If there is an inspection ID provided:
                // Declare a work order create from inspection object.
                // Set the properties of the create object to the contents of the various inputs.
                // Call the work order create from inspection API and give it a callback.
        }

        // Callback function for the work order create API call.
        private void createWorkOrderCallback(WorkOrderService.CreateResponse response)
        {
            // Check the status of the response. If the response is good:
                // Get the work order ID of the newly created work order.
                // Inform the user of the successful work order creation.
                // Reload the work order list so that it includes the new work order.
            // If the response is bad, inform the user.
        }

        // Callback function for the work order create from inspection API call.
        private void createWorkOrderFromInspectionCallback(WorkOrderService.CreateFromInspectionResponse response)
        {
            // Check the status of the response. If the response is good:
                // Get the work order ID of the newly created work order.
                // Inform the user of the successful work order creation.
                // Reload the work order list so that it includes the new work order.
            // If the response is bad, inform the user.
        }
        #endregion

        #region Associate an Inspection to a Work Order *****************************************************
        // Event handler that is called when the link inspection to work order button is clicked.
        private void buttonAddInspectionToWorkOrder_Click(object sender, EventArgs e)
        {
            // Declare an activity link add object to link the selected inspection (source) and work order (destination).
            // Get the IDs of the selected inspection and work order and add them to the new link object.
            // Define the source and destination activity types and the link type.
            // Call the activity link add API call and give it a callback.
        }

        // Callback function for the activity link add API call.
        private void AddLinkCallback(ActivityLinkService.AddResponse response)
        {
            // Check the response status. If the response is good:
            // If the response is null, the link already exists.
            // Notify user of existing link.
            // If the response is not null, a new link has been made.
            // Notify user of activity link success.
            // If the response is bad:
        }
        #endregion

        #region Prewritten Functions ************************************************************************
        
        private void comboBoxWoEntityType_SelectedIndexChanged(object sender, EventArgs e)
        {
            PWEntity selEntity = GetSelectedEntityType();
            LoadWorkOrderTemplateList(selEntity);
        }

        private void LoadWorkOrderTemplateList(PWEntity selEntity)
        {
            //hard code work order templates
            comboBoxWoTemplateId.Items.Add(new KeyValuePair<string, string>("1", "Repair Main"));
            comboBoxWoTemplateId.Items.Add(new KeyValuePair<string, string>("19", "Inspect Manhole"));
            comboBoxWoTemplateId.Items.Add(new KeyValuePair<string, string>("2", "Install Main"));
            comboBoxWoTemplateId.SelectedIndex = 0;
        }

        private PWEntity GetSelectedEntityType()
        {
            PWEntity comboItem = new PWEntity();
            comboItem.Code = ((KeyValuePair<string,string>)comboBoxWoEntityType.SelectedItem).Key;
            comboItem.Description = ((KeyValuePair<string, string>)comboBoxWoEntityType.SelectedItem).Value;
            return comboItem;
        }

        private WorkOrderBase GetSelectedWorkOrder()
        {
            return ((WorkOrderBase)listBoxWorkOrders.SelectedItem);
        }

        private InspectionBase GetSelectedInspection()
        {
            return ((InspectionBase)listBoxInspections.SelectedItem);
        }
        
        private RequestBase GetSelectedRequest()
        {
            return ((RequestBase)listBoxServiceRequests.SelectedItem);
        }

        public void SetupComboBoxes()
        {
            //hard code entity types
            comboBoxWoEntityType.Items.Add(new KeyValuePair<string, string>("SGRAVITYMAIN","Sewer Gravity Mains"));
            comboBoxWoEntityType.Items.Add(new KeyValuePair<string, string>("SMANHOLE","Sewer Manholes"));
            comboBoxWoEntityType.SelectedIndex = 0;

            //hard code employees to submit to
            comboBoxSubmitTo.Items.Add(new KeyValuePair<int, string>(2, "GREENFIELD, DAN R"));
            comboBoxSubmitTo.Items.Add(new KeyValuePair<int, string>(6, "ROBERTS, GUY F"));
            comboBoxSubmitTo.Items.Add(new KeyValuePair<int, string>(4, "VALENZY, RUSSELL D"));
            comboBoxSubmitTo.SelectedIndex = 0;
        }
        #endregion
    }
}
