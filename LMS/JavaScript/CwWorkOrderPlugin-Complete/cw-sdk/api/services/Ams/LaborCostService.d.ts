import { PromiseTypes } from '../../../core/promise';
import { IApiService } from '../../../http/api-service';
import { LaborCostServiceTypes as SvcDef } from '../../interfaces/Ams/LaborCostService';
import AbortablePromise = PromiseTypes.AbortablePromise;
import Requests = SvcDef.Requests;
import Responses = SvcDef.Responses;
import ILaborCostService = SvcDef.ILaborCostService;
export * from '../../../http/api-service';
export * from '../../interfaces/Ams/LaborCostService';
export declare class LaborCostService implements ILaborCostService {
    private _service;
    constructor(service: IApiService);
    AddRequestCosts(request: Requests.AddRequestCosts): AbortablePromise<Responses.AddRequestCosts>;
    AddWorkOrderCosts(request: Requests.AddWorkOrderCosts): AbortablePromise<Responses.AddWorkOrderCosts>;
    CostCodes(request: Requests.CostCodes): AbortablePromise<Responses.CostCodes>;
    DeleteRequestCosts(request: Requests.DeleteRequestCosts): AbortablePromise<Responses.DeleteRequestCosts>;
    DeleteWorkOrderCosts(request: Requests.DeleteWorkOrderCosts): AbortablePromise<Responses.DeleteWorkOrderCosts>;
    JobCodes(request: Requests.JobCodes): AbortablePromise<Responses.JobCodes>;
    RequestCostsByRequest(request: Requests.RequestCostsByRequest): AbortablePromise<Responses.RequestCostsByRequest>;
    WorkOrderCostsByWorkOrder(request: Requests.WorkOrderCostsByWorkOrder): AbortablePromise<Responses.WorkOrderCostsByWorkOrder>;
}
