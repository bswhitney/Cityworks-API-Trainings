define(["require", "exports", "../../../http/api-service"], function (require, exports, api_service_1) {
    "use strict";
    function __export(m) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    __export(api_service_1);
    var CommentService = /** @class */ (function () {
        function CommentService(service) {
            this._service = service;
        }
        CommentService.prototype.Add = function (request) {
            return this._service.call(request, 'Ams/Comment/Add');
        };
        CommentService.prototype.ByActivityIds = function (request) {
            return this._service.call(request, 'Ams/Comment/ByActivityIds');
        };
        CommentService.prototype.Update = function (request) {
            return this._service.call(request, 'Ams/Comment/Update');
        };
        return CommentService;
    }());
    exports.CommentService = CommentService;
});
