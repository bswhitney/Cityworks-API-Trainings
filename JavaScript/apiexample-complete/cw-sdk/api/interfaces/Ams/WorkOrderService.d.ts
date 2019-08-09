import { Enums, ServiceEnums, PromiseTypes, ServiceTypes, Types as CoreTypes } from '../../../bundles/core';
import AbortablePromise = PromiseTypes.AbortablePromise;

export namespace WorkOrderServiceTypes { 
    export namespace Requests {
        export interface AddComments extends ServiceTypes.CoreRequestBase {
            Comments: string;
            WorkOrderId: string;
        }
        export interface AddEntities extends ServiceTypes.CoreRequestBase {
            EntityType: string;
            EntityUids: string[];
            UpdateXY?: boolean;
            WorkOrderId: string;
        }
        export interface ById extends ServiceTypes.CoreRequestBase {
            WorkOrderId: string;
        }
        export interface ByIds extends ServiceTypes.CoreRequestBase {
            WorkOrderIds: string[];
        }
        export interface Cancel extends ServiceTypes.CoreRequestBase {
            CancelReason?: string;
            DateCancelled?: Date;
            WorkOrderIds: string[];
        }
        export interface Categories extends ServiceTypes.CoreRequestBase {
        }
        export interface ChangeCustomFieldCategory extends ServiceTypes.CoreRequestBase {
            CategoryId: number;
            WorkOrderIds: string[];
        }
        export interface Close extends ServiceTypes.CoreRequestBase {
            WorkOrderIds: string[];
        }
        export interface Combine extends ServiceTypes.CoreRequestBase {
            CancelCombinedWorkOrders?: boolean;
            FromWorkOrderIds: string[];
            ToWorkOrderId: string;
        }
        export interface Comments extends ServiceTypes.CoreRequestBase {
            WorkOrderId: string;
        }
        export interface CommentsByWorkOrderIds extends ServiceTypes.CoreRequestBase {
            WorkOrderIds: string[];
        }
        export interface Create extends ServiceTypes.CoreRequestBase {
            Address?: string;
            City?: string;
            Comments?: string;
            CustomFieldValues?: {[key: number]: string};
            Date1?: Date;
            Date2?: Date;
            Date3?: Date;
            Date4?: Date;
            Date5?: Date;
            District?: string;
            Entities?: CoreTypes.WorkOrderEntity[];
            EntityType: string;
            ExpenseType?: string;
            GetGisData?: boolean;
            GroupEntities?: boolean;
            InitiateDate?: Date;
            InitiatedByApp?: string;
            InitiatedBySid?: number;
            InspectionIds?: number[];
            Instructions?: string;
            Location?: string;
            MapPage?: string;
            Num1?: number;
            Num2?: number;
            Num3?: number;
            Num4?: number;
            Num5?: number;
            Priority?: string;
            ProjectedStartDate?: Date;
            ProjectSid?: number;
            Reactive?: boolean;
            RequestedBy?: number;
            RequestedBySid?: number;
            RequestIds?: number[];
            Shop?: string;
            Stage?: string;
            Status?: string;
            StreetName?: string;
            SubmitTo?: number;
            SubmitToSid?: number;
            Supervisor?: number;
            SupervisorSid?: number;
            Text1?: string;
            Text10?: string;
            Text11?: string;
            Text12?: string;
            Text13?: string;
            Text14?: string;
            Text15?: string;
            Text16?: string;
            Text17?: string;
            Text18?: string;
            Text19?: string;
            Text2?: string;
            Text20?: string;
            Text3?: string;
            Text4?: string;
            Text5?: string;
            Text6?: string;
            Text7?: string;
            Text8?: string;
            Text9?: string;
            TileNo?: string;
            WebServiceRequestId?: string;
            WOCustFieldCatId?: number;
            WOTemplateId: string;
            X?: number;
            Y?: number;
            Zip?: string;
        }
        export interface CreateFromInspection extends ServiceTypes.CoreRequestBase {
            Address?: string;
            Comments?: string;
            CustomFieldValues?: {[key: number]: string};
            Date1?: Date;
            Date2?: Date;
            Date3?: Date;
            Date4?: Date;
            Date5?: Date;
            Entities?: CoreTypes.WorkOrderEntity[];
            EntityType: string;
            ExpenseType?: string;
            GetGisData?: boolean;
            GroupEntities?: boolean;
            InitiateDate?: Date;
            InitiatedByApp?: string;
            InitiatedBySid?: number;
            InspectionId: number;
            Instructions?: string;
            Location?: string;
            Num1?: number;
            Num2?: number;
            Num3?: number;
            Num4?: number;
            Num5?: number;
            Priority?: string;
            ProjectedStartDate?: Date;
            ProjectSid?: number;
            Reactive?: boolean;
            RequestedBy?: number;
            RequestedBySid?: number;
            Stage?: string;
            Status?: string;
            SubmitTo?: number;
            SubmitToSid?: number;
            Supervisor?: number;
            SupervisorSid?: number;
            Text1?: string;
            Text10?: string;
            Text11?: string;
            Text12?: string;
            Text13?: string;
            Text14?: string;
            Text15?: string;
            Text16?: string;
            Text17?: string;
            Text18?: string;
            Text19?: string;
            Text2?: string;
            Text20?: string;
            Text3?: string;
            Text4?: string;
            Text5?: string;
            Text6?: string;
            Text7?: string;
            Text8?: string;
            Text9?: string;
            WebServiceRequestId?: string;
            WOCustFieldCatId?: number;
            WOTemplateId: string;
        }
        export interface CreateFromParent extends ServiceTypes.CoreRequestBase {
            Address?: string;
            Comments?: string;
            CustomFieldValues?: {[key: number]: string};
            Date1?: Date;
            Date2?: Date;
            Date3?: Date;
            Date4?: Date;
            Date5?: Date;
            Entities?: CoreTypes.WorkOrderEntity[];
            EntityType: string;
            ExpenseType?: string;
            GetGisData?: boolean;
            GroupEntities?: boolean;
            InitiateDate?: Date;
            InitiatedByApp?: string;
            InitiatedBySid?: number;
            Instructions?: string;
            Location?: string;
            Num1?: number;
            Num2?: number;
            Num3?: number;
            Num4?: number;
            Num5?: number;
            Priority?: string;
            ProjectedStartDate?: Date;
            ProjectSid?: number;
            Reactive?: boolean;
            RequestedBy?: number;
            RequestedBySid?: number;
            Stage?: string;
            Status?: string;
            SubmitTo?: number;
            SubmitToSid?: number;
            Supervisor?: number;
            SupervisorSid?: number;
            Text1?: string;
            Text10?: string;
            Text11?: string;
            Text12?: string;
            Text13?: string;
            Text14?: string;
            Text15?: string;
            Text16?: string;
            Text17?: string;
            Text18?: string;
            Text19?: string;
            Text2?: string;
            Text20?: string;
            Text3?: string;
            Text4?: string;
            Text5?: string;
            Text6?: string;
            Text7?: string;
            Text8?: string;
            Text9?: string;
            WebServiceRequestId?: string;
            WOCustFieldCatId?: number;
            WorkOrderId: string;
            WOTemplateId: string;
        }
        export interface CreateFromServiceRequest extends ServiceTypes.CoreRequestBase {
            Address?: string;
            Comments?: string;
            CustomFieldValues?: {[key: number]: string};
            Date1?: Date;
            Date2?: Date;
            Date3?: Date;
            Date4?: Date;
            Date5?: Date;
            Entities?: CoreTypes.WorkOrderEntity[];
            EntityType: string;
            ExpenseType?: string;
            GetGisData?: boolean;
            GroupEntities?: boolean;
            InitiateDate?: Date;
            InitiatedByApp?: string;
            InitiatedBySid?: number;
            Instructions?: string;
            Location?: string;
            Num1?: number;
            Num2?: number;
            Num3?: number;
            Num4?: number;
            Num5?: number;
            Priority?: string;
            ProjectedStartDate?: Date;
            ProjectSid?: number;
            Reactive?: boolean;
            RequestedBy?: number;
            RequestedBySid?: number;
            RequestId: number;
            Stage?: string;
            Status?: string;
            SubmitTo?: number;
            SubmitToSid?: number;
            Supervisor?: number;
            SupervisorSid?: number;
            Text1?: string;
            Text10?: string;
            Text11?: string;
            Text12?: string;
            Text13?: string;
            Text14?: string;
            Text15?: string;
            Text16?: string;
            Text17?: string;
            Text18?: string;
            Text19?: string;
            Text2?: string;
            Text20?: string;
            Text3?: string;
            Text4?: string;
            Text5?: string;
            Text6?: string;
            Text7?: string;
            Text8?: string;
            Text9?: string;
            WebServiceRequestId?: string;
            WOCustFieldCatId?: number;
            WOTemplateId: string;
        }
        export interface CreateSearchDefinition extends ServiceTypes.CoreRequestBase {
            AcctNum?: string[];
            ActivityZone?: string[];
            ActualFinishDateBegin?: Date;
            ActualFinishDateEnd?: Date;
            ActualFinishDateIsNull?: boolean;
            ActualFinishDateNotInRange?: boolean;
            ActualFinishDateRangeIncludeCurrent?: boolean;
            ActualFinishDateRangeLast?: number;
            ActualFinishDateRangeNext?: number;
            ActualFinishDateRangeUnits?: number;
            ActualStartDateBegin?: Date;
            ActualStartDateEnd?: Date;
            ActualStartDateIsNull?: boolean;
            ActualStartDateNotInRange?: boolean;
            ActualStartDateRangeIncludeCurrent?: boolean;
            ActualStartDateRangeLast?: number;
            ActualStartDateRangeNext?: number;
            ActualStartDateRangeUnits?: number;
            ApplyToEntity?: string[];
            AssetGroup?: string[];
            Canceled?: boolean;
            CancelledBy?: string[];
            CancelledBySid?: number[];
            CancelledBySidIsInList?: boolean;
            CancelReason?: string[];
            Closed?: boolean;
            ClosedBySid?: number[];
            ClosedBySidIsInList?: boolean;
            ContractorName?: string[];
            ContractorSid?: number[];
            ContractorSidIsInList?: boolean;
            ContractWOId?: string[];
            ContrBillable?: boolean;
            CreatedByCycle?: boolean;
            CycleFrom?: number[];
            CycleIntervalNum?: number[];
            CycleIntervalNumIsInList?: boolean;
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
            DatePrintedBegin?: Date;
            DatePrintedEnd?: Date;
            DatePrintedIsNull?: boolean;
            DatePrintedNotInRange?: boolean;
            DatePrintedRangeIncludeCurrent?: boolean;
            DatePrintedRangeLast?: number;
            DatePrintedRangeNext?: number;
            DatePrintedRangeUnits?: number;
            DateSubmitToBegin?: Date;
            DateSubmitToEnd?: Date;
            DateSubmitToIsNull?: boolean;
            DateSubmitToNotInRange?: boolean;
            DateSubmitToOpenBegin?: Date;
            DateSubmitToOpenEnd?: Date;
            DateSubmitToOpenIsNull?: boolean;
            DateSubmitToOpenNotInRange?: boolean;
            DateSubmitToOpenRangeIncludeCurrent?: boolean;
            DateSubmitToOpenRangeLast?: number;
            DateSubmitToOpenRangeNext?: number;
            DateSubmitToOpenRangeUnits?: number;
            DateSubmitToRangeIncludeCurrent?: boolean;
            DateSubmitToRangeLast?: number;
            DateSubmitToRangeNext?: number;
            DateSubmitToRangeUnits?: number;
            DateToBePrintedBegin?: Date;
            DateToBePrintedEnd?: Date;
            DateToBePrintedIsNull?: boolean;
            DateToBePrintedNotInRange?: boolean;
            DateToBePrintedRangeIncludeCurrent?: boolean;
            DateToBePrintedRangeLast?: number;
            DateToBePrintedRangeNext?: number;
            DateToBePrintedRangeUnits?: number;
            DateWOClosedBegin?: Date;
            DateWOClosedEnd?: Date;
            DateWOClosedIsNull?: boolean;
            DateWOClosedNotInRange?: boolean;
            DateWOClosedRangeIncludeCurrent?: boolean;
            DateWOClosedRangeLast?: number;
            DateWOClosedRangeNext?: number;
            DateWOClosedRangeUnits?: number;
            Description?: string[];
            District?: string[];
            DomainId?: number[];
            DomainIdIsInList?: boolean;
            DomainIds?: number[];
            EffortIncludeNulls?: boolean;
            EffortIsMaxValueExclusive?: boolean;
            EffortIsMinValueExclusive?: boolean;
            EffortMaxValue?: number;
            EffortMinValue?: number;
            EffortRangeType?: number;
            EffortValues?: number[];
            EnableEurl?: boolean;
            EntityType?: string;
            EntityUids?: string[];
            ExpenseType?: number[];
            Extent?: CoreTypes.GISExtent;
            FeatureType?: string;
            FeatureUids?: string[];
            FromDateBegin?: Date;
            FromDateEnd?: Date;
            FromDateIsNull?: boolean;
            FromDateNotInRange?: boolean;
            FromDateRangeIncludeCurrent?: boolean;
            FromDateRangeLast?: number;
            FromDateRangeNext?: number;
            FromDateRangeUnits?: number;
            HasAttachment?: boolean;
            HasCase?: boolean;
            HasInspection?: boolean;
            HasRequest?: boolean;
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
            IsReactive?: boolean;
            LegalBillable?: boolean;
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
            NumDaysBefore?: number[];
            NumDaysBeforeIsInList?: boolean;
            PastDue?: boolean;
            PrimaryContractId?: number[];
            PrimaryContractIdIsInList?: boolean;
            Priority?: string[];
            ProjectedFinishDateBegin?: Date;
            ProjectedFinishDateEnd?: Date;
            ProjectedFinishDateIsNull?: boolean;
            ProjectedFinishDateNotInRange?: boolean;
            ProjectedFinishDateRangeIncludeCurrent?: boolean;
            ProjectedFinishDateRangeLast?: number;
            ProjectedFinishDateRangeNext?: number;
            ProjectedFinishDateRangeUnits?: number;
            ProjectedStartDateBegin?: Date;
            ProjectedStartDateEnd?: Date;
            ProjectedStartDateIsNull?: boolean;
            ProjectedStartDateNotInRange?: boolean;
            ProjectedStartDateRangeIncludeCurrent?: boolean;
            ProjectedStartDateRangeLast?: number;
            ProjectedStartDateRangeNext?: number;
            ProjectedStartDateRangeUnits?: number;
            ProjectName?: string[];
            ProjectSid?: number[];
            ProjectSidIsInList?: boolean;
            RequestedBy?: string[];
            RequestedBySid?: number[];
            RequestedBySidIsInList?: boolean;
            Resolution?: string[];
            SaveDefinition?: boolean;
            ScheduleDateBegin?: Date;
            ScheduleDateEnd?: Date;
            ScheduleDateIsNull?: boolean;
            ScheduleDateNotInRange?: boolean;
            ScheduleDateRangeIncludeCurrent?: boolean;
            ScheduleDateRangeLast?: number;
            ScheduleDateRangeNext?: number;
            ScheduleDateRangeUnits?: number;
            SearchName?: string;
            SharedWithin?: number;
            Shop?: string[];
            SourceWOId?: string[];
            Stage?: number[];
            Status?: string[];
            StreetName?: string[];
            SubmitTo?: number[];
            SubmitToOpenBy?: string[];
            SubmitToOpenBySid?: number[];
            SubmitToOpenBySidIsInList?: boolean;
            SubmitToSid?: number[];
            SubmitToSidIsInList?: boolean;
            Supervisor?: string[];
            SupervisorSid?: number[];
            SupervisorSidIsInList?: boolean;
            TaskActualFinishDateBegin?: Date;
            TaskActualFinishDateEnd?: Date;
            TaskActualFinishDateIsNull?: boolean;
            TaskActualFinishDateNotInRange?: boolean;
            TaskActualFinishDateRangeIncludeCurrent?: boolean;
            TaskActualFinishDateRangeLast?: number;
            TaskActualFinishDateRangeNext?: number;
            TaskActualFinishDateRangeUnits?: number;
            TaskAssignedTo?: number[];
            TaskAssignedToIsInList?: boolean;
            TaskStatus?: string[];
            Text1?: string[];
            Text10?: string[];
            Text11?: string[];
            Text12?: string[];
            Text13?: string[];
            Text14?: string[];
            Text15?: string[];
            Text16?: string[];
            Text17?: string[];
            Text18?: string[];
            Text19?: string[];
            Text2?: string[];
            Text20?: string[];
            Text3?: string[];
            Text4?: string[];
            Text5?: string[];
            Text6?: string[];
            Text7?: string[];
            Text8?: string[];
            Text9?: string[];
            TileNo?: string[];
            TransToWOId?: string[];
            Unattached?: boolean;
            UnitsAccompDesc?: string[];
            UnitsAccompDescLock?: boolean;
            UnitsAccomplishedIncludeNulls?: boolean;
            UnitsAccomplishedIsMaxValueExclusive?: boolean;
            UnitsAccomplishedIsMinValueExclusive?: boolean;
            UnitsAccomplishedMaxValue?: number;
            UnitsAccomplishedMinValue?: number;
            UnitsAccomplishedRangeType?: number;
            UnitsAccomplishedValues?: number[];
            UpdateMap?: boolean;
            WOAddress?: string[];
            WOCategory?: string[];
            WOClosedBy?: string[];
            WOCostIncludeNulls?: boolean;
            WOCostIsMaxValueExclusive?: boolean;
            WOCostIsMinValueExclusive?: boolean;
            WOCostMaxValue?: number;
            WOCostMinValue?: number;
            WOCostRangeType?: number;
            WOCostValues?: number[];
            WOCustFieldCatId?: number[];
            WOCustFieldCatIdIsInList?: boolean;
            WOEquipCostIncludeNulls?: boolean;
            WOEquipCostIsMaxValueExclusive?: boolean;
            WOEquipCostIsMinValueExclusive?: boolean;
            WOEquipCostMaxValue?: number;
            WOEquipCostMinValue?: number;
            WOEquipCostRangeType?: number;
            WOEquipCostValues?: number[];
            WOLaborCostIncludeNulls?: boolean;
            WOLaborCostIsMaxValueExclusive?: boolean;
            WOLaborCostIsMinValueExclusive?: boolean;
            WOLaborCostMaxValue?: number;
            WOLaborCostMinValue?: number;
            WOLaborCostRangeType?: number;
            WOLaborCostValues?: number[];
            WOMatCostIncludeNulls?: boolean;
            WOMatCostIsMaxValueExclusive?: boolean;
            WOMatCostIsMinValueExclusive?: boolean;
            WOMatCostMaxValue?: number;
            WOMatCostMinValue?: number;
            WOMatCostRangeType?: number;
            WOMatCostValues?: number[];
            WOPermitCostIncludeNulls?: boolean;
            WOPermitCostIsMaxValueExclusive?: boolean;
            WOPermitCostIsMinValueExclusive?: boolean;
            WOPermitCostMaxValue?: number;
            WOPermitCostMinValue?: number;
            WOPermitCostRangeType?: number;
            WOPermitCostValues?: number[];
            WorkCompletedBy?: string[];
            WorkCompletedBySid?: number[];
            WorkCompletedBySidIsInList?: boolean;
            WorkOrderId?: string[];
            WorkOrderIds?: string[];
            WOTemplateId?: string[];
            WOTemplateIds?: string[];
        }
        export interface CustomFields extends ServiceTypes.CoreRequestBase {
            WorkOrderIds: string[];
        }
        export interface CycleFrom extends ServiceTypes.CoreRequestBase {
        }
        export interface CycleIntervals extends ServiceTypes.CoreRequestBase {
        }
        export interface CycleTypes extends ServiceTypes.CoreRequestBase {
        }
        export interface Entities extends ServiceTypes.CoreRequestBase {
            GetGisData?: boolean;
            WorkOrderId?: string;
            WorkOrderIds?: string[];
        }
        export interface ExpenseTypes extends ServiceTypes.CoreRequestBase {
        }
        export interface InstructionsByWorkOrderIds extends ServiceTypes.CoreRequestBase {
            WorkOrderIds: string[];
        }
        export interface LinkInspections extends ServiceTypes.CoreRequestBase {
            InspectionIds: number[];
            WorkOrderId: string;
        }
        export interface LinkServiceRequests extends ServiceTypes.CoreRequestBase {
            RequestIds: number[];
            WorkOrderId: string;
        }
        export interface Move extends ServiceTypes.CoreRequestBase {
            WKID?: number;
            WKT?: string;
            WorkOrderId: string;
            X: number;
            Y: number;
        }
        export interface Priorities extends ServiceTypes.CoreRequestBase {
        }
        export interface RemoveEntities extends ServiceTypes.CoreRequestBase {
            EntityType?: string;
            EntityUids?: string[];
            ObjectIds?: number[];
            UpdateXY?: boolean;
            WorkOrderId: string;
        }
        export interface ReOpen extends ServiceTypes.CoreRequestBase {
            WorkOrderIds: string[];
        }
        export interface Search extends ServiceTypes.CoreRequestBase {
            AcctNum?: string[];
            ActivityZone?: string[];
            ActualFinishDateBegin?: Date;
            ActualFinishDateEnd?: Date;
            ActualFinishDateIsNull?: boolean;
            ActualFinishDateNotInRange?: boolean;
            ActualFinishDateRangeIncludeCurrent?: boolean;
            ActualFinishDateRangeLast?: number;
            ActualFinishDateRangeNext?: number;
            ActualFinishDateRangeUnits?: number;
            ActualStartDateBegin?: Date;
            ActualStartDateEnd?: Date;
            ActualStartDateIsNull?: boolean;
            ActualStartDateNotInRange?: boolean;
            ActualStartDateRangeIncludeCurrent?: boolean;
            ActualStartDateRangeLast?: number;
            ActualStartDateRangeNext?: number;
            ActualStartDateRangeUnits?: number;
            ApplyToEntity?: string[];
            AssetGroup?: string[];
            Canceled?: boolean;
            CancelledBy?: string[];
            CancelledBySid?: number[];
            CancelledBySidIsInList?: boolean;
            CancelReason?: string[];
            Closed?: boolean;
            ClosedBySid?: number[];
            ClosedBySidIsInList?: boolean;
            ContractorName?: string[];
            ContractorSid?: number[];
            ContractorSidIsInList?: boolean;
            ContractWOId?: string[];
            ContrBillable?: boolean;
            CreatedByCycle?: boolean;
            CycleFrom?: number[];
            CycleIntervalNum?: number[];
            CycleIntervalNumIsInList?: boolean;
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
            DatePrintedBegin?: Date;
            DatePrintedEnd?: Date;
            DatePrintedIsNull?: boolean;
            DatePrintedNotInRange?: boolean;
            DatePrintedRangeIncludeCurrent?: boolean;
            DatePrintedRangeLast?: number;
            DatePrintedRangeNext?: number;
            DatePrintedRangeUnits?: number;
            DateSubmitToBegin?: Date;
            DateSubmitToEnd?: Date;
            DateSubmitToIsNull?: boolean;
            DateSubmitToNotInRange?: boolean;
            DateSubmitToOpenBegin?: Date;
            DateSubmitToOpenEnd?: Date;
            DateSubmitToOpenIsNull?: boolean;
            DateSubmitToOpenNotInRange?: boolean;
            DateSubmitToOpenRangeIncludeCurrent?: boolean;
            DateSubmitToOpenRangeLast?: number;
            DateSubmitToOpenRangeNext?: number;
            DateSubmitToOpenRangeUnits?: number;
            DateSubmitToRangeIncludeCurrent?: boolean;
            DateSubmitToRangeLast?: number;
            DateSubmitToRangeNext?: number;
            DateSubmitToRangeUnits?: number;
            DateToBePrintedBegin?: Date;
            DateToBePrintedEnd?: Date;
            DateToBePrintedIsNull?: boolean;
            DateToBePrintedNotInRange?: boolean;
            DateToBePrintedRangeIncludeCurrent?: boolean;
            DateToBePrintedRangeLast?: number;
            DateToBePrintedRangeNext?: number;
            DateToBePrintedRangeUnits?: number;
            DateWOClosedBegin?: Date;
            DateWOClosedEnd?: Date;
            DateWOClosedIsNull?: boolean;
            DateWOClosedNotInRange?: boolean;
            DateWOClosedRangeIncludeCurrent?: boolean;
            DateWOClosedRangeLast?: number;
            DateWOClosedRangeNext?: number;
            DateWOClosedRangeUnits?: number;
            Description?: string[];
            District?: string[];
            DomainId?: number[];
            DomainIdIsInList?: boolean;
            DomainIds?: number[];
            EffortIncludeNulls?: boolean;
            EffortIsMaxValueExclusive?: boolean;
            EffortIsMinValueExclusive?: boolean;
            EffortMaxValue?: number;
            EffortMinValue?: number;
            EffortRangeType?: number;
            EffortValues?: number[];
            EntityType?: string;
            EntityUids?: string[];
            ExpenseType?: number[];
            Extent?: CoreTypes.GISExtent;
            FeatureType?: string;
            FeatureUids?: string[];
            FromDateBegin?: Date;
            FromDateEnd?: Date;
            FromDateIsNull?: boolean;
            FromDateNotInRange?: boolean;
            FromDateRangeIncludeCurrent?: boolean;
            FromDateRangeLast?: number;
            FromDateRangeNext?: number;
            FromDateRangeUnits?: number;
            HasAttachment?: boolean;
            HasCase?: boolean;
            HasInspection?: boolean;
            HasRequest?: boolean;
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
            IsReactive?: boolean;
            LegalBillable?: boolean;
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
            NumDaysBefore?: number[];
            NumDaysBeforeIsInList?: boolean;
            PastDue?: boolean;
            PrimaryContractId?: number[];
            PrimaryContractIdIsInList?: boolean;
            Priority?: string[];
            ProjectedFinishDateBegin?: Date;
            ProjectedFinishDateEnd?: Date;
            ProjectedFinishDateIsNull?: boolean;
            ProjectedFinishDateNotInRange?: boolean;
            ProjectedFinishDateRangeIncludeCurrent?: boolean;
            ProjectedFinishDateRangeLast?: number;
            ProjectedFinishDateRangeNext?: number;
            ProjectedFinishDateRangeUnits?: number;
            ProjectedStartDateBegin?: Date;
            ProjectedStartDateEnd?: Date;
            ProjectedStartDateIsNull?: boolean;
            ProjectedStartDateNotInRange?: boolean;
            ProjectedStartDateRangeIncludeCurrent?: boolean;
            ProjectedStartDateRangeLast?: number;
            ProjectedStartDateRangeNext?: number;
            ProjectedStartDateRangeUnits?: number;
            ProjectName?: string[];
            ProjectSid?: number[];
            ProjectSidIsInList?: boolean;
            RequestedBy?: string[];
            RequestedBySid?: number[];
            RequestedBySidIsInList?: boolean;
            Resolution?: string[];
            ScheduleDateBegin?: Date;
            ScheduleDateEnd?: Date;
            ScheduleDateIsNull?: boolean;
            ScheduleDateNotInRange?: boolean;
            ScheduleDateRangeIncludeCurrent?: boolean;
            ScheduleDateRangeLast?: number;
            ScheduleDateRangeNext?: number;
            ScheduleDateRangeUnits?: number;
            Shop?: string[];
            SourceWOId?: string[];
            Stage?: number[];
            Status?: string[];
            StreetName?: string[];
            SubmitTo?: number[];
            SubmitToOpenBy?: string[];
            SubmitToOpenBySid?: number[];
            SubmitToOpenBySidIsInList?: boolean;
            SubmitToSid?: number[];
            SubmitToSidIsInList?: boolean;
            Supervisor?: string[];
            SupervisorSid?: number[];
            SupervisorSidIsInList?: boolean;
            TaskActualFinishDateBegin?: Date;
            TaskActualFinishDateEnd?: Date;
            TaskActualFinishDateIsNull?: boolean;
            TaskActualFinishDateNotInRange?: boolean;
            TaskActualFinishDateRangeIncludeCurrent?: boolean;
            TaskActualFinishDateRangeLast?: number;
            TaskActualFinishDateRangeNext?: number;
            TaskActualFinishDateRangeUnits?: number;
            TaskAssignedTo?: number[];
            TaskAssignedToIsInList?: boolean;
            TaskStatus?: string[];
            Text1?: string[];
            Text10?: string[];
            Text11?: string[];
            Text12?: string[];
            Text13?: string[];
            Text14?: string[];
            Text15?: string[];
            Text16?: string[];
            Text17?: string[];
            Text18?: string[];
            Text19?: string[];
            Text2?: string[];
            Text20?: string[];
            Text3?: string[];
            Text4?: string[];
            Text5?: string[];
            Text6?: string[];
            Text7?: string[];
            Text8?: string[];
            Text9?: string[];
            TileNo?: string[];
            TransToWOId?: string[];
            Unattached?: boolean;
            UnitsAccompDesc?: string[];
            UnitsAccompDescLock?: boolean;
            UnitsAccomplishedIncludeNulls?: boolean;
            UnitsAccomplishedIsMaxValueExclusive?: boolean;
            UnitsAccomplishedIsMinValueExclusive?: boolean;
            UnitsAccomplishedMaxValue?: number;
            UnitsAccomplishedMinValue?: number;
            UnitsAccomplishedRangeType?: number;
            UnitsAccomplishedValues?: number[];
            UpdateMap?: boolean;
            WOAddress?: string[];
            WOCategory?: string[];
            WOClosedBy?: string[];
            WOCostIncludeNulls?: boolean;
            WOCostIsMaxValueExclusive?: boolean;
            WOCostIsMinValueExclusive?: boolean;
            WOCostMaxValue?: number;
            WOCostMinValue?: number;
            WOCostRangeType?: number;
            WOCostValues?: number[];
            WOCustFieldCatId?: number[];
            WOCustFieldCatIdIsInList?: boolean;
            WOEquipCostIncludeNulls?: boolean;
            WOEquipCostIsMaxValueExclusive?: boolean;
            WOEquipCostIsMinValueExclusive?: boolean;
            WOEquipCostMaxValue?: number;
            WOEquipCostMinValue?: number;
            WOEquipCostRangeType?: number;
            WOEquipCostValues?: number[];
            WOLaborCostIncludeNulls?: boolean;
            WOLaborCostIsMaxValueExclusive?: boolean;
            WOLaborCostIsMinValueExclusive?: boolean;
            WOLaborCostMaxValue?: number;
            WOLaborCostMinValue?: number;
            WOLaborCostRangeType?: number;
            WOLaborCostValues?: number[];
            WOMatCostIncludeNulls?: boolean;
            WOMatCostIsMaxValueExclusive?: boolean;
            WOMatCostIsMinValueExclusive?: boolean;
            WOMatCostMaxValue?: number;
            WOMatCostMinValue?: number;
            WOMatCostRangeType?: number;
            WOMatCostValues?: number[];
            WOPermitCostIncludeNulls?: boolean;
            WOPermitCostIsMaxValueExclusive?: boolean;
            WOPermitCostIsMinValueExclusive?: boolean;
            WOPermitCostMaxValue?: number;
            WOPermitCostMinValue?: number;
            WOPermitCostRangeType?: number;
            WOPermitCostValues?: number[];
            WorkCompletedBy?: string[];
            WorkCompletedBySid?: number[];
            WorkCompletedBySidIsInList?: boolean;
            WorkOrderId?: string[];
            WorkOrderIds?: string[];
            WOTemplateId?: string[];
            WOTemplateIds?: string[];
        }
        export interface SearchObject extends ServiceTypes.CoreRequestBase {
            WorkOrderId: string;
        }
        export interface Stages extends ServiceTypes.CoreRequestBase {
        }
        export interface Statuses extends ServiceTypes.CoreRequestBase {
        }
        export interface SubmitTos extends ServiceTypes.CoreRequestBase {
            DomainIds?: number[];
            IncludeInactiveEmployees?: boolean;
        }
        export interface Supervisors extends ServiceTypes.CoreRequestBase {
            DomainIds?: number[];
            IncludeInactiveEmployees?: boolean;
        }
        export interface Template extends ServiceTypes.CoreRequestBase {
            WOTemplateId: string;
        }
        export interface TemplateCustomFields extends ServiceTypes.CoreRequestBase {
            WOTemplateId: string;
        }
        export interface Templates extends ServiceTypes.CoreRequestBase {
            CanCreate?: boolean;
            Category?: string;
            EntityType: string;
            EntityTypes: string[];
            WOTemplateIds?: string[];
        }
        export interface Uncancel extends ServiceTypes.CoreRequestBase {
            WorkOrderIds: string[];
        }
        export interface UnlinkInspections extends ServiceTypes.CoreRequestBase {
            InspectionIds?: number[];
            WorkOrderId: string;
        }
        export interface UnlinkServiceRequests extends ServiceTypes.CoreRequestBase {
            RequestIds?: number[];
            WorkOrderId: string;
        }
        export interface Update extends ServiceTypes.CoreRequestBase {
            Account?: string;
            ActualFinishDate?: Date;
            ActualStartDate?: Date;
            Address?: string;
            ApplyToEntity?: string;
            AssetGroup?: string;
            CompletedBy?: number;
            CompletedBySid?: number;
            ContractorSid?: number;
            ContractWOId?: string;
            ContrBillable?: boolean;
            CustomFieldValues?: {[key: number]: string};
            CycleFrom?: string;
            CycleIntervalNum?: number;
            CycleIntervalUnit?: string;
            CycleType?: string;
            Date1?: Date;
            Date2?: Date;
            Date3?: Date;
            Date4?: Date;
            Date5?: Date;
            DatePrinted?: Date;
            DateSubmitTo?: Date;
            DateSubmitToOpen?: Date;
            DateToBePrinted?: Date;
            Description?: string;
            District?: string;
            Effort?: number;
            ExpenseType?: string;
            FromDate?: Date;
            InitiateDate?: Date;
            InitiatedByApp?: string;
            InitiatedBySid?: number;
            InspectionIds?: number[];
            Instructions?: string;
            LegalBillable?: boolean;
            Location?: string;
            MapPage?: string;
            Num1?: number;
            Num2?: number;
            Num3?: number;
            Num4?: number;
            Num5?: number;
            PrimaryContractId?: number;
            Priority?: string;
            Project?: number;
            ProjectedFinishDate?: Date;
            ProjectedStartDate?: Date;
            Reactive?: boolean;
            RequestedBySid?: number;
            RequestIds?: number[];
            Resolution?: string;
            ScheduleDate?: Date;
            Shop?: string;
            SourceWOId?: string;
            Stage?: string;
            Status?: string;
            StreetName?: string;
            SubmitTo?: number;
            SubmitToOpenBy?: number;
            SubmitToOpenBySid?: number;
            SubmitToSid?: number;
            Supervisor?: number;
            SupervisorSid?: number;
            SuppressCycle?: boolean;
            Text1?: string;
            Text10?: string;
            Text11?: string;
            Text12?: string;
            Text13?: string;
            Text14?: string;
            Text15?: string;
            Text16?: string;
            Text17?: string;
            Text18?: string;
            Text19?: string;
            Text2?: string;
            Text20?: string;
            Text3?: string;
            Text4?: string;
            Text5?: string;
            Text6?: string;
            Text7?: string;
            Text8?: string;
            Text9?: string;
            TileNo?: string;
            UnitsAccompDescLock?: boolean;
            UnitsAccomplished?: number;
            UnitsAccomplishedDescription?: string;
            UpdateMap?: boolean;
            WOCategory?: string;
            WOCustFieldCatId?: number;
            WorkOrderId: string;
            WOTemplateId?: string;
        }
        export interface UpdateEntity extends ServiceTypes.CoreRequestBase {
            EntityType: string;
            EntityUid: string;
            WorkComplete?: boolean;
            WorkOrderId: string;
        }
        export interface WorkOrderInspections extends ServiceTypes.CoreRequestBase {
            WorkOrderIds: string[];
        }
        export interface WorkOrderServiceRequests extends ServiceTypes.CoreRequestBase {
            WorkOrderIds: string[];
        }
        export interface WorkOrderWorkOrders extends ServiceTypes.CoreRequestBase {
            CreatedByCycle?: boolean;
            WorkOrderIds: string[];
        }
    }
    export namespace Responses {
        export interface AddComments extends ServiceTypes.CoreResponseBase_<string> {}
        export interface AddEntities extends ServiceTypes.CoreResponseBase_<CoreTypes.WorkOrderEntity[]> {}
        export interface ById extends ServiceTypes.CoreResponseBase_<CoreTypes.WorkOrderBase> {}
        export interface ByIds extends ServiceTypes.CoreResponseBase_<CoreTypes.WorkOrderBase[]> {}
        export interface Cancel extends ServiceTypes.CoreResponseBase_<CoreTypes.WorkOrderBase[]> {}
        export interface Categories extends ServiceTypes.CoreResponseBase_<CoreTypes.CodeDesc[]> {}
        export interface ChangeCustomFieldCategory extends ServiceTypes.CoreResponseBase_<CoreTypes.WorkOrderBase[]> {}
        export interface Close extends ServiceTypes.CoreResponseBase_<CoreTypes.WorkOrderBase[]> {}
        export interface Combine extends ServiceTypes.CoreResponseBase_<CoreTypes.WorkOrderBase[]> {}
        export interface Comments extends ServiceTypes.CoreResponseBase_<string> {}
        export interface CommentsByWorkOrderIds extends ServiceTypes.CoreResponseBase_<{[key: string]: string}> {}
        export interface Create extends ServiceTypes.CoreResponseVerified_<CoreTypes.WorkOrderBase[]> {}
        export interface CreateFromInspection extends ServiceTypes.CoreResponseBase_<CoreTypes.WorkOrderBase[]> {}
        export interface CreateFromParent extends ServiceTypes.CoreResponseBase_<CoreTypes.WorkOrderBase[]> {}
        export interface CreateFromServiceRequest extends ServiceTypes.CoreResponseBase_<CoreTypes.WorkOrderBase[]> {}
        export interface CreateSearchDefinition extends ServiceTypes.CoreResponseBase_<CoreTypes.SearchDefinition> {}
        export interface CustomFields extends ServiceTypes.CoreResponseBase_<{[key: string]: CoreTypes.WOCustField[]}> {}
        export interface CycleFrom extends ServiceTypes.CoreResponseBase_<{[key: string]: string}> {}
        export interface CycleIntervals extends ServiceTypes.CoreResponseBase_<{[key: string]: string}> {}
        export interface CycleTypes extends ServiceTypes.CoreResponseBase_<{[key: string]: string}> {}
        export interface Entities extends ServiceTypes.CoreResponseBase_<CoreTypes.WorkOrderEntity[]> {}
        export interface ExpenseTypes extends ServiceTypes.CoreResponseBase_<{[key: string]: string}> {}
        export interface InstructionsByWorkOrderIds extends ServiceTypes.CoreResponseBase_<{[key: string]: string}> {}
        export interface LinkInspections extends ServiceTypes.CoreResponseBase_<number[]> {}
        export interface LinkServiceRequests extends ServiceTypes.CoreResponseBase_<number[]> {}
        export interface Move extends ServiceTypes.CoreResponseBase_<CoreTypes.GISPoint> {}
        export interface Priorities extends ServiceTypes.CoreResponseBase_<CoreTypes.CodeDesc[]> {}
        export interface RemoveEntities extends ServiceTypes.CoreResponseBase_<string[]> {}
        export interface ReOpen extends ServiceTypes.CoreResponseBase_<CoreTypes.WorkOrderBase[]> {}
        export interface Search extends ServiceTypes.CoreResponseBase_<string[]> {}
        export interface SearchObject extends ServiceTypes.CoreResponseBase_<CoreTypes.WorkOrderBase[]> {}
        export interface Stages extends ServiceTypes.CoreResponseBase_<{[key: string]: string}> {}
        export interface Statuses extends ServiceTypes.CoreResponseBase_<CoreTypes.CodeDesc[]> {}
        export interface SubmitTos extends ServiceTypes.CoreResponseBase_<CoreTypes.EmployeeNameId[]> {}
        export interface Supervisors extends ServiceTypes.CoreResponseBase_<CoreTypes.EmployeeNameId[]> {}
        export interface Template extends ServiceTypes.CoreResponseBase_<CoreTypes.WOTemplateBase> {}
        export interface TemplateCustomFields extends ServiceTypes.CoreResponseBase_<CoreTypes.CategoryCustField[]> {}
        export interface Templates extends ServiceTypes.CoreResponseBase_<CoreTypes.WOTemplateName[]> {}
        export interface Uncancel extends ServiceTypes.CoreResponseBase_<CoreTypes.WorkOrderBase[]> {}
        export interface UnlinkInspections extends ServiceTypes.CoreResponseBase_<number[]> {}
        export interface UnlinkServiceRequests extends ServiceTypes.CoreResponseBase_<number[]> {}
        export interface Update extends ServiceTypes.CoreResponseBase_<CoreTypes.WorkOrderBase> {}
        export interface UpdateEntity extends ServiceTypes.CoreResponseBase_<CoreTypes.WorkOrderEntity> {}
        export interface WorkOrderInspections extends ServiceTypes.CoreResponseBase_<CoreTypes.WorkOrderInspection[]> {}
        export interface WorkOrderServiceRequests extends ServiceTypes.CoreResponseBase_<CoreTypes.RequestWorkOrder[]> {}
        export interface WorkOrderWorkOrders extends ServiceTypes.CoreResponseBase_<CoreTypes.WorkOrderRelatedWorkOrder[]> {}
    }
    export interface IWorkOrderService {
        AddComments?: (request: Requests.AddComments) => AbortablePromise<Responses.AddComments>;
        AddEntities?: (request: Requests.AddEntities) => AbortablePromise<Responses.AddEntities>;
        ById?: (request: Requests.ById) => AbortablePromise<Responses.ById>;
        ByIds?: (request: Requests.ByIds) => AbortablePromise<Responses.ByIds>;
        Cancel?: (request: Requests.Cancel) => AbortablePromise<Responses.Cancel>;
        Categories?: (request: Requests.Categories) => AbortablePromise<Responses.Categories>;
        ChangeCustomFieldCategory?: (request: Requests.ChangeCustomFieldCategory) => AbortablePromise<Responses.ChangeCustomFieldCategory>;
        Close?: (request: Requests.Close) => AbortablePromise<Responses.Close>;
        Combine?: (request: Requests.Combine) => AbortablePromise<Responses.Combine>;
        Comments?: (request: Requests.Comments) => AbortablePromise<Responses.Comments>;
        CommentsByWorkOrderIds?: (request: Requests.CommentsByWorkOrderIds) => AbortablePromise<Responses.CommentsByWorkOrderIds>;
        Create?: (request: Requests.Create) => AbortablePromise<Responses.Create>;
        CreateFromInspection?: (request: Requests.CreateFromInspection) => AbortablePromise<Responses.CreateFromInspection>;
        CreateFromParent?: (request: Requests.CreateFromParent) => AbortablePromise<Responses.CreateFromParent>;
        CreateFromServiceRequest?: (request: Requests.CreateFromServiceRequest) => AbortablePromise<Responses.CreateFromServiceRequest>;
        CreateSearchDefinition?: (request: Requests.CreateSearchDefinition) => AbortablePromise<Responses.CreateSearchDefinition>;
        CustomFields?: (request: Requests.CustomFields) => AbortablePromise<Responses.CustomFields>;
        CycleFrom?: (request: Requests.CycleFrom) => AbortablePromise<Responses.CycleFrom>;
        CycleIntervals?: (request: Requests.CycleIntervals) => AbortablePromise<Responses.CycleIntervals>;
        CycleTypes?: (request: Requests.CycleTypes) => AbortablePromise<Responses.CycleTypes>;
        Entities?: (request: Requests.Entities) => AbortablePromise<Responses.Entities>;
        ExpenseTypes?: (request: Requests.ExpenseTypes) => AbortablePromise<Responses.ExpenseTypes>;
        InstructionsByWorkOrderIds?: (request: Requests.InstructionsByWorkOrderIds) => AbortablePromise<Responses.InstructionsByWorkOrderIds>;
        LinkInspections?: (request: Requests.LinkInspections) => AbortablePromise<Responses.LinkInspections>;
        LinkServiceRequests?: (request: Requests.LinkServiceRequests) => AbortablePromise<Responses.LinkServiceRequests>;
        Move?: (request: Requests.Move) => AbortablePromise<Responses.Move>;
        Priorities?: (request: Requests.Priorities) => AbortablePromise<Responses.Priorities>;
        RemoveEntities?: (request: Requests.RemoveEntities) => AbortablePromise<Responses.RemoveEntities>;
        ReOpen?: (request: Requests.ReOpen) => AbortablePromise<Responses.ReOpen>;
        Search?: (request: Requests.Search) => AbortablePromise<Responses.Search>;
        SearchObject?: (request: Requests.SearchObject) => AbortablePromise<Responses.SearchObject>;
        Stages?: (request: Requests.Stages) => AbortablePromise<Responses.Stages>;
        Statuses?: (request: Requests.Statuses) => AbortablePromise<Responses.Statuses>;
        SubmitTos?: (request: Requests.SubmitTos) => AbortablePromise<Responses.SubmitTos>;
        Supervisors?: (request: Requests.Supervisors) => AbortablePromise<Responses.Supervisors>;
        Template?: (request: Requests.Template) => AbortablePromise<Responses.Template>;
        TemplateCustomFields?: (request: Requests.TemplateCustomFields) => AbortablePromise<Responses.TemplateCustomFields>;
        Templates?: (request: Requests.Templates) => AbortablePromise<Responses.Templates>;
        Uncancel?: (request: Requests.Uncancel) => AbortablePromise<Responses.Uncancel>;
        UnlinkInspections?: (request: Requests.UnlinkInspections) => AbortablePromise<Responses.UnlinkInspections>;
        UnlinkServiceRequests?: (request: Requests.UnlinkServiceRequests) => AbortablePromise<Responses.UnlinkServiceRequests>;
        Update?: (request: Requests.Update) => AbortablePromise<Responses.Update>;
        UpdateEntity?: (request: Requests.UpdateEntity) => AbortablePromise<Responses.UpdateEntity>;
        WorkOrderInspections?: (request: Requests.WorkOrderInspections) => AbortablePromise<Responses.WorkOrderInspections>;
        WorkOrderServiceRequests?: (request: Requests.WorkOrderServiceRequests) => AbortablePromise<Responses.WorkOrderServiceRequests>;
        WorkOrderWorkOrders?: (request: Requests.WorkOrderWorkOrders) => AbortablePromise<Responses.WorkOrderWorkOrders>;
    }
}
