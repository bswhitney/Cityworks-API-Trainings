import { Enums, ServiceEnums, PromiseTypes, ServiceTypes, Types as CoreTypes } from '../../../bundles/core';
import AbortablePromise = PromiseTypes.AbortablePromise;

export namespace CostSummaryServiceTypes { 
    export namespace Requests {
        export interface WorkOrderEntity extends ServiceTypes.CoreRequestBase {
            ObjectIds?: number[];
        }
        export interface WorkOrderEntitySearch extends ServiceTypes.CoreRequestBase {
            SearchId?: number;
        }
    }
    export namespace Responses {
        export interface WorkOrderEntity extends ServiceTypes.CoreResponseBase_<CoreTypes.WorkOrderEntityCostSummary[]> {}
        export interface WorkOrderEntitySearch extends ServiceTypes.CoreResponseBase_<CoreTypes.WorkOrderEntityCostSummary[]> {}
    }
    export interface ICostSummaryService {
        WorkOrderEntity?: (request: Requests.WorkOrderEntity) => AbortablePromise<Responses.WorkOrderEntity>;
        WorkOrderEntitySearch?: (request: Requests.WorkOrderEntitySearch) => AbortablePromise<Responses.WorkOrderEntitySearch>;
    }
}
