// Declare global variables for the various services, token, and selected work activities.
var apiService, authService, inspectionService, woService, linkService;
var token = localStorage.getItem('token');
var selectedWorkOrder, selectedInspection;

// Use Require.JS's define function to load needed modules from the SDK.
define([ // First argument is an array of module locations.
    '../cw-sdk/api/services/general/authenticationservice', // Authentication Service
    ],
    // Second argument is a function that takes arguments for each module.
    function (api) {
        // Define the global API service variable.
        apiService = new api.ApiService("https://training.cityworks.com/cityworks", token);
        // Define the global variables for the various services using the API service variable.
        authService = new api.AuthenticationService(apiService); // Authentication Service
        woService = new wo.WorkOrderService(apiService); // Work Order Service
        inspectionService = new inspection.InspectionService(apiService); // Inspection Service
        linkService = new link.ActivityLinkService(apiService) // Activity Link Service
        // Call the validate function.
        validate();
    }
);

// Function to make the Authentication/Validate API call.
function validate() {
    // Get the token saved in local storage.
    // Declare the data object and populate it with the token.
    // Make the API call and assign the response a callback function.
}

// Callback function for the Authentication/Validate API call.
function validateCallback(response) {
    // Check the status and value of the response.
    // If the token is invalid or the status is bad...
        // Redirect the user to the login page.
}

// Function to make the WorkOrder/Search API call.
function workOrderSearch() {
    // Get the number of work order search results from the document.
    // Declare the data object and populate it with needed parameters.
    // Make the API call and assign the response to a callback function.
}

// Callback function for the WorkOrder/Search API call to make the WorkOrder/ByIds API call.
function workOrderByIds(response) {
    // Get the list of work order IDs from the response.
    // Declare the data object and populate it the list of work order IDs.
    // Make the API call and assign the response to a callback function.
}

// Callback function for the WorkOrder/ByIds API call to display work order objects.
function workOrderByIdsCallback(response) {
    // Clear all existing work orders in the display box.
    let lis = document.querySelectorAll('#work-orders li');
    let ul = document.querySelector('#work-orders');
    if (lis !== []) { for (let i = 0; i < lis.length; i++) { ul.removeChild(lis[i]); } }
    // Get the list of work order objects from the response.
    let workOrders = response.Value;
    // Generate HTML for each work order object.
    workOrders.forEach(wo => {
        let li = document.createElement('li');
        // Add an event handler for the work order being clicked on.
        li.addEventListener('click', function () {
            let divs = document.querySelectorAll('#work-orders li');
            for (let i = 0; i < divs.length; i++) { divs[i].className = 'not-clicked'; };
            li.className = 'clicked';
            // Get and format the date the work order was initiated.
            let date1 = wo.InitiateDate;
            let format1 = `${date1.getMonth()}/${date1.getDate()}/${date1.getFullYear()}`;
            // Get and format the date the work order was initiated.
            let date2 = wo.ProjFinishDate;
            let format2 = `${date2.getMonth()}/${date2.getDate()}/${date2.getFullYear()}`;
            // Display information about the work order in the callback notes section.
            document.getElementById('callback-notes').innerText =
                `Submitted To: ${wo.SubmitTo}\n` +
                `Date Created: ${format1}\n` +
                `Projected Finish: ${format2}\n` +
                `Status: ${wo.Status}\n` +
                `Attached: ${!wo.Unattached}\n` +
                `Coords: ${wo.WOXCoordinate}, ${wo.WOYCoordinate}`;
            // Set the global selected work order variable to the work order ID.
            selectedWorkOrder = wo.WorkOrderId;
        });
        // Display the work order ID, description, and entity type in the list box.
        document.getElementById('work-orders').appendChild(li);
        let info = document.createElement('div');
        info.textContent = `Work Order ${wo.WorkOrderId}: ${wo.Description}\n on ${wo.ApplyToEntity}`;
        li.appendChild(info);
    });
}

// Function to make the Inspection/Search API call.
function inspectionSearch() {
    // Declare the data object and populate it with needed parameters.
    // Make the API call and assign the response to a callback function.
}

// Callback function for the Inspection/Search API call to make the Inspection/ByIds API call.
function inspectionByIds(response) {
    // Get the list of inspection IDs from the response.
    // Declare the data object and populate it the list of inspection IDs.
    // Make the API call and assign the response to a callback function.
};

// byIds callback function
function inspectionByIdsCallback(response) {
    // Clear all existing work orders in the display box.
    let lis = document.querySelectorAll('#inspections li');
    let ul = document.querySelector('#inspections');
    if (lis !== []) { for (let i = 0; i < lis.length; i++) { ul.removeChild(lis[i]); } }
    // Get the list of inspection objects from the response.
    let inspections = response.Value;
    // Generate HTML for each inspection object.
    inspections.forEach(inspection => {
        let li = document.createElement('li');
        // Add an event handler for the inspection being clicked on.
        li.addEventListener('click', function () {
            let divs = document.querySelectorAll('#inspections li');
            for (let i = 0; i < divs.length; i++) {
                divs[i].className = 'not-clicked';
            };
            li.className = 'clicked';
            // Set the global selected inspection variable to the inspection ID.
            selectedInspection = inspection.InspectionId;
        });
        // Display the inspection ID, template name, and entity type in the list box.
        document.getElementById('inspections').appendChild(li);
        let info = document.createElement('div');
        info.textContent =
            `Inspection ${inspection.InspectionId} :` +
            `${inspection.InspTemplateName} on ` +
            `${inspection.EntityType}`;
        li.appendChild(info);
    });
};

// Function to make the ActivityLink/Add API call.
function activityLinkAdd() {
    // Declare the data object and populate it with needed parameters.
        // Make the destination the work order. Include the destination ID and type.
        // Make the source the inspection. Include the source ID and type.
        // Set the link type to related.
    // Make the API call and assign the response to a callback function.
};

// Callback function for the ActivityLink/Add API call.
function activityLinkAddCallback(response) {
    // Check the status of the response.
    // If the response is bad...
        // Inform the user of the error.
    // If the response is good...
        // Inform the user of a successful link between the selected work activities.
}

// Function to make the WorkOrder/Create or WorkOrder/CreateFromInspection API call.
function workOrderCreate() {
    // Declare the data object.
    // Get the inspection ID from the document.
    // Check the inspection ID.
    // If an inspection ID is not provided...
        // Populate the data object with needed parameters.
        // Make the API call and assign the response to a callback function.
    // If an inspection ID is provided...
        // Populate the data object with needed parameters.
        // Make the API call and assign the response to a callback function.
};

// Callback function for the WorkOrder/Create and WorkOrder/CreateFromInspection API calls.
function workOrderCreateCallback(response) {
    // Check the status of the response.
    // If the response is bad...
        // Inform the user of the error.
        // Inform the user of successful work order creation.
};