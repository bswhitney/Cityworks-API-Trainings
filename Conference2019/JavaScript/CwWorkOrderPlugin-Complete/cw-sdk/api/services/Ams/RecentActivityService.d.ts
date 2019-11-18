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
    InspectionViewed(request: Requests.InspectionViewed): AbortablePromise<Responses.InspectionViewed>;
    RequestViewed(request: Requests.RequestViewed): AbortablePromise<Responses.RequestViewed>;
    User(request: Requests.User): AbortablePromise<Responses.User>;
    WorkOrderViewed(request: Requests.WorkOrderViewed): AbortablePromise<Responses.WorkOrderViewed>;
}
