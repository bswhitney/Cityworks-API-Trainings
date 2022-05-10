import { PromiseTypes } from '../../../core/promise';
import { IApiService } from '../../../http/api-service';
import { CostSummaryServiceTypes as SvcDef } from '../../interfaces/General/CostSummaryService';
import AbortablePromise = PromiseTypes.AbortablePromise;
import Requests = SvcDef.Requests;
import Responses = SvcDef.Responses;
import ICostSummaryService = SvcDef.ICostSummaryService;
export * from '../../../http/api-service';
export * from '../../interfaces/General/CostSummaryService';
export declare class CostSummaryService implements ICostSummaryService {
    private _service;
    constructor(service: IApiService);
    WorkOrderEntity(request: Requests.WorkOrderEntity): AbortablePromise<Responses.WorkOrderEntity>;
    WorkOrderEntitySearch(request: Requests.WorkOrderEntitySearch): AbortablePromise<Responses.WorkOrderEntitySearch>;
    ErrorCodes: {};
    WarningCodes: {};
}
