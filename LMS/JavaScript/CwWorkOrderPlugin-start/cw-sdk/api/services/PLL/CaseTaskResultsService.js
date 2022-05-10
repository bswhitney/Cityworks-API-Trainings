define(["require", "exports", "../../../http/api-service"], function (require, exports, api_service_1) {
    "use strict";
    function __export(m) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    __export(api_service_1);
    var CaseTaskResultsService = /** @class */ (function () {
        function CaseTaskResultsService(service) {
            this.ErrorCodes = {
                ResultCodeIsNull: 2,
                StatusCodeIsInvalid: 3,
                CaseStatusIdIsInvalid: 4,
                SkipTaskFlagIsNull: 5,
                SkipTaskFlagIsInvalid: 6,
                NextTaskFlagIsNull: 7,
                NextTaskFlagIsInvalid: 8,
                ExtendExpirationDateFlagIsNull: 9,
                ExtendExpirationDateFlagIsInvalid: 10,
                CloseTaskFlagIsNull: 11,
                CloseTaskFlagIsInvalid: 12,
                ReInsertFlagIsNull: 13,
                ReInsertFlagIsInvalid: 14,
                InsertFlagIsNull: 15,
                InsertFlagIsInvalid: 16
            };
            this.WarningCodes = {};
            this._service = service;
        }
        CaseTaskResultsService.prototype.Add = function (request) {
            return this._service.call(request, 'PLL/CaseTaskResults/Add');
        };
        CaseTaskResultsService.prototype.ByCaTaskIds = function (request) {
            return this._service.call(request, 'PLL/CaseTaskResults/ByCaTaskIds');
        };
        CaseTaskResultsService.prototype.SearchObject = function (request) {
            return this._service.call(request, 'PLL/CaseTaskResults/SearchObject');
        };
        return CaseTaskResultsService;
    }());
    exports.CaseTaskResultsService = CaseTaskResultsService;
});
