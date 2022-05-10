import { Enums, ServiceEnums, PromiseTypes, ServiceTypes, Types as CoreTypes } from '../../../bundles/core';
import AbortablePromise = PromiseTypes.AbortablePromise;

export namespace CaseServiceTypes { 
    export namespace Requests {
        export interface Create extends ServiceTypes.CoreRequestBase {
            AcceptedBy?: number;
            CaseName?: string;
            CaseNumber?: string;
            CaseTypeId: number;
            DateAccepted?: Date;
            Location?: string;
            ProjectCode?: string;
            SubTypeId?: number;
            VcsWKID?: number;
            WKID?: number;
            WKT?: string;
            X?: number;
            Y?: number;
            Z?: number;
        }
        export interface CreateChild extends ServiceTypes.CoreRequestBase {
            AcceptedBy?: number;
            BusCaseId: number;
            CaseName?: string;
            CaseNumber?: string;
            CX?: number;
            CY?: number;
            CZ?: number;
            DateAccepted?: Date;
            Location?: string;
            NoOfCases?: number;
            ParentCaObjectId: number;
            ProjectCode?: string;
            VcsWKID?: number;
            WKID?: number;
            WKT?: string;
        }
        export interface CreateFromIntake extends ServiceTypes.CoreRequestBase {
            CaseAddresses?: CoreTypes.CaAddressItem[];
            CaseConditions?: CoreTypes.CaConditionItem[];
            CaseContractors?: CoreTypes.CaContractorItem[];
            CaseDataDetails?: CoreTypes.CaDataDetailItem[];
            CaseDataGroups?: CoreTypes.CaDataGroupItem[];
            CaseDeposits?: CoreTypes.CaDepositItem[];
            CaseFees?: CoreTypes.CaFeesItem[];
            CaseFlags?: CoreTypes.CaFlagsItem[];
            CaseInspectionRequests?: CoreTypes.CaInspectionRequestItem[];
            CaseInstruments?: CoreTypes.CaInstrumentItem[];
            CaseLicenses?: CoreTypes.CaLicenseItem[];
            CaseNotes?: CoreTypes.CaNotesItem[];
            CaseObject: CoreTypes.CaObjectItem;
            CasePayments?: CoreTypes.CaPaymentItem[];
            CasePeoples?: CoreTypes.CaPeopleItem[];
            CasePerAsset?: boolean;
            CaseRelDocs?: CoreTypes.CaRelDocsItem[];
            CaseTasks?: CoreTypes.CaTaskItem[];
            CaseViolations?: CoreTypes.CaViolationsItem[];
        }
        export interface CreateFromWorkOrder extends ServiceTypes.CoreRequestBase {
            CaseTypeId: number;
            SubTypeId?: number;
            WorkOrderId: string;
        }
        export interface GetDefaultItems extends ServiceTypes.CoreRequestBase {
            BusCaseId: number;
        }
    }
    export namespace Responses {
        export interface Create extends ServiceTypes.CoreResponseBase_obsolete_<CoreTypes.CaObjectItem> {}
        export interface CreateChild extends ServiceTypes.CoreResponseBase_obsolete_<CoreTypes.CaObjectItem> {}
        export interface CreateFromIntake extends ServiceTypes.CoreResponseBase_<CoreTypes.CaObjectItem[]> {}
        export interface CreateFromWorkOrder extends ServiceTypes.CoreResponseBase_<CoreTypes.CaObjectItem> {}
        export interface GetDefaultItems extends ServiceTypes.CoreResponseBase_<CoreTypes.CaseData> {}
    }
    export interface ICaseService {
        Create?: (request: Requests.Create) => AbortablePromise<Responses.Create>;
        CreateChild?: (request: Requests.CreateChild) => AbortablePromise<Responses.CreateChild>;
        CreateFromIntake?: (request: Requests.CreateFromIntake) => AbortablePromise<Responses.CreateFromIntake>;
        CreateFromWorkOrder?: (request: Requests.CreateFromWorkOrder) => AbortablePromise<Responses.CreateFromWorkOrder>;
        GetDefaultItems?: (request: Requests.GetDefaultItems) => AbortablePromise<Responses.GetDefaultItems>;
    }
}
