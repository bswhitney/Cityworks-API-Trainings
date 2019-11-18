define(["require", "exports", "../../../http/api-service"], function (require, exports, api_service_1) {
    "use strict";
    function __export(m) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    __export(api_service_1);
    var MessageQueueService = /** @class */ (function () {
        function MessageQueueService(service) {
            this._service = service;
        }
        MessageQueueService.prototype.ByIds = function (request) {
            return this._service.call(request, 'General/MessageQueue/ByIds');
        };
        MessageQueueService.prototype.Delete = function (request) {
            return this._service.call(request, 'General/MessageQueue/Delete');
        };
        MessageQueueService.prototype.Preferences = function (request) {
            return this._service.call(request, 'General/MessageQueue/Preferences');
        };
        MessageQueueService.prototype.Search = function (request) {
            return this._service.call(request, 'General/MessageQueue/Search');
        };
        MessageQueueService.prototype.Update = function (request) {
            return this._service.call(request, 'General/MessageQueue/Update');
        };
        MessageQueueService.prototype.UpdateMessageStatus = function (request) {
            return this._service.call(request, 'General/MessageQueue/UpdateMessageStatus');
        };
        MessageQueueService.prototype.WebHooks = function (request) {
            return this._service.call(request, 'General/MessageQueue/WebHooks');
        };
        return MessageQueueService;
    }());
    exports.MessageQueueService = MessageQueueService;
});
