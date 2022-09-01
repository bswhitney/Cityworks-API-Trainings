define(["require", "exports", "../../../http/api-service"], function (require, exports, api_service_1) {
    "use strict";
    function __export(m) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    __export(api_service_1);
    var QueryService = /** @class */ (function () {
        function QueryService(service) {
            this.ErrorCodes = {
                InvalidTopLevelQueryType: 1,
                FieldIsRequired: 2,
                CouldNotResolveQueryTypeFromQuery: 3,
                InvalidQueryType: 4,
                UnknownValidationError: 5,
                UnknownError: 6,
                UnknownErrorExecutingQuery: 7,
                SyntaxError: 8,
                InvalidQueryId: 10
            };
            this.WarningCodes = {};
            this._service = service;
        }
        QueryService.prototype.ByIds = function (request) {
            return this._service.call(request, 'General/Query/ByIds');
        };
        QueryService.prototype.Query = function (request) {
            return this._service.call(request, 'General/Query/Query');
        };
        QueryService.prototype.QuerySchema = function (request) {
            return this._service.call(request, 'General/Query/QuerySchema');
        };
        QueryService.prototype.QueryTypeInformation = function (request) {
            return this._service.call(request, 'General/Query/QueryTypeInformation');
        };
        QueryService.prototype.QueryTypes = function (request) {
            return this._service.call(request, 'General/Query/QueryTypes');
        };
        QueryService.prototype.RunById = function (request) {
            return this._service.call(request, 'General/Query/RunById');
        };
        QueryService.prototype.SavedQueries = function (request) {
            return this._service.call(request, 'General/Query/SavedQueries');
        };
        QueryService.prototype.SearchToQuery = function (request) {
            return this._service.call(request, 'General/Query/SearchToQuery');
        };
        QueryService.prototype.ValidateQuery = function (request) {
            return this._service.call(request, 'General/Query/ValidateQuery');
        };
        QueryService.prototype.ValidateResponseDefinition = function (request) {
            return this._service.call(request, 'General/Query/ValidateResponseDefinition');
        };
        return QueryService;
    }());
    exports.QueryService = QueryService;
});
