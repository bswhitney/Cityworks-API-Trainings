import { Enums, ServiceEnums, PromiseTypes, ServiceTypes, Types as CoreTypes } from '../../../bundles/core';
import AbortablePromise = PromiseTypes.AbortablePromise;

export namespace TemplateMapLayerServiceTypes { 
    export namespace Requests {
        export interface DeleteInspectionInstancesByInspectionId extends ServiceTypes.CoreRequestBase {
            InspectionId: number;
        }
        export interface DeleteServiceRequestInstancesByRequestId extends ServiceTypes.CoreRequestBase {
            ServiceRequestId: number;
        }
        export interface DeleteWorkOrderInstancesByWorkOrdertId extends ServiceTypes.CoreRequestBase {
            WorkOrderId: string;
        }
        export interface InspectionInstanceMapLayersByInspectionId extends ServiceTypes.CoreRequestBase {
            InspectionId: number;
        }
        export interface ServiceRequestInstanceMapLayersByRequestId extends ServiceTypes.CoreRequestBase {
            ServiceRequestId: number;
        }
        export interface UpdateInspectionInstanceMapLayers extends ServiceTypes.CoreRequestBase {
            DomainId: number;
            InspectionId: number;
            X: number;
            Y: number;
            Z?: number;
        }
        export interface UpdateServiceRequestInstanceMapLayers extends ServiceTypes.CoreRequestBase {
            DomainId: number;
            ServiceRequestId: number;
            X: number;
            Y: number;
            Z?: number;
        }
        export interface UpdateWorkOrderInstanceMapLayers extends ServiceTypes.CoreRequestBase {
            DomainId: number;
            WorkOrderId: string;
            WorkOrderSid: number;
            X: number;
            Y: number;
            Z?: number;
        }
        export interface WorkOrderInstanceMapLayersByWorkOrderId extends ServiceTypes.CoreRequestBase {
            WorkOrderId: string;
        }
        export interface WorkOrderInstanceMapLayersByWorkOrderSid extends ServiceTypes.CoreRequestBase {
            WorkOrderSid: number;
        }
    }
    export namespace Responses {
        export interface DeleteInspectionInstancesByInspectionId extends ServiceTypes.CoreResponseBase_<boolean> {}
        export interface DeleteServiceRequestInstancesByRequestId extends ServiceTypes.CoreResponseBase_<boolean> {}
        export interface DeleteWorkOrderInstancesByWorkOrdertId extends ServiceTypes.CoreResponseBase_<boolean> {}
        export interface InspectionInstanceMapLayersByInspectionId extends ServiceTypes.CoreResponseBase_<CoreTypes.InstanceMapLayer[]> {}
        export interface ServiceRequestInstanceMapLayersByRequestId extends ServiceTypes.CoreResponseBase_<CoreTypes.InstanceMapLayer[]> {}
        export interface UpdateInspectionInstanceMapLayers extends ServiceTypes.CoreResponseBase_<CoreTypes.InspectionZoneValues> {}
        export interface UpdateServiceRequestInstanceMapLayers extends ServiceTypes.CoreResponseBase_<CoreTypes.ServiceRequestZoneValues> {}
        export interface UpdateWorkOrderInstanceMapLayers extends ServiceTypes.CoreResponseBase_<CoreTypes.WorkOrderZoneValues> {}
        export interface WorkOrderInstanceMapLayersByWorkOrderId extends ServiceTypes.CoreResponseBase_<CoreTypes.InstanceMapLayer[]> {}
        export interface WorkOrderInstanceMapLayersByWorkOrderSid extends ServiceTypes.CoreResponseBase_<CoreTypes.InstanceMapLayer[]> {}
    }
    export interface ITemplateMapLayerService {
        DeleteInspectionInstancesByInspectionId?: (request: Requests.DeleteInspectionInstancesByInspectionId) => AbortablePromise<Responses.DeleteInspectionInstancesByInspectionId>;
        DeleteServiceRequestInstancesByRequestId?: (request: Requests.DeleteServiceRequestInstancesByRequestId) => AbortablePromise<Responses.DeleteServiceRequestInstancesByRequestId>;
        DeleteWorkOrderInstancesByWorkOrdertId?: (request: Requests.DeleteWorkOrderInstancesByWorkOrdertId) => AbortablePromise<Responses.DeleteWorkOrderInstancesByWorkOrdertId>;
        InspectionInstanceMapLayersByInspectionId?: (request: Requests.InspectionInstanceMapLayersByInspectionId) => AbortablePromise<Responses.InspectionInstanceMapLayersByInspectionId>;
        ServiceRequestInstanceMapLayersByRequestId?: (request: Requests.ServiceRequestInstanceMapLayersByRequestId) => AbortablePromise<Responses.ServiceRequestInstanceMapLayersByRequestId>;
        UpdateInspectionInstanceMapLayers?: (request: Requests.UpdateInspectionInstanceMapLayers) => AbortablePromise<Responses.UpdateInspectionInstanceMapLayers>;
        UpdateServiceRequestInstanceMapLayers?: (request: Requests.UpdateServiceRequestInstanceMapLayers) => AbortablePromise<Responses.UpdateServiceRequestInstanceMapLayers>;
        UpdateWorkOrderInstanceMapLayers?: (request: Requests.UpdateWorkOrderInstanceMapLayers) => AbortablePromise<Responses.UpdateWorkOrderInstanceMapLayers>;
        WorkOrderInstanceMapLayersByWorkOrderId?: (request: Requests.WorkOrderInstanceMapLayersByWorkOrderId) => AbortablePromise<Responses.WorkOrderInstanceMapLayersByWorkOrderId>;
        WorkOrderInstanceMapLayersByWorkOrderSid?: (request: Requests.WorkOrderInstanceMapLayersByWorkOrderSid) => AbortablePromise<Responses.WorkOrderInstanceMapLayersByWorkOrderSid>;
    }
}
