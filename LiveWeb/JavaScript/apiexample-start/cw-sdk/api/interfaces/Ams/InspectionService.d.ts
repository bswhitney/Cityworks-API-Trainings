import { Enums, ServiceEnums, PromiseTypes, ServiceTypes, Types as CoreTypes } from '../../../bundles/core';
import AbortablePromise = PromiseTypes.AbortablePromise;

export namespace InspectionServiceTypes { 
    export namespace Requests {
        export interface AddEntity extends ServiceTypes.CoreRequestBase {
            Entity?: CoreTypes.WorkOrderEntityBase;
            EntityType: string;
            EntityUid: string;
            InspectionId: number;
            UpdateXY?: boolean;
        }
        export interface Answers extends ServiceTypes.CoreRequestBase {
            InspectionId: number;
            InspectionIds: number[];
        }
        export interface ById extends ServiceTypes.CoreRequestBase {
            InspectionId: number;
        }
        export interface ByIds extends ServiceTypes.CoreRequestBase {
            InspectionIds: number[];
        }
        export interface ByWorkOrderIds extends ServiceTypes.CoreRequestBase {
            WorkOrderIds: string[];
        }
        export interface Cancel extends ServiceTypes.CoreRequestBase {
            CancelReason?: string;
            DateCancelled?: Date;
            InspectionIds: number[];
        }
        export interface Close extends ServiceTypes.CoreRequestBase {
            InspectionIds: number[];
        }
        export interface Create extends ServiceTypes.CoreRequestBase {
            Address?: string;
            Date1?: Date;
            Date2?: Date;
            Date3?: Date;
            Date4?: Date;
            Date5?: Date;
            District?: string;
            Entity?: CoreTypes.WorkOrderEntity;
            EntityType: string;
            GetGisData?: boolean;
            InitiateDate?: Date;
            InitiatedByApp?: string;
            InitiatedBySid?: number;
            InspTemplateId: number;
            Location?: string;
            MapPage?: string;
            Num1?: number;
            Num2?: number;
            Num3?: number;
            Num4?: number;
            Num5?: number;
            Priority?: string;
            PrjStartDate?: Date;
            Shop?: string;
            Status?: string;
            StreetName?: string;
            SubmitToEmployeeSid?: number;
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
            TileNo?: string;
            X?: number;
            Y?: number;
        }
        export interface CreateFromParent extends ServiceTypes.CoreRequestBase {
            Date1?: Date;
            Date2?: Date;
            Date3?: Date;
            Date4?: Date;
            Date5?: Date;
            Entity?: CoreTypes.WorkOrderEntity;
            EntityType: string;
            GetGisData?: boolean;
            InitiateDate?: Date;
            InitiatedByApp?: string;
            InitiatedBySid?: number;
            InspectionId?: number;
            InspTemplateId: number;
            Num1?: number;
            Num2?: number;
            Num3?: number;
            Num4?: number;
            Num5?: number;
            Status?: string;
            SubmitToEmployeeSid?: number;
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
        export interface CreateFromServiceRequest extends ServiceTypes.CoreRequestBase {
            Date1?: Date;
            Date2?: Date;
            Date3?: Date;
            Date4?: Date;
            Date5?: Date;
            Entity?: CoreTypes.WorkOrderEntity;
            EntityType: string;
            GetGisData?: boolean;
            InitiateDate?: Date;
            InitiatedByApp?: string;
            InitiatedBySid?: number;
            InspTemplateId: number;
            Num1?: number;
            Num2?: number;
            Num3?: number;
            Num4?: number;
            Num5?: number;
            RequestId: number;
            Status?: string;
            SubmitToEmployeeSid?: number;
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
        export interface CreateFromWorkOrder extends ServiceTypes.CoreRequestBase {
            Date1?: Date;
            Date2?: Date;
            Date3?: Date;
            Date4?: Date;
            Date5?: Date;
            Entity?: CoreTypes.WorkOrderEntity;
            EntityType: string;
            GetGisData?: boolean;
            InitiateDate?: Date;
            InitiatedByApp?: string;
            InitiatedBySid?: number;
            InspTemplateId: number;
            Num1?: number;
            Num2?: number;
            Num3?: number;
            Num4?: number;
            Num5?: number;
            ProjectedStartDate?: Date;
            Status?: string;
            SubmitToEmployeeSid?: number;
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
            WorkOrderId: string;
        }
        export interface CreateSearchDefinition extends ServiceTypes.CoreRequestBase {
            ActFinishDateBegin?: Date;
            ActFinishDateEnd?: Date;
            ActFinishDateIsNull?: boolean;
            ActFinishDateNotInRange?: boolean;
            ActFinishDateRangeIncludeCurrent?: boolean;
            ActFinishDateRangeLast?: number;
            ActFinishDateRangeNext?: number;
            ActFinishDateRangeUnits?: number;
            Canceled?: boolean;
            CancelledBy?: string[];
            CancelledBySid?: number[];
            CancelledBySidIsInList?: boolean;
            CancelReason?: string[];
            Closed?: boolean;
            ClosedBy?: string[];
            ClosedBySid?: number[];
            ClosedBySidIsInList?: boolean;
            CondRatingIncludeNulls?: boolean;
            CondRatingIsMaxValueExclusive?: boolean;
            CondRatingIsMinValueExclusive?: boolean;
            CondRatingMaxValue?: number;
            CondRatingMinValue?: number;
            CondRatingRangeType?: number;
            CondRatingValues?: number[];
            CondScoreIncludeNulls?: boolean;
            CondScoreIsMaxValueExclusive?: boolean;
            CondScoreIsMinValueExclusive?: boolean;
            CondScoreMaxValue?: number;
            CondScoreMinValue?: number;
            CondScoreRangeType?: number;
            CondScoreValues?: number[];
            CreatedByCycle?: boolean;
            CycleFrom?: number[];
            CycleIntervalNumIncludeNulls?: boolean;
            CycleIntervalNumIsMaxValueExclusive?: boolean;
            CycleIntervalNumIsMinValueExclusive?: boolean;
            CycleIntervalNumMaxValue?: number;
            CycleIntervalNumMinValue?: number;
            CycleIntervalNumRangeType?: number;
            CycleIntervalNumValues?: number[];
            CycleIntervalUnit?: number[];
            CycleType?: number[];
            Date1Begin?: Date;
            Date1End?: Date;
            Date1IsNull?: boolean;
            Date1NotInRange?: boolean;
            Date1RangeIncludeCurrent?: boolean;
            Date1RangeLast?: number;
            Date1RangeNext?: number;
            Date1RangeUnits?: number;
            Date2Begin?: Date;
            Date2End?: Date;
            Date2IsNull?: boolean;
            Date2NotInRange?: boolean;
            Date2RangeIncludeCurrent?: boolean;
            Date2RangeLast?: number;
            Date2RangeNext?: number;
            Date2RangeUnits?: number;
            Date3Begin?: Date;
            Date3End?: Date;
            Date3IsNull?: boolean;
            Date3NotInRange?: boolean;
            Date3RangeIncludeCurrent?: boolean;
            Date3RangeLast?: number;
            Date3RangeNext?: number;
            Date3RangeUnits?: number;
            Date4Begin?: Date;
            Date4End?: Date;
            Date4IsNull?: boolean;
            Date4NotInRange?: boolean;
            Date4RangeIncludeCurrent?: boolean;
            Date4RangeLast?: number;
            Date4RangeNext?: number;
            Date4RangeUnits?: number;
            Date5Begin?: Date;
            Date5End?: Date;
            Date5IsNull?: boolean;
            Date5NotInRange?: boolean;
            Date5RangeIncludeCurrent?: boolean;
            Date5RangeLast?: number;
            Date5RangeNext?: number;
            Date5RangeUnits?: number;
            DateCancelledBegin?: Date;
            DateCancelledEnd?: Date;
            DateCancelledIsNull?: boolean;
            DateCancelledNotInRange?: boolean;
            DateCancelledRangeIncludeCurrent?: boolean;
            DateCancelledRangeLast?: number;
            DateCancelledRangeNext?: number;
            DateCancelledRangeUnits?: number;
            DateClosedBegin?: Date;
            DateClosedEnd?: Date;
            DateClosedIsNull?: boolean;
            DateClosedNotInRange?: boolean;
            DateClosedRangeIncludeCurrent?: boolean;
            DateClosedRangeLast?: number;
            DateClosedRangeNext?: number;
            DateClosedRangeUnits?: number;
            DateSubmitToBegin?: Date;
            DateSubmitToEnd?: Date;
            DateSubmitToIsNull?: boolean;
            DateSubmitToNotInRange?: boolean;
            DateSubmitToRangeIncludeCurrent?: boolean;
            DateSubmitToRangeLast?: number;
            DateSubmitToRangeNext?: number;
            DateSubmitToRangeUnits?: number;
            District?: string[];
            DomainId?: number[];
            DomainIdIsInList?: boolean;
            EffortIncludeNulls?: boolean;
            EffortIsMaxValueExclusive?: boolean;
            EffortIsMinValueExclusive?: boolean;
            EffortMaxValue?: number;
            EffortMinValue?: number;
            EffortRangeType?: number;
            EffortValues?: number[];
            EnableEurl?: boolean;
            EntitySidIncludeNulls?: boolean;
            EntitySidIsMaxValueExclusive?: boolean;
            EntitySidIsMinValueExclusive?: boolean;
            EntitySidMaxValue?: number;
            EntitySidMinValue?: number;
            EntitySidRangeType?: number;
            EntitySidValues?: number[];
            EntityType?: string;
            EntityUids?: string[];
            Extent?: CoreTypes.GISExtent;
            FeatureIdIncludeNulls?: boolean;
            FeatureIdIsMaxValueExclusive?: boolean;
            FeatureIdIsMinValueExclusive?: boolean;
            FeatureIdMaxValue?: number;
            FeatureIdMinValue?: number;
            FeatureIdRangeType?: number;
            FeatureIdValues?: number[];
            FeatureType?: string;
            FeatureUids?: string[];
            ForemanRecomnd?: string[];
            FromDateBegin?: Date;
            FromDateEnd?: Date;
            FromDateIsNull?: boolean;
            FromDateNotInRange?: boolean;
            FromDateRangeIncludeCurrent?: boolean;
            FromDateRangeLast?: number;
            FromDateRangeNext?: number;
            FromDateRangeUnits?: number;
            HasAttachment?: boolean;
            HasRequest?: boolean;
            HasWorkOrder?: boolean;
            InitiateDateBegin?: Date;
            InitiateDateEnd?: Date;
            InitiateDateIsNull?: boolean;
            InitiateDateNotInRange?: boolean;
            InitiateDateRangeIncludeCurrent?: boolean;
            InitiateDateRangeLast?: number;
            InitiateDateRangeNext?: number;
            InitiateDateRangeUnits?: number;
            InitiatedBy?: string[];
            InitiatedByApp?: string[];
            InitiatedBySid?: number[];
            InitiatedBySidIsInList?: boolean;
            InspDateBegin?: Date;
            InspDateEnd?: Date;
            InspDateIsNull?: boolean;
            InspDateNotInRange?: boolean;
            InspDateRangeIncludeCurrent?: boolean;
            InspDateRangeLast?: number;
            InspDateRangeNext?: number;
            InspDateRangeUnits?: number;
            InspectedBy?: number[];
            InspectedBySid?: number[];
            InspectedBySidIsInList?: boolean;
            InspectionDateBegin?: Date;
            InspectionDateEnd?: Date;
            InspectionDateIsNull?: boolean;
            InspectionDateNotInRange?: boolean;
            InspectionDateRangeIncludeCurrent?: boolean;
            InspectionDateRangeLast?: number;
            InspectionDateRangeNext?: number;
            InspectionDateRangeUnits?: number;
            InspectionId?: number[];
            InspectionIdIsInList?: boolean;
            InspectionIds?: number[];
            InspTemplateId?: number[];
            InspTemplateIdIsInList?: boolean;
            InspTemplateName?: string[];
            IsAttached?: boolean;
            Location?: string[];
            MapPage?: string[];
            MaxResults?: number;
            Num1IncludeNulls?: boolean;
            Num1IsMaxValueExclusive?: boolean;
            Num1IsMinValueExclusive?: boolean;
            Num1MaxValue?: number;
            Num1MinValue?: number;
            Num1RangeType?: number;
            Num1Values?: number[];
            Num2IncludeNulls?: boolean;
            Num2IsMaxValueExclusive?: boolean;
            Num2IsMinValueExclusive?: boolean;
            Num2MaxValue?: number;
            Num2MinValue?: number;
            Num2RangeType?: number;
            Num2Values?: number[];
            Num3IncludeNulls?: boolean;
            Num3IsMaxValueExclusive?: boolean;
            Num3IsMinValueExclusive?: boolean;
            Num3MaxValue?: number;
            Num3MinValue?: number;
            Num3RangeType?: number;
            Num3Values?: number[];
            Num4IncludeNulls?: boolean;
            Num4IsMaxValueExclusive?: boolean;
            Num4IsMinValueExclusive?: boolean;
            Num4MaxValue?: number;
            Num4MinValue?: number;
            Num4RangeType?: number;
            Num4Values?: number[];
            Num5IncludeNulls?: boolean;
            Num5IsMaxValueExclusive?: boolean;
            Num5IsMinValueExclusive?: boolean;
            Num5MaxValue?: number;
            Num5MinValue?: number;
            Num5RangeType?: number;
            Num5Values?: number[];
            ObservationSum?: string[];
            ParentInspId?: number[];
            ParentInspIdIsInList?: boolean;
            PastDue?: boolean;
            Priority?: string[];
            PrjFinishDateBegin?: Date;
            PrjFinishDateEnd?: Date;
            PrjFinishDateIsNull?: boolean;
            PrjFinishDateNotInRange?: boolean;
            PrjFinishDateRangeIncludeCurrent?: boolean;
            PrjFinishDateRangeLast?: number;
            PrjFinishDateRangeNext?: number;
            PrjFinishDateRangeUnits?: number;
            PrjStartDateBegin?: Date;
            PrjStartDateEnd?: Date;
            PrjStartDateIsNull?: boolean;
            PrjStartDateNotInRange?: boolean;
            PrjStartDateRangeIncludeCurrent?: boolean;
            PrjStartDateRangeLast?: number;
            PrjStartDateRangeNext?: number;
            PrjStartDateRangeUnits?: number;
            RepairsMade?: string[];
            RequestId?: number[];
            RequestIdIsInList?: boolean;
            Resolution?: string[];
            SaveDefinition?: boolean;
            SearchName?: string;
            SharedWithin?: number;
            Shop?: string[];
            Status?: string[];
            StreetName?: string[];
            SubmitTo?: number[];
            SubmitToEmployeeSid?: number[];
            SubmitToEmployeeSidIsInList?: boolean;
            SubmitToName?: string[];
            Text1?: string[];
            Text10?: string[];
            Text2?: string[];
            Text3?: string[];
            Text4?: string[];
            Text5?: string[];
            Text6?: string[];
            Text7?: string[];
            Text8?: string[];
            Text9?: string[];
            TileNo?: string[];
            Unattached?: boolean;
            UpdateMap?: boolean;
            WorkOrderId?: string[];
        }
        export interface CycleFrom extends ServiceTypes.CoreRequestBase {
        }
        export interface CycleIntervals extends ServiceTypes.CoreRequestBase {
        }
        export interface CycleTypes extends ServiceTypes.CoreRequestBase {
        }
        export interface Districts extends ServiceTypes.CoreRequestBase {
        }
        export interface InspectionInspections extends ServiceTypes.CoreRequestBase {
            CreatedByCycle?: boolean;
            InspectionIds: number[];
        }
        export interface InspectionServiceRequests extends ServiceTypes.CoreRequestBase {
            InspectionIds: number[];
        }
        export interface InspectionWorkOrders extends ServiceTypes.CoreRequestBase {
            InspectionIds: number[];
        }
        export interface Move extends ServiceTypes.CoreRequestBase {
            InspectionId: number;
            WKID?: number;
            WKT?: string;
            X: number;
            Y: number;
        }
        export interface Priorities extends ServiceTypes.CoreRequestBase {
        }
        export interface QA extends ServiceTypes.CoreRequestBase {
            InspTemplateId: number;
        }
        export interface Questions extends ServiceTypes.CoreRequestBase {
            InspectionId: number;
            InspectionIds: number[];
        }
        export interface RemoveEntity extends ServiceTypes.CoreRequestBase {
            InspectionIds: number[];
            UpdateXY?: boolean;
        }
        export interface Resolutions extends ServiceTypes.CoreRequestBase {
        }
        export interface Search extends ServiceTypes.CoreRequestBase {
            ActFinishDateBegin?: Date;
            ActFinishDateEnd?: Date;
            ActFinishDateIsNull?: boolean;
            ActFinishDateNotInRange?: boolean;
            ActFinishDateRangeIncludeCurrent?: boolean;
            ActFinishDateRangeLast?: number;
            ActFinishDateRangeNext?: number;
            ActFinishDateRangeUnits?: number;
            Canceled?: boolean;
            CancelledBy?: string[];
            CancelledBySid?: number[];
            CancelledBySidIsInList?: boolean;
            CancelReason?: string[];
            Closed?: boolean;
            ClosedBy?: string[];
            ClosedBySid?: number[];
            ClosedBySidIsInList?: boolean;
            CondRatingIncludeNulls?: boolean;
            CondRatingIsMaxValueExclusive?: boolean;
            CondRatingIsMinValueExclusive?: boolean;
            CondRatingMaxValue?: number;
            CondRatingMinValue?: number;
            CondRatingRangeType?: number;
            CondRatingValues?: number[];
            CondScoreIncludeNulls?: boolean;
            CondScoreIsMaxValueExclusive?: boolean;
            CondScoreIsMinValueExclusive?: boolean;
            CondScoreMaxValue?: number;
            CondScoreMinValue?: number;
            CondScoreRangeType?: number;
            CondScoreValues?: number[];
            CreatedByCycle?: boolean;
            CycleFrom?: number[];
            CycleIntervalNumIncludeNulls?: boolean;
            CycleIntervalNumIsMaxValueExclusive?: boolean;
            CycleIntervalNumIsMinValueExclusive?: boolean;
            CycleIntervalNumMaxValue?: number;
            CycleIntervalNumMinValue?: number;
            CycleIntervalNumRangeType?: number;
            CycleIntervalNumValues?: number[];
            CycleIntervalUnit?: number[];
            CycleType?: number[];
            Date1Begin?: Date;
            Date1End?: Date;
            Date1IsNull?: boolean;
            Date1NotInRange?: boolean;
            Date1RangeIncludeCurrent?: boolean;
            Date1RangeLast?: number;
            Date1RangeNext?: number;
            Date1RangeUnits?: number;
            Date2Begin?: Date;
            Date2End?: Date;
            Date2IsNull?: boolean;
            Date2NotInRange?: boolean;
            Date2RangeIncludeCurrent?: boolean;
            Date2RangeLast?: number;
            Date2RangeNext?: number;
            Date2RangeUnits?: number;
            Date3Begin?: Date;
            Date3End?: Date;
            Date3IsNull?: boolean;
            Date3NotInRange?: boolean;
            Date3RangeIncludeCurrent?: boolean;
            Date3RangeLast?: number;
            Date3RangeNext?: number;
            Date3RangeUnits?: number;
            Date4Begin?: Date;
            Date4End?: Date;
            Date4IsNull?: boolean;
            Date4NotInRange?: boolean;
            Date4RangeIncludeCurrent?: boolean;
            Date4RangeLast?: number;
            Date4RangeNext?: number;
            Date4RangeUnits?: number;
            Date5Begin?: Date;
            Date5End?: Date;
            Date5IsNull?: boolean;
            Date5NotInRange?: boolean;
            Date5RangeIncludeCurrent?: boolean;
            Date5RangeLast?: number;
            Date5RangeNext?: number;
            Date5RangeUnits?: number;
            DateCancelledBegin?: Date;
            DateCancelledEnd?: Date;
            DateCancelledIsNull?: boolean;
            DateCancelledNotInRange?: boolean;
            DateCancelledRangeIncludeCurrent?: boolean;
            DateCancelledRangeLast?: number;
            DateCancelledRangeNext?: number;
            DateCancelledRangeUnits?: number;
            DateClosedBegin?: Date;
            DateClosedEnd?: Date;
            DateClosedIsNull?: boolean;
            DateClosedNotInRange?: boolean;
            DateClosedRangeIncludeCurrent?: boolean;
            DateClosedRangeLast?: number;
            DateClosedRangeNext?: number;
            DateClosedRangeUnits?: number;
            DateSubmitToBegin?: Date;
            DateSubmitToEnd?: Date;
            DateSubmitToIsNull?: boolean;
            DateSubmitToNotInRange?: boolean;
            DateSubmitToRangeIncludeCurrent?: boolean;
            DateSubmitToRangeLast?: number;
            DateSubmitToRangeNext?: number;
            DateSubmitToRangeUnits?: number;
            District?: string[];
            DomainId?: number[];
            DomainIdIsInList?: boolean;
            EffortIncludeNulls?: boolean;
            EffortIsMaxValueExclusive?: boolean;
            EffortIsMinValueExclusive?: boolean;
            EffortMaxValue?: number;
            EffortMinValue?: number;
            EffortRangeType?: number;
            EffortValues?: number[];
            EntitySidIncludeNulls?: boolean;
            EntitySidIsMaxValueExclusive?: boolean;
            EntitySidIsMinValueExclusive?: boolean;
            EntitySidMaxValue?: number;
            EntitySidMinValue?: number;
            EntitySidRangeType?: number;
            EntitySidValues?: number[];
            EntityType?: string;
            EntityUids?: string[];
            Extent?: CoreTypes.GISExtent;
            FeatureIdIncludeNulls?: boolean;
            FeatureIdIsMaxValueExclusive?: boolean;
            FeatureIdIsMinValueExclusive?: boolean;
            FeatureIdMaxValue?: number;
            FeatureIdMinValue?: number;
            FeatureIdRangeType?: number;
            FeatureIdValues?: number[];
            FeatureType?: string;
            FeatureUids?: string[];
            ForemanRecomnd?: string[];
            FromDateBegin?: Date;
            FromDateEnd?: Date;
            FromDateIsNull?: boolean;
            FromDateNotInRange?: boolean;
            FromDateRangeIncludeCurrent?: boolean;
            FromDateRangeLast?: number;
            FromDateRangeNext?: number;
            FromDateRangeUnits?: number;
            HasAttachment?: boolean;
            HasRequest?: boolean;
            HasWorkOrder?: boolean;
            InitiateDateBegin?: Date;
            InitiateDateEnd?: Date;
            InitiateDateIsNull?: boolean;
            InitiateDateNotInRange?: boolean;
            InitiateDateRangeIncludeCurrent?: boolean;
            InitiateDateRangeLast?: number;
            InitiateDateRangeNext?: number;
            InitiateDateRangeUnits?: number;
            InitiatedBy?: string[];
            InitiatedByApp?: string[];
            InitiatedBySid?: number[];
            InitiatedBySidIsInList?: boolean;
            InspDateBegin?: Date;
            InspDateEnd?: Date;
            InspDateIsNull?: boolean;
            InspDateNotInRange?: boolean;
            InspDateRangeIncludeCurrent?: boolean;
            InspDateRangeLast?: number;
            InspDateRangeNext?: number;
            InspDateRangeUnits?: number;
            InspectedBy?: number[];
            InspectedBySid?: number[];
            InspectedBySidIsInList?: boolean;
            InspectionDateBegin?: Date;
            InspectionDateEnd?: Date;
            InspectionDateIsNull?: boolean;
            InspectionDateNotInRange?: boolean;
            InspectionDateRangeIncludeCurrent?: boolean;
            InspectionDateRangeLast?: number;
            InspectionDateRangeNext?: number;
            InspectionDateRangeUnits?: number;
            InspectionId?: number[];
            InspectionIdIsInList?: boolean;
            InspectionIds?: number[];
            InspTemplateId?: number[];
            InspTemplateIdIsInList?: boolean;
            InspTemplateName?: string[];
            IsAttached?: boolean;
            Location?: string[];
            MapPage?: string[];
            MaxResults?: number;
            Num1IncludeNulls?: boolean;
            Num1IsMaxValueExclusive?: boolean;
            Num1IsMinValueExclusive?: boolean;
            Num1MaxValue?: number;
            Num1MinValue?: number;
            Num1RangeType?: number;
            Num1Values?: number[];
            Num2IncludeNulls?: boolean;
            Num2IsMaxValueExclusive?: boolean;
            Num2IsMinValueExclusive?: boolean;
            Num2MaxValue?: number;
            Num2MinValue?: number;
            Num2RangeType?: number;
            Num2Values?: number[];
            Num3IncludeNulls?: boolean;
            Num3IsMaxValueExclusive?: boolean;
            Num3IsMinValueExclusive?: boolean;
            Num3MaxValue?: number;
            Num3MinValue?: number;
            Num3RangeType?: number;
            Num3Values?: number[];
            Num4IncludeNulls?: boolean;
            Num4IsMaxValueExclusive?: boolean;
            Num4IsMinValueExclusive?: boolean;
            Num4MaxValue?: number;
            Num4MinValue?: number;
            Num4RangeType?: number;
            Num4Values?: number[];
            Num5IncludeNulls?: boolean;
            Num5IsMaxValueExclusive?: boolean;
            Num5IsMinValueExclusive?: boolean;
            Num5MaxValue?: number;
            Num5MinValue?: number;
            Num5RangeType?: number;
            Num5Values?: number[];
            ObservationSum?: string[];
            ParentInspId?: number[];
            ParentInspIdIsInList?: boolean;
            PastDue?: boolean;
            Priority?: string[];
            PrjFinishDateBegin?: Date;
            PrjFinishDateEnd?: Date;
            PrjFinishDateIsNull?: boolean;
            PrjFinishDateNotInRange?: boolean;
            PrjFinishDateRangeIncludeCurrent?: boolean;
            PrjFinishDateRangeLast?: number;
            PrjFinishDateRangeNext?: number;
            PrjFinishDateRangeUnits?: number;
            PrjStartDateBegin?: Date;
            PrjStartDateEnd?: Date;
            PrjStartDateIsNull?: boolean;
            PrjStartDateNotInRange?: boolean;
            PrjStartDateRangeIncludeCurrent?: boolean;
            PrjStartDateRangeLast?: number;
            PrjStartDateRangeNext?: number;
            PrjStartDateRangeUnits?: number;
            RepairsMade?: string[];
            RequestId?: number[];
            RequestIdIsInList?: boolean;
            Resolution?: string[];
            Shop?: string[];
            Status?: string[];
            StreetName?: string[];
            SubmitTo?: number[];
            SubmitToEmployeeSid?: number[];
            SubmitToEmployeeSidIsInList?: boolean;
            SubmitToName?: string[];
            Text1?: string[];
            Text10?: string[];
            Text2?: string[];
            Text3?: string[];
            Text4?: string[];
            Text5?: string[];
            Text6?: string[];
            Text7?: string[];
            Text8?: string[];
            Text9?: string[];
            TileNo?: string[];
            Unattached?: boolean;
            UpdateMap?: boolean;
            WorkOrderId?: string[];
        }
        export interface SearchObject extends ServiceTypes.CoreRequestBase {
            InspectionId: string;
        }
        export interface Shops extends ServiceTypes.CoreRequestBase {
        }
        export interface Statuses extends ServiceTypes.CoreRequestBase {
        }
        export interface SubmitTos extends ServiceTypes.CoreRequestBase {
            DomainIds?: number[];
            IncludeInactiveEmployees?: boolean;
        }
        export interface Templates extends ServiceTypes.CoreRequestBase {
            CanCreate?: boolean;
            EntityType?: string;
            IncludeInactive?: boolean;
            MaximumDateModified?: Date;
            MinimumDateModified?: Date;
            TemplateIds?: number[];
        }
        export interface Update extends ServiceTypes.CoreRequestBase {
            ActualFinishDate?: Date;
            Answers?: CoreTypes.InspectionAnswer[];
            CondRating?: number;
            CondScore?: number;
            CycleFrom?: string;
            CycleIntervalNum?: number;
            CycleIntervalUnit?: string;
            CycleType?: string;
            Date1?: Date;
            Date2?: Date;
            Date3?: Date;
            Date4?: Date;
            Date5?: Date;
            DateSubmitTo?: Date;
            District?: string;
            Effort?: number;
            ForemanRecomnd?: string;
            FromDate?: Date;
            InitiateDate?: Date;
            InitiatedByApp?: string;
            InspectedBy?: number;
            InspectedBySid?: number;
            InspectionDate?: Date;
            InspectionId: number;
            Location?: string;
            MapPage?: string;
            Num1?: number;
            Num2?: number;
            Num3?: number;
            Num4?: number;
            Num5?: number;
            ObservationSum?: string;
            Priority?: string;
            ProjectedFinishDate?: Date;
            ProjectedStartDate?: Date;
            Questions?: CoreTypes.InspectionQuestionDetails[];
            RepairsMade?: string;
            RequestId?: number;
            Resolution?: string;
            Shop?: string;
            Status?: string;
            StreetName?: string;
            SubmitTo?: number;
            SubmitToEmployeeSid?: number;
            SuppressCycle?: boolean;
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
            TileNo?: string;
            UpdateMap?: boolean;
            WorkOrderId?: string;
        }
    }
    export namespace Responses {
        export interface AddEntity extends ServiceTypes.CoreResponseBase_<CoreTypes.WorkOrderEntity> {}
        export interface Answers extends ServiceTypes.CoreResponseBase_<CoreTypes.InspectionAnswer[]> {}
        export interface ById extends ServiceTypes.CoreResponseBase_<CoreTypes.InspectionBase> {}
        export interface ByIds extends ServiceTypes.CoreResponseBase_<CoreTypes.InspectionBase[]> {}
        export interface ByWorkOrderIds extends ServiceTypes.CoreResponseBase_<CoreTypes.InspectionBase[]> {}
        export interface Cancel extends ServiceTypes.CoreResponseBase_<CoreTypes.InspectionBase[]> {}
        export interface Close extends ServiceTypes.CoreResponseBase_<CoreTypes.InspectionBase[]> {}
        export interface Create extends ServiceTypes.CoreResponseBase_<CoreTypes.InspectionBase> {}
        export interface CreateFromParent extends ServiceTypes.CoreResponseBase_<CoreTypes.InspectionBase> {}
        export interface CreateFromServiceRequest extends ServiceTypes.CoreResponseBase_<CoreTypes.InspectionBase> {}
        export interface CreateFromWorkOrder extends ServiceTypes.CoreResponseBase_<CoreTypes.InspectionBase> {}
        export interface CreateSearchDefinition extends ServiceTypes.CoreResponseBase_<CoreTypes.SearchDefinition> {}
        export interface CycleFrom extends ServiceTypes.CoreResponseBase_<{[key: string]: string}> {}
        export interface CycleIntervals extends ServiceTypes.CoreResponseBase_<{[key: string]: string}> {}
        export interface CycleTypes extends ServiceTypes.CoreResponseBase_<{[key: string]: string}> {}
        export interface Districts extends ServiceTypes.CoreResponseBase_<CoreTypes.CodeDesc[]> {}
        export interface InspectionInspections extends ServiceTypes.CoreResponseBase_<CoreTypes.InspectionRelatedInspection[]> {}
        export interface InspectionServiceRequests extends ServiceTypes.CoreResponseBase_<CoreTypes.RequestInspection[]> {}
        export interface InspectionWorkOrders extends ServiceTypes.CoreResponseBase_<CoreTypes.WorkOrderInspection[]> {}
        export interface Move extends ServiceTypes.CoreResponseBase_<CoreTypes.GISPoint> {}
        export interface Priorities extends ServiceTypes.CoreResponseBase_<CoreTypes.CodeDesc[]> {}
        export interface QA extends ServiceTypes.CoreResponseBase_<CoreTypes.InspTemplateQA> {}
        export interface Questions extends ServiceTypes.CoreResponseBase_<CoreTypes.InspQuestion[]> {}
        export interface RemoveEntity extends ServiceTypes.CoreResponseBase_<{[key: number]: boolean}> {}
        export interface Resolutions extends ServiceTypes.CoreResponseBase_<CoreTypes.CodeDesc[]> {}
        export interface Search extends ServiceTypes.CoreResponseBase_<number[]> {}
        export interface SearchObject extends ServiceTypes.CoreResponseBase_<CoreTypes.InspectionBase[]> {}
        export interface Shops extends ServiceTypes.CoreResponseBase_<CoreTypes.CodeDesc[]> {}
        export interface Statuses extends ServiceTypes.CoreResponseBase_<CoreTypes.CodeDesc[]> {}
        export interface SubmitTos extends ServiceTypes.CoreResponseBase_<CoreTypes.EmployeeNameId[]> {}
        export interface Templates extends ServiceTypes.CoreResponseBase_<CoreTypes.InspTemplateBase[]> {}
        export interface Update extends ServiceTypes.CoreResponseBase_<CoreTypes.InspectionBase> {}
    }
    export interface IInspectionService {
        AddEntity?: (request: Requests.AddEntity) => AbortablePromise<Responses.AddEntity>;
        Answers?: (request: Requests.Answers) => AbortablePromise<Responses.Answers>;
        ById?: (request: Requests.ById) => AbortablePromise<Responses.ById>;
        ByIds?: (request: Requests.ByIds) => AbortablePromise<Responses.ByIds>;
        ByWorkOrderIds?: (request: Requests.ByWorkOrderIds) => AbortablePromise<Responses.ByWorkOrderIds>;
        Cancel?: (request: Requests.Cancel) => AbortablePromise<Responses.Cancel>;
        Close?: (request: Requests.Close) => AbortablePromise<Responses.Close>;
        Create?: (request: Requests.Create) => AbortablePromise<Responses.Create>;
        CreateFromParent?: (request: Requests.CreateFromParent) => AbortablePromise<Responses.CreateFromParent>;
        CreateFromServiceRequest?: (request: Requests.CreateFromServiceRequest) => AbortablePromise<Responses.CreateFromServiceRequest>;
        CreateFromWorkOrder?: (request: Requests.CreateFromWorkOrder) => AbortablePromise<Responses.CreateFromWorkOrder>;
        CreateSearchDefinition?: (request: Requests.CreateSearchDefinition) => AbortablePromise<Responses.CreateSearchDefinition>;
        CycleFrom?: (request: Requests.CycleFrom) => AbortablePromise<Responses.CycleFrom>;
        CycleIntervals?: (request: Requests.CycleIntervals) => AbortablePromise<Responses.CycleIntervals>;
        CycleTypes?: (request: Requests.CycleTypes) => AbortablePromise<Responses.CycleTypes>;
        Districts?: (request: Requests.Districts) => AbortablePromise<Responses.Districts>;
        InspectionInspections?: (request: Requests.InspectionInspections) => AbortablePromise<Responses.InspectionInspections>;
        InspectionServiceRequests?: (request: Requests.InspectionServiceRequests) => AbortablePromise<Responses.InspectionServiceRequests>;
        InspectionWorkOrders?: (request: Requests.InspectionWorkOrders) => AbortablePromise<Responses.InspectionWorkOrders>;
        Move?: (request: Requests.Move) => AbortablePromise<Responses.Move>;
        Priorities?: (request: Requests.Priorities) => AbortablePromise<Responses.Priorities>;
        QA?: (request: Requests.QA) => AbortablePromise<Responses.QA>;
        Questions?: (request: Requests.Questions) => AbortablePromise<Responses.Questions>;
        RemoveEntity?: (request: Requests.RemoveEntity) => AbortablePromise<Responses.RemoveEntity>;
        Resolutions?: (request: Requests.Resolutions) => AbortablePromise<Responses.Resolutions>;
        Search?: (request: Requests.Search) => AbortablePromise<Responses.Search>;
        SearchObject?: (request: Requests.SearchObject) => AbortablePromise<Responses.SearchObject>;
        Shops?: (request: Requests.Shops) => AbortablePromise<Responses.Shops>;
        Statuses?: (request: Requests.Statuses) => AbortablePromise<Responses.Statuses>;
        SubmitTos?: (request: Requests.SubmitTos) => AbortablePromise<Responses.SubmitTos>;
        Templates?: (request: Requests.Templates) => AbortablePromise<Responses.Templates>;
        Update?: (request: Requests.Update) => AbortablePromise<Responses.Update>;
    }
}
