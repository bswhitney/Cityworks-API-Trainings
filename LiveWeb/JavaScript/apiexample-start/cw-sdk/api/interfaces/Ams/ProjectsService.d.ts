import { Enums, ServiceEnums, PromiseTypes, ServiceTypes, Types as CoreTypes } from '../../../bundles/core';
import AbortablePromise = PromiseTypes.AbortablePromise;

export namespace ProjectsServiceTypes { 
    export namespace Requests {
        export interface ByContractIds extends ServiceTypes.CoreRequestBase {
            ContractIds: number[];
        }
        export interface ByIds extends ServiceTypes.CoreRequestBase {
            ProjectSids: number[];
        }
        export interface Create extends ServiceTypes.CoreRequestBase {
            ApprovedBySid?: number;
            AssignedToSid?: number;
            Comments?: string;
            DateTimeModified?: Date;
            Description?: string;
            EstimatedBudget?: number;
            NoBudget?: boolean;
            ParentProjectSid?: number;
            ProjectFinishDate?: Date;
            ProjectName?: string;
            ProjectStartDate?: Date;
            QuickView?: boolean;
            Status?: string;
        }
        export interface QuickView extends ServiceTypes.CoreRequestBase {
            DomainIds?: number[];
        }
        export interface Update extends ServiceTypes.CoreRequestBase {
            ApprovedBySid?: number;
            AssignedToSid?: number;
            Comments?: string;
            DateTimeModified?: Date;
            Description?: string;
            EstimatedBudget?: number;
            NoBudget?: boolean;
            ParentProjectSid?: number;
            ProjectFinishDate?: Date;
            ProjectName?: string;
            ProjectSid: number;
            ProjectStartDate?: Date;
            QuickView?: boolean;
            Status?: string;
        }
    }
    export namespace Responses {
        export interface ByContractIds extends ServiceTypes.CoreResponseBase_<{[key: number]: CoreTypes.ProjectBase[]}> {}
        export interface ByIds extends ServiceTypes.CoreResponseBase_<CoreTypes.ProjectBase[]> {}
        export interface Create extends ServiceTypes.CoreResponseBase_<CoreTypes.ProjectBase> {}
        export interface QuickView extends ServiceTypes.CoreResponseBase_<CoreTypes.ProjectNameDescription[]> {}
        export interface Update extends ServiceTypes.CoreResponseBase_<CoreTypes.ProjectBase> {}
    }
    export interface IProjectsService {
        ByContractIds?: (request: Requests.ByContractIds) => AbortablePromise<Responses.ByContractIds>;
        ByIds?: (request: Requests.ByIds) => AbortablePromise<Responses.ByIds>;
        Create?: (request: Requests.Create) => AbortablePromise<Responses.Create>;
        QuickView?: (request: Requests.QuickView) => AbortablePromise<Responses.QuickView>;
        Update?: (request: Requests.Update) => AbortablePromise<Responses.Update>;
    }
}
