// Declare global variables for the various services, token, and selected work activities.
var apiService, authService, inspectionService, woService, linkService;
var token = localStorage.getItem('token');
var selectedWorkOrder, selectedInspection;

// Use Require.JS's define function to load needed modules from the SDK.
define([ // First argument is an array of module locations.
    '../cw-sdk/api/services/general/authenticationservice', // Authentication Service
    '../cw-sdk/api/services/general/activitylinkservice', // Activity Link Service
    '../cw-sdk/api/services/ams/inspectionservice', // Inspection Service
    '../cw-sdk/api/services/ams/workorderservice', // Work Order Service
    ],
    // Second argument is a function that takes arguments for each module.
    function (api, link, inspection, wo) {
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

/*
    1. Gather up all data into a data object (JSON).
            let data = {};
    2. Global Service variable, Method, pass in data object, .then.
            woService.Search(data).then(<callbackFunction>);
*/

// Function to make the Authentication/Validate API call.
function validate() {
    // Declare the data object and populate it with the token.
    let data = { Token: token };
    // Make the API call and assign the response a callback function.
    authService.Validate(data).then(validateCallback);
}

// Callback function for the Authentication/Validate API call.
function validateCallback(response) {
    // Check the status and value of the response.
    // If the token is invalid or the status is bad...
    if (response.Status !== 0 || !response.Value) {
        // Redirect the user to the login page.
        window.location = 'login.html';
    }
}

// Function to make the WorkOrder/Search API call.
function workOrderSearch() {
    // Get the number of work order search results from the document and create a list of statuses.
    let max = document.getElementById('wo-number').value;
    let statuses = ["open"];
    // Declare the data object and populate it with needed parameters.
    let data = { MaxResults: max, Status: statuses };
    // Make the API call and assign the response to a callback function.
    woService.Search(data).then(workOrderByIds);
}

// Callback function for the WorkOrder/Search API call to make the WorkOrder/ByIds API call.
function workOrderByIds(response) {
    // Check the status of the response.
    // If the status is good...
    if (response.Status === 0) {
        // Declare the data object and populate it the list of work order IDs.
        let data = { WorkOrderIds: response.Value };
        // Make the API call and assign the response to a callback function.
        woService.ByIds(data).then(workOrderByIdsCallback);
    } else {
        // If the status is bad, inform the user.
        alert("Failed API call: WorkOrder/Search.");
    }
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
                `SID: ${wo.WorkOrderSid}\n` +
                `Attached: ${!wo.Unattached}\n` +
                `Coords: ${wo.WOXCoordinate}, ${wo.WOYCoordinate}`;
            // Set the global selected work order variable to the work order ID.
            selectedWorkOrder = wo.WorkOrderSid;
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
    let data = { Status: ["open"] };
    // Make the API call and assign the response to a callback function.
    inspectionService.Search(data).then(inspectionByIds);
}

// Callback function for the Inspection/Search API call to make the Inspection/ByIds API call.
function inspectionByIds(response) {
    // Check the status of the response.
    // If the status is good...
    if (response.Status === 0) {
        // Declare the data object and populate it the list of inspection IDs.
        let data = { InspectionIds: response.Value };
        // Make the API call and assign the response to a callback function.
        inspectionService.ByIds(data).then(inspectionByIdsCallback);
    } else {
        // If the status is bad, inform the user.
        alert("Failed API call: Inspection/Search.");
    }
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
    let data = {
        // Make the destination the work order. Include the destination ID and type.
        DestSid: selectedWorkOrder,
        DestType: 4,
        // Make the source the inspection. Include the source ID and type.
        SourceSid: selectedInspection,
        SourceType: 2,
        // Set the link type to related.
        LinkType: 2
    };
    // Make the API call and assign the response to a callback function.
    linkService.Add(data).then(activityLinkAddCallback);
};

// Callback function for the ActivityLink/Add API call.
function activityLinkAddCallback(response) {
    // Check the status of the response.
    // If the response is bad...
    if (response.Status !== 0) {
        // Inform the user of the error.
        document.getElementById('callback-notes').innerText = "Failed to link the selected activities";
    }
    // If the response is good...
    else {
        // Check to see if the Value is null.
        if (response.Value === null) {
            // If it's null, inform the user that a link already exists.
            document.getElementById('callback-notes').innerText = "A link may already exist between the selected work activities.";
        } else {
            // If not null, inform the user of a successful link between the selected work activities.
            document.getElementById('callback-notes').innerText = `Work Order ${response.Value.DestId} and Inspection ${response.Value.SourceId} have successfully been linked.`;
        }
    }
}

// Function to make the WorkOrder/Create or WorkOrder/CreateFromInspection API call.
function workOrderCreate() {
    // Declare the data object.
    let data;
    // Get the inspection ID from the document.
    let inspectionId = document.getElementById('inspection-id').value;
    // Check the inspection ID.
    // If an inspection ID is not provided...
    if (!inspectionId) {
        // Populate the data object with needed parameters.
        data = {
            EntityType: document.getElementById('entity-type').value,
            WOTemplateId: document.getElementById('template-id').value,
            StreetName: document.getElementById('street-name').value,
            City: document.getElementById('city').value
        };
        // Make the API call and assign the response to a callback function.
        woService.Create(data).then(workOrderCreateCallback);
    }
    // If an inspection ID is provided...
    else {
        // Populate the data object with needed parameters.
        data = {
            EntityType: document.getElementById('entity-type').value,
            WOTemplateId: document.getElementById('template-id').value,
            StreetName: document.getElementById('street-name').value,
            City: document.getElementById('city').value,
            InspectionId: inspectionId
        };
        // Make the API call and assign the response to a callback function.
        woService.CreateFromInspection(data).then(workOrderCreateCallback);
    }
};

// Callback function for the WorkOrder/Create and WorkOrder/CreateFromInspection API calls.
function workOrderCreateCallback(response) {
    // Check the status of the response.
    // If the response is bad...
    if (response.Status !== 0) {
        // Inform the user of the error.
        document.getElementById('callback-notes').innerText = "Failed to create a new work order.";
    } else {
        // Inform the user of successful work order creation.
        document.getElementById('callback-notes').innerText = `Successfully created Work Order ${response.Value[0].WorkOrderId}.`;
    }
        
};

// Function to move the user to the App Switcher page.
function appSwitcher() {
    window.location = " https://training.cityworks.com/cityworks/AppSwitcher.aspx";
}
