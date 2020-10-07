define(["require", "exports", "../../../http/api-service"], function (require, exports, api_service_1) {
    "use strict";
    function __export(m) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    __export(api_service_1);
    var InspectionTimeBlockService = /** @class */ (function () {
        function InspectionTimeBlockService(service) {
            this._service = service;
        }
        InspectionTimeBlockService.prototype.Add = function (request) {
            return this._service.call(request, 'PLL/InspectionTimeBlock/Add');
        };
        return InspectionTimeBlockService;
    }());
    exports.InspectionTimeBlockService = InspectionTimeBlockService;
});
