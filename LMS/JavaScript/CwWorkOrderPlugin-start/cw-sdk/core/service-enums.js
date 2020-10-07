define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ServiceEnums;
    (function (ServiceEnums) {
        var CoreResponseMessageType;
        (function (CoreResponseMessageType) {
            CoreResponseMessageType[CoreResponseMessageType["Success"] = 0] = "Success";
            CoreResponseMessageType[CoreResponseMessageType["Warning"] = 1] = "Warning";
            CoreResponseMessageType[CoreResponseMessageType["Error"] = 2] = "Error";
        })(CoreResponseMessageType = ServiceEnums.CoreResponseMessageType || (ServiceEnums.CoreResponseMessageType = {}));
        var CoreResponseStatus;
        (function (CoreResponseStatus) {
            CoreResponseStatus[CoreResponseStatus["Ok"] = 0] = "Ok";
            CoreResponseStatus[CoreResponseStatus["Error"] = 1] = "Error";
            CoreResponseStatus[CoreResponseStatus["Unauthorized"] = 2] = "Unauthorized";
            CoreResponseStatus[CoreResponseStatus["InvalidCredentials"] = 3] = "InvalidCredentials";
            CoreResponseStatus[CoreResponseStatus["ConnectionError"] = -1] = "ConnectionError";
        })(CoreResponseStatus = ServiceEnums.CoreResponseStatus || (ServiceEnums.CoreResponseStatus = {}));
    })(ServiceEnums = exports.ServiceEnums || (exports.ServiceEnums = {}));
});
