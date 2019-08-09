using System;
using System.Windows.Forms;
using System.Collections.Generic;
using System.Net;
using System.IO;
// Add the using statements for Cityworks Core and Newtonsoft JSON.

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

        #region Search for Work Orders in .NET **********************************************************************************
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

        #region Display Work Order Attributes ***********************************************************************************
        // Event handler that is called when the work order list selection is changed.
        private void listBoxWorkOrders_SelectedIndexChanged(object sender, EventArgs e)
        {
            // Get the currently selected work order.
            // Display attributes of the selected work order.
        }
        #endregion

        #region Search for Inspections in .NET **********************************************************************************
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

        #region Display Inspection Attributes ***********************************************************************************
        // Event handler that is called when the inspection list selection is changed.
        private void listBoxInspections_SelectedIndexChanged(object sender, EventArgs e)
        {
            // Get the currently selected inspection.
            // Display attributes of the selected inspection.
        }
        #endregion

        #region SKILLS CHECK: Search for Service Requests in .NET, Display Service Request Attributes ***************************
        // Event handler that is called when the load service request list button is clicked.
        private void buttonRefreshSRs_Click(object sender, EventArgs e)
        {
            // Call the function that refreshes the service request list.
        }

        // Function that makes the service request search API call.
        private void LoadServiceRequestList()
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

        #region Create a Work Order in .NET *************************************************************************************
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

        #region Associate an Inspection to a Work Order *************************************************************************
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
        }

        // Function that uses an HTTP request to add a GIS service.
        private void AddGISServiceResource()
        {
            // Declare all necessary values in order to add a GIS service.
            // Condense all of the values into a JSON data object.
            // Make the API call. We are not concerned about the response, so we will not make a callback.
        }
        #endregion

        #region Loading PLL Case Templates with HTTP ****************************************************************************
        // Function that loads PLL case templates using HTTP requests rather than the SDK.
        private void PLLLoadCaseTemplates()
        {
            // Declare and define the URL and the data object.
            // Make the API call using the HTTP request method. Save response to a variable.
            // Get the list of case templates stored in the value section of the response.
            // Populate the case template combo box.
        }
        #endregion

        #region Create a PLL Case in .NET ***************************************************************************************
        // Event handler that is called when the create PLL case button is clicked.
        private void buttonCreateCase_Click(object sender, EventArgs e)
        {
            // Call the function that will create the case.
        }

        // Function that creates a PLL case.
        private void PLLCreateCase()
        {
            // Declare a case create object.
            // Set the properties of the create object. Convert data types when necessary.
            // Call the case create API and give it a callback.
        }

        // Callback function for the case create API call.
        private void PLLCreateCaseCallback(CaseService.CreateResponse response)
        {
            // Check the status of the response. If the response is good:
                // Inform the user of the successful case creation.
                // Remove the contents of the case name text box.
                // Reload the case list to show the new case.
            // If the response is bad, inform the user.
        }
        #endregion

        #region Add a PLL Case Payment in .NET **********************************************************************************
        // Event handler that is called when the selected case changes.
        private void listBoxCases_SelectedIndexChanged(object sender, EventArgs e)
        {
            // Check to see if a case is selected
            // If a case is selected, call the PLL load case fees function.
        }

        // Function that populates the fees combo box.
        private void PLLLoadCaseFees()
        {
            // Declare a case fees by case object ID object. 
            // Set the case object ID property to the selected case object's ID.
            // Make the API call, saving the response to a variable.
            // Populate the combo box using the response.
        }

        // Event handler that is called when the make payment button is clicked.
        private void buttonPayment_Click(object sender, EventArgs e)
        {
            // Call the function that will add a case payment.
        }

        // Function that adds a payment to a case.
        private void PLLAddCasePayment()
        {
            // Declare a case payment add object and set all required properties.
            // Make the API call and give it a callback function.
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
                // Declare a list to hold the case object ID.
                // Add the case object ID from the response to the list.
                // Declare a case object by ID object to get data for the entire case.
                // Set the required property of the case object by IDs object to the list we created.
                // Make the API call and save the response to a variable.
                // Inform the user of the result of the add payment API call.
            // If the response is bad, inform the user of an error.
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
            // Set the required property of the object.
            // Make the API call and give it a callback function.
        }

        // Callback function that takes the response of the material by ID and displays its description.
        private void MaterialToLabel(MaterialService.ByIdResponse response)
        {
            // Check the status of the response. If the response is good:
                // Set the label to the material's description.
            // If the response is bad, simply hide the label.
        }
        #endregion

        #region Transfering Materials Using the Storeroom API *******************************************************************
        // Event handler that is called when the transfer storeroom stock button is clicked.
        private void buttonStrmTransfer_Click(object sender, EventArgs e)
        {
            // Call the function that will make the transfer.
            // Reload the stocks list to show the change in stocks.
        }

        // Function that transfers stocks between storerooms.
        private void StoreroomTransfer()
        {
            // Declare a storetoom add transfer object.
            // Set the properties of the add transfer object.
            // Call the add transfer API and give it a callback.
        }

        // Callback function for the add transfer API call.
        private void StoreroomTransferCallback(StoreroomService.AddTransferResponse response)
        {
            // Check the status of the response. If the response is good:
                // Inform the user of the successful case creation.
            // If the response is bad, inform the user.
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