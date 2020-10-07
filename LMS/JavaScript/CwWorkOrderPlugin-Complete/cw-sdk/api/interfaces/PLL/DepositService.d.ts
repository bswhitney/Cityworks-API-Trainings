import { Enums, ServiceEnums, PromiseTypes, ServiceTypes, Types as CoreTypes } from '../../../bundles/core';
import AbortablePromise = PromiseTypes.AbortablePromise;

export namespace DepositServiceTypes { 
    export namespace Requests {
        export interface All extends ServiceTypes.CoreRequestBase {
        }
        export interface Search extends ServiceTypes.CoreRequestBase {
            AccountCode?: string;
            DepositCode?: string;
            DepositDesc?: string;
            DepositId?: number;
            DepositTypeId?: number;
        }
    }
    export namespace Responses {
        export interface All extends ServiceTypes.CoreResponseBase_obsolete_<CoreTypes.DepositItemBase[]> {}
        export interface Search extends ServiceTypes.CoreResponseBase_obsolete_<number[]> {}
    }
    export interface IDepositService {
        All?: (request: Requests.All) => AbortablePromise<Responses.All>;
        Search?: (request: Requests.Search) => AbortablePromise<Responses.Search>;
    }
}
