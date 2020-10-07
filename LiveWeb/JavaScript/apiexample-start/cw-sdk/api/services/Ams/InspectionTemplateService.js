define(["require", "exports", "../../../http/api-service"], function (require, exports, api_service_1) {
    "use strict";
    function __export(m) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    __export(api_service_1);
    var InspectionTemplateService = /** @class */ (function () {
        function InspectionTemplateService(service) {
            this._service = service;
        }
        InspectionTemplateService.prototype.ByIds = function (request) {
            return this._service.call(request, 'Ams/InspectionTemplate/ByIds');
        };
        InspectionTemplateService.prototype.CreateSearchDefinition = function (request) {
            return this._service.call(request, 'Ams/InspectionTemplate/CreateSearchDefinition');
        };
        InspectionTemplateService.prototype.EntityTypes = function (request) {
            return this._service.call(request, 'Ams/InspectionTemplate/EntityTypes');
        };
        InspectionTemplateService.prototype.QA = function (request) {
            return this._service.call(request, 'Ams/InspectionTemplate/QA');
        };
        InspectionTemplateService.prototype.Search = function (request) {
            return this._service.call(request, 'Ams/InspectionTemplate/Search');
        };
        InspectionTemplateService.prototype.Templates = function (request) {
            return this._service.call(request, 'Ams/InspectionTemplate/Templates');
        };
        InspectionTemplateService.prototype.TestTypes = function (request) {
            return this._service.call(request, 'Ams/InspectionTemplate/TestTypes');
        };
        return InspectionTemplateService;
    }());
    exports.InspectionTemplateService = InspectionTemplateService;
});
