import { Enums, ServiceEnums, PromiseTypes, ServiceTypes, Types as CoreTypes } from '../../../bundles/core';
import AbortablePromise = PromiseTypes.AbortablePromise;

export namespace SearchServiceTypes { 
    export namespace Requests {
        export interface AssetCalculationResultSaved extends ServiceTypes.CoreRequestBase {
            ApplyToEntity?: string;
            Keywords?: string[];
        }
        export interface Definition extends ServiceTypes.CoreRequestBase {
            EmployeeSid?: number;
            SearchId: number;
        }
        export interface DefinitionNames extends ServiceTypes.CoreRequestBase {
            SearchIds: number[];
        }
        export interface Definitions extends ServiceTypes.CoreRequestBase {
            EmployeeSid?: number;
            SearchIds: number[];
        }
        export interface DeleteDefinitions extends ServiceTypes.CoreRequestBase {
            SearchIds: number[];
        }
        export interface DisplayFields extends ServiceTypes.CoreRequestBase {
            SearchType: number;
        }
        export interface Execute extends ServiceTypes.CoreRequestBase {
            EmployeeSid?: number;
            ExcludeEmptyXY?: boolean;
            Extent?: CoreTypes.GISExtent;
            Frequency?: boolean;
            IdsOnly?: boolean;
            IncludeSearchOrder?: boolean;
            MaxResults?: number;
            ResultFields?: string[];
            SearchId: number;
            TotalOnly?: boolean;
        }
        export interface GISSaved extends ServiceTypes.CoreRequestBase {
            Keywords?: string[];
        }
        export interface InspectionSaved extends ServiceTypes.CoreRequestBase {
            Keywords?: string[];
        }
        export interface MaterialSaved extends ServiceTypes.CoreRequestBase {
            Keywords?: string[];
        }
        export interface PllSaved extends ServiceTypes.CoreRequestBase {
            Keywords?: string[];
        }
        export interface RecentActivity extends ServiceTypes.CoreRequestBase {
        }
        export interface RequestSaved extends ServiceTypes.CoreRequestBase {
            Keywords?: string[];
        }
        export interface RequisitionSaved extends ServiceTypes.CoreRequestBase {
            Keywords?: string[];
        }
        export interface SavedByType extends ServiceTypes.CoreRequestBase {
            DomainId?: number;
            EmployeeSid?: number;
            Keywords?: string[];
            SearchType?: number;
        }
        export interface SaveDefinition extends ServiceTypes.CoreRequestBase {
            ApplyToEntity?: string;
            CalculationId?: number;
            Description?: string;
            EmployeeSid?: number;
            EnableEurl?: boolean;
            Keywords?: string[];
            SearchCustomFields?: CoreTypes.SearchCustomField[];
            SearchDateFields?: CoreTypes.SearchDateField[];
            SearchFields?: CoreTypes.SearchField[];
            SearchFor: number;
            SearchGroupByFields?: CoreTypes.SearchResultField[];
            SearchId?: number;
            SearchName?: string;
            SearchNumericFields?: CoreTypes.SearchNumericField[];
            SearchPolygonFields?: CoreTypes.SearchPolygonField[];
            SearchQAFields?: CoreTypes.SearchQAField[];
            SearchResultFields?: CoreTypes.SearchResultField[];
            SharedWithin?: number;
            StartDayOfWeek?: number;
        }
        export interface StoreTransactionSaved extends ServiceTypes.CoreRequestBase {
            Keywords?: string[];
        }
        export interface Types extends ServiceTypes.CoreRequestBase {
        }
        export interface UpdateEurl extends ServiceTypes.CoreRequestBase {
            Enable?: boolean;
            SearchIds: number[];
        }
        export interface WorkActivitySaved extends ServiceTypes.CoreRequestBase {
            Keywords?: string[];
        }
        export interface WorkOrderEntitySaved extends ServiceTypes.CoreRequestBase {
            Keywords?: string[];
        }
        export interface WorkOrderSaved extends ServiceTypes.CoreRequestBase {
            Keywords?: string[];
        }
    }
    export namespace Responses {
        export interface Saved extends ServiceTypes.CoreResponseBase_<CoreTypes.SearchDefinitionName[]> {}
        export interface Definition extends ServiceTypes.CoreResponseBase_<CoreTypes.SearchDefinition> {}
        export interface Definitions extends ServiceTypes.CoreResponseBase_<CoreTypes.SearchDefinition[]> {}
        export interface DeleteDefinitions extends ServiceTypes.CoreResponseBase_<{[key: number]: boolean}> {}
        export interface DisplayFields extends ServiceTypes.CoreResponseBase_<CoreTypes.SearchDisplayField[]> {}
        export interface Execute extends ServiceTypes.CoreResponseBase_<{[key: string]: Object}[]> {}
        export interface RecentActivity extends ServiceTypes.CoreResponseBase_<CoreTypes.RecentActivity[]> {}
        export interface SaveDefinition extends ServiceTypes.CoreResponseBase_<CoreTypes.SearchDefinitionName> {}
        export interface Types extends ServiceTypes.CoreResponseBase_<CoreTypes.SearchTypeInfo[]> {}
        export interface UpdateEurl extends ServiceTypes.CoreResponseBase_<{[key: number]: boolean}> {}
    }
    export interface ISearchService {
        AssetCalculationResultSaved?: (request: Requests.AssetCalculationResultSaved) => AbortablePromise<Responses.Saved>;
        Definition?: (request: Requests.Definition) => AbortablePromise<Responses.Definition>;
        DefinitionNames?: (request: Requests.DefinitionNames) => AbortablePromise<Responses.Saved>;
        Definitions?: (request: Requests.Definitions) => AbortablePromise<Responses.Definitions>;
        DeleteDefinitions?: (request: Requests.DeleteDefinitions) => AbortablePromise<Responses.DeleteDefinitions>;
        DisplayFields?: (request: Requests.DisplayFields) => AbortablePromise<Responses.DisplayFields>;
        Execute?: (request: Requests.Execute) => AbortablePromise<Responses.Execute>;
        GISSaved?: (request: Requests.GISSaved) => AbortablePromise<Responses.Saved>;
        InspectionSaved?: (request: Requests.InspectionSaved) => AbortablePromise<Responses.Saved>;
        MaterialSaved?: (request: Requests.MaterialSaved) => AbortablePromise<Responses.Saved>;
        PllSaved?: (request: Requests.PllSaved) => AbortablePromise<Responses.Saved>;
        RecentActivity?: (request: Requests.RecentActivity) => AbortablePromise<Responses.RecentActivity>;
        RequestSaved?: (request: Requests.RequestSaved) => AbortablePromise<Responses.Saved>;
        RequisitionSaved?: (request: Requests.RequisitionSaved) => AbortablePromise<Responses.Saved>;
        SavedByType?: (request: Requests.SavedByType) => AbortablePromise<Responses.Saved>;
        SaveDefinition?: (request: Requests.SaveDefinition) => AbortablePromise<Responses.SaveDefinition>;
        StoreTransactionSaved?: (request: Requests.StoreTransactionSaved) => AbortablePromise<Responses.Saved>;
        Types?: (request: Requests.Types) => AbortablePromise<Responses.Types>;
        UpdateEurl?: (request: Requests.UpdateEurl) => AbortablePromise<Responses.UpdateEurl>;
        WorkActivitySaved?: (request: Requests.WorkActivitySaved) => AbortablePromise<Responses.Saved>;
        WorkOrderEntitySaved?: (request: Requests.WorkOrderEntitySaved) => AbortablePromise<Responses.Saved>;
        WorkOrderSaved?: (request: Requests.WorkOrderSaved) => AbortablePromise<Responses.Saved>;
    }
}
