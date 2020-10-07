import { Enums, ServiceEnums, PromiseTypes, ServiceTypes, Types as CoreTypes } from '../../../bundles/core';
import AbortablePromise = PromiseTypes.AbortablePromise;

export namespace CaseInstReleasesServiceTypes { 
    export namespace Requests {
        export interface Add extends ServiceTypes.CoreRequestBase {
            AmountReleased: number;
            CaInstrumentId: number;
            CommentText?: string;
            DateReleased: Date;
            PercentReleased: number;
            ReleasedBy: number;
        }
        export interface Delete extends ServiceTypes.CoreRequestBase {
            CaInstReleasesId: number;
        }
        export interface Search extends ServiceTypes.CoreRequestBase {
            AmountReleased?: number;
            CaInstReleasesId?: number;
            CaInstrumentId?: number;
            CommentText?: string;
            PercentReleased?: number;
            ReleasedBy?: number;
        }
    }
    export namespace Responses {
        export interface Add extends ServiceTypes.CoreResponseBase_obsolete_<CoreTypes.CaInstReleasesItemBase> {}
        export interface Delete extends ServiceTypes.CoreResponseBase_obsolete_<CoreTypes.CaInstReleasesItemBase> {}
        export interface Search extends ServiceTypes.CoreResponseBase_obsolete_<number[]> {}
    }
    export interface ICaseInstReleasesService {
        Add?: (request: Requests.Add) => AbortablePromise<Responses.Add>;
        Delete?: (request: Requests.Delete) => AbortablePromise<Responses.Delete>;
        Search?: (request: Requests.Search) => AbortablePromise<Responses.Search>;
    }
}
