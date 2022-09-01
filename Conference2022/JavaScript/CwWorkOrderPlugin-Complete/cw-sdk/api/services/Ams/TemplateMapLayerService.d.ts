import { PromiseTypes } from '../../../core/promise';
import { IApiService } from '../../../http/api-service';
import { TemplateMapLayerServiceTypes as SvcDef } from '../../interfaces/Ams/TemplateMapLayerService';
import AbortablePromise = PromiseTypes.AbortablePromise;
import Requests = SvcDef.Requests;
import Responses = SvcDef.Responses;
import ITemplateMapLayerService = SvcDef.ITemplateMapLayerService;
export * from '../../../http/api-service';
export * from '../../interfaces/Ams/TemplateMapLayerService';
export declare class TemplateMapLayerService implements ITemplateMapLayerService {
    private _service;
    constructor(service: IApiService);
    DeleteInspectionInstancesByInspectionId(request: Requests.DeleteInspectionInstancesByInspectionId): AbortablePromise<Responses.DeleteInspectionInstancesByInspectionId>;
    DeleteServiceRequestInstancesByRequestId(request: Requests.DeleteServiceRequestInstancesByRequestId): AbortablePromise<Responses.DeleteServiceRequestInstancesByRequestId>;
    DeleteWorkOrderInstancesByWorkOrdertId(request: Requests.DeleteWorkOrderInstancesByWorkOrdertId): AbortablePromise<Responses.DeleteWorkOrderInstancesByWorkOrdertId>;
    InspectionInstanceMapLayersByInspectionId(request: Requests.InspectionInstanceMapLayersByInspectionId): AbortablePromise<Responses.InspectionInstanceMapLayersByInspectionId>;
    ServiceRequestInstanceMapLayersByRequestId(request: Requests.ServiceRequestInstanceMapLayersByRequestId): AbortablePromise<Responses.ServiceRequestInstanceMapLayersByRequestId>;
    UpdateInspectionInstanceMapLayers(request: Requests.UpdateInspectionInstanceMapLayers): AbortablePromise<Responses.UpdateInspectionInstanceMapLayers>;
    UpdateServiceRequestInstanceMapLayers(request: Requests.UpdateServiceRequestInstanceMapLayers): AbortablePromise<Responses.UpdateServiceRequestInstanceMapLayers>;
    UpdateWorkOrderInstanceMapLayers(request: Requests.UpdateWorkOrderInstanceMapLayers): AbortablePromise<Responses.UpdateWorkOrderInstanceMapLayers>;
    WorkOrderInstanceMapLayersByWorkOrderId(request: Requests.WorkOrderInstanceMapLayersByWorkOrderId): AbortablePromise<Responses.WorkOrderInstanceMapLayersByWorkOrderId>;
    WorkOrderInstanceMapLayersByWorkOrderSid(request: Requests.WorkOrderInstanceMapLayersByWorkOrderSid): AbortablePromise<Responses.WorkOrderInstanceMapLayersByWorkOrderSid>;
    ErrorCodes: {
        UnknownError: number;
        XYDataIsNotValid: number;
        NotAuthorizedToUpdateServiceRequest: number;
        NotAuthorizedToUpdateWorkOrder: number;
        NotAuthorizedToUpdateInspection: number;
    };
    WarningCodes: {};
}
