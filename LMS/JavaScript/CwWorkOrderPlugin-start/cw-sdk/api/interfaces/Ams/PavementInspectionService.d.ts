import { Enums, ServiceEnums, PromiseTypes, ServiceTypes, Types as CoreTypes } from '../../../bundles/core';
import AbortablePromise = PromiseTypes.AbortablePromise;

export namespace PavementInspectionServiceTypes { 
    export namespace Requests {
        export interface AddDistress extends ServiceTypes.CoreRequestBase {
            Comments?: string;
            Description?: string;
            Distress?: number;
            Quantity?: number;
            QuantityUnit?: string;
            SampleId: string;
            Severity?: Enums.DistressSeverity;
        }
        export interface AddSample extends ServiceTypes.CoreRequestBase {
            Comments?: string;
            InspectionId?: string;
            InspectionSid: number;
            SampleNr?: string;
            SampleSize?: number;
            SampleSizeUnit?: string;
            SampleType?: string;
        }
        export interface ById extends ServiceTypes.CoreRequestBase {
            InspectionSid: number;
        }
        export interface ByIds extends ServiceTypes.CoreRequestBase {
            Ids: string[];
            InspectionSids: number[];
            PopulateBranchInfo?: boolean;
            PopulateSectionInfo?: boolean;
        }
        export interface CodeDesc extends ServiceTypes.CoreRequestBase {
        }
        export interface Create extends ServiceTypes.CoreRequestBase {
            InspectionDate?: Date;
            SectionClassName?: string;
            SectionUid?: string;
            WorkOrderId: string;
        }
        export interface CreateSearchDefinition extends ServiceTypes.CoreRequestBase {
            Comments?: string[];
            InspectedBy?: string[];
            InspectedBySid?: number[];
            InspectedBySidIsInList?: boolean;
            InspectedSurface?: string[];
            InspectionDateBegin?: Date;
            InspectionDateEnd?: Date;
            InspectionDateIsNull?: boolean;
            InspectionDateNotInRange?: boolean;
            InspectionDateRangeIncludeCurrent?: boolean;
            InspectionDateRangeLast?: number;
            InspectionDateRangeNext?: number;
            InspectionDateRangeUnits?: number;
            InspectionId?: string[];
            InspectionSid?: number[];
            InspectionSidIsInList?: boolean;
            IsDirty?: boolean;
            MaxResults?: number;
            SaveDefinition?: boolean;
            SearchName?: string;
            SectionClassName?: string[];
            SectionUid?: string[];
            SharedWithin?: number;
            TotalSamplesIncludeNulls?: boolean;
            TotalSamplesIsMaxValueExclusive?: boolean;
            TotalSamplesIsMinValueExclusive?: boolean;
            TotalSamplesMaxValue?: number;
            TotalSamplesMinValue?: number;
            TotalSamplesRangeType?: number;
            TotalSamplesValues?: number[];
            WorkOrderId?: string[];
        }
        export interface DistressCodes extends ServiceTypes.CoreRequestBase {
        }
        export interface Distresses extends ServiceTypes.CoreRequestBase {
            SampleId: string;
            SampleIds: string[];
        }
        export interface Samples extends ServiceTypes.CoreRequestBase {
            InspectionSid: number;
            InspectionSids: number[];
        }
        export interface Search extends ServiceTypes.CoreRequestBase {
            Comments?: string[];
            InspectedBy?: string[];
            InspectedBySid?: number[];
            InspectedBySidIsInList?: boolean;
            InspectedSurface?: string[];
            InspectionDateBegin?: Date;
            InspectionDateEnd?: Date;
            InspectionDateIsNull?: boolean;
            InspectionDateNotInRange?: boolean;
            InspectionDateRangeIncludeCurrent?: boolean;
            InspectionDateRangeLast?: number;
            InspectionDateRangeNext?: number;
            InspectionDateRangeUnits?: number;
            InspectionId?: string[];
            InspectionSid?: number[];
            InspectionSidIsInList?: boolean;
            IsDirty?: boolean;
            MaxResults?: number;
            SectionClassName?: string[];
            SectionUid?: string[];
            TotalSamplesIncludeNulls?: boolean;
            TotalSamplesIsMaxValueExclusive?: boolean;
            TotalSamplesIsMinValueExclusive?: boolean;
            TotalSamplesMaxValue?: number;
            TotalSamplesMinValue?: number;
            TotalSamplesRangeType?: number;
            TotalSamplesValues?: number[];
            WorkOrderId?: string[];
        }
        export interface Update extends ServiceTypes.CoreRequestBase {
            Comments?: string;
            InspectedBySid?: number;
            InspectedSurface?: string;
            InspectionDate?: Date;
            InspectionId?: string;
            InspectionSid: number;
            IsDirty?: boolean;
            SectionClassName?: string;
            SectionUid?: string;
            TotalSamples?: number;
        }
        export interface UpdateDistress extends ServiceTypes.CoreRequestBase {
            Comments?: string;
            Description?: string;
            Distress?: number;
            DistressId: string;
            Quantity?: number;
            QuantityUnit?: string;
            Severity?: Enums.DistressSeverity;
        }
        export interface UpdateSample extends ServiceTypes.CoreRequestBase {
            Comments?: string;
            SampleId: string;
            SampleNr?: string;
            SampleSize?: number;
            SampleSizeUnit?: string;
            SampleType?: string;
        }
    }
    export namespace Responses {
        export interface AddDistress extends ServiceTypes.CoreResponseBase_<CoreTypes.SampleDistress> {}
        export interface AddSample extends ServiceTypes.CoreResponseBase_<CoreTypes.PavementSample> {}
        export interface ById extends ServiceTypes.CoreResponseBase_<CoreTypes.PavementInsp> {}
        export interface ByIds extends ServiceTypes.CoreResponseBase_<CoreTypes.PavementInsp[]> {}
        export interface CodeDesc extends ServiceTypes.CoreResponseBase_<CoreTypes.PavementInspCodeDescs> {}
        export interface Create extends ServiceTypes.CoreResponseBase_<CoreTypes.PavementInsp> {}
        export interface CreateSearchDefinition extends ServiceTypes.CoreResponseBase_<CoreTypes.SearchDefinition> {}
        export interface DistressCodes extends ServiceTypes.CoreResponseBase_<CoreTypes.DistressCode[]> {}
        export interface Distresses extends ServiceTypes.CoreResponseBase_<CoreTypes.SampleDistress[]> {}
        export interface Samples extends ServiceTypes.CoreResponseBase_<CoreTypes.PavementSampleBase[]> {}
        export interface Search extends ServiceTypes.CoreResponseBase_<number[]> {}
        export interface Update extends ServiceTypes.CoreResponseBase_<CoreTypes.PavementInspBase> {}
        export interface UpdateDistress extends ServiceTypes.CoreResponseBase_<CoreTypes.SampleDistress> {}
        export interface UpdateSample extends ServiceTypes.CoreResponseBase_<CoreTypes.PavementSample> {}
    }
    export interface IPavementInspectionService {
        AddDistress?: (request: Requests.AddDistress) => AbortablePromise<Responses.AddDistress>;
        AddSample?: (request: Requests.AddSample) => AbortablePromise<Responses.AddSample>;
        ById?: (request: Requests.ById) => AbortablePromise<Responses.ById>;
        ByIds?: (request: Requests.ByIds) => AbortablePromise<Responses.ByIds>;
        CodeDesc?: (request: Requests.CodeDesc) => AbortablePromise<Responses.CodeDesc>;
        Create?: (request: Requests.Create) => AbortablePromise<Responses.Create>;
        CreateSearchDefinition?: (request: Requests.CreateSearchDefinition) => AbortablePromise<Responses.CreateSearchDefinition>;
        DistressCodes?: (request: Requests.DistressCodes) => AbortablePromise<Responses.DistressCodes>;
        Distresses?: (request: Requests.Distresses) => AbortablePromise<Responses.Distresses>;
        Samples?: (request: Requests.Samples) => AbortablePromise<Responses.Samples>;
        Search?: (request: Requests.Search) => AbortablePromise<Responses.Search>;
        Update?: (request: Requests.Update) => AbortablePromise<Responses.Update>;
        UpdateDistress?: (request: Requests.UpdateDistress) => AbortablePromise<Responses.UpdateDistress>;
        UpdateSample?: (request: Requests.UpdateSample) => AbortablePromise<Responses.UpdateSample>;
    }
}
