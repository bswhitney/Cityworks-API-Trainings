import { Enums, ServiceEnums, PromiseTypes, ServiceTypes, Types as CoreTypes } from '../../../bundles/core';
import AbortablePromise = PromiseTypes.AbortablePromise;

export namespace CaseContractorServiceTypes { 
    export namespace Requests {
        export interface Add extends ServiceTypes.CoreRequestBase {
            CaObjectId: number;
            ContractorId: number;
            ContractorTypeId: number;
            LocalLicenseId?: number;
            StateLicenseId?: number;
        }
        export interface ByCaObjectId extends ServiceTypes.CoreRequestBase {
            CaObjectId?: number;
        }
        export interface DeleteByCaObjectId extends ServiceTypes.CoreRequestBase {
            CaObjectId: number;
        }
        export interface Search extends ServiceTypes.CoreRequestBase {
            BusinessName?: string;
            CaContractorId?: number;
            CaObjectId?: number;
            CityName?: string;
            ContractorDesc?: string;
            ContractorId?: number;
            ContractorType?: string;
            ContractorTypeId?: number;
            FirstName?: string;
            LastName?: string;
            LicenseNum?: string;
            LocalLicenseId?: number;
            StateLicenseId?: number;
            WcLiabilityCompany?: string;
        }
        export interface SearchObject extends ServiceTypes.CoreRequestBase {
            BusinessName?: string;
            CaContractorId?: number;
            CaObjectId?: number;
            CityName?: string;
            ContractorDesc?: string;
            ContractorId?: number;
            ContractorType?: string;
            ContractorTypeId?: number;
            FirstName?: string;
            LastName?: string;
            LicenseNum?: string;
            LocalLicenseId?: number;
            StateLicenseId?: number;
            WcLiabilityCompany?: string;
        }
    }
    export namespace Responses {
        export interface Add extends ServiceTypes.CoreResponseBase_obsolete_<CoreTypes.CaContractorItemBase> {}
        export interface ByCaObjectId extends ServiceTypes.CoreResponseBase_obsolete_<CoreTypes.CaContractorItemBase[]> {}
        export interface DeleteByCaObjectId extends ServiceTypes.CoreResponseBase_obsolete_<number> {}
        export interface Search extends ServiceTypes.CoreResponseBase_obsolete_<number[]> {}
        export interface SearchObject extends ServiceTypes.CoreResponseBase_obsolete_<CoreTypes.CaContractorItemBase[]> {}
    }
    export interface ICaseContractorService {
        Add?: (request: Requests.Add) => AbortablePromise<Responses.Add>;
        ByCaObjectId?: (request: Requests.ByCaObjectId) => AbortablePromise<Responses.ByCaObjectId>;
        DeleteByCaObjectId?: (request: Requests.DeleteByCaObjectId) => AbortablePromise<Responses.DeleteByCaObjectId>;
        Search?: (request: Requests.Search) => AbortablePromise<Responses.Search>;
        SearchObject?: (request: Requests.SearchObject) => AbortablePromise<Responses.SearchObject>;
    }
}
