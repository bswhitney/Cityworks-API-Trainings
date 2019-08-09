// define global variables
var apiService, woService, woTemplateService, entityService;
var token = localStorage.getItem('token');

define([
        '../cw-sdk/api/services/general/authenticationservice',
        '../cw-sdk/api/services/ams/workordertemplateservice',
        '../cw-sdk/api/services/ams/entityservice'
    ],
    function (api, wot, entity) {
        apiService = new api.ApiService("https://training.cityworks.com/cityworks", token);
        woTemplateService = new wot.WorkOrderTemplateService(apiService);
        entityService = new entity.EntityService(apiService);
        // workOrderTemplateSearch();
        // populateEntityGroups();
        entityGroups();
    }
);

function removeOptions(select) {
    for (let i = select.options.length; i >= 0; i--) {
        select.remove(i);
    }
}

function entityGroups() {
    entityService.Groups({}).then(entityGroupsCallback);
}

function entityGroupsCallback(response) {
    if (response.Status === 0) {
        response.Value.forEach(group => {
            let option = document.createElement('option');
            document.querySelector('#entity-group').appendChild(option);
            option.innerText = group.ModuleName;
            option.value = group.Module;
        });
    }
}

function entityTypes() {
    let group = document.querySelector('#entity-group').value;
    let data = { EntityGroup: group };
    entityService.Types(data).then(entityTypesCallback);
}

function entityTypesCallback(response) {
    if (response.Status === 0) {
        removeOptions(document.getElementById('entity-type'));
        response.Value.forEach(type => {
            let option = document.createElement('option');
            document.querySelector('#entity-type').appendChild(option);
            option.innerText = type.Description;
            option.value = type.Code;
        });
    }
}

function workOrderTemplateSearch() {
    let type = document.querySelector('#entity-type').value;
    let data = { ApplyToEntity: [type] };
    woTemplateService.Search(data).then(workOrderTemplateByIds);
}

function workOrderTemplateByIds(response) {
    let data = { WOTemplateIds: response.Value };
    woTemplateService.ByIds(data).then(workOrderTemplateByIdsCallback);
}

function workOrderTemplateByIdsCallback(response) {
    removeOptions(document.getElementById('template-id'));
    response.Value.forEach(template => {
        let option = document.createElement('option');
        document.querySelector('#template-id').appendChild(option);
        option.innerText = template.Description;
        option.value = template.WOTemplateId;
    });
}




/* function onEntityGroupChange() {
    let group = document.querySelector('#entity-group').value;
    let data = { EntityGroups: [group] };
    entityService.Types(data)
        .then(entityTypesCallback);
}
function entityTypesCallback(response) {
    if (response.Status === 0) {
        removeOptions(document.getElementById('entity-type'));
        response.Value.forEach(type => {
            let option = document.createElement('option');
            document.querySelector('#entity-type').appendChild(option);
            option.innerText = type.Description;
            option.value = type.Code;
        });
    }
}

function populateEntityGroups() {
    data = {};
    entityService.Groups(data)
        .then(entityGroupsCallback);
}

function entityGroupsCallback(response) {
    if (response.Status === 0) {
        response.Value.forEach(group => {
            let option = document.createElement('option');
            document.querySelector('#entity-group').appendChild(option);
            option.innerText = group.ModuleName;
            option.value = group.Module;
        });
        onEntityGroupChange();
    }
}

function workOrderTemplateSearch() {

    data = {}

    woTemplateService.Search(data)
        .then(templateSearchCallback)
        .then(templateIdsCallback)
};

function templateSearchCallback(response) {

    let woTemplateIds = response.Value;

    let data = {
        WOTemplateIds: woTemplateIds
    }

    return woTemplateService.ByIds(data)

};

function templateIdsCallback(response) {
    let woTemplates = response.Value;

    woTemplates.forEach(wot => {
        let option = document.createElement('option');
        document.querySelector('#template-id').appendChild(option);
        option.innerText = wot.Description;
        option.value = wot.WOTemplateId
    })
}; */