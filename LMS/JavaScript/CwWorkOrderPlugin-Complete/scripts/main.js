// Cityworks Site Address and API Token variables.
let token = localStorage.getItem('token');
let cityworksAddress = "https://training.cityworks.com/cityworks";
// Global variables for the Cityworks SDK.
var apiService;
var authService;
var woService;
var entityService;
var wotempService;
var commentService;

// Define Function to load Cityworks SDK modules.
define(
  [ // First argument an array of module locations.
    '../cw-sdk/api/services/general/AuthenticationService',
    '../cw-sdk/api/services/ams/WorkOrderService',
    '../cw-sdk/api/services/ams/EntityService',
    '../cw-sdk/api/services/ams/WorkOrderTemplateService',
    '../cw-sdk/api/services/ams/CommentService'
  ], // Second argument a function to set up global variables.
  function (auth, wo, ent, temp, comment) {
    // Set up a connection to Cityworks server with address and token.
    apiService = new auth.ApiService(cityworksAddress, token);
    // Use connection to server to set up various services.
    authService = new auth.AuthenticationService(apiService);
    woService = new wo.WorkOrderService(apiService);
    entityService = new ent.EntityService(apiService);
    wotempService = new temp.WorkOrderTemplateService(apiService);
    commentService = new comment.CommentService(apiService);
    // Call the validate function.
    validate();
  }
);

// Function to make the AuthenticationService/Validate API call.
function validate() {
    // Define the data object and include the needed parameters.
    let data = { Token: token };
    // Make the validate API call and assign a callback function.
    authService.Validate(data).then(validateCallback);
    
}

// Callback function for the AuthenticationService/Authenticate API call.
function validateCallback(response) {
    // Check the status and value of the response.
    if (!response.Value || response.Status !== 0) {
        // If the response and value are bad, redirect the user.
        window.location = "login.html";
    } else {
        // If the response and value are good, call the entityGroups function.
        entityGroups();
    }
}

// Function to make the EntityService/Groups API call.
function entityGroups() {
    // Define the data object and include needed parameters.
    let data = {};
    // Make the groups API call and assign a callback function.
    entityService.Groups(data).then(entityTypes);
}

// Function to make the EntityService/Types API call.
function entityTypes(response) {
    // Check the status of the response.
    if (response.Status !== 0) {
        // If the response is bad, inform the user of failure.
        document.getElementById('notes').innerHTML = "Failed at EntityService/Groups/"
    } else {
        // If the response is good, gather group modules from response into an array.
        let groups = [];
        response.Value.forEach(group => {
            groups.push(group.Module);
        });
        // Define the data object and include the needed parameters.
        let data = { EntityGroups: groups };
        // Make the types API call and assign a callback function.
        entityService.Types(data).then(entityTypesCallback);
    }
}

// Callback function for the EntityService/Types API call.
function entityTypesCallback(response) {
    // If the response is good, add entity types to entity drop-down list.
    response.Value.forEach(type => {
        document.getElementById('entityType').innerHTML += 
            `<option value="${type.Code}">${type.Description}</option>`;
    });
}

// Function to make the WorkOrderTemplateService/TemplateNames API call.
function workOrderTemplateNames() {
    // Define the data object and include needed parameters.
    let data = { EntityTypes: [document.getElementById('entityType').value] };
    // Make the API call and assign a callback function.
    wotempService.TemplateNames(data).then(workOrderTemplateNamesCallback);
}

// Callback function for the WorkOrderTemplateService/TemplateNames API call.
function workOrderTemplateNamesCallback(response) {
    // If the response is good, add clear then populate the templates drop-down list.
    document.getElementById('woTemplate').innerHTML = "";
    response.Value.forEach(template => {
        document.getElementById('woTemplate').innerHTML +=
            `<option value="${template.WOTemplateId}">${template.Description}</option>`;
    });
}

// Function to make the WorkOrderService/Create API call.
function workOrderCreate() {
    // Define the data object and include the needed parameters.
    let data = {
        EntityType: document.getElementById('entityType').value,
        WOTemplateId: document.getElementById('woTemplate').value,
        Location: document.getElementById('location').value
    };
    // Make the Create API call and assign a callback function.
    woService.Create(data).then(workOrderCreateCallback);
}

// Callback function for the WorkOrderService/Create API call.
function workOrderCreateCallback(response) {
    // If the response is good, inform the user of successful work order creation.
    if (response.Status === 0) {
        // Send the new Work Order Sid to the addComment function.
        document.getElementById('notes').innerHTML =
            `Work Order ${response.Value[0].WorkOrderId}: ${response.Value[0].Description} has successfully been created. Attempting to add comment... <br><br>`;
        addComment(response.Value[0].WorkOrderSid);
    } else {
    // If the response is bad, inform the user of failure.
        document.getElementById('notes').innerHTML = "Failed to Create Work Order.";
    }
}

// Function to add a comment to the new work order.
function addComment(workOrderSid) {
    // Get contents of comment text field.
    let comment = document.getElementById('commentText').value;
    // If a comment has been entered, run the API call. Otherwise, ignore.
    if (comment !== "") {
        // Gather all needed parameters into data object.
        let data = { 
            ActivitySid: workOrderSid,
            ActivityType: 2,
            Comments: comment
        };
        // Make the Add comment API call and assign a callback function.
        commentService.Add(data).then(addCommentCallback);
    } else {
        // If no comment has been entered, inform the user.
        document.getElementById('notes').innerHTML += "Comments field is empty. No attempt to add a comment was made.";
    }
}

// Callback function for the CommentService/Add API call.
function addCommentCallback(response) {
    // If the response is good, inform the user of the new comment.
    if (response.Status === 0) {
        document.getElementById('notes').innerHTML += `Comment successfully added to Work Order ${response.Value.ActivityId}.`;
    } else {
    // If the response is bad, inform the user of failure.
        document.getElementById('notes').innerHTML += "Failed to add a comment to the new work order.";
    }
}