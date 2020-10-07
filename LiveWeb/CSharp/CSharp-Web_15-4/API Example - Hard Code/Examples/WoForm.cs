using System;
using System.Windows.Forms;
// Add the using statement for Cityworks Core.
using Cityworks.Core;

namespace Examples
{
    public partial class WoForm : Form
    {
        #region Initialization and Validation ***************************************************************
        // Declare the global services variable.
        private Services _services;
        
        public WoForm()
        {
            InitializeComponent();

            // Retrieve the server path from .NET storage.
            Uri path = new Uri(Properties.Settings.Default.hostUri);
            // Create an AuthToken object.
            AuthToken authToken = new AuthToken();
            // Retrieve token from .NET storage and save it to the AuthToken object.
            authToken.Token = Properties.Settings.Default.token;
            // Initialize the services object with the path and AuthToken object.
            _services = new Services(path, authToken);
            // Create a validate object.
            AuthenticationService.Validate validate = new AuthenticationService.Validate();
            // Retrieve token from .NET storage and save it to the validate object.
            validate.Token = Properties.Settings.Default.token;
            // Make the validate API call and give it a callback function.
            _services.Authentication(validate, ValidationCallback);

            SetupComboBoxes();
        }

        // Callback function that is called when the validate API call is returned.
        private void ValidationCallback(AuthenticationService.ValidateResponse response)
        {
            // Check both the status and value of the response.
            // If the status is bad or the value is false:
            if (response.Status != 0 || response.Value == false)
            {
                // Open the login form. The window will not close until a valid token has been received.
                new LoginForm().ShowDialog(this);
                // Get the new token from .NET storage and save it to a new auth token object.
                AuthToken authToken = new AuthToken { Token = Properties.Settings.Default.token };
                // Reinitialize the services object with the new token.
                _services = new Services(new Uri(Properties.Settings.Default.hostUri), authToken);
            }
        }
        #endregion

        #region Search for Work Orders in .NET **************************************************************
        // Event handler that is called when the load work order list button is clicked.
        private void buttonRefreshWorkOrders_Click(object sender, EventArgs e)
        {
            // Call the function that refreshes the work order list.
            LoadWorkOrderList();
        }

        // Function that makes the work order search API call.
        private void LoadWorkOrderList()
        {
            // Make the work order search API call and give it a callback function.
            WorkOrderService.Search search = new WorkOrderService.Search();
            _services.AMS.WorkOrder(search, WorkOrderSearchCallback);
        }

        // Callback function that makes the work order by IDs API call.
        private void WorkOrderSearchCallback(WorkOrderService.SearchResponse response)
        {
            // Check the response status. If the response is good:
            if (response.Status == 0)
            {
                // Create a work order by IDs object.
                WorkOrderService.ByIds byIds = new WorkOrderService.ByIds();
                // Save the response value to the WorkOrderIds property of the by IDs object.
                byIds.WorkOrderIds = response.Value;
                // Make the work order by IDs API call and give it a callback function.
                _services.AMS.WorkOrder(byIds, WorkOrdersByIdsCallback);
            }
            // If the response is bad, inform the user.
            else
            {
                MessageBox.Show(response.ErrorMessages[0].Name);
            }
        }

        // Callback function that populates the work order list.
        private void WorkOrdersByIdsCallback(WorkOrderService.ByIdsResponse response)
        {
            // Check the response status. If the response is good:
            if (response.Status == 0)
            {
                // Populate the work order list box by setting the data source, value member, and display member.
                listBoxWorkOrders.DataSource = response.Value;
                listBoxWorkOrders.ValueMember = "WorkOrderId";
                listBoxWorkOrders.DisplayMember = "Description";
            }
            // If the response is bad, inform the user.
            else
            {
                MessageBox.Show(response.ErrorMessages[0].Name);
            }
        }
        #endregion

        #region Display Work Order Attributes ***************************************************************
        // Event handler that is called when the work order list selection is changed.
        private void listBoxWorkOrders_SelectedIndexChanged(object sender, EventArgs e)
        {
            // Get the currently selected work order.
            WorkOrderBase selectedWO = GetSelectedWorkOrder();
            // Display attributes of the selected work order.
            workOrderRichTextBox.Text =
                $"{selectedWO.WorkOrderId}\n" +
                $"{selectedWO.InitiateDate}\n" +
                $"{selectedWO.SubmitTo}\n" +
                $"{selectedWO.ApplyToEntity}\n" +
                $"{selectedWO.Status}";
        }
        #endregion

        #region Search for Inspections in .NET **************************************************************
        // Event handler that is called when the load inspections list button is clicked.
        private void buttonRefreshInspections_Click(object sender, EventArgs e)
        {
            // Create an inspection search object.
            InspectionService.Search search = new InspectionService.Search();
            // Make the inspection search API call and give it a callback function.
            _services.AMS.Inspection(search, SearchInspectionCallback);
        }

