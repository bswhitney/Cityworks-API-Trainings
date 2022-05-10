define(["require", "exports", "../../../http/api-service"], function (require, exports, api_service_1) {
    "use strict";
    function __export(m) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    __export(api_service_1);
    var CustomerCallService = /** @class */ (function () {
        function CustomerCallService(service) {
            this.ErrorCodes = {
                InvalidRequestId: 2,
                NotAuthorizedToUpdateRequest: 4,
                FromAndToRequestIdsAreTheSame: 5,
                ErrorItemNotFound: 35,
                CallerDoesNotBelongToRequest: 94
            };
            this.WarningCodes = {};
            this._service = service;
        }
        CustomerCallService.prototype.AddToRequest = function (request) {
            return this._service.call(request, 'Ams/CustomerCall/AddToRequest');
        };
        CustomerCallService.prototype.ByIncidentNum = function (request) {
            return this._service.call(request, 'Ams/CustomerCall/ByIncidentNum');
        };
        CustomerCallService.prototype.ByRequestId = function (request) {
            return this._service.call(request, 'Ams/CustomerCall/ByRequestId');
        };
        CustomerCallService.prototype.ByRequestIds = function (request) {
            return this._service.call(request, 'Ams/CustomerCall/ByRequestIds');
        };
        CustomerCallService.prototype.CallerQuestions = function (request) {
            return this._service.call(request, 'Ams/CustomerCall/CallerQuestions');
        };
        CustomerCallService.prototype.CallerQuestionsByRequestIds = function (request) {
            return this._service.call(request, 'Ams/CustomerCall/CallerQuestionsByRequestIds');
        };
        CustomerCallService.prototype.Delete = function (request) {
            return this._service.call(request, 'Ams/CustomerCall/Delete');
        };
        CustomerCallService.prototype.Move = function (request) {
            return this._service.call(request, 'Ams/CustomerCall/Move');
        };
        CustomerCallService.prototype.MoveToRequest = function (request) {
            return this._service.call(request, 'Ams/CustomerCall/MoveToRequest');
        };
        CustomerCallService.prototype.Update = function (request) {
            return this._service.call(request, 'Ams/CustomerCall/Update');
        };
        return CustomerCallService;
    }());
    exports.CustomerCallService = CustomerCallService;
});
