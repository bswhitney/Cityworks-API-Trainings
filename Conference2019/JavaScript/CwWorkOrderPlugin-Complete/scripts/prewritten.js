// Global Variables to hold services, token.
var apiService, authService, woService, entityService, wotempService;
var token = localStorage.getItem('token');

// Define Function to load Cityworks SDK modules.
define([
    '../cw-sdk/api/services/general/authenticationservice',
    '../cw-sdk/api/services/ams/workorderservice',
    '../cw-sdk/api/services/ams/entityservice',
    '../cw-sdk/api/services/ams/workordertemplateservice'
],
    function (auth, wo, ent, temp) {
        // Define the global API service variable.
        apiService = new auth.ApiService("https://training.cityworks.com/cityworks", token);
        // Define the global variables for the various services using the API service variable.
        authService = new auth.AuthenticationService(apiService); // Authentication Service
        woService = new wo.WorkOrderService(apiService); // Work Order Service
        entityService = new ent.EntityService(apiService); // Entity Service
        wotempService = new temp.WorkOrderTemplateService(apiService); // Work Order Template Service
        // Validate the token.
        entityGroups();
    }
);

// Function to make the EntityService/Groups API call.
function entityGroups() {
    entityService.Groups({}).then(entityTypes);
}

// Function to make the EntityService/Types API call.
function entityTypes(response) {
    let groups = [];
    response.Value.forEach(group => {
        groups.push(group.Module);
    });
    let data = { EntityGroups: groups };
    entityService.Types(data).then(entityTypesCallback);
}

// Callback function for the EntityService/Types API call.
function entityTypesCallback(response) {
    response.Value.forEach(type => {
        document.getElementById('entityType').innerHTML +=
            `<option value="${type.Code}">${type.Description}</option>`;
    })
}

// Function to make the WorkOrderTemplateService/Search API call.
function workOrderTemplateSearch() {
    let data = { ApplyToEntity: [document.getElementById('entityType').value] };
    wotempService.Search(data).then(workOrderTemplateByIds);
}

// Function to make the WorkOrderTemplateService/ByIds API call.
function workOrderTemplateByIds(response) {
    let data = { WOTemplateIds: response.Value };
    wotempService.ByIds(data).then(workOrderTemplateByIdsCallback);
}

// Callback function for the WorkOrderTemplateService/ByIds API call.
function workOrderTemplateByIdsCallback(response) {
    document.getElementById('woTemplate').innerHTML = "";
    response.Value.forEach(template => {
        document.getElementById('woTemplate').innerHTML +=
            `<option value="${template.WOTemplateId}">${template.Description}</option>`;
    })
}