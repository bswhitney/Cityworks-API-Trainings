define(["require", "exports", "../../../http/api-service"], function (require, exports, api_service_1) {
    "use strict";
    function __export(m) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    __export(api_service_1);
    var ServiceRequestTemplateService = /** @class */ (function () {
        function ServiceRequestTemplateService(service) {
            this._service = service;
        }
        ServiceRequestTemplateService.prototype.ByIds = function (request) {
            return this._service.call(request, 'Ams/ServiceRequestTemplate/ByIds');
        };
        ServiceRequestTemplateService.prototype.CreateSearchDefinition = function (request) {
            return this._service.call(request, 'Ams/ServiceRequestTemplate/CreateSearchDefinition');
        };
        ServiceRequestTemplateService.prototype.QA = function (request) {
            return this._service.call(request, 'Ams/ServiceRequestTemplate/QA');
        };
        ServiceRequestTemplateService.prototype.Search = function (request) {
            return this._service.call(request, 'Ams/ServiceRequestTemplate/Search');
        };
        ServiceRequestTemplateService.prototype.Templates = function (request) {
            return this._service.call(request, 'Ams/ServiceRequestTemplate/Templates');
        };
        return ServiceRequestTemplateService;
    }());
    exports.ServiceRequestTemplateService = ServiceRequestTemplateService;
});
