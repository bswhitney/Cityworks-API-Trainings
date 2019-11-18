import { Enums, ServiceEnums, PromiseTypes, ServiceTypes, Types as CoreTypes } from '../../../bundles/core';
import AbortablePromise = PromiseTypes.AbortablePromise;

export namespace LaborCostServiceTypes { 
    export namespace Requests {
        export interface AddRequestCosts extends ServiceTypes.CoreRequestBase {
            AcctNum?: string;
            Description?: string;
            EmployeeBenefit?: boolean;
            EmployeeCostCodes?: string[];
            EmployeeGroupId?: number;
            EmployeeHoliday?: boolean;
            EmployeeJobCode?: string;
            EmployeeOther?: boolean;
            EmployeeOverhead?: boolean;
            EmployeeOvertime?: boolean;
            EmployeeRegular?: boolean;
            EmployeeShiftDiff?: boolean;
            EmployeeSids?: number[];
            EmployeeStandby?: boolean;
            FinishDate?: Date;
            Hours: number;
            RequestId: number;
            StartDate?: Date;
        }
        export interface AddWorkOrderCosts extends ServiceTypes.CoreRequestBase {
            AcctNum?: string;
            ContractorFixed?: boolean;
            ContractorFixedCost?: number;
            ContractorHoliday?: boolean;
            ContractorHourly?: boolean;
            ContractorOvertime?: boolean;
            ContractorPerUnit?: boolean;
            ContractorSids?: number[];
            Description?: string;
            EmployeeBenefit?: boolean;
            EmployeeCostCodes?: string[];
            EmployeeGroupId?: number;
            EmployeeHoliday?: boolean;
            EmployeeJobCode?: string;
            EmployeeOther?: boolean;
            EmployeeOverhead?: boolean;
            EmployeeOvertime?: boolean;
            EmployeeRegular?: boolean;
            EmployeeShiftDiff?: boolean;
            EmployeeSids?: number[];
            EmployeeStandby?: boolean;
            Entities?: CoreTypes.WorkOrderEntity[];
            Estimated?: boolean;
            FinishDate?: Date;
            Hours: number;
            StartDate?: Date;
            TaskIds?: number[];
            WorkOrderId: string;
            WorkOrderSid: number;
        }
        export interface CostCodes extends ServiceTypes.CoreRequestBase {
            CommonCodesOnly?: boolean;
            EmployeeSids: number[];
        }
        export interface DeleteRequestCosts extends ServiceTypes.CoreRequestBase {
            LaborCostIds: number[];
        }
        export interface DeleteWorkOrderCosts extends ServiceTypes.CoreRequestBase {
            Estimated?: boolean;
            LaborCostIds: number[];
        }
        export interface JobCodes extends ServiceTypes.CoreRequestBase {
        }
        export interface RequestCostsByRequest extends ServiceTypes.CoreRequestBase {
            RequestIds: number[];
        }
        export interface WorkOrderCostsByWorkOrder extends ServiceTypes.CoreRequestBase {
            Estimated?: boolean;
            WorkOrderIds: string[];
            WorkOrderSids: number[];
        }
    }
    export namespace Responses {
        export interface AddRequestCosts extends ServiceTypes.CoreResponseBase_<CoreTypes.RequestLaborCost[]> {}
        export interface AddWorkOrderCosts extends ServiceTypes.CoreResponseBase_<CoreTypes.WorkOrderLaborCost[]> {}
        export interface CostCodes extends ServiceTypes.CoreResponseBase_<CoreTypes.CostCode[]> {}
        export interface DeleteRequestCosts extends ServiceTypes.CoreResponseBase_<{[key: number]: boolean}> {}
        export interface DeleteWorkOrderCosts extends ServiceTypes.CoreResponseBase_<{[key: number]: boolean}> {}
        export interface JobCodes extends ServiceTypes.CoreResponseBase_<CoreTypes.JobCode[]> {}
        export interface RequestCostsByRequest extends ServiceTypes.CoreResponseBase_<CoreTypes.RequestLaborCost[]> {}
        export interface WorkOrderCostsByWorkOrder extends ServiceTypes.CoreResponseBase_<CoreTypes.WorkOrderLaborCost[]> {}
    }
    export interface ILaborCostService {
        AddRequestCosts?: (request: Requests.AddRequestCosts) => AbortablePromise<Responses.AddRequestCosts>;
        AddWorkOrderCosts?: (request: Requests.AddWorkOrderCosts) => AbortablePromise<Responses.AddWorkOrderCosts>;
        CostCodes?: (request: Requests.CostCodes) => AbortablePromise<Responses.CostCodes>;
        DeleteRequestCosts?: (request: Requests.DeleteRequestCosts) => AbortablePromise<Responses.DeleteRequestCosts>;
        DeleteWorkOrderCosts?: (request: Requests.DeleteWorkOrderCosts) => AbortablePromise<Responses.DeleteWorkOrderCosts>;
        JobCodes?: (request: Requests.JobCodes) => AbortablePromise<Responses.JobCodes>;
        RequestCostsByRequest?: (request: Requests.RequestCostsByRequest) => AbortablePromise<Responses.RequestCostsByRequest>;
        WorkOrderCostsByWorkOrder?: (request: Requests.WorkOrderCostsByWorkOrder) => AbortablePromise<Responses.WorkOrderCostsByWorkOrder>;
    }
}
