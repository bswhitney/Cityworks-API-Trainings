import { Enums, ServiceEnums, PromiseTypes, ServiceTypes, Types as CoreTypes } from '../../../bundles/core';
import AbortablePromise = PromiseTypes.AbortablePromise;

export namespace ContractServiceTypes { 
    export namespace Requests {
        export interface AddInvoice extends ServiceTypes.CoreRequestBase {
            AccountingDate?: Date;
            Attachment?: string;
            CheckIssuedDate?: Date;
            Comments?: string;
            ContractId: number;
            CoverSentDate?: Date;
            Description?: string;
            EAODate?: Date;
            InvoiceItems?: CoreTypes.InvoiceItem[];
            InvoiceNumber: string;
            OffialInvoiceReceivedDate?: Date;
            PencilInvoiceReceivedDate?: Date;
            PencilInvoiceReviewedDate?: Date;
            ValidateInvoiceDate?: Date;
        }
        export interface AddInvoiceItem extends ServiceTypes.CoreRequestBase {
            InvoiceId: number;
            LineItemCostId: number;
        }
        export interface AddLineItem extends ServiceTypes.CoreRequestBase {
            ContractId: number;
            ContractorSid?: number;
            ContractPeriod?: number;
            EmployeeSid?: number;
            FundSourceId?: number;
            ItemNumber?: string;
            LineItemId: number;
            PrjUnitPrice?: number;
            PrjUnits?: number;
            UnitPrice?: number;
            Units?: number;
            UnitsUsed?: number;
        }
        export interface ByIds extends ServiceTypes.CoreRequestBase {
            ContractIds?: number[];
        }
        export interface Claims extends ServiceTypes.CoreRequestBase {
            ContractIds: number[];
        }
        export interface Create extends ServiceTypes.CoreRequestBase {
            AccountantSid?: number;
            AcctManagerSid?: number;
            ActualBudget?: number;
            ActualFinishDate?: Date;
            Address?: string;
            BidBondPercent?: number;
            BidBudget?: number;
            BidDate?: Date;
            BidDepositPercent?: number;
            BondReleased?: boolean;
            BondReleaseDate?: Date;
            Category?: string;
            City?: string;
            Comments?: string;
            ContractClaims?: CoreTypes.ContractClaimBase[];
            ContractFundSources?: CoreTypes.ContractFundSource[];
            ContractLineItems?: CoreTypes.ContractLineItem[];
            ContractNumber: string;
            ContractorSid?: number;
            ContractSubcontractors?: CoreTypes.ContractSubcontractor[];
            ContractSubmittals?: CoreTypes.ContractSubmittal[];
            ContractTemplateId?: number;
            ContractType?: string;
            CustFieldCatId?: number;
            Date1?: Date;
            Date2?: Date;
            Date3?: Date;
            Date4?: Date;
            Date5?: Date;
            Description?: string;
            DesignDate?: Date;
            District?: string;
            DomainId?: number;
            Duration?: number;
            DurationUnit?: number;
            EstimatedBudget?: number;
            FinalInspDate?: Date;
            FinalPLInspDate?: Date;
            FundingSource?: string;
            GuaranteeInspDate?: Date;
            GuaranteePLInspDate?: Date;
            InitiatedBySid?: number;
            IsTemplate?: boolean;
            Location?: string;
            NextWOSeqId?: number;
            Num1?: number;
            Num2?: number;
            Num3?: number;
            Num4?: number;
            Num5?: number;
            OptionalPeriods?: number;
            PaymentBondPercent?: number;
            PerformanceBondDate?: Date;
            PerformanceBondPercent?: number;
            PermitIds?: number[];
            ScheduledFinishDate?: Date;
            SignedDate?: Date;
            StartDate?: Date;
            State?: string;
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
            TransmitDate?: Date;
            UseInspDate?: Date;
            UsePLInspDate?: Date;
            Viewable?: boolean;
            WOPrefix?: string;
            X?: number;
            Y?: number;
            Z?: number;
            Zip?: string;
        }
        export interface CreateFundSource extends ServiceTypes.CoreRequestBase {
            Amount?: number;
            ContractId: number;
            Description?: string;
            FiscalYear?: number;
            FundSource?: string;
            Notes?: string;
        }
        export interface CreateSearchDefinition extends ServiceTypes.CoreRequestBase {
            Accountant?: string[];
            AccountantSid?: number[];
            AccountantSidInList?: boolean;
            AcctManager?: string[];
            AcctManagerSid?: number[];
            AcctManagerSidInList?: boolean;
            ActualBudgetIncludeNulls?: boolean;
            ActualBudgetIsMaxValueExclusive?: boolean;
            ActualBudgetIsMinValueExclusive?: boolean;
            ActualBudgetMaxValue?: number;
            ActualBudgetMinValue?: number;
            ActualBudgetRangeType?: number;
            ActualBudgetValues?: number[];
            ActualCostIncludeNulls?: boolean;
            ActualCostIsMaxValueExclusive?: boolean;
            ActualCostIsMinValueExclusive?: boolean;
            ActualCostMaxValue?: number;
            ActualCostMinValue?: number;
            ActualCostRangeType?: number;
            ActualCostValues?: number[];
            ActualFinishDateBegin?: Date;
            ActualFinishDateEnd?: Date;
            ActualFinishDateIsNull?: boolean;
            ActualFinishDateNotInRange?: boolean;
            ActualFinishDateRangeIncludeCurrent?: boolean;
            ActualFinishDateRangeLast?: number;
            ActualFinishDateRangeNext?: number;
            ActualFinishDateRangeUnits?: number;
            Address?: string[];
            BidBondPercentIncludeNulls?: boolean;
            BidBondPercentIsMaxValueExclusive?: boolean;
            BidBondPercentIsMinValueExclusive?: boolean;
            BidBondPercentMaxValue?: number;
            BidBondPercentMinValue?: number;
            BidBondPercentRangeType?: number;
            BidBondPercentValues?: number[];
            BidBudgetIncludeNulls?: boolean;
            BidBudgetIsMaxValueExclusive?: boolean;
            BidBudgetIsMinValueExclusive?: boolean;
            BidBudgetMaxValue?: number;
            BidBudgetMinValue?: number;
            BidBudgetRangeType?: number;
            BidBudgetValues?: number[];
            BidDateBegin?: Date;
            BidDateEnd?: Date;
            BidDateIsNull?: boolean;
            BidDateNotInRange?: boolean;
            BidDateRangeIncludeCurrent?: boolean;
            BidDateRangeLast?: number;
            BidDateRangeNext?: number;
            BidDateRangeUnits?: number;
            BidDepositPercentIncludeNulls?: boolean;
            BidDepositPercentIsMaxValueExclusive?: boolean;
            BidDepositPercentIsMinValueExclusive?: boolean;
            BidDepositPercentMaxValue?: number;
            BidDepositPercentMinValue?: number;
            BidDepositPercentRangeType?: number;
            BidDepositPercentValues?: number[];
            BondReleased?: boolean;
            BondReleaseDateBegin?: Date;
            BondReleaseDateEnd?: Date;
            BondReleaseDateIsNull?: boolean;
            BondReleaseDateNotInRange?: boolean;
            BondReleaseDateRangeIncludeCurrent?: boolean;
            BondReleaseDateRangeLast?: number;
            BondReleaseDateRangeNext?: number;
            BondReleaseDateRangeUnits?: number;
            City?: string[];
            Comments?: string[];
            ContractId?: number[];
            ContractNumber?: string[];
            ContractorSid?: number[];
            ContractorSidInList?: boolean;
            ContractTemplateId?: number[];
            ContractTemplateIdInList?: boolean;
            ContractType?: string[];
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
            DateTimeModifiedBegin?: Date;
            DateTimeModifiedEnd?: Date;
            DateTimeModifiedIsNull?: boolean;
            DateTimeModifiedNotInRange?: boolean;
            DateTimeModifiedRangeIncludeCurrent?: boolean;
            DateTimeModifiedRangeLast?: number;
            DateTimeModifiedRangeNext?: number;
            DateTimeModifiedRangeUnits?: number;
            Description?: string[];
            DesignDateBegin?: Date;
            DesignDateEnd?: Date;
            DesignDateIsNull?: boolean;
            DesignDateNotInRange?: boolean;
            DesignDateRangeIncludeCurrent?: boolean;
            DesignDateRangeLast?: number;
            DesignDateRangeNext?: number;
            DesignDateRangeUnits?: number;
            District?: string[];
            DomainId?: number[];
            DurationIncludeNulls?: boolean;
            DurationIsMaxValueExclusive?: boolean;
            DurationIsMinValueExclusive?: boolean;
            DurationMaxValue?: number;
            DurationMinValue?: number;
            DurationRangeType?: number;
            DurationUnit?: number[];
            DurationValues?: number[];
            EstimatedBudgetIncludeNulls?: boolean;
            EstimatedBudgetIsMaxValueExclusive?: boolean;
            EstimatedBudgetIsMinValueExclusive?: boolean;
            EstimatedBudgetMaxValue?: number;
            EstimatedBudgetMinValue?: number;
            EstimatedBudgetRangeType?: number;
            EstimatedBudgetValues?: number[];
            FinalInspDateBegin?: Date;
            FinalInspDateEnd?: Date;
            FinalInspDateIsNull?: boolean;
            FinalInspDateNotInRange?: boolean;
            FinalInspDateRangeIncludeCurrent?: boolean;
            FinalInspDateRangeLast?: number;
            FinalInspDateRangeNext?: number;
            FinalInspDateRangeUnits?: number;
            FinalPlInspDateBegin?: Date;
            FinalPlInspDateEnd?: Date;
            FinalPlInspDateIsNull?: boolean;
            FinalPlInspDateNotInRange?: boolean;
            FinalPlInspDateRangeIncludeCurrent?: boolean;
            FinalPlInspDateRangeLast?: number;
            FinalPlInspDateRangeNext?: number;
            FinalPlInspDateRangeUnits?: number;
            FundingSource?: string[];
            GuaranteeInspDateBegin?: Date;
            GuaranteeInspDateEnd?: Date;
            GuaranteeInspDateIsNull?: boolean;
            GuaranteeInspDateNotInRange?: boolean;
            GuaranteeInspDateRangeIncludeCurrent?: boolean;
            GuaranteeInspDateRangeLast?: number;
            GuaranteeInspDateRangeNext?: number;
            GuaranteeInspDateRangeUnits?: number;
            GuaranteePLInspDateBegin?: Date;
            GuaranteePLInspDateEnd?: Date;
            GuaranteePLInspDateIsNull?: boolean;
            GuaranteePLInspDateNotInRange?: boolean;
            GuaranteePLInspDateRangeIncludeCurrent?: boolean;
            GuaranteePLInspDateRangeLast?: number;
            GuaranteePLInspDateRangeNext?: number;
            GuaranteePLInspDateRangeUnits?: number;
            IsTemplate?: boolean;
            Location?: string[];
            MaxResults?: number;
            NextWOSeqIdIncludeNulls?: boolean;
            NextWOSeqIdIsMaxValueExclusive?: boolean;
            NextWOSeqIdIsMinValueExclusive?: boolean;
            NextWOSeqIdMaxValue?: number;
            NextWOSeqIdMinValue?: number;
            NextWOSeqIdRangeType?: number;
            NextWOSeqIdValues?: number[];
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
            OptionalPeriodsIncludeNulls?: boolean;
            OptionalPeriodsIsMaxValueExclusive?: boolean;
            OptionalPeriodsIsMinValueExclusive?: boolean;
            OptionalPeriodsMaxValue?: number;
            OptionalPeriodsMinValue?: number;
            OptionalPeriodsRangeType?: number;
            OptionalPeriodsValues?: number[];
            PaymentBondPercentIncludeNulls?: boolean;
            PaymentBondPercentIsMaxValueExclusive?: boolean;
            PaymentBondPercentIsMinValueExclusive?: boolean;
            PaymentBondPercentMaxValue?: number;
            PaymentBondPercentMinValue?: number;
            PaymentBondPercentRangeType?: number;
            PaymentBondPercentValues?: number[];
            PerformanceBondDateBegin?: Date;
            PerformanceBondDateEnd?: Date;
            PerformanceBondDateIsNull?: boolean;
            PerformanceBondDateNotInRange?: boolean;
            PerformanceBondDateRangeIncludeCurrent?: boolean;
            PerformanceBondDateRangeLast?: number;
            PerformanceBondDateRangeNext?: number;
            PerformanceBondDateRangeUnits?: number;
            PerformanceBondPercentIncludeNulls?: boolean;
            PerformanceBondPercentIsMaxValueExclusive?: boolean;
            PerformanceBondPercentIsMinValueExclusive?: boolean;
            PerformanceBondPercentMaxValue?: number;
            PerformanceBondPercentMinValue?: number;
            PerformanceBondPercentRangeType?: number;
            PerformanceBondPercentValues?: number[];
            SaveDefinition?: boolean;
            ScheduledFinishDateBegin?: Date;
            ScheduledFinishDateEnd?: Date;
            ScheduledFinishDateIsNull?: boolean;
            ScheduledFinishDateNotInRange?: boolean;
            ScheduledFinishDateRangeIncludeCurrent?: boolean;
            ScheduledFinishDateRangeLast?: number;
            ScheduledFinishDateRangeNext?: number;
            ScheduledFinishDateRangeUnits?: number;
            SearchName?: string;
            SharedWithin?: number;
            SignedDateBegin?: Date;
            SignedDateEnd?: Date;
            SignedDateIsNull?: boolean;
            SignedDateNotInRange?: boolean;
            SignedDateRangeIncludeCurrent?: boolean;
            SignedDateRangeLast?: number;
            SignedDateRangeNext?: number;
            SignedDateRangeUnits?: number;
            StartDateBegin?: Date;
            StartDateEnd?: Date;
            StartDateIsNull?: boolean;
            StartDateNotInRange?: boolean;
            StartDateRangeIncludeCurrent?: boolean;
            StartDateRangeLast?: number;
            StartDateRangeNext?: number;
            StartDateRangeUnits?: number;
            State?: string[];
            Status?: string[];
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
            TransmitDateBegin?: Date;
            TransmitDateEnd?: Date;
            TransmitDateIsNull?: boolean;
            TransmitDateNotInRange?: boolean;
            TransmitDateRangeIncludeCurrent?: boolean;
            TransmitDateRangeLast?: number;
            TransmitDateRangeNext?: number;
            TransmitDateRangeUnits?: number;
            UseInspDateBegin?: Date;
            UseInspDateEnd?: Date;
            UseInspDateIsNull?: boolean;
            UseInspDateNotInRange?: boolean;
            UseInspDateRangeIncludeCurrent?: boolean;
            UseInspDateRangeLast?: number;
            UseInspDateRangeNext?: number;
            UseInspDateRangeUnits?: number;
            UsePlInspDateBegin?: Date;
            UsePlInspDateEnd?: Date;
            UsePlInspDateIsNull?: boolean;
            UsePlInspDateNotInRange?: boolean;
            UsePlInspDateRangeIncludeCurrent?: boolean;
            UsePlInspDateRangeLast?: number;
            UsePlInspDateRangeNext?: number;
            UsePlInspDateRangeUnits?: number;
            Viewable?: boolean;
            WOPrefix?: string[];
            Zip?: string[];
        }
        export interface CreateSubcontractor extends ServiceTypes.CoreRequestBase {
            Approved?: boolean;
            Comments?: string;
            ContractId: number;
            ContractorName?: string;
            ContractorSid?: number;
            ContractorType?: string;
            DateApproved?: Date;
            EndDate?: Date;
            StartDate?: Date;
        }
        export interface CreateSubmittal extends ServiceTypes.CoreRequestBase {
            Approved?: boolean;
            ApproveDate?: Date;
            Comments?: string;
            ContractId: number;
            Description?: string;
            ReceiveDate?: Date;
            SubmittalType?: string;
        }
        export interface Delete extends ServiceTypes.CoreRequestBase {
            ContractIds?: number[];
        }
        export interface DeleteFundSource extends ServiceTypes.CoreRequestBase {
            FundSourceIds: number[];
        }
        export interface DeleteInvoiceItems extends ServiceTypes.CoreRequestBase {
            InvoiceItemIds: number[];
        }
        export interface DeleteInvoices extends ServiceTypes.CoreRequestBase {
            InvoiceIds: number[];
        }
        export interface DeleteLineItems extends ServiceTypes.CoreRequestBase {
            ContractLineItemIds: number[];
        }
        export interface DeleteSubcontractor extends ServiceTypes.CoreRequestBase {
            SubcontractorIds: number[];
        }
        export interface DeleteSubmittal extends ServiceTypes.CoreRequestBase {
            SubmittalIds: number[];
        }
        export interface FundSources extends ServiceTypes.CoreRequestBase {
            ContractIds: number[];
        }
        export interface InvoiceItems extends ServiceTypes.CoreRequestBase {
            InvoiceIds: number[];
        }
        export interface Invoices extends ServiceTypes.CoreRequestBase {
            ContractIds: number[];
        }
        export interface LineItems extends ServiceTypes.CoreRequestBase {
            ContractIds: number[];
        }
        export interface LineItemSummary extends ServiceTypes.CoreRequestBase {
            ContractIds: number[];
        }
        export interface Move extends ServiceTypes.CoreRequestBase {
            ContractId: number;
            VcsWKID?: number;
            WKID?: number;
            WKT?: string;
            X: number;
            Y: number;
            Z?: number;
        }
        export interface Permits extends ServiceTypes.CoreRequestBase {
            ContractIds: number[];
        }
        export interface Search extends ServiceTypes.CoreRequestBase {
            Accountant?: string[];
            AccountantSid?: number[];
            AccountantSidInList?: boolean;
            AcctManager?: string[];
            AcctManagerSid?: number[];
            AcctManagerSidInList?: boolean;
            ActualBudgetIncludeNulls?: boolean;
            ActualBudgetIsMaxValueExclusive?: boolean;
            ActualBudgetIsMinValueExclusive?: boolean;
            ActualBudgetMaxValue?: number;
            ActualBudgetMinValue?: number;
            ActualBudgetRangeType?: number;
            ActualBudgetValues?: number[];
            ActualCostIncludeNulls?: boolean;
            ActualCostIsMaxValueExclusive?: boolean;
            ActualCostIsMinValueExclusive?: boolean;
            ActualCostMaxValue?: number;
            ActualCostMinValue?: number;
            ActualCostRangeType?: number;
            ActualCostValues?: number[];
            ActualFinishDateBegin?: Date;
            ActualFinishDateEnd?: Date;
            ActualFinishDateIsNull?: boolean;
            ActualFinishDateNotInRange?: boolean;
            ActualFinishDateRangeIncludeCurrent?: boolean;
            ActualFinishDateRangeLast?: number;
            ActualFinishDateRangeNext?: number;
            ActualFinishDateRangeUnits?: number;
            Address?: string[];
            BidBondPercentIncludeNulls?: boolean;
            BidBondPercentIsMaxValueExclusive?: boolean;
            BidBondPercentIsMinValueExclusive?: boolean;
            BidBondPercentMaxValue?: number;
            BidBondPercentMinValue?: number;
            BidBondPercentRangeType?: number;
            BidBondPercentValues?: number[];
            BidBudgetIncludeNulls?: boolean;
            BidBudgetIsMaxValueExclusive?: boolean;
            BidBudgetIsMinValueExclusive?: boolean;
            BidBudgetMaxValue?: number;
            BidBudgetMinValue?: number;
            BidBudgetRangeType?: number;
            BidBudgetValues?: number[];
            BidDateBegin?: Date;
            BidDateEnd?: Date;
            BidDateIsNull?: boolean;
            BidDateNotInRange?: boolean;
            BidDateRangeIncludeCurrent?: boolean;
            BidDateRangeLast?: number;
            BidDateRangeNext?: number;
            BidDateRangeUnits?: number;
            BidDepositPercentIncludeNulls?: boolean;
            BidDepositPercentIsMaxValueExclusive?: boolean;
            BidDepositPercentIsMinValueExclusive?: boolean;
            BidDepositPercentMaxValue?: number;
            BidDepositPercentMinValue?: number;
            BidDepositPercentRangeType?: number;
            BidDepositPercentValues?: number[];
            BondReleased?: boolean;
            BondReleaseDateBegin?: Date;
            BondReleaseDateEnd?: Date;
            BondReleaseDateIsNull?: boolean;
            BondReleaseDateNotInRange?: boolean;
            BondReleaseDateRangeIncludeCurrent?: boolean;
            BondReleaseDateRangeLast?: number;
            BondReleaseDateRangeNext?: number;
            BondReleaseDateRangeUnits?: number;
            City?: string[];
            Comments?: string[];
            ContractId?: number[];
            ContractNumber?: string[];
            ContractorSid?: number[];
            ContractorSidInList?: boolean;
            ContractTemplateId?: number[];
            ContractTemplateIdInList?: boolean;
            ContractType?: string[];
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
            DateTimeModifiedBegin?: Date;
            DateTimeModifiedEnd?: Date;
            DateTimeModifiedIsNull?: boolean;
            DateTimeModifiedNotInRange?: boolean;
            DateTimeModifiedRangeIncludeCurrent?: boolean;
            DateTimeModifiedRangeLast?: number;
            DateTimeModifiedRangeNext?: number;
            DateTimeModifiedRangeUnits?: number;
            Description?: string[];
            DesignDateBegin?: Date;
            DesignDateEnd?: Date;
            DesignDateIsNull?: boolean;
            DesignDateNotInRange?: boolean;
            DesignDateRangeIncludeCurrent?: boolean;
            DesignDateRangeLast?: number;
            DesignDateRangeNext?: number;
            DesignDateRangeUnits?: number;
            District?: string[];
            DomainId?: number[];
            DurationIncludeNulls?: boolean;
            DurationIsMaxValueExclusive?: boolean;
            DurationIsMinValueExclusive?: boolean;
            DurationMaxValue?: number;
            DurationMinValue?: number;
            DurationRangeType?: number;
            DurationUnit?: number[];
            DurationValues?: number[];
            EstimatedBudgetIncludeNulls?: boolean;
            EstimatedBudgetIsMaxValueExclusive?: boolean;
            EstimatedBudgetIsMinValueExclusive?: boolean;
            EstimatedBudgetMaxValue?: number;
            EstimatedBudgetMinValue?: number;
            EstimatedBudgetRangeType?: number;
            EstimatedBudgetValues?: number[];
            FinalInspDateBegin?: Date;
            FinalInspDateEnd?: Date;
            FinalInspDateIsNull?: boolean;
            FinalInspDateNotInRange?: boolean;
            FinalInspDateRangeIncludeCurrent?: boolean;
            FinalInspDateRangeLast?: number;
            FinalInspDateRangeNext?: number;
            FinalInspDateRangeUnits?: number;
            FinalPlInspDateBegin?: Date;
            FinalPlInspDateEnd?: Date;
            FinalPlInspDateIsNull?: boolean;
            FinalPlInspDateNotInRange?: boolean;
            FinalPlInspDateRangeIncludeCurrent?: boolean;
            FinalPlInspDateRangeLast?: number;
            FinalPlInspDateRangeNext?: number;
            FinalPlInspDateRangeUnits?: number;
            FundingSource?: string[];
            GuaranteeInspDateBegin?: Date;
            GuaranteeInspDateEnd?: Date;
            GuaranteeInspDateIsNull?: boolean;
            GuaranteeInspDateNotInRange?: boolean;
            GuaranteeInspDateRangeIncludeCurrent?: boolean;
            GuaranteeInspDateRangeLast?: number;
            GuaranteeInspDateRangeNext?: number;
            GuaranteeInspDateRangeUnits?: number;
            GuaranteePLInspDateBegin?: Date;
            GuaranteePLInspDateEnd?: Date;
            GuaranteePLInspDateIsNull?: boolean;
            GuaranteePLInspDateNotInRange?: boolean;
            GuaranteePLInspDateRangeIncludeCurrent?: boolean;
            GuaranteePLInspDateRangeLast?: number;
            GuaranteePLInspDateRangeNext?: number;
            GuaranteePLInspDateRangeUnits?: number;
            IsTemplate?: boolean;
            Location?: string[];
            MaxResults?: number;
            NextWOSeqIdIncludeNulls?: boolean;
            NextWOSeqIdIsMaxValueExclusive?: boolean;
            NextWOSeqIdIsMinValueExclusive?: boolean;
            NextWOSeqIdMaxValue?: number;
            NextWOSeqIdMinValue?: number;
            NextWOSeqIdRangeType?: number;
            NextWOSeqIdValues?: number[];
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
            OptionalPeriodsIncludeNulls?: boolean;
            OptionalPeriodsIsMaxValueExclusive?: boolean;
            OptionalPeriodsIsMinValueExclusive?: boolean;
            OptionalPeriodsMaxValue?: number;
            OptionalPeriodsMinValue?: number;
            OptionalPeriodsRangeType?: number;
            OptionalPeriodsValues?: number[];
            PaymentBondPercentIncludeNulls?: boolean;
            PaymentBondPercentIsMaxValueExclusive?: boolean;
            PaymentBondPercentIsMinValueExclusive?: boolean;
            PaymentBondPercentMaxValue?: number;
            PaymentBondPercentMinValue?: number;
            PaymentBondPercentRangeType?: number;
            PaymentBondPercentValues?: number[];
            PerformanceBondDateBegin?: Date;
            PerformanceBondDateEnd?: Date;
            PerformanceBondDateIsNull?: boolean;
            PerformanceBondDateNotInRange?: boolean;
            PerformanceBondDateRangeIncludeCurrent?: boolean;
            PerformanceBondDateRangeLast?: number;
            PerformanceBondDateRangeNext?: number;
            PerformanceBondDateRangeUnits?: number;
            PerformanceBondPercentIncludeNulls?: boolean;
            PerformanceBondPercentIsMaxValueExclusive?: boolean;
            PerformanceBondPercentIsMinValueExclusive?: boolean;
            PerformanceBondPercentMaxValue?: number;
            PerformanceBondPercentMinValue?: number;
            PerformanceBondPercentRangeType?: number;
            PerformanceBondPercentValues?: number[];
            ScheduledFinishDateBegin?: Date;
            ScheduledFinishDateEnd?: Date;
            ScheduledFinishDateIsNull?: boolean;
            ScheduledFinishDateNotInRange?: boolean;
            ScheduledFinishDateRangeIncludeCurrent?: boolean;
            ScheduledFinishDateRangeLast?: number;
            ScheduledFinishDateRangeNext?: number;
            ScheduledFinishDateRangeUnits?: number;
            SignedDateBegin?: Date;
            SignedDateEnd?: Date;
            SignedDateIsNull?: boolean;
            SignedDateNotInRange?: boolean;
            SignedDateRangeIncludeCurrent?: boolean;
            SignedDateRangeLast?: number;
            SignedDateRangeNext?: number;
            SignedDateRangeUnits?: number;
            StartDateBegin?: Date;
            StartDateEnd?: Date;
            StartDateIsNull?: boolean;
            StartDateNotInRange?: boolean;
            StartDateRangeIncludeCurrent?: boolean;
            StartDateRangeLast?: number;
            StartDateRangeNext?: number;
            StartDateRangeUnits?: number;
            State?: string[];
            Status?: string[];
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
            TransmitDateBegin?: Date;
            TransmitDateEnd?: Date;
            TransmitDateIsNull?: boolean;
            TransmitDateNotInRange?: boolean;
            TransmitDateRangeIncludeCurrent?: boolean;
            TransmitDateRangeLast?: number;
            TransmitDateRangeNext?: number;
            TransmitDateRangeUnits?: number;
            UseInspDateBegin?: Date;
            UseInspDateEnd?: Date;
            UseInspDateIsNull?: boolean;
            UseInspDateNotInRange?: boolean;
            UseInspDateRangeIncludeCurrent?: boolean;
            UseInspDateRangeLast?: number;
            UseInspDateRangeNext?: number;
            UseInspDateRangeUnits?: number;
            UsePlInspDateBegin?: Date;
            UsePlInspDateEnd?: Date;
            UsePlInspDateIsNull?: boolean;
            UsePlInspDateNotInRange?: boolean;
            UsePlInspDateRangeIncludeCurrent?: boolean;
            UsePlInspDateRangeLast?: number;
            UsePlInspDateRangeNext?: number;
            UsePlInspDateRangeUnits?: number;
            Viewable?: boolean;
            WOPrefix?: string[];
            Zip?: string[];
        }
        export interface Subcontractors extends ServiceTypes.CoreRequestBase {
            ContractIds: number[];
        }
        export interface Submittals extends ServiceTypes.CoreRequestBase {
            ContractIds: number[];
        }
        export interface UninvoicedLineItemCosts extends ServiceTypes.CoreRequestBase {
            ContractIds?: number[];
        }
        export interface Update extends ServiceTypes.CoreRequestBase {
            AccountantSid?: number;
            AcctManagerSid?: number;
            ActualBudget?: number;
            ActualFinishDate?: Date;
            Address?: string;
            BidBondPercent?: number;
            BidBudget?: number;
            BidDate?: Date;
            BidDepositPercent?: number;
            BondReleased?: boolean;
            BondReleaseDate?: Date;
            Category?: string;
            City?: string;
            Comments?: string;
            ContractId: number;
            ContractNumber?: string;
            ContractorSid?: number;
            ContractTemplateId?: number;
            ContractType?: string;
            CustFieldCatId?: number;
            Date1?: Date;
            Date2?: Date;
            Date3?: Date;
            Date4?: Date;
            Date5?: Date;
            Description?: string;
            DesignDate?: Date;
            District?: string;
            DomainId?: number;
            Duration?: number;
            DurationUnit?: number;
            EstimatedBudget?: number;
            FinalInspDate?: Date;
            FinalPLInspDate?: Date;
            FundingSource?: string;
            GuaranteeInspDate?: Date;
            GuaranteePLInspDate?: Date;
            IsTemplate?: boolean;
            Location?: string;
            NextWOSeqId?: number;
            Num1?: number;
            Num2?: number;
            Num3?: number;
            Num4?: number;
            Num5?: number;
            OptionalPeriods?: number;
            PaymentBondPercent?: number;
            PerformanceBondDate?: Date;
            PerformanceBondPercent?: number;
            ScheduledFinishDate?: Date;
            SignedDate?: Date;
            StartDate?: Date;
            State?: string;
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
            TransmitDate?: Date;
            UseInspDate?: Date;
            UsePLInspDate?: Date;
            Viewable?: boolean;
            WOPrefix?: string;
            Zip?: string;
        }
        export interface UpdateFundSource extends ServiceTypes.CoreRequestBase {
            Amount?: number;
            ContractId?: number;
            Description?: string;
            FiscalYear?: number;
            FundSource?: string;
            FundSourceId: number;
            Notes?: string;
        }
        export interface UpdateInvoice extends ServiceTypes.CoreRequestBase {
            AccountingDate?: Date;
            Attachment?: string;
            CheckIssuedDate?: Date;
            Comments?: string;
            ContractId?: number;
            CoverSentDate?: Date;
            Description?: string;
            EAODate?: Date;
            InvoiceId: number;
            InvoiceNumber?: string;
            OffialInvoiceReceivedDate?: Date;
            PencilInvoiceReceivedDate?: Date;
            PencilInvoiceReviewedDate?: Date;
            ValidateInvoiceDate?: Date;
        }
        export interface UpdateInvoiceItem extends ServiceTypes.CoreRequestBase {
            InvoiceId?: number;
            InvoiceItemId: number;
            LineItemCostId?: number;
        }
        export interface UpdateLineItem extends ServiceTypes.CoreRequestBase {
            ContractLineItemId: number;
            ContractorSid?: number;
            ContractPeriod?: number;
            EmployeeSid?: number;
            FundSourceId?: number;
            ItemNumber?: string;
            LineItemId?: number;
            PrjUnitPrice?: number;
            PrjUnits?: number;
            UnitPrice?: number;
            Units?: number;
            UnitsUsed?: number;
        }
        export interface UpdateSubcontractor extends ServiceTypes.CoreRequestBase {
            Approved?: boolean;
            Comments?: string;
            ContractorName?: string;
            ContractorSid?: number;
            ContractorType?: string;
            DateApproved?: Date;
            EndDate?: Date;
            StartDate?: Date;
            SubcontractorId: number;
        }
        export interface UpdateSubmittal extends ServiceTypes.CoreRequestBase {
            Approved?: boolean;
            ApproveDate?: Date;
            Comments?: string;
            Description?: string;
            ReceiveDate?: Date;
            SubmittalId: number;
            SubmittalType?: string;
        }
        export interface User extends ServiceTypes.CoreRequestBase {
        }
    }
    export namespace Responses {
        export interface AddInvoice extends ServiceTypes.CoreResponseBase_<CoreTypes.ContractInvoice> {}
        export interface AddInvoiceItem extends ServiceTypes.CoreResponseBase_<CoreTypes.InvoiceItem> {}
        export interface AddLineItem extends ServiceTypes.CoreResponseBase_<CoreTypes.ContractLineItem> {}
        export interface ByIds extends ServiceTypes.CoreResponseBase_<CoreTypes.ContractBase[]> {}
        export interface Claims extends ServiceTypes.CoreResponseBase_<CoreTypes.ContractClaimBase[]> {}
        export interface Create extends ServiceTypes.CoreResponseBase_<CoreTypes.ContractBase> {}
        export interface CreateFundSource extends ServiceTypes.CoreResponseBase_<CoreTypes.ContractFundSource> {}
        export interface CreateSearchDefinition extends ServiceTypes.CoreResponseBase_<CoreTypes.SearchDefinition> {}
        export interface CreateSubcontractor extends ServiceTypes.CoreResponseBase_<CoreTypes.ContractSubcontractor> {}
        export interface CreateSubmittal extends ServiceTypes.CoreResponseBase_<CoreTypes.ContractSubmittal> {}
        export interface Delete extends ServiceTypes.CoreResponseBase_<{[key: number]: boolean}> {}
        export interface DeleteFundSource extends ServiceTypes.CoreResponseBase_<{[key: number]: boolean}> {}
        export interface DeleteInvoiceItems extends ServiceTypes.CoreResponseBase_<{[key: number]: boolean}> {}
        export interface DeleteInvoices extends ServiceTypes.CoreResponseBase_<{[key: number]: boolean}> {}
        export interface DeleteLineItems extends ServiceTypes.CoreResponseBase_<{[key: number]: boolean}> {}
        export interface DeleteSubcontractor extends ServiceTypes.CoreResponseBase_<{[key: number]: boolean}> {}
        export interface DeleteSubmittal extends ServiceTypes.CoreResponseBase_<{[key: number]: boolean}> {}
        export interface FundSources extends ServiceTypes.CoreResponseBase_<CoreTypes.ContractFundSource[]> {}
        export interface InvoiceItems extends ServiceTypes.CoreResponseBase_<CoreTypes.InvoiceItem[]> {}
        export interface Invoices extends ServiceTypes.CoreResponseBase_<CoreTypes.ContractInvoice[]> {}
        export interface LineItems extends ServiceTypes.CoreResponseBase_<CoreTypes.ContractLineItem[]> {}
        export interface LineItemSummary extends ServiceTypes.CoreResponseBase_<CoreTypes.ContractLineItemSummary[]> {}
        export interface Move extends ServiceTypes.CoreResponseBase_<CoreTypes.GISPoint> {}
        export interface Permits extends ServiceTypes.CoreResponseBase_<CoreTypes.ContractPermit[]> {}
        export interface Search extends ServiceTypes.CoreResponseBase_<number[]> {}
        export interface Subcontractors extends ServiceTypes.CoreResponseBase_<CoreTypes.ContractSubcontractor[]> {}
        export interface Submittals extends ServiceTypes.CoreResponseBase_<CoreTypes.ContractSubmittal[]> {}
        export interface UninvoicedLineItemCosts extends ServiceTypes.CoreResponseBase_<CoreTypes.LineItemCost[]> {}
        export interface Update extends ServiceTypes.CoreResponseBase_<CoreTypes.ContractBase> {}
        export interface UpdateFundSource extends ServiceTypes.CoreResponseBase_<CoreTypes.ContractFundSource> {}
        export interface UpdateInvoice extends ServiceTypes.CoreResponseBase_<CoreTypes.ContractInvoice> {}
        export interface UpdateInvoiceItem extends ServiceTypes.CoreResponseBase_<CoreTypes.InvoiceItem> {}
        export interface UpdateLineItem extends ServiceTypes.CoreResponseBase_<CoreTypes.ContractLineItem> {}
        export interface UpdateSubcontractor extends ServiceTypes.CoreResponseBase_<CoreTypes.ContractSubcontractor> {}
        export interface UpdateSubmittal extends ServiceTypes.CoreResponseBase_<CoreTypes.ContractSubmittal> {}
        export interface User extends ServiceTypes.CoreResponseBase_<CoreTypes.ContractBase[]> {}
    }
    export interface IContractService {
        AddInvoice?: (request: Requests.AddInvoice) => AbortablePromise<Responses.AddInvoice>;
        AddInvoiceItem?: (request: Requests.AddInvoiceItem) => AbortablePromise<Responses.AddInvoiceItem>;
        AddLineItem?: (request: Requests.AddLineItem) => AbortablePromise<Responses.AddLineItem>;
        ByIds?: (request: Requests.ByIds) => AbortablePromise<Responses.ByIds>;
        Claims?: (request: Requests.Claims) => AbortablePromise<Responses.Claims>;
        Create?: (request: Requests.Create) => AbortablePromise<Responses.Create>;
        CreateFundSource?: (request: Requests.CreateFundSource) => AbortablePromise<Responses.CreateFundSource>;
        CreateSearchDefinition?: (request: Requests.CreateSearchDefinition) => AbortablePromise<Responses.CreateSearchDefinition>;
        CreateSubcontractor?: (request: Requests.CreateSubcontractor) => AbortablePromise<Responses.CreateSubcontractor>;
        CreateSubmittal?: (request: Requests.CreateSubmittal) => AbortablePromise<Responses.CreateSubmittal>;
        Delete?: (request: Requests.Delete) => AbortablePromise<Responses.Delete>;
        DeleteFundSource?: (request: Requests.DeleteFundSource) => AbortablePromise<Responses.DeleteFundSource>;
        DeleteInvoiceItems?: (request: Requests.DeleteInvoiceItems) => AbortablePromise<Responses.DeleteInvoiceItems>;
        DeleteInvoices?: (request: Requests.DeleteInvoices) => AbortablePromise<Responses.DeleteInvoices>;
        DeleteLineItems?: (request: Requests.DeleteLineItems) => AbortablePromise<Responses.DeleteLineItems>;
        DeleteSubcontractor?: (request: Requests.DeleteSubcontractor) => AbortablePromise<Responses.DeleteSubcontractor>;
        DeleteSubmittal?: (request: Requests.DeleteSubmittal) => AbortablePromise<Responses.DeleteSubmittal>;
        FundSources?: (request: Requests.FundSources) => AbortablePromise<Responses.FundSources>;
        InvoiceItems?: (request: Requests.InvoiceItems) => AbortablePromise<Responses.InvoiceItems>;
        Invoices?: (request: Requests.Invoices) => AbortablePromise<Responses.Invoices>;
        LineItems?: (request: Requests.LineItems) => AbortablePromise<Responses.LineItems>;
        LineItemSummary?: (request: Requests.LineItemSummary) => AbortablePromise<Responses.LineItemSummary>;
        Move?: (request: Requests.Move) => AbortablePromise<Responses.Move>;
        Permits?: (request: Requests.Permits) => AbortablePromise<Responses.Permits>;
        Search?: (request: Requests.Search) => AbortablePromise<Responses.Search>;
        Subcontractors?: (request: Requests.Subcontractors) => AbortablePromise<Responses.Subcontractors>;
        Submittals?: (request: Requests.Submittals) => AbortablePromise<Responses.Submittals>;
        UninvoicedLineItemCosts?: (request: Requests.UninvoicedLineItemCosts) => AbortablePromise<Responses.UninvoicedLineItemCosts>;
        Update?: (request: Requests.Update) => AbortablePromise<Responses.Update>;
        UpdateFundSource?: (request: Requests.UpdateFundSource) => AbortablePromise<Responses.UpdateFundSource>;
        UpdateInvoice?: (request: Requests.UpdateInvoice) => AbortablePromise<Responses.UpdateInvoice>;
        UpdateInvoiceItem?: (request: Requests.UpdateInvoiceItem) => AbortablePromise<Responses.UpdateInvoiceItem>;
        UpdateLineItem?: (request: Requests.UpdateLineItem) => AbortablePromise<Responses.UpdateLineItem>;
        UpdateSubcontractor?: (request: Requests.UpdateSubcontractor) => AbortablePromise<Responses.UpdateSubcontractor>;
        UpdateSubmittal?: (request: Requests.UpdateSubmittal) => AbortablePromise<Responses.UpdateSubmittal>;
        User?: (request: Requests.User) => AbortablePromise<Responses.User>;
    }
}
