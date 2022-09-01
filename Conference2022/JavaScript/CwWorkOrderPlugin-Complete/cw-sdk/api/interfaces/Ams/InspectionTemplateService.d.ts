import { Enums, ServiceEnums, PromiseTypes, ServiceTypes, Types as CoreTypes } from '../../../bundles/core';
import AbortablePromise = PromiseTypes.AbortablePromise;

export namespace InspectionTemplateServiceTypes { 
    export namespace Requests {
        export interface ByIds extends ServiceTypes.CoreRequestBase {
            InspTemplateIds: number[];
            MaximumDateModified?: Date;
            MinimumDateModified?: Date;
        }
        export interface CreateSearchDefinition extends ServiceTypes.CoreRequestBase {
            CycleFrom?: number[];
            CycleIncludeWeekends?: boolean;
            CycleIntervalNumIncludeNulls?: boolean;
            CycleIntervalNumIsMaxValueExclusive?: boolean;
            CycleIntervalNumIsMinValueExclusive?: boolean;
            CycleIntervalNumMaxValue?: number;
            CycleIntervalNumMinValue?: number;
            CycleIntervalNumRangeType?: number;
            CycleIntervalNumValue?: number;
            CycleIntervalNumValues?: number[];
            CycleIntervalUnit?: number[];
            CycleType?: number[];
            DateModifiedBegin?: Date;
            DateModifiedEnd?: Date;
            DateModifiedIsNull?: boolean;
            DateModifiedNotInRange?: boolean;
            DateModifiedRangeIncludeCurrent?: boolean;
            DateModifiedRangeLast?: number;
            DateModifiedRangeNext?: number;
            DateModifiedRangeUnits?: number;
            Description?: string[];
            DurationIncludeNulls?: boolean;
            DurationIsMaxValueExclusive?: boolean;
            DurationIsMinValueExclusive?: boolean;
            DurationMaxValue?: number;
            DurationMinValue?: number;
            DurationRangeType?: number;
            DurationUnit?: number[];
            DurationValue?: number;
            DurationValues?: number[];
            EffortIncludeNulls?: boolean;
            EffortIsMaxValueExclusive?: boolean;
            EffortIsMinValueExclusive?: boolean;
            EffortMaxValue?: number;
            EffortMinValue?: number;
            EffortRangeType?: number;
            EffortValue?: number;
            EffortValues?: number[];
            EntityType?: string[];
            InspTemplateId?: number[];
            InspTemplateIdIsInList?: boolean;
            InspTemplateName?: string[];
            IsActive?: boolean;
            MaxResults?: number;
            PrintTemplate?: string[];
            Priority?: string[];
            QAModel?: number[];
            RequireAssetOnClose?: boolean;
            SaveDefinition?: boolean;
            SearchName?: string;
            SharedWithin?: number;
            SubmitToEmployeeSid?: number[];
            SubmitToEmployeeSidIsInList?: boolean;
            WorkMonth?: string[];
        }
        export interface EntityTypes extends ServiceTypes.CoreRequestBase {
            InspTemplateIds?: number[];
        }
        export interface QA extends ServiceTypes.CoreRequestBase {
            InspTemplateIds: number[];
        }
        export interface QuestionConditions extends ServiceTypes.CoreRequestBase {
            InspTemplateIds: number[];
        }
        export interface Search extends ServiceTypes.CoreRequestBase {
            CycleFrom?: number[];
            CycleIncludeWeekends?: boolean;
            CycleIntervalNumIncludeNulls?: boolean;
            CycleIntervalNumIsMaxValueExclusive?: boolean;
            CycleIntervalNumIsMinValueExclusive?: boolean;
            CycleIntervalNumMaxValue?: number;
            CycleIntervalNumMinValue?: number;
            CycleIntervalNumRangeType?: number;
            CycleIntervalNumValue?: number;
            CycleIntervalNumValues?: number[];
            CycleIntervalUnit?: number[];
            CycleType?: number[];
            DateModifiedBegin?: Date;
            DateModifiedEnd?: Date;
            DateModifiedIsNull?: boolean;
            DateModifiedNotInRange?: boolean;
            DateModifiedRangeIncludeCurrent?: boolean;
            DateModifiedRangeLast?: number;
            DateModifiedRangeNext?: number;
            DateModifiedRangeUnits?: number;
            Description?: string[];
            DurationIncludeNulls?: boolean;
            DurationIsMaxValueExclusive?: boolean;
            DurationIsMinValueExclusive?: boolean;
            DurationMaxValue?: number;
            DurationMinValue?: number;
            DurationRangeType?: number;
            DurationUnit?: number[];
            DurationValue?: number;
            DurationValues?: number[];
            EffortIncludeNulls?: boolean;
            EffortIsMaxValueExclusive?: boolean;
            EffortIsMinValueExclusive?: boolean;
            EffortMaxValue?: number;
            EffortMinValue?: number;
            EffortRangeType?: number;
            EffortValue?: number;
            EffortValues?: number[];
            EntityType?: string[];
            InspTemplateId?: number[];
            InspTemplateIdIsInList?: boolean;
            InspTemplateName?: string[];
            IsActive?: boolean;
            MaxResults?: number;
            PrintTemplate?: string[];
            Priority?: string[];
            QAModel?: number[];
            RequireAssetOnClose?: boolean;
            SubmitToEmployeeSid?: number[];
            SubmitToEmployeeSidIsInList?: boolean;
            WorkMonth?: string[];
        }
        export interface Templates extends ServiceTypes.CoreRequestBase {
            CanCreate?: boolean;
            EntityTypes?: string[];
            IncludeInactive?: boolean;
            MaximumDateModified?: Date;
            MinimumDateModified?: Date;
            TemplateIds?: number[];
        }
        export interface TestTypes extends ServiceTypes.CoreRequestBase {
            EntityTypes?: string[];
        }
    }
    export namespace Responses {
        export interface ByIds extends ServiceTypes.CoreResponseBase_<CoreTypes.InspTemplateBase[]> {}
        export interface CreateSearchDefinition extends ServiceTypes.CoreResponseBase_<CoreTypes.SearchDefinition> {}
        export interface EntityTypes extends ServiceTypes.CoreResponseBase_<CoreTypes.InspTempEntityBase[]> {}
        export interface QA extends ServiceTypes.CoreResponseBase_<CoreTypes.InspTemplateQA[]> {}
        export interface QuestionConditions extends ServiceTypes.CoreResponseBase_<{[key: number]: CoreTypes.ConditionalQuestionConfig[]}> {}
        export interface Search extends ServiceTypes.CoreResponseBase_<number[]> {}
        export interface Templates extends ServiceTypes.CoreResponseBase_<CoreTypes.InspTemplateBase[]> {}
        export interface TestTypes extends ServiceTypes.CoreResponseBase_<{[key: string]: CoreTypes.TestType[]}> {}
    }
    export interface IInspectionTemplateService {
        ByIds?: (request: Requests.ByIds) => AbortablePromise<Responses.ByIds>;
        CreateSearchDefinition?: (request: Requests.CreateSearchDefinition) => AbortablePromise<Responses.CreateSearchDefinition>;
        EntityTypes?: (request: Requests.EntityTypes) => AbortablePromise<Responses.EntityTypes>;
        QA?: (request: Requests.QA) => AbortablePromise<Responses.QA>;
        QuestionConditions?: (request: Requests.QuestionConditions) => AbortablePromise<Responses.QuestionConditions>;
        Search?: (request: Requests.Search) => AbortablePromise<Responses.Search>;
        Templates?: (request: Requests.Templates) => AbortablePromise<Responses.Templates>;
        TestTypes?: (request: Requests.TestTypes) => AbortablePromise<Responses.TestTypes>;
    }
}
