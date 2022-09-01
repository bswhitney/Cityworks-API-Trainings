import { PromiseTypes } from '../../../core/promise';
import { IApiService } from '../../../http/api-service';
import { RecentActivityServiceTypes as SvcDef } from '../../interfaces/Ams/RecentActivityService';
import AbortablePromise = PromiseTypes.AbortablePromise;
import Requests = SvcDef.Requests;
import Responses = SvcDef.Responses;
import IRecentActivityService = SvcDef.IRecentActivityService;
export * from '../../../http/api-service';
export * from '../../interfaces/Ams/RecentActivityService';
export declare class RecentActivityService implements IRecentActivityService {
    private _service;
    constructor(service: IApiService);
    CaseViewed(request: Requests.CaseViewed): AbortablePromise<Responses.CaseViewed>;
    Clear(request: Requests.Clear): AbortablePromise<Responses.Clear>;
    InspectionViewed(request: Requests.InspectionViewed): AbortablePromise<Responses.InspectionViewed>;
    ManholeInspectionViewed(request: Requests.ManholeInspectionViewed): AbortablePromise<Responses.ManholeInspectionViewed>;
    RequestViewed(request: Requests.RequestViewed): AbortablePromise<Responses.RequestViewed>;
    TvInspectionViewed(request: Requests.TvInspectionViewed): AbortablePromise<Responses.TvInspectionViewed>;
    User(request: Requests.User): AbortablePromise<Responses.User>;
    WorkOrderViewed(request: Requests.WorkOrderViewed): AbortablePromise<Responses.WorkOrderViewed>;
    ErrorCodes: {
        ErrorMustBeDomainAdmin: number;
    };
    WarningCodes: {};
}
