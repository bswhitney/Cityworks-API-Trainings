define(["require", "exports", "../../../http/api-service"], function (require, exports, api_service_1) {
    "use strict";
    function __export(m) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    __export(api_service_1);
    var BookmarkService = /** @class */ (function () {
        function BookmarkService(service) {
            this.ErrorCodes = {};
            this.WarningCodes = {};
            this._service = service;
        }
        BookmarkService.prototype.AddBookmark = function (request) {
            return this._service.call(request, 'Ams/Bookmark/AddBookmark');
        };
        BookmarkService.prototype.AddScale = function (request) {
            return this._service.call(request, 'Ams/Bookmark/AddScale');
        };
        BookmarkService.prototype.DeleteBookmarks = function (request) {
            return this._service.call(request, 'Ams/Bookmark/DeleteBookmarks');
        };
        BookmarkService.prototype.DeleteScales = function (request) {
            return this._service.call(request, 'Ams/Bookmark/DeleteScales');
        };
        BookmarkService.prototype.GetBookmarks = function (request) {
            return this._service.call(request, 'Ams/Bookmark/GetBookmarks');
        };
        BookmarkService.prototype.GetScales = function (request) {
            return this._service.call(request, 'Ams/Bookmark/GetScales');
        };
        BookmarkService.prototype.SetInitialExtent = function (request) {
            return this._service.call(request, 'Ams/Bookmark/SetInitialExtent');
        };
        BookmarkService.prototype.UpdateBookmark = function (request) {
            return this._service.call(request, 'Ams/Bookmark/UpdateBookmark');
        };
        BookmarkService.prototype.UpdateScale = function (request) {
            return this._service.call(request, 'Ams/Bookmark/UpdateScale');
        };
        return BookmarkService;
    }());
    exports.BookmarkService = BookmarkService;
});
