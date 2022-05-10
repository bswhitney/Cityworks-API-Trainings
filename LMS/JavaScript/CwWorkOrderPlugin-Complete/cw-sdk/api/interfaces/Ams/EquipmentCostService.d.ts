import { Enums, ServiceEnums, PromiseTypes, ServiceTypes, Types as CoreTypes } from '../../../bundles/core';
import AbortablePromise = PromiseTypes.AbortablePromise;

export namespace EquipmentCostServiceTypes { 
    export namespace Requests {
        export interface AddInspectionCosts extends ServiceTypes.CoreRequestBase {
            AcctNum?: string;
            ContractorEquipmentCost?: number;
            ContractorEquipmentDescription?: string;
            ContractorEquipmentId?: string;
            ContractorSids?: number[];
            EquipmentSids?: number[];
            Estimated?: boolean;
            FinishDate?: Date;
            Hours?: number;
            InspectionId: number;
            StartDate?: Date;
            Units?: number;
        }
        export interface AddWorkOrderCosts extends ServiceTypes.CoreRequestBase {
            AcctNum?: string;
            ContractorEquipmentCost?: number;
            ContractorEquipmentDescription?: string;
            ContractorEquipmentId?: string;
            ContractorSids?: number[];
            Entities?: CoreTypes.WorkOrderEntity[];
            EquipmentSids?: number[];
            Estimated?: boolean;
            FinishDate?: Date;
            Hours?: number;
            StartDate?: Date;
            TaskIds?: number[];
            Units?: number;
            WorkOrderId: string;
            WorkOrderSid: number;
        }
        export interface DeleteInspectionCosts extends ServiceTypes.CoreRequestBase {
            EquipmentCostIds: number[];
            Estimated?: boolean;
        }
        export interface DeleteWorkOrderCosts extends ServiceTypes.CoreRequestBase {
            EquipmentCostIds: number[];
            Estimated?: boolean;
        }
        export interface InspectionCostsByInspection extends ServiceTypes.CoreRequestBase {
            Estimated?: boolean;
            InspectionIds: number[];
        }
        export interface WorkOrderCostsByWorkOrder extends ServiceTypes.CoreRequestBase {
            Estimated?: boolean;
            WorkOrderIds: string[];
            WorkOrderSids: number[];
        }
    }
    export namespace Responses {
        export interface AddInspectionCosts extends ServiceTypes.CoreResponseBase_<CoreTypes.InspectionEquipmentCost[]> {}
        export interface AddWorkOrderCosts extends ServiceTypes.CoreResponseBase_<CoreTypes.EquipmentCost[]> {}
        export interface DeleteInspectionCosts extends ServiceTypes.CoreResponseBase_<{[key: number]: boolean}> {}
        export interface DeleteWorkOrderCosts extends ServiceTypes.CoreResponseBase_<{[key: number]: boolean}> {}
        export interface InspectionCostsByInspection extends ServiceTypes.CoreResponseBase_<CoreTypes.InspectionEquipmentCost[]> {}
        export interface WorkOrderCostsByWorkOrder extends ServiceTypes.CoreResponseBase_<CoreTypes.EquipmentCost[]> {}
    }
    export interface IEquipmentCostService {
        AddInspectionCosts?: (request: Requests.AddInspectionCosts) => AbortablePromise<Responses.AddInspectionCosts>;
        AddWorkOrderCosts?: (request: Requests.AddWorkOrderCosts) => AbortablePromise<Responses.AddWorkOrderCosts>;
        DeleteInspectionCosts?: (request: Requests.DeleteInspectionCosts) => AbortablePromise<Responses.DeleteInspectionCosts>;
        DeleteWorkOrderCosts?: (request: Requests.DeleteWorkOrderCosts) => AbortablePromise<Responses.DeleteWorkOrderCosts>;
        InspectionCostsByInspection?: (request: Requests.InspectionCostsByInspection) => AbortablePromise<Responses.InspectionCostsByInspection>;
        WorkOrderCostsByWorkOrder?: (request: Requests.WorkOrderCostsByWorkOrder) => AbortablePromise<Responses.WorkOrderCostsByWorkOrder>;
    }
}
