import { Enums, ServiceEnums, PromiseTypes, ServiceTypes, Types as CoreTypes } from '../../../bundles/core';
import AbortablePromise = PromiseTypes.AbortablePromise;

export namespace ProjectsServiceTypes { 
    export namespace Requests {
        export interface AddEntities extends ServiceTypes.CoreRequestBase {
            EntityType: string;
            EntityUids: string[];
            ProjectSid: number;
            UpdateXY?: boolean;
        }
        export interface AddToContractId extends ServiceTypes.CoreRequestBase {
            ContractId: number;
            ProjectSids: number[];
        }
        export interface All extends ServiceTypes.CoreRequestBase {
            DomainId?: number;
            IncludeInactive?: boolean;
        }
        export interface AuditLog extends ServiceTypes.CoreRequestBase {
            ProjectSid: number;
        }
        export interface ByContractIds extends ServiceTypes.CoreRequestBase {
            ContractIds: number[];
        }
        export interface ByIds extends ServiceTypes.CoreRequestBase {
            ProjectSids: number[];
        }
        export interface Categories extends ServiceTypes.CoreRequestBase {
        }
        export interface Create extends ServiceTypes.CoreRequestBase {
            ApprovedBySid?: number;
            AssignedToSid?: number;
            CancelledBySid?: number;
            Category?: string;
            ClosedBySid?: number;
            Comments?: string;
            Date1?: Date;
            Date2?: Date;
            Date3?: Date;
            Date4?: Date;
            Date5?: Date;
            DateCancelled?: Date;
            DateClosed?: Date;
            DateTimeModified?: Date;
            Description?: string;
            EstimatedBudget?: number;
            FiscalYear?: number;
            NoBudget?: boolean;
            Num1?: number;
            Num2?: number;
            Num3?: number;
            Num4?: number;
            Num5?: number;
            ParentProjectSid?: number;
            ProjectFinishDate?: Date;
            ProjectName: string;
            ProjectStartDate?: Date;
            QuickView?: boolean;
            Status?: string;
            Text1?: string;
            Text10?: string;
            Text2?: string;
            Text3?: string;
            Text4?: string;
            Text5?: string;
            Text6?: string;
            Text7?: string;
            Text8?: string;
            Text9?: string;
            X?: number;
            Y?: number;
            Z?: number;
        }
        export interface CreateSearchDefinition extends ServiceTypes.CoreRequestBase {
            ApprovedBy?: string[];
            ApprovedBySid?: number[];
            ApprovedBySidIsInList?: boolean;
            AssignedTo?: string[];
            AssignedToSid?: number[];
            AssignedToSidIsInList?: boolean;
            Comments?: string[];
            DateTimeModifiedBegin?: Date;
            DateTimeModifiedEnd?: Date;
            DateTimeModifiedIsNull?: boolean;
            DateTimeModifiedNotInRange?: boolean;
            DateTimeModifiedRangeIncludeCurrent?: boolean;
            DateTimeModifiedRangeLast?: number;
            DateTimeModifiedRangeNext?: number;
            DateTimeModifiedRangeUnits?: number;
            Description?: string[];
            DomainId?: number[];
            DomainIdIsInList?: boolean;
            EstimatedBudgetIncludeNulls?: boolean;
            EstimatedBudgetIsMaxValueExclusive?: boolean;
            EstimatedBudgetIsMinValueExclusive?: boolean;
            EstimatedBudgetMaxValue?: number;
            EstimatedBudgetMinValue?: number;
            EstimatedBudgetRangeType?: number;
            EstimatedBudgetValues?: number[];
            InitiatedBy?: string[];
            InitiatedBySid?: number[];
            InitiatedBySidIsInList?: boolean;
            MaxResults?: number;
            NoBudget?: boolean;
            ParentProjectSid?: number[];
            ParentProjectSidIsInList?: boolean;
            ProjectFinishDateBegin?: Date;
            ProjectFinishDateEnd?: Date;
            ProjectFinishDateIsNull?: boolean;
            ProjectFinishDateNotInRange?: boolean;
            ProjectFinishDateRangeIncludeCurrent?: boolean;
            ProjectFinishDateRangeLast?: number;
            ProjectFinishDateRangeNext?: number;
            ProjectFinishDateRangeUnits?: number;
            ProjectName?: string[];
            ProjectSid?: number[];
            ProjectSidIsInList?: boolean;
            ProjectStartDateBegin?: Date;
            ProjectStartDateEnd?: Date;
            ProjectStartDateIsNull?: boolean;
            ProjectStartDateNotInRange?: boolean;
            ProjectStartDateRangeIncludeCurrent?: boolean;
            ProjectStartDateRangeLast?: number;
            ProjectStartDateRangeNext?: number;
            ProjectStartDateRangeUnits?: number;
            QuickView?: boolean;
            SaveDefinition?: boolean;
            SearchName?: string;
            SharedWithin?: number;
            Status?: string[];
        }
        export interface DeleteFromContractId extends ServiceTypes.CoreRequestBase {
            ContractId: number;
            ProjectSids: number[];
        }
        export interface Entities extends ServiceTypes.CoreRequestBase {
            ProjectSids: number[];
        }
        export interface Move extends ServiceTypes.CoreRequestBase {
            ProjectSid: number;
            VcsWKID?: number;
            WKID?: number;
            WKT?: string;
            X: number;
            Y: number;
            Z?: number;
        }
        export interface QuickView extends ServiceTypes.CoreRequestBase {
            DomainIds?: number[];
            IncludeInactive?: boolean;
        }
        export interface RemoveEntities extends ServiceTypes.CoreRequestBase {
            Ids: number[];
        }
        export interface Search extends ServiceTypes.CoreRequestBase {
            ApprovedBy?: string[];
            ApprovedBySid?: number[];
            ApprovedBySidIsInList?: boolean;
            AssignedTo?: string[];
            AssignedToSid?: number[];
            AssignedToSidIsInList?: boolean;
            Comments?: string[];
            DateTimeModifiedBegin?: Date;
            DateTimeModifiedEnd?: Date;
            DateTimeModifiedIsNull?: boolean;
            DateTimeModifiedNotInRange?: boolean;
            DateTimeModifiedRangeIncludeCurrent?: boolean;
            DateTimeModifiedRangeLast?: number;
            DateTimeModifiedRangeNext?: number;
            DateTimeModifiedRangeUnits?: number;
            Description?: string[];
            DomainId?: number[];
            DomainIdIsInList?: boolean;
            EstimatedBudgetIncludeNulls?: boolean;
            EstimatedBudgetIsMaxValueExclusive?: boolean;
            EstimatedBudgetIsMinValueExclusive?: boolean;
            EstimatedBudgetMaxValue?: number;
            EstimatedBudgetMinValue?: number;
            EstimatedBudgetRangeType?: number;
            EstimatedBudgetValues?: number[];
            InitiatedBy?: string[];
            InitiatedBySid?: number[];
            InitiatedBySidIsInList?: boolean;
            MaxResults?: number;
            NoBudget?: boolean;
            ParentProjectSid?: number[];
            ParentProjectSidIsInList?: boolean;
            ProjectFinishDateBegin?: Date;
            ProjectFinishDateEnd?: Date;
            ProjectFinishDateIsNull?: boolean;
            ProjectFinishDateNotInRange?: boolean;
            ProjectFinishDateRangeIncludeCurrent?: boolean;
            ProjectFinishDateRangeLast?: number;
            ProjectFinishDateRangeNext?: number;
            ProjectFinishDateRangeUnits?: number;
            ProjectName?: string[];
            ProjectSid?: number[];
            ProjectSidIsInList?: boolean;
            ProjectStartDateBegin?: Date;
            ProjectStartDateEnd?: Date;
            ProjectStartDateIsNull?: boolean;
            ProjectStartDateNotInRange?: boolean;
            ProjectStartDateRangeIncludeCurrent?: boolean;
            ProjectStartDateRangeLast?: number;
            ProjectStartDateRangeNext?: number;
            ProjectStartDateRangeUnits?: number;
            QuickView?: boolean;
            Status?: string[];
        }
        export interface Statuses extends ServiceTypes.CoreRequestBase {
        }
        export interface Update extends ServiceTypes.CoreRequestBase {
            ApprovedBySid?: number;
            AssignedToSid?: number;
            CancelledBySid?: number;
            Category?: string;
            ClosedBySid?: number;
            Comments?: string;
            Date1?: Date;
            Date2?: Date;
            Date3?: Date;
            Date4?: Date;
            Date5?: Date;
            DateCancelled?: Date;
            DateClosed?: Date;
            DateTimeModified?: Date;
            Description?: string;
            EstimatedBudget?: number;
            FiscalYear?: number;
            NoBudget?: boolean;
            Num1?: number;
            Num2?: number;
            Num3?: number;
            Num4?: number;
            Num5?: number;
            ParentProjectSid?: number;
            ProjectFinishDate?: Date;
            ProjectName?: string;
            ProjectSid: number;
            ProjectStartDate?: Date;
            QuickView?: boolean;
            Status?: string;
            Text1?: string;
            Text10?: string;
            Text2?: string;
            Text3?: string;
            Text4?: string;
            Text5?: string;
            Text6?: string;
            Text7?: string;
            Text8?: string;
            Text9?: string;
        }
        export interface UseOpxPermissions extends ServiceTypes.CoreRequestBase {
        }
    }
    export namespace Responses {
        export interface AddEntities extends ServiceTypes.CoreResponseBase_<CoreTypes.ProjectEntity[]> {}
        export interface AddToContractId extends ServiceTypes.CoreResponseBase_<number[]> {}
        export interface All extends ServiceTypes.CoreResponseBase_<CoreTypes.ProjectBase[]> {}
        export interface AuditLog extends ServiceTypes.CoreResponseBase_<CoreTypes.CWMetaData[]> {}
        export interface ByContractIds extends ServiceTypes.CoreResponseBase_<{[key: number]: CoreTypes.ProjectBase[]}> {}
        export interface ByIds extends ServiceTypes.CoreResponseBase_<CoreTypes.ProjectBase[]> {}
        export interface Categories extends ServiceTypes.CoreResponseBase_<CoreTypes.CodeDesc[]> {}
        export interface Create extends ServiceTypes.CoreResponseBase_<CoreTypes.ProjectBase> {}
        export interface CreateSearchDefinition extends ServiceTypes.CoreResponseBase_<CoreTypes.SearchDefinition> {}
        export interface DeleteFromContractId extends ServiceTypes.CoreResponseBase_<number[]> {}
        export interface Entities extends ServiceTypes.CoreResponseBase_<CoreTypes.ProjectEntity[]> {}
        export interface Move extends ServiceTypes.CoreResponseBase_<CoreTypes.GISPoint> {}
        export interface QuickView extends ServiceTypes.CoreResponseBase_<CoreTypes.ProjectNameDescription[]> {}
        export interface RemoveEntities extends ServiceTypes.CoreResponseBase_<{[key: number]: boolean}> {}
        export interface Search extends ServiceTypes.CoreResponseBase_<number[]> {}
        export interface Statuses extends ServiceTypes.CoreResponseBase_<CoreTypes.CodeDesc[]> {}
        export interface Update extends ServiceTypes.CoreResponseBase_<CoreTypes.ProjectBase> {}
        export interface UseOpxPermissions extends ServiceTypes.CoreResponseBase_<boolean> {}
    }
    export interface IProjectsService {
        AddEntities?: (request: Requests.AddEntities) => AbortablePromise<Responses.AddEntities>;
        AddToContractId?: (request: Requests.AddToContractId) => AbortablePromise<Responses.AddToContractId>;
        All?: (request: Requests.All) => AbortablePromise<Responses.All>;
        AuditLog?: (request: Requests.AuditLog) => AbortablePromise<Responses.AuditLog>;
        ByContractIds?: (request: Requests.ByContractIds) => AbortablePromise<Responses.ByContractIds>;
        ByIds?: (request: Requests.ByIds) => AbortablePromise<Responses.ByIds>;
        Categories?: (request: Requests.Categories) => AbortablePromise<Responses.Categories>;
        Create?: (request: Requests.Create) => AbortablePromise<Responses.Create>;
        CreateSearchDefinition?: (request: Requests.CreateSearchDefinition) => AbortablePromise<Responses.CreateSearchDefinition>;
        DeleteFromContractId?: (request: Requests.DeleteFromContractId) => AbortablePromise<Responses.DeleteFromContractId>;
        Entities?: (request: Requests.Entities) => AbortablePromise<Responses.Entities>;
        Move?: (request: Requests.Move) => AbortablePromise<Responses.Move>;
        QuickView?: (request: Requests.QuickView) => AbortablePromise<Responses.QuickView>;
        RemoveEntities?: (request: Requests.RemoveEntities) => AbortablePromise<Responses.RemoveEntities>;
        Search?: (request: Requests.Search) => AbortablePromise<Responses.Search>;
        Statuses?: (request: Requests.Statuses) => AbortablePromise<Responses.Statuses>;
        Update?: (request: Requests.Update) => AbortablePromise<Responses.Update>;
        UseOpxPermissions?: (request: Requests.UseOpxPermissions) => AbortablePromise<Responses.UseOpxPermissions>;
    }
}
