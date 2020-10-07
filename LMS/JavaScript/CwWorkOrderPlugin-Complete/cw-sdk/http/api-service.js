define(["require", "exports", "../bundles/core", "../api/services/general/AuthenticationService", "./http-service", "./cookie-service"], function (require, exports, Core, AuthenticationService_1, http, cookie_service_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ServiceEnums = Core.ServiceEnums;
    var ApiService = /** @class */ (function () {
        function ApiService(baseUrl, token) {
            if (token === void 0) { token = null; }
            this._csrfTokenCookieName = 'cw-reqtkn';
            this._csrfHeaderName = 'cw-csrf';
            this._baseUrl = null;
            this._csrfToken = null;
            this._token = null;
            if (typeof token === 'undefined' || token === null || token.length < 1) {
                this._token = null;
            }
            else {
                this._token = token;
            }
            if (typeof baseUrl === 'undefined' || baseUrl === null || baseUrl.length < 1) {
                this._baseUrl = null;
            }
            else {
                this._baseUrl = cleanUrl(baseUrl);
            }
        }
        ApiService.prototype.getToken = function () {
            return this._token;
        };
        ApiService.prototype.initializeCsrfToken = function () {
            this._csrfToken = cookie_service_1.CookieService.getCookieStringValue(this._csrfTokenCookieName);
        };
        ApiService.prototype.login = function (userName, password) {
            var _this = this;
            if (this._baseUrl === null) {
                return Promise.reject("No Cityworks URL is set. URL must be set in the constructor.");
            }
            var request;
            request = {
                LoginName: userName,
                Password: password
            };
            var svc = new AuthenticationService_1.AuthenticationService(this);
            var promise = svc.Authenticate(request);
            promise.then(function (resp) {
                if (resp.Status === ServiceEnums.CoreResponseStatus.Ok) {
                    _this._token = resp.Value.Token;
                }
                else {
                    _this._token = null;
                }
                return resp;
            }, function (response) {
                console.error("error logging in");
                console.error(response);
                _this._token = null;
                return response;
            });
            return promise;
        };
        ApiService.prototype.call = function (data, url) {
            if (this._baseUrl === null) {
                return Promise.reject("No Cityworks URL is set. URL must be set in the constructor.");
            }
            return http.post(this._baseUrl + 'Services/' + url, this._token, this._csrfToken || undefined, this._csrfHeaderName, data);
        };
        return ApiService;
    }());
    exports.ApiService = ApiService;
    function cleanUrl(u) {
        var viewUrl = u[u.length - 1] === '/' || u[u.length - 1] == '\\' ? '' : (u.indexOf('/') > -1 ? '/' : '\\');
        return u + viewUrl;
    }
    ;
});
