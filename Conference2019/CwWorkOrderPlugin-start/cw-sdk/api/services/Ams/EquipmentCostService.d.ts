import { PromiseTypes } from '../../../core/promise';
import { IApiService } from '../../../http/api-service';
import { EquipmentCostServiceTypes as SvcDef } from '../../interfaces/Ams/EquipmentCostService';
import AbortablePromise = PromiseTypes.AbortablePromise;
import Requests = SvcDef.Requests;
import Responses = SvcDef.Responses;
import IEquipmentCostService = SvcDef.IEquipmentCostService;
export * from '../../../http/api-service';
export * from '../../interfaces/Ams/EquipmentCostService';
export declare class EquipmentCostService implements IEquipmentCostService {
    private _service;
    constructor(service: IApiService);
    AddWorkOrderCosts(request: Requests.AddWorkOrderCosts): AbortablePromise<Responses.AddWorkOrderCosts>;
    DeleteWorkOrderCosts(request: Requests.DeleteWorkOrderCosts): AbortablePromise<Responses.DeleteWorkOrderCosts>;
    WorkOrderCostsByWorkOrder(request: Requests.WorkOrderCostsByWorkOrder): AbortablePromise<Responses.WorkOrderCostsByWorkOrder>;
}
