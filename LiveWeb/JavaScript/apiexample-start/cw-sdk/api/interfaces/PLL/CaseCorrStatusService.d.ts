import { Enums, ServiceEnums, PromiseTypes, ServiceTypes, Types as CoreTypes } from '../../../bundles/core';
import AbortablePromise = PromiseTypes.AbortablePromise;

export namespace CaseCorrStatusServiceTypes { 
    export namespace Requests {
        export interface Add extends ServiceTypes.CoreRequestBase {
            CaCorrectionsId: number;
            CorrStatusId: number;
        }
        export interface ByCaCorrectionsIds extends ServiceTypes.CoreRequestBase {
            CaCorrectionsIds?: number[];
        }
        export interface Search extends ServiceTypes.CoreRequestBase {
            CaCorrectionsId?: number;
            CaCorrStatusId?: number;
            CompletedBy?: number;
            CorrStatusCode?: string;
            CorrStatusDesc?: string;
            CorrStatusId?: number;
        }
    }
    export namespace Responses {
        export interface Add extends ServiceTypes.CoreResponseBase_<CoreTypes.CaCorrStatusItemBase> {}
        export interface ByCaCorrectionsIds extends ServiceTypes.CoreResponseBase_obsolete_<CoreTypes.CaCorrStatusItemBase[]> {}
        export interface Search extends ServiceTypes.CoreResponseBase_obsolete_<number[]> {}
    }
    export interface ICaseCorrStatusService {
        Add?: (request: Requests.Add) => AbortablePromise<Responses.Add>;
        ByCaCorrectionsIds?: (request: Requests.ByCaCorrectionsIds) => AbortablePromise<Responses.ByCaCorrectionsIds>;
        Search?: (request: Requests.Search) => AbortablePromise<Responses.Search>;
    }
}
