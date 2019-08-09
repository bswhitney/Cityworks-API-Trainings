using System;
using System.Windows.Forms;
using System.Collections.Generic;
using System.Net;
using System.IO;
// Add the using statements for Cityworks Core and Newtonsoft JSON.
using Cityworks.Core;
using Newtonsoft.Json;

namespace Examples
{
    public partial class WoForm : Form
    {
        #region Initialization and Validation ***********************************************************************************
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
            var validate = new AuthenticationService.Validate();
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
            if (response.Status != CoreResponseStatus.Ok || !response.Value)
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

        #region Search for Work Orders in .NET **********************************************************************************
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
            _services.AMS.WorkOrder(new WorkOrderService.Search(), WorkOrderSearchCallback);
        }

        // Callback function that makes the work order by IDs API call.
        private void WorkOrderSearchCallback(WorkOrderService.SearchResponse response)
        {
            // Check the response status. If the response is good:
            if (response.Status == CoreResponseStatus.Ok)
            {
                // Create a work order by IDs object.
                WorkOrderService.ByIds byIds = new WorkOrderService.ByIds();
                // Save the response value to the WorkOrderIds property of the by IDs object.
                byIds.WorkOrderIds = response.Value;
                // Make the work order by IDs API call and give it a callback function.
                _services.AMS.WorkOrder(byIds, WorkOrdersByIdsCallback);
            }
            // If the response is bad, inform the user.
            else ErrorMessage();
        }

        // Callback function that populates the work order list.
        private void WorkOrdersByIdsCallback(WorkOrderService.ByIdsResponse response)
        {
            // Check the response status. If the response is good:
            if (response.Status == 0)
            {
                // Populate the work order list box by setting the
                // data source, value member, and display member.
                listBoxWorkOrders.DataSource = response.Value;
                listBoxWorkOrders.ValueMember = "WorkOrderId";
                listBoxWorkOrders.DisplayMember = "Description";
            }
            // If the response is bad, inform the user.
            else ErrorMessage();
        }
        #endregion

        #region Display Work Order Attributes ***********************************************************************************
        // Event handler that is called when the work order list selection is changed.
        private void listBoxWorkOrders_SelectedIndexChanged(object sender, EventArgs e)
        {
            // Get the currently selected work order.
            WorkOrderBase selWO = GetSelectedWorkOrder();
            // Display attributes of the selected work order.
            workOrderRichTextBox.Text =
                $"{selWO.WorkOrderId}\n" +
                $"{selWO.InitiateDate.ToShortDateString()}\n" +
                $"{selWO.SubmitTo}\n" +
                $"{selWO.ApplyToEntity}\n" +
                $"{selWO.Status}";
        }
        #endregion

