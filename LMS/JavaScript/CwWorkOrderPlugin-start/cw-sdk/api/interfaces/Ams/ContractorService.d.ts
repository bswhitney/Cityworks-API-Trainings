import { Enums, ServiceEnums, PromiseTypes, ServiceTypes, Types as CoreTypes } from '../../../bundles/core';
import AbortablePromise = PromiseTypes.AbortablePromise;

export namespace ContractorServiceTypes { 
    export namespace Requests {
        export interface Add extends ServiceTypes.CoreRequestBase {
            Address?: string;
            AutomobileInsAmount?: number;
            AutomobileInsCertificate?: string;
            AutomobileInsEffectDate?: Date;
            AutomobileInsExpireDate?: Date;
            CellPhone?: string;
            City?: string;
            Comments?: string;
            ContactName?: string;
            ContractorName: string;
            ContractorNumber?: string;
            CustomFieldValues?: {[key: number]: string};
            Description?: string;
            Email?: string;
            EmergencyFactor?: number;
            Fax?: string;
            FederalTaxId?: string;
            FMSNo?: string;
            GeneralLiabilityAmount?: number;
            GeneralLiabilityCertificate?: string;
            GeneralLiabilityEffectDate?: Date;
            GeneralLiabilityExpireDate?: Date;
            LiabilityInsAmount?: number;
            LiabilityInsCertificate?: string;
            LiabilityInsEffectDate?: Date;
            LiabilityInsExpireDate?: Date;
            Licensed?: boolean;
            LicensedWork?: string;
            LicenseExpDate?: Date;
            LocallyBased?: boolean;
            MWBE?: boolean;
            OfficePhone?: string;
            OtherPhone?: string;
            OverheadRate?: number;
            OverheadType?: string;
            OvertimeFactor?: number;
            PIN?: string;
            ProviderType?: string;
            ProvidesEquipment?: boolean;
            ProvidesLabor?: boolean;
            ProvidesMaterial?: boolean;
            Rate?: number;
            RateType?: string;
            RegistrationDate?: Date;
            State?: string;
            Viewable?: boolean;
            WorkersCompAmount?: number;
            WorkersCompCertificate?: string;
            WorkersCompEffectDate?: Date;
            WorkersCompExpireDate?: Date;
            Zip?: string;
        }
        export interface AddKeywords extends ServiceTypes.CoreRequestBase {
            ContractorSids: number[];
            Keywords: string[];
        }
        export interface All extends ServiceTypes.CoreRequestBase {
            ViewableOnly?: boolean;
        }
        export interface ById extends ServiceTypes.CoreRequestBase {
            ContractorSid: number;
        }
        export interface CustomDataFields extends ServiceTypes.CoreRequestBase {
            ContractorSid: number;
            CustFieldIds?: number[];
        }
        export interface Delete extends ServiceTypes.CoreRequestBase {
            ContractorSids?: number[];
        }
        export interface DeleteKeywords extends ServiceTypes.CoreRequestBase {
            All?: boolean;
            ContractorSids: number[];
            Keywords: string[];
        }
        export interface Keywords extends ServiceTypes.CoreRequestBase {
            ContractorSids: number[];
        }
        export interface Search extends ServiceTypes.CoreRequestBase {
            ContractorSids?: number[];
        }
        export interface Update extends ServiceTypes.CoreRequestBase {
            Address?: string;
            AutomobileInsAmount?: number;
            AutomobileInsCertificate?: string;
            AutomobileInsEffectDate?: Date;
            AutomobileInsExpireDate?: Date;
            CellPhone?: string;
            City?: string;
            Comments?: string;
            ContactName?: string;
            ContractorName?: string;
            ContractorNumber?: string;
            ContractorSid: number;
            Description?: string;
            Email?: string;
            EmergencyFactor?: number;
            Fax?: string;
            FederalTaxId?: string;
            FMSNo?: string;
            GeneralLiabilityAmount?: number;
            GeneralLiabilityCertificate?: string;
            GeneralLiabilityEffectDate?: Date;
            GeneralLiabilityExpireDate?: Date;
            LiabilityInsAmount?: number;
            LiabilityInsCertificate?: string;
            LiabilityInsEffectDate?: Date;
            LiabilityInsExpireDate?: Date;
            Licensed?: boolean;
            LicensedWork?: string;
            LicenseExpDate?: Date;
            LocallyBased?: boolean;
            MWBE?: boolean;
            OfficePhone?: string;
            OtherPhone?: string;
            OverheadRate?: number;
            OverheadType?: string;
            OvertimeFactor?: number;
            PIN?: string;
            ProviderType?: string;
            ProvidesEquipment?: boolean;
            ProvidesLabor?: boolean;
            ProvidesMaterial?: boolean;
            Rate?: number;
            RateType?: string;
            RegistrationDate?: Date;
            State?: string;
            Viewable?: boolean;
            WorkersCompAmount?: number;
            WorkersCompCertificate?: string;
            WorkersCompEffectDate?: Date;
            WorkersCompExpireDate?: Date;
            Zip?: string;
        }
    }
    export namespace Responses {
        export interface Add extends ServiceTypes.CoreResponseBase_<CoreTypes.ContractorBase> {}
        export interface AddKeywords extends ServiceTypes.CoreResponseBase_<CoreTypes.ContractorKeywordBase[]> {}
        export interface All extends ServiceTypes.CoreResponseBase_<CoreTypes.ContractorBase[]> {}
        export interface ById extends ServiceTypes.CoreResponseBase_<CoreTypes.ContractorBase> {}
        export interface CustomDataFields extends ServiceTypes.CoreResponseBase_<CoreTypes.CwCustField[]> {}
        export interface Delete extends ServiceTypes.CoreResponseBase_<{[key: number]: boolean}> {}
        export interface DeleteKeywords extends ServiceTypes.CoreResponseBase {}
        export interface Keywords extends ServiceTypes.CoreResponseBase_<CoreTypes.ContractorKeywordBase[]> {}
        export interface Search extends ServiceTypes.CoreResponseBase_<CoreTypes.ContractorBase[]> {}
        export interface Update extends ServiceTypes.CoreResponseBase_<CoreTypes.ContractorBase> {}
    }
    export interface IContractorService {
        Add?: (request: Requests.Add) => AbortablePromise<Responses.Add>;
        AddKeywords?: (request: Requests.AddKeywords) => AbortablePromise<Responses.AddKeywords>;
        All?: (request: Requests.All) => AbortablePromise<Responses.All>;
        ById?: (request: Requests.ById) => AbortablePromise<Responses.ById>;
        CustomDataFields?: (request: Requests.CustomDataFields) => AbortablePromise<Responses.CustomDataFields>;
        Delete?: (request: Requests.Delete) => AbortablePromise<Responses.Delete>;
        DeleteKeywords?: (request: Requests.DeleteKeywords) => AbortablePromise<Responses.DeleteKeywords>;
        Keywords?: (request: Requests.Keywords) => AbortablePromise<Responses.Keywords>;
        Search?: (request: Requests.Search) => AbortablePromise<Responses.Search>;
        Update?: (request: Requests.Update) => AbortablePromise<Responses.Update>;
    }
}
