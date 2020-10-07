import { Enums, ServiceEnums, PromiseTypes, ServiceTypes, Types as CoreTypes } from '../../../bundles/core';
import AbortablePromise = PromiseTypes.AbortablePromise;

export namespace EquipmentCostServiceTypes { 
    export namespace Requests {
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
        }
        export interface DeleteWorkOrderCosts extends ServiceTypes.CoreRequestBase {
            EquipmentCostIds: number[];
            Estimated?: boolean;
        }
        export interface WorkOrderCostsByWorkOrder extends ServiceTypes.CoreRequestBase {
            Estimated?: boolean;
            WorkOrderIds: string[];
        }
    }
    export namespace Responses {
        export interface AddWorkOrderCosts extends ServiceTypes.CoreResponseBase_<CoreTypes.EquipmentCost[]> {}
        export interface DeleteWorkOrderCosts extends ServiceTypes.CoreResponseBase_<{[key: number]: boolean}> {}
        export interface WorkOrderCostsByWorkOrder extends ServiceTypes.CoreResponseBase_<CoreTypes.EquipmentCost[]> {}
    }
    export interface IEquipmentCostService {
        AddWorkOrderCosts?: (request: Requests.AddWorkOrderCosts) => AbortablePromise<Responses.AddWorkOrderCosts>;
        DeleteWorkOrderCosts?: (request: Requests.DeleteWorkOrderCosts) => AbortablePromise<Responses.DeleteWorkOrderCosts>;
        WorkOrderCostsByWorkOrder?: (request: Requests.WorkOrderCostsByWorkOrder) => AbortablePromise<Responses.WorkOrderCostsByWorkOrder>;
    }
}