        #region Search for Inspections in .NET **********************************************************************************
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
                var byIds = new InspectionService.ByIds();
                // Save the response value to the InspectionIds property of the by IDs object.
                byIds.InspectionIds = response.Value;
                // Make the work order by IDs API call and give it a callback function.
                _services.AMS.Inspection(byIds, InspectionsByIdsCallback);
            }
            // If the response is bad:
            else ErrorMessage();
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
            else ErrorMessage();
        }
        #endregion

        #region Display Inspection Attributes ***********************************************************************************
        // Event handler that is called when the inspection list selection is changed.
        private void listBoxInspections_SelectedIndexChanged(object sender, EventArgs e)
        {
            // Get the currently selected inspection.
            InspectionBase selInsp = GetSelectedInspection();
            // Display attributes of the selected inspection.
            inspRichTextBox.Text =
                $"{selInsp.InspectionId}\n" +
                $"{selInsp.InitiateDate.ToShortDateString()}\n" +
                $"{selInsp.SubmitTo}\n" +
                $"{selInsp.EntityType}\n" +
                $"{selInsp.Status}";
        }
        #endregion

        #region SKILLS CHECK: Search for Service Requests in .NET, Display Service Request Attributes ***************************
        // Event handler that is called when the load service request list button is clicked.
        private void buttonRefreshSRs_Click(object sender, EventArgs e)
        {
            // Call the function that refreshes the service request list.
            LoadServiceRequestList();
        }

        // Function that makes the service request search API call.
        private void LoadServiceRequestList()
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
            else ErrorMessage();
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
            else ErrorMessage();
        }

        // Event handler that is called when the service request list selection is changed.
        private void listBoxServiceRequests_SelectedIndexChanged(object sender, EventArgs e)
        {
            // Get the currently selected service request.
            RequestBase selSR = GetSelectedRequest();
            // Display attributes of the selected service request.
            requestsRichTextBox.Text =
                $"{selSR.RequestId}\n" +
                $"{selSR.DateTimeInit.ToShortDateString()}\n" +
                $"{selSR.SubmitTo}\n" +
                $"{selSR.Priority}\n" +
                $"{selSR.Status}";
        }
        #endregion

        #region Create a Work Order in .NET *************************************************************************************
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
            else ErrorMessage();
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
            else ErrorMessage();
        }
        #endregion

        #region Associate an Inspection to a Work Order *************************************************************************
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
            else MessageBox.Show(response.Message);

        }
        #endregion

        #region Fill Combo Boxes with Domain Information in .NET ****************************************************************
        // Function to populate combo boxes either dynamically or from hard-coded values.
        public void SetupComboBoxes()
        {
            // Get the list of domains using the authentication domains API.
            // Check the value of the response. If the response is bad, alert the user.

            // Next, get entity groups using the domain ID and the entity groups API.
            // Check the value of the response. If the response if bad, alert the user.
            // Declare a list and add all entity group modules.

            // IMPORTANT: AFTER THIS STEP CHANGE THE WORK ORDER CREATE ENTITY TYPE PROPERTY TO:
            // ((PWEntity)comboBoxWoEntityType.SelectedItem).;

            // Declare an entity types object and set the entity groups property to the list we made.
            // Make the API call and save the response to a variable.
            // Check the value of the response. If the response is bad, alert the user.
            // Populate the entity type combo box.

            // Function to load various combo boxes. Uncomment when needed.
            LoadStoreroomStocks();
            PLLLoadCaseTemplates();
            PLLLoadPaymentTenderTypes();
            LoadEmployees();

            // Hard-coded entity types and submit to employee lists. Comment out as needed.
            comboBoxWoEntityType.Items.Add(new KeyValuePair<string, string>("SGRAVITYMAIN", "Sewer Gravity Mains"));
            comboBoxWoEntityType.Items.Add(new KeyValuePair<string, string>("SMANHOLE", "Sewer Manholes"));
            comboBoxWoEntityType.SelectedIndex = 0;
            comboBoxSubmitTo.Items.Add(new KeyValuePair<int, string>(2, "GREENFIELD, DAN R"));
            comboBoxSubmitTo.Items.Add(new KeyValuePair<int, string>(6, "ROBERTS, GUY F"));
            comboBoxSubmitTo.Items.Add(new KeyValuePair<int, string>(4, "VALENZY, RUSSELL D"));
            comboBoxSubmitTo.SelectedIndex = 0;
        }

        // Function that gets the selected entity type.
        private PWEntity GetSelectedEntityType()
        {
            PWEntity comboItem = new PWEntity();
            comboItem.Code = ((KeyValuePair<string, string>)comboBoxWoEntityType.SelectedItem).Key;
            comboItem.Description = ((KeyValuePair<string, string>)comboBoxWoEntityType.SelectedItem).Value;
            return comboItem;
            // Replace the above code with code that gets the selected entity type and returns it.
        }

        // Event handler that gets the selected entity and populates the combo box with corresponding work order templates.
        private void comboBoxWoEntityType_SelectedIndexChanged(object sender, EventArgs e)
        {
            // Get the selected entity.
            PWEntity selEntity = GetSelectedEntityType();
            // Call the function that loads work order templates based on entity type.
            LoadWorkOrderTemplateList(selEntity);
        }

        private void LoadWorkOrderTemplateList(PWEntity selEntity)
        {
            // IMPORTANT: AFTER THIS STEP CHANGE THE WORK ORDER CREATE TEMPLATE ID PROPERTY TO:
            // ((WOTemplateName)comboBoxWoTemplateId.SelectedItem).WOTemplateId;

            // Declare a work order template names object.
            // Declare a list to hold the code of the selected entity type, and store that code.
            // Set the entity types property of the work order template object.
            // Make the API call and save the response to a variable.
            // Populate the combo box with the response.

            // Hard-coded work order templates. Comment out after the above steps have been take.
            comboBoxWoTemplateId.Items.Add(new KeyValuePair<string, string>("1", "Repair Main"));
            comboBoxWoTemplateId.Items.Add(new KeyValuePair<string, string>("19", "Inspect Manhole"));
            comboBoxWoTemplateId.Items.Add(new KeyValuePair<string, string>("2", "Install Main"));
            comboBoxWoTemplateId.SelectedIndex = 0;
        }
        #endregion

        #region SKILLS CHECK: Fill in Employee Combo Box Using Cityworks APIs ***************************************************
        private void LoadEmployees()
        {
            // IMPORTANT: AFTER THIS STEP CHANGE THE WORK ORDER CREATE SUBMIT TO PROPERTY TO:
            // ((EmployeeBase)comboBoxSubmitTo.SelectedItem).EmployeeSid;

            // Create an employees all object. Set the include inactive property to false.
            // Make the API call and save the response to a variable.
            // Populate the submit to combo box with the employees returned.
        }
        #endregion

        #region Non-SDK Cityworks API HTTP Methods ******************************************************************************
        // Function used to make HTTP requests without using the SDK.
        // Will be used in some subsequent sections.
        private dynamic CityworksHTTPRequest(string url, string data)
        {
            // Format the data and token sections of the URL.
            data = "?data=" + data;
            string token = "&token=" + Properties.Settings.Default.token;
            // Create an object to make HTTP requests with the URL, data object, and token.
            var httpWebRequest = (HttpWebRequest)WebRequest.Create(url + data + token);
            // Set the request content type and method.
            httpWebRequest.ContentType = "application/json";
            httpWebRequest.Method = "GET";
            // Declare the response object. Make it dynamic, because it will vary in type.
            dynamic response;

            // Make the API call using the HTTP request and save the response to a variable.
            var httpResponse = (HttpWebResponse)httpWebRequest.GetResponse();
            // Convert the response from JSON into a useable format and save to dynamic response variable.
            using (var streamReader = new StreamReader(httpResponse.GetResponseStream()))
            {
                var result = streamReader.ReadToEnd();
                response = JsonConvert.DeserializeObject(result);
            }
            // Return the HTTP response.
            return response;
        }
        #endregion

        #region Add a GIS Service Resource to Cityworks with HTTP ***************************************************************
        // Event handler that is called when the add GIS button is clicked.
        private void buttonAddGIS_Click(object sender, EventArgs e)
        {
            // Call the function that adds a GIS service resource.
            AddGISServiceResource();
        }

        // Function that uses an HTTP request to add a GIS service.
        private void AddGISServiceResource()
        {
            // Declare all necessary values in order to add a GIS service.
            string url = "https://training.cityworks.com/cityworks/Services/AMS/GISService/AddGISServiceEndPointSecurity";
            string serviceName = "Cityville Sewer";
            string serviceURL = "https://training.cityworks.com/arcgis/rest/services/Cityville/Cityville_Sewer/MapServer";
            string serviceType = "0";
            // Condense all of the values into a JSON data object.
            string data = "{" + $"'ServiceName':'{serviceName}','Service':'{serviceURL}','ServiceType':'{serviceType}'" + "}";
            // Make the API call. We are not concerned about the response, so we will not make a callback.
            CityworksHTTPRequest(url, data);
        }
        #endregion

        #region Loading PLL Case Templates with HTTP ****************************************************************************
        // Function that loads PLL case templates using HTTP requests rather than the SDK.
        private void PLLLoadCaseTemplates()
        {
            // Declare and define the URL and the data object.
            string caseBusinessCaseURL =
                "https://training.cityworks.com/cityworks/services/pll/businesscase/casetemplates";
            string dataObject = "{}";
            // Make the API call using the HTTP request method. Save response to a variable.
            var response = CityworksHTTPRequest(caseBusinessCaseURL, dataObject);
            // Get the list of case templates stored in the value section of the response.
            var caseTemplates = response["Value"];
            // Populate the case template combo box.
            comboBoxCaseTypes.DataSource = caseTemplates;
            comboBoxCaseTypes.ValueMember = "CaseTypeId";
            comboBoxCaseTypes.DisplayMember = "BusCaseDesc";
        }
        #endregion

        #region Create a PLL Case in .NET ***************************************************************************************
        // Event handler that is called when the create PLL case button is clicked.
        private void buttonCreateCase_Click(object sender, EventArgs e)
        {
            // Call the function that will create the case.
            PLLCreateCase();
        }

        // Function that creates a PLL case.
        private void PLLCreateCase()
        {
            // Declare a case create object.
            CaseService.Create create = new CaseService.Create();
            // Set the properties of the create object. Convert data types when necessary.
            create.CaseTypeId = int.Parse(comboBoxCaseTypes.SelectedValue.ToString());
            create.CaseName = textBoxCaseName.Text;
            // Call the case create API and give it a callback.
            _services.PLL.Case(create, PLLCreateCaseCallback);
        }

        // Callback function for the case create API call.
        private void PLLCreateCaseCallback(CaseService.CreateResponse response)
        {
            // Check the status of the response. If the response is good:
            if (response.Status == 0)
            {
                // Inform the user of the successful case creation.
                richTextBoxCallbackNotes.Text = $"PLL Case: {response.Value.CaseNumber} {response.Value.CaseName} created.";
                // Remove the contents of the case name text box.
                textBoxCaseName.Text = null;
                // Reload the case list to show the new case.
                LoadCaseList();
            }
            // If the response is bad, inform the user.
            else ErrorMessage();
        }
        #endregion

        #region Add a PLL Case Payment in .NET **********************************************************************************
        // Event handler that is called when the selected case changes.
        private void listBoxCases_SelectedIndexChanged(object sender, EventArgs e)
        {
            // Check to see if a case is selected
            // If a case is selected, call the PLL load case fees function.
            if (listBoxCases.SelectedItem != null) { PLLLoadCaseFees(); }
        }

        // Function that populates the fees combo box.
        private void PLLLoadCaseFees()
        {
            // Declare a case fees by case object ID object. 
            CaseFeesService.ByCaObjectId byCaObjectId = new CaseFeesService.ByCaObjectId();
            // Set the case object ID property to the selected case object's ID.
            byCaObjectId.CaObjectId = ((CaObjectItemBase)listBoxCases.SelectedItem).CaObjectId;
            // Make the API call, saving the response to a variable.
            var caseFeeResponse = _services.PLL.CaseFees(byCaObjectId);
            // Populate the combo box using the response.
            comboBoxFees.DataSource = caseFeeResponse.Value;
            comboBoxFees.ValueMember = "CaFeeId";
            comboBoxFees.DisplayMember = "FeeDesc";
        }

        // Event handler that is called when the make payment button is clicked.
        private void buttonPayment_Click(object sender, EventArgs e)
        {
            // Call the function that will add a case payment.
            PLLAddCasePayment();
        }

        // Function that adds a payment to a case.
        private void PLLAddCasePayment()
        {
            // Declare a case payment add object and set all required properties.
            CasePaymentService.Add add = new CasePaymentService.Add();
            add.CaFeeId = ((CaFeesItemBase)comboBoxFees.SelectedItem).CaFeeId;
            add.CaObjectId = ((CaObjectItemBase)listBoxCases.SelectedItem).CaObjectId;
            add.CustFeeSeq = ((CaFeesItemBase)comboBoxFees.SelectedItem).CustFeeSeq;
            add.DateReceived = dateTimePickerPaymentDate.Value;
            add.PaymentDate = dateTimePickerPaymentDate.Value;
            add.PaymentAmount = numericUpDownPaymentAmount.Value;
            add.TenderTypeId = ((CaPaymentItemBase)comboBoxTenderTypes.SelectedItem).TenderTypeId;
            add.ReceivedBy = 1; // Hard-coded user ID of cwadmin.
            // Make the API call and give it a callback function.
            _services.PLL.CasePayment(add, AddCasePaymentCallback);
        }

        // Function that loads payment tender types. You will not edit this function.
        private void PLLLoadPaymentTenderTypes()
        {
            //Search for all Case Objects
            CaseObjectService.SearchResponse caseObjectIds = _services.PLL.CaseObject(new CaseObjectService.Search());
            if (caseObjectIds.Status == 0)
            {
                //List of case payment objects
                List<CaPaymentItemBase> casePayments = new List<CaPaymentItemBase>();
                List<long> tenderTypes = new List<long>();
                //Goes through each case payment id in string list
                foreach (var caseObjectId in caseObjectIds.Value)
                {
                    //Create temporary Case Payment Object to get Tender Type ID
                    CasePaymentService.ByCaObjectIdResponse tempCasePayments = _services.PLL.CasePayment(new CasePaymentService.ByCaObjectId { CaObjectId = caseObjectId });
                    if (tempCasePayments.Status == 0 && tempCasePayments.Value != null)
                    {
                        //iterate through all the payments made on the current case
                        for (int i = 0; i < tempCasePayments.Value.Count; i++)
                        {
                            //puts only unique Case Payments with unique TenderTypeId in list that will be returned
                            if (!tenderTypes.Contains((long)tempCasePayments.Value[i].TenderTypeId))
                            {
                                tenderTypes.Add((long)tempCasePayments.Value[i].TenderTypeId);
                                casePayments.Add(tempCasePayments.Value[i]);
                            }
                        }
                    }
                }
                //Pass casePayments where Tender type isn't used more than once within list
                LoadTenderTypes(casePayments);
            }
        }

        // Function that populates the payment tender type list box. You will not edit this function.
        private void LoadTenderTypes(List<CaPaymentItemBase> casePayments)
        {
            comboBoxTenderTypes.DataSource = casePayments;
            comboBoxTenderTypes.DisplayMember = "TenderType";
            comboBoxTenderTypes.ValueMember = "TenderTypeId";
        }

        // Callback function that runs after the case payment add API call has been made. Shows payments made to a case.
        private void AddCasePaymentCallback(CasePaymentService.AddResponse response)
        {
            // Check the status of the response. If the response is good:
            if (response.Status == 0)
            {
                // Declare a list to hold the case object ID.
                List<long> caObjectId = new List<long>();
                // Add the case object ID from the response to the list.
                caObjectId.Add((long)response.Value.CaObjectId);
                // Declare a case object by ID object to get data for the entire case.
                CaseObjectService.ByIds byIds = new CaseObjectService.ByIds();
                // Set the required property of the case object by IDs object to the list we created.
                byIds.CaObjectIds = caObjectId;
                // Make the API call and save the response to a variable.
                var byIdsResponse = _services.PLL.CaseObject(byIds);
                // Inform the user of the result of the add payment API call.
                richTextBoxCallbackNotes.Text =
                    $"Payment of ${response.Value.PaymentAmount} " +
                    $"has been made to Case:\n {byIdsResponse.Value[0].CaseNumber}";
            }
            // If the response is bad, inform the user of an error.
            else ErrorMessage();
        }
        #endregion

        #region Loading Storeroom Stocks in .NET ********************************************************************************
        // Function that checks if storeroom is enabled and fills in the stocks if it is.
        private void LoadStoreroomStocks()
        {
            // Create a list that will be the list box's data source.
            List<string> strRoomStocksList = new List<string>();

            // Get a list of the storeroom stocks using the storerooms API.
            // If the value section of the response is empty and the first code is "N/A," storeroom is disabled.
            StoreroomService.Storerooms storerooms = new StoreroomService.Storerooms();
            storerooms.CanIssue = true;
            storerooms.CanReceive = true;
            StoreroomService.StoreroomsResponse response = _services.AMS.Storeroom(storerooms);

            // Check to see if storeroom is enabled. If it is:
            if (response.Value != null && response.Value[0].Code != "N/A")
            {
                // Populate the storeroom combo box with the storerooms from the response.
                comboBoxStorerooms.DataSource = response.Value;
                comboBoxStorerooms.DisplayMember = "Description";
                comboBoxStorerooms.ValueMember = "Code";
                // Loop through each storeroom and load its stocks using the storeroom stock API.
                for (int i = 0; i < response.Value.Count; i++)
                {
                    // Create a storeroom stocks object.
                    StoreroomService.StoreroomStocks storeroomStocks = new StoreroomService.StoreroomStocks();
                    // Set the storeroom property to the current storeroom's code.
                    storeroomStocks.Storeroom = response.Value[i].Code;
                    // Make the API call and save it to a variable.
                    StoreroomService.StoreroomStocksResponse stocksResponse = _services.AMS.Storeroom(storeroomStocks);

                    //Place the stock from each Storeroom in a list
                    foreach (var stock in stocksResponse.Value)
                    {
                        // Format a string with various stock properties and save it to the data source list.
                        string info = $"Sid: {stock.MaterialSid}\tStoreroom: {stock.Storerm}\tOn Hand: {stock.StockOnHand}";
                        strRoomStocksList.Add(info);
                    }
                }
                // Set the list box data source to the list that now contains all stocks.
                listBoxStoreroomStocks.DataSource = strRoomStocksList;
            }

            // If storeroom is not enabled:
            else
            {
                // Hide all storeroom controls.
                listBoxStoreroomStocks.Visible = false;
                comboBoxStorerooms.Visible = false;
                buttonStrmTransfer.Visible = false;
                numericUpDownMatQuantity.Visible = false;
                labelStoreroomStocks.Visible = false;
            }
        }
        #endregion

        #region Display Material Attributes *************************************************************************************
        // Event handler that is called when the selected material changes.
        private void listBoxStoreroomStocks_SelectedIndexChanged(object sender, EventArgs e)
        {
            // Declare a new material by ID object.
            MaterialService.ById byId = new MaterialService.ById();
            // Set the required property of the object.
            byId.MaterialSid = GetSelectedMaterial();
            // Make the API call and give it a callback function.
            _services.AMS.Material(byId, MaterialToLabel);
        }

        // Callback function that takes the response of the material by ID and displays its description.
        private void MaterialToLabel(MaterialService.ByIdResponse response)
        {
            // Check the status of the response. If the response is good:
            if (response.Status == 0)
            {
                // Set the label to the material's description.
                labelMaterial.Text = response.Value.Description;
            }
            // If the response is bad, simply hide the label.
            else labelMaterial.Text = null;
        }
        #endregion

        #region Transfering Materials Using the Storeroom API *******************************************************************
        // Event handler that is called when the transfer storeroom stock button is clicked.
        private void buttonStrmTransfer_Click(object sender, EventArgs e)
        {
            // Call the function that will make the transfer.
            StoreroomTransfer();
            // Reload the stocks list to show the change in stocks.
            LoadStoreroomStocks();
        }

        // Function that transfers stocks between storerooms.
        private void StoreroomTransfer()
        {
            // Declare a storetoom add transfer object.
            StoreroomService.AddTransfer addTransfer = new StoreroomService.AddTransfer();
            // Set the properties of the add transfer object.
            addTransfer.MaterialSid = GetSelectedMaterial();
            addTransfer.Quantity = numericUpDownMatQuantity.Value;
            addTransfer.Destination = ((CodeDesc)comboBoxStorerooms.SelectedItem).Code;
            addTransfer.Source = GetSelectedMaterialSource();
            // Call the add transfer API and give it a callback.
            _services.AMS.Storeroom(addTransfer, StoreroomTransferCallback);
        }

        // Callback function for the add transfer API call.
        private void StoreroomTransferCallback(StoreroomService.AddTransferResponse response)
        {
            // Check the status of the response. If the response is good:
            if (response.Status == 0)
            {
                // Inform the user of the successful case creation.
                richTextBoxCallbackNotes.Text = $"Transfer of {response.Value.MaterialUid} from" +
                    $"{response.Value.Source} to {response.Value.Destination} successful";
            }
            // If the response is bad, inform the user.
            else ErrorMessage();
        }
        #endregion

        #region Prewritten Functions ********************************************************************************************
        // Functions that get currently selected items and return them as their respective base objects.
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
        private int GetSelectedMaterial()
        {
            int materialSid;
            //Get selected item from ListBox
            var selMaterialStock = listBoxStoreroomStocks.SelectedItem;
            string sMaterialStock = selMaterialStock.ToString();
            //Grab the Material's ID only
            string materialId = sMaterialStock.Remove(0, sMaterialStock.IndexOf(':') + 2);
            materialId = materialId.Remove(materialId.IndexOf('\t'));
            materialSid = int.Parse(materialId);
            //convert the string MaterialID to integer
            return materialSid;
        }
        private string GetSelectedMaterialSource()
        {
            string source = "";
            var rawSource = listBoxStoreroomStocks.SelectedItem;
            //convert full listBox item to string
            string fullSource = rawSource.ToString();
            //Removes everything up to the first character of the Storeroom code
            source = fullSource.Remove(0, fullSource.IndexOf('m') + 3);
            //Removes everything after the last character of the Storerrom code
            source = source.Remove(source.IndexOf("\t"));
            return source;
        }

        // Function that shows that an error has occurred.
        private void ErrorMessage() { MessageBox.Show("Error"); }

        // Functions to load and display cases.
        private void buttonSearchCases_Click(object sender, EventArgs e)
        {
            //Clear the cases currently in the listBox
            listBoxCases.ClearSelected();
            LoadCaseList();
        }
        private void LoadCaseList()
        {
            //Create search object and make API call, reference callback function
            _services.PLL.CaseObject(new CaseObjectService.Search(), CaseSearchCallback);
        }
        private void CaseSearchCallback(CaseObjectService.SearchResponse response)
        {
            //check status of API call. Use list of IDs to search for Cases by IDs
            if (response.Status == 0)
            {
                CaseObjectService.ByIds casesByIds = new CaseObjectService.ByIds();
                casesByIds.CaObjectIds = response.Value;
                _services.PLL.CaseObject(casesByIds, CasesByIDsCallback);
            }
            else ErrorMessage();
        }
        private void CasesByIDsCallback(CaseObjectService.ByIdsResponse response)
        {
            //check status of API call
            if (response.Status == 0)
            {
                listBoxCases.DataSource = response.Value;
                listBoxCases.ValueMember = "CaObjectId";
                listBoxCases.DisplayMember = "CaseNumber";
                listBoxCases.SelectedIndex = 0;
            }
            else ErrorMessage();
        }

        // Misc. functions.
        private void LoadCaseTypeList(List<long?> caseTypeIds)
        {
            comboBoxCaseTypes.Items.Clear();
            //takes the shortened list of caseType IDs with no duplicates, add each unique caseobject to ComboBox
            foreach (var caseTypeID in caseTypeIds)
            {
                CaseObjectService.SearchResponse searchResponse = _services.PLL.CaseObject(new CaseObjectService.Search { CaseTypeId = caseTypeID });
                CaseObjectService.ByIds casesByIds = new CaseObjectService.ByIds { CaObjectIds = searchResponse.Value };
                CaseObjectService.ByIdsResponse casesByIdsResponse = _services.PLL.CaseObject(casesByIds);
                comboBoxCaseTypes.Items.Add(casesByIdsResponse.Value[0]);
            }
            comboBoxCaseTypes.ValueMember = "CaseTypeId";
            comboBoxCaseTypes.DisplayMember = "CaseTypeDesc";
        }
        #endregion
    }
}