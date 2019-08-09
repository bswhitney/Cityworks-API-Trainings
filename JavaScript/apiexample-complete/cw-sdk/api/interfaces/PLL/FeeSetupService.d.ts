import { Enums, ServiceEnums, PromiseTypes, ServiceTypes, Types as CoreTypes } from '../../../bundles/core';
import AbortablePromise = PromiseTypes.AbortablePromise;

export namespace FeeSetupServiceTypes { 
    export namespace Requests {
        export interface All extends ServiceTypes.CoreRequestBase {
        }
        export interface Search extends ServiceTypes.CoreRequestBase {
            AccountCode?: string;
            FeeCode?: string;
            FeeDesc?: string;
            FeeSetupId?: number;
            FeeTypeId?: number;
        }
    }
    export namespace Responses {
        export interface All extends ServiceTypes.CoreResponseBase_obsolete_<CoreTypes.FeeSetupItemBase[]> {}
        export interface Search extends ServiceTypes.CoreResponseBase_obsolete_<number[]> {}
    }
    export interface IFeeSetupService {
        All?: (request: Requests.All) => AbortablePromise<Responses.All>;
        Search?: (request: Requests.Search) => AbortablePromise<Responses.Search>;
    }
}
