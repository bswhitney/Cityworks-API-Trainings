import { PromiseTypes } from '../../../core/promise';
import { IApiService } from '../../../http/api-service';
import { CaseTaskServiceTypes as SvcDef } from '../../interfaces/PLL/CaseTaskService';
import AbortablePromise = PromiseTypes.AbortablePromise;
import Requests = SvcDef.Requests;
import Responses = SvcDef.Responses;
import ICaseTaskService = SvcDef.ICaseTaskService;
export * from '../../../http/api-service';
export * from '../../interfaces/PLL/CaseTaskService';
export declare class CaseTaskService implements ICaseTaskService {
    private _service;
    constructor(service: IApiService);
    Add(request: Requests.Add): AbortablePromise<Responses.Add>;
    ByCaObjectId(request: Requests.ByCaObjectId): AbortablePromise<Responses.ByCaObjectId>;
    ByIds(request: Requests.ByIds): AbortablePromise<Responses.ByIds>;
    Delete(request: Requests.Delete): AbortablePromise<Responses.Delete>;
    DeleteByCaObjectId(request: Requests.DeleteByCaObjectId): AbortablePromise<Responses.DeleteByCaObjectId>;
    Search(request: Requests.Search): AbortablePromise<Responses.Search>;
    SetResult(request: Requests.SetResult): AbortablePromise<Responses.SetResult>;
    Update(request: Requests.Update): AbortablePromise<Responses.Update>;
    ErrorCodes: {
        CaObjectIdIsInvalid: number;
        TaskIdIsInvalid: number;
        TaskIsExpired: number;
        StartPointOrEndPointNotSet: number;
        StartPointGreaterThanEndpoint: number;
        StartPointGreaterThanMaxEndPoint: number;
        StartPointLessThanFirstExistingStartPoint: number;
        AllExistingTasksAtStartPointAreComplete: number;
        CannotInsertBetweenMilestonesWhenWorkHasStartedAfterStartPoint: number;
        ExpiredFlagIsInvalid: number;
        AutoScheduleInspFlagIsInvalid: number;
        TaskGeoFlagIsInvalid: number;
        CalWeekDayFlagIsInvalid: number;
        TaskTypeIsInvalid: number;
        CorrGroupIdIsInvalid: number;
        CorrGroupCodeIsInvalid: number;
        DisciplineIdIsInvalid: number;
        DisciplineCodeIsInvalid: number;
        GeoAreaIdIsInvalid: number;
        GeoAreaIsInvalid: number;
        GeoDetailIdIsInvalid: number;
        GeoDetailIsInvalid: number;
        HearingTypeIdIsInvalid: number;
        HearingTypeIsInvalid: number;
        ResponsibleDeptIdIsInvalid: number;
        DepartmentCodeIsInvalid: number;
        ResponsibleDivIdIsInvalid: number;
        DivisionCodeIsInvalid: number;
        ResponsibleUserIdIsInvalid: number;
        ResponsibleIdIsInvalidForInspection: number;
        ResultSetIdIsInvalid: number;
        ResultSetIdIsNull: number;
        TaskNotValidForCaseParcelAddress: number;
        TargetEndDateCannotBeEarlierThanTargetStartDate: number;
        DatabaseErrorWhileAdjustingTasks: number;
        CaTaskIdIsNull: number;
        DefDurationDaysIsNull: number;
        ExpiredFlagIsNull: number;
        AutoSchduleInspIsFlagNull: number;
        TaskGeoFlagIsNull: number;
        CallWeekDayFlagIsNull: number;
        TaskTypeIsNull: number;
        LoginIdIsInvalid: number;
        LoginIdIsInvalidForInspection: number;
        AllChecklistItemsMustBeCompleted: number;
        ActualEndDateCannotBeBeforeAvailableDate: number;
        ActualStartDateCannotBeAfterActualEndDate: number;
        TargetStartDateCannotBeEarlierThanTaskAvailableDate: number;
        UnknownError: number;
        CouldNotCheckSecurity: number;
    };
    WarningCodes: {};
}