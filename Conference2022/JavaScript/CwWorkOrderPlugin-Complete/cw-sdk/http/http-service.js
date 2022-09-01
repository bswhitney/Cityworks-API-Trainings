define(["require", "exports", "../core/promise"], function (require, exports, promise_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function jsonParse(jsonText) {
        //Date format is YYYY-MM-DDThh:mm:ss
        //This is assumed to be local time and is only here for legacy reasons.
        var DATE_REGEX_LOCAL = /(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})$/;
        //Date format is YYYY-MM-DDThh:mm:ss.mmmZ
        var ISO_8601_REGEX = /(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})(.\d+)?(Z)$/;
        return JSON.parse(jsonText, function (key, value) {
            var retVal = value;
            var isString = (value) && (typeof value == 'string');
            var isStandardDate = isString && DATE_REGEX_LOCAL.test(value);
            var isISODate = isString && ISO_8601_REGEX.test(value);
            //------------------------------------------------------------
            //  Try to parse dates
            //------------------------------------------------------------
            if (isISODate) {
                retVal = new Date(value);
            }
            else if (isStandardDate) {
                var result = DATE_REGEX_LOCAL.exec(value);
                // Get all of the date's components.
                var year = parseInt(result[1]);
                var month = parseInt(result[2]) - 1; // Month is zero based.
                var day = parseInt(result[3]);
                var hour = parseInt(result[4]);
                var min = parseInt(result[5]);
                var sec = parseInt(result[6]);
                //Check for null date
                if (year === 1 && month === 0 && day === 1) {
                    retVal = null;
                }
                else {
                    //Create the date. This is local time and is not correct unless the server
                    //time is the same as local time.
                    var localDate = new Date(year, month, day, hour, min, sec);
                    //MUST set full year to handle cases such as "0001-01-01"
                    localDate.setFullYear(year);
                    retVal = localDate;
                }
            }
            return retVal;
        });
    }
    function post(url, token, csrfToken, csrfTokenHeader, dataParams) {
        var xhr = new XMLHttpRequest();
        var isAborting = false;
        var promise = new Promise(function (resolve, reject) {
            var apiUrl = url;
            var uri = '';
            if (!dataParams)
                dataParams = { data: {}, token: (token !== null ? token : '') };
            else {
                dataParams = { data: JSON.stringify(dataParams), token: (token !== null ? token : '') };
            }
            for (var key in dataParams) {
                uri += encodeURIComponent(key) + '=' + encodeURIComponent(dataParams[key]) + '&';
            }
            xhr.open('POST', apiUrl, true);
            xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            if (csrfTokenHeader && csrfTokenHeader.length > 0 && csrfToken && csrfToken.length > 0) {
                xhr.setRequestHeader(csrfTokenHeader, csrfToken);
            }
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        resolve(jsonParse(xhr.response));
                    }
                    else {
                        if (isAborting === true) {
                            reject(promise_1.PromiseTypes.AbortablePromise.REASON_ABORTED);
                        }
                        else {
                            reject(Error(xhr.statusText));
                        }
                    }
                }
            };
            xhr.onerror = function () {
                reject(Error('Network Error'));
            };
            xhr.send(uri);
        });
        promise.abort = function () {
            isAborting = true;
            xhr.abort();
        };
        return promise;
    }
    exports.post = post;
});
