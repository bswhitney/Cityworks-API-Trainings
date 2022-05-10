import { PromiseTypes } from '../../../core/promise';
import { IApiService } from '../../../http/api-service';
import { MaterialCostServiceTypes as SvcDef } from '../../interfaces/Ams/MaterialCostService';
import AbortablePromise = PromiseTypes.AbortablePromise;
import Requests = SvcDef.Requests;
import Responses = SvcDef.Responses;
import IMaterialCostService = SvcDef.IMaterialCostService;
export * from '../../../http/api-service';
export * from '../../interfaces/Ams/MaterialCostService';
export declare class MaterialCostService implements IMaterialCostService {
    private _service;
    constructor(service: IApiService);
    AddWorkOrderCosts(request: Requests.AddWorkOrderCosts): AbortablePromise<Responses.AddWorkOrderCosts>;
    DeleteWorkOrderCosts(request: Requests.DeleteWorkOrderCosts): AbortablePromise<Responses.DeleteWorkOrderCosts>;
    WorkOrderCostsByWorkOrder(request: Requests.WorkOrderCostsByWorkOrder): AbortablePromise<Responses.WorkOrderCostsByWorkOrder>;
    ErrorCodes: {};
    WarningCodes: {};
}
