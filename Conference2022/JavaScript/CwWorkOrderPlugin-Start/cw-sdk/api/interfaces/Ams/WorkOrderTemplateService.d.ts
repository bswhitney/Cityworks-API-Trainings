import { Enums, ServiceEnums, PromiseTypes, ServiceTypes, Types as CoreTypes } from '../../../bundles/core';
import AbortablePromise = PromiseTypes.AbortablePromise;

export namespace WorkOrderTemplateServiceTypes { 
    export namespace Requests {
        export interface ByIds extends ServiceTypes.CoreRequestBase {
            IncludeComments?: boolean;
            IncludeInstructions?: boolean;
            MaximumDateModified?: Date;
            MinimumDateModified?: Date;
            WOTemplateIds?: string[];
        }
        export interface ByProblemSids extends ServiceTypes.CoreRequestBase {
            OnlyActiveTemplates?: boolean;
            ProblemSids: number[];
        }
        export interface ByTemplateClassIds extends ServiceTypes.CoreRequestBase {
            TemplateClassIds: string[];
        }
        export interface CustomFieldCategories extends ServiceTypes.CoreRequestBase {
            IsActive?: boolean;
        }
        export interface CustomFields extends ServiceTypes.CoreRequestBase {
            WOTemplateIds: string[];
        }
        export interface Search extends ServiceTypes.CoreRequestBase {
            AcctNum?: string[];
            ApplyToEntity?: string[];
            AutoCreateTask?: boolean;
            Cancel?: boolean;
            CopyCustomFieldVal?: number[];
            CycleFrom?: number[];
            CycleIncludeWeekends?: boolean;
            CycleIntervalNum?: number[];
            CycleIntervalUnit?: number[];
            CycleType?: number[];
            DaysToComplete?: number[];
            DefaultProject?: string[];
            DefaultProjectSid?: number[];
            Description?: string[];
            DomainId?: number[];
            ExpenseType?: number[];
            IncludeComments?: boolean;
            IncludeInstructions?: boolean;
            IsReactive?: boolean;
            MaintScore?: number[];
            MapTemplateName?: string[];
            MaximumCreateDate?: Date;
            MaximumCycleIntervalNum?: number;
            MaximumDateModified?: Date;
            MaximumDefaultProjectSid?: number;
            MaximumEffort?: number;
            MaximumMaintScore?: number;
            MaximumNumDaysBefore?: number;
            MaximumWarrantyDuration?: number;
            MaximumWOMapScale?: number;
            MaximumWoTemplateId?: string;
            MiminumNumDaysBefore?: number;
            MinimumCreateDate?: Date;
            MinimumCycleIntervalNum?: number;
            MinimumDateModified?: Date;
            MinimumDefaultProjectSid?: number;
            MinimumEffort?: number;
            MinimumMaintScore?: number;
            MinimumWarrantyDuration?: number;
            MinimumWOMapScale?: number;
            MinimumWoTemplateId?: string;
            NumDaysBefore?: number[];
            Printer?: string[];
            Priority?: string[];
            RequireAssetOnClose?: boolean;
            Shop?: string[];
            Stage?: number[];
            SubmitToEmployeeSid?: number[];
            SupervisorEmployeeSid?: number[];
            UnitsAccompDesc?: string[];
            UnitsAccompDescLock?: boolean;
            UpdateXY?: boolean;
            WarrantyDuration?: number[];
            WarrantyDurationUnit?: number[];
            WOCategory?: string[];
            WOCustFieldCatId?: number[];
            WOMapScale?: number[];
            WOOutput?: number[];
            WOPrintTmpt?: string[];
            WorkMonth?: string[];
            WoTemplateIds?: string[];
        }
        export interface TemplateInspections extends ServiceTypes.CoreRequestBase {
            WoTemplateIds?: string[];
        }
        export interface TemplateNames extends ServiceTypes.CoreRequestBase {
            AllDomainTemplates?: boolean;
            Category?: string;
            DomainId?: number;
            EntityTypes: string[];
            MaximumDateModified?: Date;
            MinimumDateModified?: Date;
            OnlyCanCreate?: boolean;
            WOTemplateIds?: string[];
        }
    }
    export namespace Responses {
        export interface ByIds extends ServiceTypes.CoreResponseBase_<CoreTypes.WOTemplateBase[]> {}
        export interface ByProblemSids extends ServiceTypes.CoreResponseBase_<CoreTypes.ProblemWOTemplateBase[]> {}
        export interface ByTemplateClassIds extends ServiceTypes.CoreResponseBase_<{[key: string]: CoreTypes.WOTemplateName[]}> {}
        export interface CustomFieldCategories extends ServiceTypes.CoreResponseBase_<CoreTypes.CustFieldCategoryBase[]> {}
        export interface CustomFields extends ServiceTypes.CoreResponseBase_<{[key: string]: CoreTypes.CategoryCustField[]}> {}
        export interface Search extends ServiceTypes.CoreResponseBase_<string[]> {}
        export interface TemplateInspections extends ServiceTypes.CoreResponseBase_<CoreTypes.WOTemplateDefaultTestBase[]> {}
        export interface TemplateNames extends ServiceTypes.CoreResponseBase_<CoreTypes.WOTemplateName[]> {}
    }
    export interface IWorkOrderTemplateService {
        ByIds?: (request: Requests.ByIds) => AbortablePromise<Responses.ByIds>;
        ByProblemSids?: (request: Requests.ByProblemSids) => AbortablePromise<Responses.ByProblemSids>;
        ByTemplateClassIds?: (request: Requests.ByTemplateClassIds) => AbortablePromise<Responses.ByTemplateClassIds>;
        CustomFieldCategories?: (request: Requests.CustomFieldCategories) => AbortablePromise<Responses.CustomFieldCategories>;
        CustomFields?: (request: Requests.CustomFields) => AbortablePromise<Responses.CustomFields>;
        Search?: (request: Requests.Search) => AbortablePromise<Responses.Search>;
        TemplateInspections?: (request: Requests.TemplateInspections) => AbortablePromise<Responses.TemplateInspections>;
        TemplateNames?: (request: Requests.TemplateNames) => AbortablePromise<Responses.TemplateNames>;
    }
}
