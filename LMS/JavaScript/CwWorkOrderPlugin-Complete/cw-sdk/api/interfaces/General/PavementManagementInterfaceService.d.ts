import { Enums, ServiceEnums, PromiseTypes, ServiceTypes, Types as CoreTypes } from '../../../bundles/core';
import AbortablePromise = PromiseTypes.AbortablePromise;

export namespace PavementManagementInterfaceServiceTypes { 
    export namespace Requests {
        export interface ExportInspections extends ServiceTypes.CoreRequestBase {
            BranchUids?: string[];
            CustomInspectionIds?: number[];
            DateFrom?: Date;
            DateTo?: Date;
            SearchHasBranchInfo?: boolean;
            SearchHasSectionInfo?: boolean;
            SearchIds?: number[];
            SectionIds?: string[];
            WorkOrderEntityObjectIds?: number[];
            WorkOrderIds?: string[];
        }
        export interface ExportInventory extends ServiceTypes.CoreRequestBase {
            BranchIds?: string[];
            BranchUids?: string[];
            CustomInspectionIds?: number[];
            SearchHasBranchInfo?: boolean;
            SearchHasSectionInfo?: boolean;
            SearchIds?: number[];
            SectionIds?: string[];
            WorkOrderEntityObjectIds?: number[];
            WorkOrderIds?: string[];
        }
        export interface ExportWorkHistory extends ServiceTypes.CoreRequestBase {
            BranchUids: string[];
            CustomInspectionIds?: number[];
            DateFrom?: Date;
            DateTo?: Date;
            SearchHasBranchInfo?: boolean;
            SearchHasSectionInfo?: boolean;
            SearchIds?: number[];
            SectionIds?: string[];
            WorkOrderEntityObjectIds?: number[];
            WorkOrderIds?: string[];
        }
        export interface GeneratePaverData extends ServiceTypes.CoreRequestBase {
            BranchIds?: string[];
            BranchUids?: string[];
            CustomInspectionIds?: number[];
            DateFrom?: Date;
            DateTo?: Date;
            f?: string;
            IncludeInspections?: boolean;
            IncludeInventory?: boolean;
            IncludeWorkHistory?: boolean;
            SearchHasBranchInfo?: boolean;
            SearchHasSectionInfo?: boolean;
            SearchIds?: number[];
            SectionIds?: string[];
            WorkOrderEntityObjectIds?: number[];
            WorkOrderIds?: string[];
        }
        export interface GetPavementInspectionsByIds extends ServiceTypes.CoreRequestBase {
            InspectionSids: number[];
            PopulateBranchInfo?: boolean;
            PopulateSectionInfo?: boolean;
        }
        export interface GISSavedSearches extends ServiceTypes.CoreRequestBase {
        }
        export interface ImportInspection extends ServiceTypes.CoreRequestBase {
            Comments?: string;
            InspectedBy?: string;
            InspectedBySid?: number;
            InspectedSurface?: string;
            InspectionDate?: Date;
            IsDirty?: boolean;
            PavementSamples?: CoreTypes.PavementSample[];
            SectionClassName: string;
            SectionUid: string;
            TotalSamples?: number;
            WorkOrderId: string;
            WOTemplateId?: string;
        }
        export interface ImportInspections extends ServiceTypes.CoreRequestBase {
            InspectionData: CoreTypes.ImportInspectionData[];
            WOTemplateId: string;
        }
        export interface PavementInspectionSearch extends ServiceTypes.CoreRequestBase {
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
        export interface ProcessInspectionXmlFile extends ServiceTypes.CoreRequestBase {
            Data?: string;
        }
        export interface ProcessInventoryXmlFile extends ServiceTypes.CoreRequestBase {
            Data?: string;
        }
        export interface ProcessProjectXmlFile extends ServiceTypes.CoreRequestBase {
            Data?: string;
        }
        export interface ProcessRecommendedWorkCsvFile extends ServiceTypes.CoreRequestBase {
            Data: string;
            Delimiter: string;
        }
        export interface ProcessRecommendedWorkXmlFile extends ServiceTypes.CoreRequestBase {
            Data?: string;
        }
        export interface TemplateMapping extends ServiceTypes.CoreRequestBase {
            IncludeGlobalMR?: boolean;
            IncludeLayerMR?: boolean;
            IncludeLocalMR?: boolean;
            IncludeMajorMR?: boolean;
        }
    }
    export namespace Responses {
        export interface ExportInspections extends ServiceTypes.CoreResponseBase_<CoreTypes.PaverInspectionUpdates> {}
        export interface ExportInventory extends ServiceTypes.CoreResponseBase_<CoreTypes.PaverAssetUpdates> {}
        export interface ExportWorkHistory extends ServiceTypes.CoreResponseBase_<{[key: string]: CoreTypes.PaverUpdate[]}> {}
        export interface GeneratePaverData extends ServiceTypes.CoreResponseBase_<CoreTypes.PaverDataFile[]> {}
        export interface GetPavementInspectionsByIds extends ServiceTypes.CoreResponseBase_<CoreTypes.PavementInsp[]> {}
        export interface GISSavedSearches extends ServiceTypes.CoreResponseBase_<CoreTypes.SearchDefinitionName[]> {}
        export interface ImportInspection extends ServiceTypes.CoreResponseBase_<CoreTypes.PavementInsp> {}
        export interface ImportInspections extends ServiceTypes.CoreResponseBase_<CoreTypes.PavementInsp[]> {}
        export interface PavementInspectionSearch extends ServiceTypes.CoreResponseBase_<number[]> {}
        export interface ProcessInspectionXmlFile extends ServiceTypes.CoreResponseBase_<CoreTypes.ImportInspectionData[]> {}
        export interface ProcessInventoryXmlFile extends ServiceTypes.CoreResponseBase_<CoreTypes.ImportInventoryData> {}
        export interface ProcessProjectXmlFile extends ServiceTypes.CoreResponseBase_<CoreTypes.ImportProjectData[]> {}
        export interface ProcessRecommendedWorkCsvFile extends ServiceTypes.CoreResponseBase_<CoreTypes.ImportRecommendedWorkData[]> {}
        export interface ProcessRecommendedWorkXmlFile extends ServiceTypes.CoreResponseBase_<CoreTypes.ImportRecommendedWorkData[]> {}
        export interface TemplateMapping extends ServiceTypes.CoreResponseBase_<CoreTypes.PaverWorkCodeTemplate[]> {}
    }
    export interface IPavementManagementInterfaceService {
        ExportInspections?: (request: Requests.ExportInspections) => AbortablePromise<Responses.ExportInspections>;
        ExportInventory?: (request: Requests.ExportInventory) => AbortablePromise<Responses.ExportInventory>;
        ExportWorkHistory?: (request: Requests.ExportWorkHistory) => AbortablePromise<Responses.ExportWorkHistory>;
        GeneratePaverData?: (request: Requests.GeneratePaverData) => AbortablePromise<Responses.GeneratePaverData>;
        GetPavementInspectionsByIds?: (request: Requests.GetPavementInspectionsByIds) => AbortablePromise<Responses.GetPavementInspectionsByIds>;
        GISSavedSearches?: (request: Requests.GISSavedSearches) => AbortablePromise<Responses.GISSavedSearches>;
        ImportInspection?: (request: Requests.ImportInspection) => AbortablePromise<Responses.ImportInspection>;
        ImportInspections?: (request: Requests.ImportInspections) => AbortablePromise<Responses.ImportInspections>;
        PavementInspectionSearch?: (request: Requests.PavementInspectionSearch) => AbortablePromise<Responses.PavementInspectionSearch>;
        ProcessInspectionXmlFile?: (request: Requests.ProcessInspectionXmlFile) => AbortablePromise<Responses.ProcessInspectionXmlFile>;
        ProcessInventoryXmlFile?: (request: Requests.ProcessInventoryXmlFile) => AbortablePromise<Responses.ProcessInventoryXmlFile>;
        ProcessProjectXmlFile?: (request: Requests.ProcessProjectXmlFile) => AbortablePromise<Responses.ProcessProjectXmlFile>;
        ProcessRecommendedWorkCsvFile?: (request: Requests.ProcessRecommendedWorkCsvFile) => AbortablePromise<Responses.ProcessRecommendedWorkCsvFile>;
        ProcessRecommendedWorkXmlFile?: (request: Requests.ProcessRecommendedWorkXmlFile) => AbortablePromise<Responses.ProcessRecommendedWorkXmlFile>;
        TemplateMapping?: (request: Requests.TemplateMapping) => AbortablePromise<Responses.TemplateMapping>;
    }
}
