import { Enums, ServiceEnums, PromiseTypes, ServiceTypes, Types as CoreTypes } from '../../../bundles/core';
import AbortablePromise = PromiseTypes.AbortablePromise;

export namespace SearchServiceTypes { 
    export namespace Requests {
        export interface AssetCalculationResultSaved extends ServiceTypes.CoreRequestBase {
            ApplyToEntities?: string[];
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
            ApplyToEntities?: string[];
            Keywords?: string[];
        }
        export interface InspectionSaved extends ServiceTypes.CoreRequestBase {
            ApplyToEntities?: string[];
            Keywords?: string[];
        }
        export interface MaterialSaved extends ServiceTypes.CoreRequestBase {
            ApplyToEntities?: string[];
            Keywords?: string[];
        }
        export interface PllSaved extends ServiceTypes.CoreRequestBase {
            ApplyToEntities?: string[];
            Keywords?: string[];
        }
        export interface RecentActivity extends ServiceTypes.CoreRequestBase {
        }
        export interface RequestSaved extends ServiceTypes.CoreRequestBase {
            ApplyToEntities?: string[];
            Keywords?: string[];
        }
        export interface RequisitionSaved extends ServiceTypes.CoreRequestBase {
            ApplyToEntities?: string[];
            Keywords?: string[];
        }
        export interface SavedByType extends ServiceTypes.CoreRequestBase {
            ApplyToEntities?: string[];
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
            ApplyToEntities?: string[];
            Keywords?: string[];
        }
        export interface Types extends ServiceTypes.CoreRequestBase {
        }
        export interface UpdateEurl extends ServiceTypes.CoreRequestBase {
            Enable?: boolean;
            SearchIds: number[];
        }
        export interface WorkActivitySaved extends ServiceTypes.CoreRequestBase {
            ApplyToEntities?: string[];
            Keywords?: string[];
        }
        export interface WorkOrderEntitySaved extends ServiceTypes.CoreRequestBase {
            ApplyToEntities?: string[];
            Keywords?: string[];
        }
        export interface WorkOrderSaved extends ServiceTypes.CoreRequestBase {
            ApplyToEntities?: string[];
            Keywords?: string[];
        }
    }
    export namespace Responses {
        export interface AssetCalculationResultSaved extends ServiceTypes.CoreResponseBase_<CoreTypes.SearchDefinitionName[]> {}
        export interface Definition extends ServiceTypes.CoreResponseBase_<CoreTypes.SearchDefinition> {}
        export interface DefinitionNames extends ServiceTypes.CoreResponseBase_<CoreTypes.SearchDefinitionName[]> {}
        export interface Definitions extends ServiceTypes.CoreResponseBase_<CoreTypes.SearchDefinition[]> {}
        export interface DeleteDefinitions extends ServiceTypes.CoreResponseBase_<{[key: number]: boolean}> {}
        export interface DisplayFields extends ServiceTypes.CoreResponseBase_<CoreTypes.SearchDisplayField[]> {}
        export interface Execute extends ServiceTypes.CoreResponseBase_<{[key: string]: Object}[]> {}
        export interface GISSaved extends ServiceTypes.CoreResponseBase_<CoreTypes.SearchDefinitionName[]> {}
        export interface InspectionSaved extends ServiceTypes.CoreResponseBase_<CoreTypes.SearchDefinitionName[]> {}
        export interface MaterialSaved extends ServiceTypes.CoreResponseBase_<CoreTypes.SearchDefinitionName[]> {}
        export interface PllSaved extends ServiceTypes.CoreResponseBase_<CoreTypes.SearchDefinitionName[]> {}
        export interface RecentActivity extends ServiceTypes.CoreResponseBase_<CoreTypes.RecentActivity[]> {}
        export interface RequestSaved extends ServiceTypes.CoreResponseBase_<CoreTypes.SearchDefinitionName[]> {}
        export interface RequisitionSaved extends ServiceTypes.CoreResponseBase_<CoreTypes.SearchDefinitionName[]> {}
        export interface SavedByType extends ServiceTypes.CoreResponseBase_<CoreTypes.SearchDefinitionName[]> {}
        export interface SaveDefinition extends ServiceTypes.CoreResponseBase_<CoreTypes.SearchDefinitionName> {}
        export interface StoreTransactionSaved extends ServiceTypes.CoreResponseBase_<CoreTypes.SearchDefinitionName[]> {}
        export interface Types extends ServiceTypes.CoreResponseBase_<CoreTypes.SearchTypeInfo[]> {}
        export interface UpdateEurl extends ServiceTypes.CoreResponseBase_<{[key: number]: boolean}> {}
        export interface WorkActivitySaved extends ServiceTypes.CoreResponseBase_<CoreTypes.SearchDefinitionName[]> {}
        export interface WorkOrderEntitySaved extends ServiceTypes.CoreResponseBase_<CoreTypes.SearchDefinitionName[]> {}
        export interface WorkOrderSaved extends ServiceTypes.CoreResponseBase_<CoreTypes.SearchDefinitionName[]> {}
    }
    export interface ISearchService {
        AssetCalculationResultSaved?: (request: Requests.AssetCalculationResultSaved) => AbortablePromise<Responses.AssetCalculationResultSaved>;
        Definition?: (request: Requests.Definition) => AbortablePromise<Responses.Definition>;
        DefinitionNames?: (request: Requests.DefinitionNames) => AbortablePromise<Responses.DefinitionNames>;
        Definitions?: (request: Requests.Definitions) => AbortablePromise<Responses.Definitions>;
        DeleteDefinitions?: (request: Requests.DeleteDefinitions) => AbortablePromise<Responses.DeleteDefinitions>;
        DisplayFields?: (request: Requests.DisplayFields) => AbortablePromise<Responses.DisplayFields>;
        Execute?: (request: Requests.Execute) => AbortablePromise<Responses.Execute>;
        GISSaved?: (request: Requests.GISSaved) => AbortablePromise<Responses.GISSaved>;
        InspectionSaved?: (request: Requests.InspectionSaved) => AbortablePromise<Responses.InspectionSaved>;
        MaterialSaved?: (request: Requests.MaterialSaved) => AbortablePromise<Responses.MaterialSaved>;
        PllSaved?: (request: Requests.PllSaved) => AbortablePromise<Responses.PllSaved>;
        RecentActivity?: (request: Requests.RecentActivity) => AbortablePromise<Responses.RecentActivity>;
        RequestSaved?: (request: Requests.RequestSaved) => AbortablePromise<Responses.RequestSaved>;
        RequisitionSaved?: (request: Requests.RequisitionSaved) => AbortablePromise<Responses.RequisitionSaved>;
        SavedByType?: (request: Requests.SavedByType) => AbortablePromise<Responses.SavedByType>;
        SaveDefinition?: (request: Requests.SaveDefinition) => AbortablePromise<Responses.SaveDefinition>;
        StoreTransactionSaved?: (request: Requests.StoreTransactionSaved) => AbortablePromise<Responses.StoreTransactionSaved>;
        Types?: (request: Requests.Types) => AbortablePromise<Responses.Types>;
        UpdateEurl?: (request: Requests.UpdateEurl) => AbortablePromise<Responses.UpdateEurl>;
        WorkActivitySaved?: (request: Requests.WorkActivitySaved) => AbortablePromise<Responses.WorkActivitySaved>;
        WorkOrderEntitySaved?: (request: Requests.WorkOrderEntitySaved) => AbortablePromise<Responses.WorkOrderEntitySaved>;
        WorkOrderSaved?: (request: Requests.WorkOrderSaved) => AbortablePromise<Responses.WorkOrderSaved>;
    }
}
