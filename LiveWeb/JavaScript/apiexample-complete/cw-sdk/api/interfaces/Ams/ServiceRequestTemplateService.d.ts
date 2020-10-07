import { Enums, ServiceEnums, PromiseTypes, ServiceTypes, Types as CoreTypes } from '../../../bundles/core';
import AbortablePromise = PromiseTypes.AbortablePromise;

export namespace ServiceRequestTemplateServiceTypes { 
    export namespace Requests {
        export interface ByIds extends ServiceTypes.CoreRequestBase {
            MaximumDateModified?: Date;
            MinimumDateModified?: Date;
            ProblemSids: number[];
        }
        export interface CreateSearchDefinition extends ServiceTypes.CoreRequestBase {
            AutoClose?: boolean;
            Cancel?: boolean;
            DateModifiedBegin?: Date;
            DateModifiedEnd?: Date;
            DateModifiedIsNull?: boolean;
            DateModifiedNotInRange?: boolean;
            DateModifiedRangeIncludeCurrent?: boolean;
            DateModifiedRangeLast?: number;
            DateModifiedRangeNext?: number;
            DateModifiedRangeUnits?: number;
            DefaultProject?: string[];
            DefaultProjectSid?: number[];
            DefaultProjectSidIsInList?: boolean;
            Description?: string[];
            DispatchTo?: number[];
            DispatchToIsInList?: boolean;
            DomainId?: number[];
            DomainIdIsInList?: boolean;
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
            ForPublicSite?: boolean;
            MaxResults?: number;
            OtherSysCodeCWId?: number[];
            OtherSysCodeCWIdIsInList?: boolean;
            Printer?: string[];
            Priority?: string[];
            ProbCategory?: string[];
            ProblemCode?: string[];
            ProblemSid?: number[];
            ProblemSidIsInList?: boolean;
            QAModel?: number[];
            ReqCustFieldCatId?: number[];
            ReqCustFieldCatIdIsInList?: boolean;
            SaveDefinition?: boolean;
            SearchName?: string;
            SharedWithin?: number;
            SRPrintTmpt?: string[];
            SubmitTo?: number[];
            SubmitToIsInList?: boolean;
        }
        export interface QA extends ServiceTypes.CoreRequestBase {
            ProblemSids: number[];
        }
        export interface Search extends ServiceTypes.CoreRequestBase {
            AutoClose?: boolean;
            Cancel?: boolean;
            DateModifiedBegin?: Date;
            DateModifiedEnd?: Date;
            DateModifiedIsNull?: boolean;
            DateModifiedNotInRange?: boolean;
            DateModifiedRangeIncludeCurrent?: boolean;
            DateModifiedRangeLast?: number;
            DateModifiedRangeNext?: number;
            DateModifiedRangeUnits?: number;
            DefaultProject?: string[];
            DefaultProjectSid?: number[];
            DefaultProjectSidIsInList?: boolean;
            Description?: string[];
            DispatchTo?: number[];
            DispatchToIsInList?: boolean;
            DomainId?: number[];
            DomainIdIsInList?: boolean;
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
            ForPublicSite?: boolean;
            MaxResults?: number;
            OtherSysCodeCWId?: number[];
            OtherSysCodeCWIdIsInList?: boolean;
            Printer?: string[];
            Priority?: string[];
            ProbCategory?: string[];
            ProblemCode?: string[];
            ProblemSid?: number[];
            ProblemSidIsInList?: boolean;
            QAModel?: number[];
            ReqCustFieldCatId?: number[];
            ReqCustFieldCatIdIsInList?: boolean;
            SRPrintTmpt?: string[];
            SubmitTo?: number[];
            SubmitToIsInList?: boolean;
        }
        export interface Templates extends ServiceTypes.CoreRequestBase {
            CanCreate?: boolean;
            IncludeInactive?: boolean;
            MaximumDateModified?: Date;
            MinimumDateModified?: Date;
            TemplateIds?: number[];
        }
    }
    export namespace Responses {
        export interface ByIds extends ServiceTypes.CoreResponseBase_<CoreTypes.ProblemLeafBase[]> {}
        export interface CreateSearchDefinition extends ServiceTypes.CoreResponseBase_<CoreTypes.SearchDefinition> {}
        export interface QA extends ServiceTypes.CoreResponseBase_<CoreTypes.ProblemQA[]> {}
        export interface Search extends ServiceTypes.CoreResponseBase_<number[]> {}
        export interface Templates extends ServiceTypes.CoreResponseBase_<CoreTypes.ProblemLeafBase[]> {}
    }
    export interface IServiceRequestTemplateService {
        ByIds?: (request: Requests.ByIds) => AbortablePromise<Responses.ByIds>;
        CreateSearchDefinition?: (request: Requests.CreateSearchDefinition) => AbortablePromise<Responses.CreateSearchDefinition>;
        QA?: (request: Requests.QA) => AbortablePromise<Responses.QA>;
        Search?: (request: Requests.Search) => AbortablePromise<Responses.Search>;
        Templates?: (request: Requests.Templates) => AbortablePromise<Responses.Templates>;
    }
}
