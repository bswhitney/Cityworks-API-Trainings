import { Enums, ServiceEnums, PromiseTypes, ServiceTypes, Types as CoreTypes } from '../../../bundles/core';
import AbortablePromise = PromiseTypes.AbortablePromise;

export namespace CaseLicenseServiceTypes { 
    export namespace Requests {
        export interface Add extends ServiceTypes.CoreRequestBase {
            CaFeeId?: number;
            CaObjectId: number;
            Code: string;
            Comments?: string;
            DateApproved?: Date;
            Description?: string;
            FeeCode?: string;
            FeeSetupId?: number;
            LicenseNumber?: number;
            StatusCode?: string;
        }
        export interface ByCaObjectId extends ServiceTypes.CoreRequestBase {
            CaObjectId: number;
        }
        export interface Delete extends ServiceTypes.CoreRequestBase {
            CaLicenseId: number;
        }
        export interface DeleteByCaObjectId extends ServiceTypes.CoreRequestBase {
            CaObjectId: number;
        }
        export interface Search extends ServiceTypes.CoreRequestBase {
            CaFeeId?: number;
            CaLicenseId?: number;
            Code?: string;
            Comments?: string;
            Description?: string;
            FeeCode?: string;
            FeeSetupId?: number;
            LicenseNumber?: number;
            StatusCode?: string;
        }
    }
    export namespace Responses {
        export interface Add extends ServiceTypes.CoreResponseBase_obsolete_<CoreTypes.CaLicenseItemBase> {}
        export interface ByCaObjectId extends ServiceTypes.CoreResponseBase_obsolete_<CoreTypes.CaLicenseItemBase[]> {}
        export interface Delete extends ServiceTypes.CoreResponseBase_obsolete_<CoreTypes.CaLicenseItemBase> {}
        export interface DeleteByCaObjectId extends ServiceTypes.CoreResponseBase_obsolete_<number> {}
        export interface Search extends ServiceTypes.CoreResponseBase_obsolete_<number[]> {}
    }
    export interface ICaseLicenseService {
        Add?: (request: Requests.Add) => AbortablePromise<Responses.Add>;
        ByCaObjectId?: (request: Requests.ByCaObjectId) => AbortablePromise<Responses.ByCaObjectId>;
        Delete?: (request: Requests.Delete) => AbortablePromise<Responses.Delete>;
        DeleteByCaObjectId?: (request: Requests.DeleteByCaObjectId) => AbortablePromise<Responses.DeleteByCaObjectId>;
        Search?: (request: Requests.Search) => AbortablePromise<Responses.Search>;
    }
}
