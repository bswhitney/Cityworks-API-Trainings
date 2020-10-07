import { Enums, ServiceEnums, PromiseTypes, ServiceTypes, Types as CoreTypes } from '../../../bundles/core';
import AbortablePromise = PromiseTypes.AbortablePromise;

export namespace MaterialCostServiceTypes { 
    export namespace Requests {
        export interface AddWorkOrderCosts extends ServiceTypes.CoreRequestBase {
            AcctNum?: string;
            CombineIssuesByMaterialSid?: boolean;
            ContractorMaterialCost?: number;
            ContractorMaterialDescription?: string;
            ContractorMaterialId?: string;
            ContractorSids?: number[];
            Entities?: CoreTypes.WorkOrderEntity[];
            Estimated?: boolean;
            MaterialSids?: number[];
            Source?: string;
            TaskIds?: number[];
            TransDate?: Date;
            Units: number;
            WorkOrderId: string;
            WorkOrderSid: number;
        }
        export interface DeleteWorkOrderCosts extends ServiceTypes.CoreRequestBase {
            Estimated?: boolean;
            MaterialCostIds: number[];
        }
        export interface WorkOrderCostsByWorkOrder extends ServiceTypes.CoreRequestBase {
            Estimated?: boolean;
            WorkOrderIds: string[];
            WorkOrderSids: number[];
        }
    }
    export namespace Responses {
        export interface AddWorkOrderCosts extends ServiceTypes.CoreResponseBase_<CoreTypes.MaterialCost[]> {}
        export interface DeleteWorkOrderCosts extends ServiceTypes.CoreResponseBase_<{[key: number]: boolean}> {}
        export interface WorkOrderCostsByWorkOrder extends ServiceTypes.CoreResponseBase_<CoreTypes.MaterialCost[]> {}
    }
    export interface IMaterialCostService {
        AddWorkOrderCosts?: (request: Requests.AddWorkOrderCosts) => AbortablePromise<Responses.AddWorkOrderCosts>;
        DeleteWorkOrderCosts?: (request: Requests.DeleteWorkOrderCosts) => AbortablePromise<Responses.DeleteWorkOrderCosts>;
        WorkOrderCostsByWorkOrder?: (request: Requests.WorkOrderCostsByWorkOrder) => AbortablePromise<Responses.WorkOrderCostsByWorkOrder>;
    }
}
