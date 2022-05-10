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
    AddInspectionCosts(request: Requests.AddInspectionCosts): AbortablePromise<Responses.AddInspectionCosts>;
    AddWorkOrderCosts(request: Requests.AddWorkOrderCosts): AbortablePromise<Responses.AddWorkOrderCosts>;
    DeleteInspectionCosts(request: Requests.DeleteInspectionCosts): AbortablePromise<Responses.DeleteInspectionCosts>;
    DeleteWorkOrderCosts(request: Requests.DeleteWorkOrderCosts): AbortablePromise<Responses.DeleteWorkOrderCosts>;
    InspectionCostsByInspection(request: Requests.InspectionCostsByInspection): AbortablePromise<Responses.InspectionCostsByInspection>;
    WorkOrderCostsByWorkOrder(request: Requests.WorkOrderCostsByWorkOrder): AbortablePromise<Responses.WorkOrderCostsByWorkOrder>;
    ErrorCodes: {};
    WarningCodes: {};
}
