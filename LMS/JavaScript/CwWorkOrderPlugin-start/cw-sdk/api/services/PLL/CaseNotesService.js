define(["require", "exports", "../../../http/api-service"], function (require, exports, api_service_1) {
    "use strict";
    function __export(m) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    __export(api_service_1);
    var CaseNotesService = /** @class */ (function () {
        function CaseNotesService(service) {
            this._service = service;
        }
        CaseNotesService.prototype.Add = function (request) {
            return this._service.call(request, 'PLL/CaseNotes/Add');
        };
        CaseNotesService.prototype.ByCaObjectId = function (request) {
            return this._service.call(request, 'PLL/CaseNotes/ByCaObjectId');
        };
        CaseNotesService.prototype.Delete = function (request) {
            return this._service.call(request, 'PLL/CaseNotes/Delete');
        };
        CaseNotesService.prototype.DeleteByCaObjectId = function (request) {
            return this._service.call(request, 'PLL/CaseNotes/DeleteByCaObjectId');
        };
        CaseNotesService.prototype.Search = function (request) {
            return this._service.call(request, 'PLL/CaseNotes/Search');
        };
        return CaseNotesService;
    }());
    exports.CaseNotesService = CaseNotesService;
});