        // Callback function that makes the inspection by IDs API call.
        private void SearchInspectionCallback(InspectionService.SearchResponse response)
        {
            // Check the response status. If the response is good:
            if (response.Status == 0)
            {
                // Create an inspections by IDs object.
                InspectionService.ByIds byIds = new InspectionService.ByIds();
                // Save the response value to the InspectionIds property of the by IDs object.
                byIds.InspectionIds = response.Value;
                // Make the inspection by IDs API call and give it a callback function.
                _services.AMS.Inspection(byIds, InspectionsByIdsCallback);
            }
            // If the response is bad:
            else
            {
                MessageBox.Show(response.ErrorMessages[0].Name);
            }
        }

        // Callback function that populates the inspection list box.
        private void InspectionsByIdsCallback(InspectionService.ByIdsResponse response)
        {
            // Check the response status. If the response is good:
            if (response.Status == 0)
            {
                // Populate the inspection list box by setting the data source, value member, and display member.
                listBoxInspections.DataSource = response.Value;
                listBoxInspections.ValueMember = "InspectionId";
                listBoxInspections.DisplayMember = "InspTemplateName";
            }
            // If the response is bad, inform the user.
            else
            {
                MessageBox.Show(response.ErrorMessages[0].Name);
            }
        }
        #endregion

        #region Display Inspection Attributes ***************************************************************
        // Event handler that is called when the inspection list selection is changed.
        private void listBoxInspections_SelectedIndexChanged(object sender, EventArgs e)
        {
            // Get the currently selected inspection.
            InspectionBase selectedInsp = GetSelectedInspection();
            // Display attributes of the selected inspection.
            inspRichTextBox.Text =
                $"{selectedInsp.InspectionId}\n" +
                $"{selectedInsp.InitiateDate.ToShortDateString()}\n" +
                $"{selectedInsp.SubmitTo}\n" +
                $"{selectedInsp.EntityType}\n" +
                $"{selectedInsp.Status}";
        }
        #endregion

        #region SKILLS CHECK: Search for Service Requests in .NET, Display Service Request Attributes *******
        // Event handler that is called when the load service request list button is clicked.
        private void buttonRefreshSRs_Click(object sender, EventArgs e)
        {
            // Make the service request search API call.
            _services.AMS.ServiceRequest(new ServiceRequestService.Search(), ServiceRequestSearchCallback);
        }

        // Callback function that makes the service requests by IDs API call.
        private void ServiceRequestSearchCallback(ServiceRequestService.SearchResponse response)
        {
            // Check the response status. If the response is good:
            if (response.Status == 0)
            {
                // Create a service request by IDs object.
                ServiceRequestService.ByIds byIds = new ServiceRequestService.ByIds();
                // Save the response value to the RequestIds property of the by IDs object.
                byIds.RequestIds = response.Value;
                // Make the service request by IDs API call and give it a callback function.
                _services.AMS.ServiceRequest(byIds, ServiceRequestByIdsCallback);
            }
            // If the response is bad:
            else
            {
                MessageBox.Show(response.ErrorMessages[0].Name);
            }
        }

        // Callback function that populates the service request list.
        private void ServiceRequestByIdsCallback(ServiceRequestService.ByIdsResponse response)
        {
            // Check the status of the response. If the response is good:
            if (response.Status == 0)
            {
                // Populate the service request list box by setting the data source, value member, and display member.
                listBoxServiceRequests.DataSource = response.Value;
                listBoxServiceRequests.ValueMember = "RequestId";
                listBoxServiceRequests.DisplayMember = "Description";
            }
            // If the response is bad, inform the user.
            else
            {
                MessageBox.Show(response.ErrorMessages[0].Name);
            }
        }

        // Event handler that is called when the service request list selection is changed.
        private void listBoxServiceRequests_SelectedIndexChanged(object sender, EventArgs e)
        {
            // Get the currently selected service request.
            RequestBase selectedSR = GetSelectedRequest();
            // Display attributes of the selected service request.
            requestsRichTextBox.Text =
                $"{selectedSR.RequestId}\n" +
                $"{selectedSR.DateTimeInit}\n" +
                $"{selectedSR.SubmitTo}\n" +
                $"{selectedSR.Status}";
        }
        #endregion

