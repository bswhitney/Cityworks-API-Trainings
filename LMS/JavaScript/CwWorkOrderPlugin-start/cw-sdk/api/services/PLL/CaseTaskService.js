define(["require", "exports", "../../../http/api-service"], function (require, exports, api_service_1) {
    "use strict";
    function __export(m) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    __export(api_service_1);
    var CaseTaskService = /** @class */ (function () {
        function CaseTaskService(service) {
            this.ErrorCodes = {
                CaObjectIdIsInvalid: 1,
                TaskIdIsInvalid: 2,
                TaskIsExpired: 3,
                StartPointOrEndPointNotSet: 4,
                StartPointGreaterThanEndpoint: 5,
                StartPointGreaterThanMaxEndPoint: 6,
                StartPointLessThanFirstExistingStartPoint: 7,
                AllExistingTasksAtStartPointAreComplete: 8,
                CannotInsertBetweenMilestonesWhenWorkHasStartedAfterStartPoint: 9,
                ExpiredFlagIsInvalid: 10,
                AutoScheduleInspFlagIsInvalid: 11,
                TaskGeoFlagIsInvalid: 12,
                CalWeekDayFlagIsInvalid: 13,
                TaskTypeIsInvalid: 14,
                CorrGroupIdIsInvalid: 15,
                CorrGroupCodeIsInvalid: 16,
                DisciplineIdIsInvalid: 17,
                DisciplineCodeIsInvalid: 18,
                GeoAreaIdIsInvalid: 19,
                GeoAreaIsInvalid: 20,
                GeoDetailIdIsInvalid: 21,
                GeoDetailIsInvalid: 22,
                HearingTypeIdIsInvalid: 23,
                HearingTypeIsInvalid: 24,
                ResponsibleDeptIdIsInvalid: 25,
                DepartmentCodeIsInvalid: 26,
                ResponsibleDivIdIsInvalid: 27,
                DivisionCodeIsInvalid: 28,
                ResponsibleUserIdIsInvalid: 29,
                ResponsibleIdIsInvalidForInspection: 30,
                ResultSetIdIsInvalid: 31,
                ResultSetIdIsNull: 32,
                TaskNotValidForCaseParcelAddress: 33,
                TargetEndDateCannotBeEarlierThanTargetStartDate: 34,
                DatabaseErrorWhileAdjustingTasks: 35,
                CaTaskIdIsNull: 37,
                DefDurationDaysIsNull: 38,
                ExpiredFlagIsNull: 39,
                AutoSchduleInspIsFlagNull: 40,
                TaskGeoFlagIsNull: 41,
                CallWeekDayFlagIsNull: 42,
                TaskTypeIsNull: 43,
                LoginIdIsInvalid: 44,
                LoginIdIsInvalidForInspection: 45,
                AllChecklistItemsMustBeCompleted: 46,
                ActualEndDateCannotBeBeforeAvailableDate: 47,
                ActualStartDateCannotBeAfterActualEndDate: 49,
                TargetStartDateCannotBeEarlierThanTaskAvailableDate: 50,
                UnknownError: 54,
                CouldNotCheckSecurity: 56
            };
            this.WarningCodes = {};
            this._service = service;
        }
        CaseTaskService.prototype.Add = function (request) {
            return this._service.call(request, 'PLL/CaseTask/Add');
        };
        CaseTaskService.prototype.ByCaObjectId = function (request) {
            return this._service.call(request, 'PLL/CaseTask/ByCaObjectId');
        };
        CaseTaskService.prototype.ByIds = function (request) {
            return this._service.call(request, 'PLL/CaseTask/ByIds');
        };
        CaseTaskService.prototype.Delete = function (request) {
            return this._service.call(request, 'PLL/CaseTask/Delete');
        };
        CaseTaskService.prototype.DeleteByCaObjectId = function (request) {
            return this._service.call(request, 'PLL/CaseTask/DeleteByCaObjectId');
        };
        CaseTaskService.prototype.Search = function (request) {
            return this._service.call(request, 'PLL/CaseTask/Search');
        };
        CaseTaskService.prototype.SetResult = function (request) {
            return this._service.call(request, 'PLL/CaseTask/SetResult');
        };
        CaseTaskService.prototype.Update = function (request) {
            return this._service.call(request, 'PLL/CaseTask/Update');
        };
        return CaseTaskService;
    }());
    exports.CaseTaskService = CaseTaskService;
});
