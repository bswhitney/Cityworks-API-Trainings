define(["require", "exports", "../../../http/api-service"], function (require, exports, api_service_1) {
    "use strict";
    function __export(m) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    __export(api_service_1);
    var WorkOrderTemplateService = /** @class */ (function () {
        function WorkOrderTemplateService(service) {
            this.ErrorCodes = {
                UnknownError: 1
            };
            this.WarningCodes = {};
            this._service = service;
        }
        WorkOrderTemplateService.prototype.ByIds = function (request) {
            return this._service.call(request, 'Ams/WorkOrderTemplate/ByIds');
        };
        WorkOrderTemplateService.prototype.ByProblemSids = function (request) {
            return this._service.call(request, 'Ams/WorkOrderTemplate/ByProblemSids');
        };
        WorkOrderTemplateService.prototype.ByTemplateClassIds = function (request) {
            return this._service.call(request, 'Ams/WorkOrderTemplate/ByTemplateClassIds');
        };
        WorkOrderTemplateService.prototype.CustomFieldCategories = function (request) {
            return this._service.call(request, 'Ams/WorkOrderTemplate/CustomFieldCategories');
        };
        WorkOrderTemplateService.prototype.CustomFields = function (request) {
            return this._service.call(request, 'Ams/WorkOrderTemplate/CustomFields');
        };
        WorkOrderTemplateService.prototype.Search = function (request) {
            return this._service.call(request, 'Ams/WorkOrderTemplate/Search');
        };
        WorkOrderTemplateService.prototype.TemplateInspections = function (request) {
            return this._service.call(request, 'Ams/WorkOrderTemplate/TemplateInspections');
        };
        WorkOrderTemplateService.prototype.TemplateNames = function (request) {
            return this._service.call(request, 'Ams/WorkOrderTemplate/TemplateNames');
        };
        return WorkOrderTemplateService;
    }());
    exports.WorkOrderTemplateService = WorkOrderTemplateService;
});