        #region Create a Work Order in .NET *****************************************************************
        // Event handler that is called when the create work order button is clicked.
        private void buttonCreateWorkOrder_Click(object sender, EventArgs e)
        {
            // Check the contents of the inspection ID. If there is no inspection ID provided:
            if (string.IsNullOrEmpty(textBoxInspectionId.Text))
            {
                // Declare a work order create object.
                WorkOrderService.Create create = new WorkOrderService.Create();
                // Set the properties of the create object to the contents of the various inputs.
                create.WOTemplateId = ((KeyValuePair<string, string>)comboBoxWoTemplateId.SelectedItem).Key;
                create.EntityType = ((KeyValuePair<string, string>)comboBoxWoEntityType.SelectedItem).Key;
                create.SubmitTo = ((KeyValuePair<int, string>)comboBoxSubmitTo.SelectedItem).Key;
                create.Text1 = textBoxWoNotes.Text;
                // Call the work order create API and give it a callback.
                _services.AMS.WorkOrder(create, createWorkOrderCallback);
            }
            // If there is an inspection ID provided:
            else
            {
                // Declare a work order create from inspection object.
                WorkOrderService.CreateFromInspection woCreation = new WorkOrderService.CreateFromInspection();
                // Set the properties of the create object to the contents of the various inputs.
                woCreation.WOTemplateId = ((KeyValuePair<string, string>)comboBoxWoTemplateId.SelectedItem).Key;
                woCreation.EntityType = ((KeyValuePair<string, string>)comboBoxWoEntityType.SelectedItem).Key;
                woCreation.SubmitTo = ((KeyValuePair<int, string>)comboBoxSubmitTo.SelectedItem).Key;
                woCreation.Text1 = textBoxWoNotes.Text;
                woCreation.InspectionId = int.Parse(textBoxInspectionId.Text);
                // Call the work order create from inspection API and give it a callback.
                _services.AMS.WorkOrder(woCreation, createWorkOrderFromInspectionCallback);
            }
        }

        // Callback function for the work order create API call.
        private void createWorkOrderCallback(WorkOrderService.CreateResponse response)
        {
            // Check the status of the response. If the response is good:
            if (response.Status == 0)
            {
                // Get the work order ID of the newly created work order.
                var woId = response.Value[0].WorkOrderId;
                // Inform the user of the successful work order creation.
                richTextBoxCallbackNotes.Text = $"Work Order {woId} successfully created.";
                // Reload the work order list so that it includes the new work order.
                LoadWorkOrderList();
            }
            // If the response is bad, inform the user.
            else
            {
                MessageBox.Show(response.ErrorMessages[0].Name);
            }
        }

        // Callback function for the work order create from inspection API call.
        private void createWorkOrderFromInspectionCallback(WorkOrderService.CreateFromInspectionResponse response)
        {
            // Check the status of the response. If the response is good:
            if (response.Status == 0)
            {
                // Get the work order ID of the newly created work order.
                var woId = response.Value[0].WorkOrderId;
                // Inform the user of the successful work order creation.
                richTextBoxCallbackNotes.Text = $"Work Order {woId} successfully created from Inspection {textBoxInspectionId.Text}.";
                // Reload the work order list so that it includes the new work order.
                LoadWorkOrderList();
            }
            // If the response is bad, inform the user.
            else
            {
                MessageBox.Show(response.ErrorMessages[0].Name);
            }
        }
        #endregion

        #region Associate an Inspection to a Work Order *****************************************************
        // Event handler that is called when the link inspection to work order button is clicked.
        private void buttonAddInspectionToWorkOrder_Click(object sender, EventArgs e)
        {
            // Declare an activity link add object to link the selected inspection (source) and work order (destination).
            ActivityLinkService.Add newLink = new ActivityLinkService.Add();
            // Get the selected inspection's ID and add it to the new link object.
            newLink.SourceId = GetSelectedInspection().InspectionId.ToString();
            // Get the selected inspection's ID and add it to the new link object.
            newLink.DestId = GetSelectedWorkOrder().WorkOrderId;
            // Define the source and destination activity types and the link type.
            newLink.SourceType = ActivityLinkActivityType.Inspection;
            newLink.DestType = ActivityLinkActivityType.WorkOrder;
            newLink.LinkType = ActivityLinkType.Related;
            // Call the activity link add API call and give it a callback.
            _services.General.ActivityLink(newLink, AddLinkCallback);
        }

        // Callback function for the activity link add API call.
        private void AddLinkCallback(ActivityLinkService.AddResponse response)
        {
            // Check the response status. If the response is good:
            if (response.Status == 0)
            {
                // If the response is null, the link already exists.
                if (response.Value == null)
                {
                    // Notify user of existing link.
                    richTextBoxCallbackNotes.Text = $"Link may already exist between inspection" +
                        $"{GetSelectedInspection().InspectionId} and work order {GetSelectedWorkOrder().WorkOrderId}.";
                }
                // If the response is not null, a new link has been made.
                else
                {
                    // Notify user of activity link success.
                    richTextBoxCallbackNotes.Text = $"{response.Value.SourceType} {response.Value.SourceId}" +
                        $"successfully attached to {response.Value.DestType} {response.Value.DestId}.";
                }
            }
            // If the response is bad:
            else
            {
                MessageBox.Show(response.ErrorMessages[0].Name);
            }
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
