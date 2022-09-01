import { Enums, ServiceEnums, PromiseTypes, ServiceTypes, Types as CoreTypes } from '../../../bundles/core';
import AbortablePromise = PromiseTypes.AbortablePromise;

export namespace SecurityServiceTypes { 
    export namespace Requests {
        export interface AreContractPermissionsEnabled extends ServiceTypes.CoreRequestBase {
        }
        export interface AreProjectPermissionsEnabled extends ServiceTypes.CoreRequestBase {
        }
        export interface Contract extends ServiceTypes.CoreRequestBase {
            ContractId: number;
        }
        export interface Contracts extends ServiceTypes.CoreRequestBase {
            ContractIds: number[];
        }
        export interface Employee extends ServiceTypes.CoreRequestBase {
            EmployeeSids?: number[];
        }
        export interface Inspection extends ServiceTypes.CoreRequestBase {
            InspectionId: number;
        }
        export interface Inspections extends ServiceTypes.CoreRequestBase {
            InspectionIds: number[];
        }
        export interface InspectionTemplate extends ServiceTypes.CoreRequestBase {
            InspTemplateId: number;
        }
        export interface InspectionTemplates extends ServiceTypes.CoreRequestBase {
            InspTemplateIds: number[];
        }
        export interface Problem extends ServiceTypes.CoreRequestBase {
            ProblemSid: number;
        }
        export interface Problems extends ServiceTypes.CoreRequestBase {
            ProblemSids: number[];
        }
        export interface Projects extends ServiceTypes.CoreRequestBase {
            ProjectIds?: number[];
        }
        export interface Search extends ServiceTypes.CoreRequestBase {
            DomainId?: number;
            EmployeeSid?: number;
        }
        export interface ServiceRequest extends ServiceTypes.CoreRequestBase {
            RequestId: number;
        }
        export interface ServiceRequests extends ServiceTypes.CoreRequestBase {
            RequestIds: number[];
        }
        export interface StoreroomAccess extends ServiceTypes.CoreRequestBase {
            StoreDomainId: number;
        }
        export interface WorkOrder extends ServiceTypes.CoreRequestBase {
            WorkOrderId: string;
        }
        export interface WorkOrderBySid extends ServiceTypes.CoreRequestBase {
            WorkOrderSid: number;
        }
        export interface WorkOrders extends ServiceTypes.CoreRequestBase {
            WorkOrderIds: string[];
        }
        export interface WorkOrderTemplate extends ServiceTypes.CoreRequestBase {
            EntityType: string;
            WOTemplateId: string;
        }
    }
    export namespace Responses {
        export interface AreContractPermissionsEnabled extends ServiceTypes.CoreResponseBase_<boolean> {}
        export interface AreProjectPermissionsEnabled extends ServiceTypes.CoreResponseBase_<boolean> {}
        export interface Contract extends ServiceTypes.CoreResponseBase_<CoreTypes.ContractSecurity> {}
        export interface Contracts extends ServiceTypes.CoreResponseBase_<CoreTypes.ContractSecurity[]> {}
        export interface Employee extends ServiceTypes.CoreResponseBase_<CoreTypes.EmployeeSecurity[]> {}
        export interface Inspection extends ServiceTypes.CoreResponseBase_<CoreTypes.InspectionSecurity> {}
        export interface Inspections extends ServiceTypes.CoreResponseBase_<CoreTypes.InspectionSecurity[]> {}
        export interface InspectionTemplate extends ServiceTypes.CoreResponseBase_<CoreTypes.InspectionTemplateSecurity> {}
        export interface InspectionTemplates extends ServiceTypes.CoreResponseBase_<CoreTypes.InspectionTemplateSecurity[]> {}
        export interface Problem extends ServiceTypes.CoreResponseBase_<CoreTypes.ProblemSecurity> {}
        export interface Problems extends ServiceTypes.CoreResponseBase_<CoreTypes.ProblemSecurity[]> {}
        export interface Projects extends ServiceTypes.CoreResponseBase_<CoreTypes.ProjectSecurity[]> {}
        export interface Search extends ServiceTypes.CoreResponseBase_<CoreTypes.SearchSecurity> {}
        export interface ServiceRequest extends ServiceTypes.CoreResponseBase_<CoreTypes.ServiceRequestSecurity> {}
        export interface ServiceRequests extends ServiceTypes.CoreResponseBase_<CoreTypes.ServiceRequestSecurity[]> {}
        export interface StoreroomAccess extends ServiceTypes.CoreResponseBase_<CoreTypes.StoreroomAccessSecurity> {}
        export interface WorkOrder extends ServiceTypes.CoreResponseBase_<CoreTypes.WorkOrderSecurity> {}
        export interface WorkOrderBySid extends ServiceTypes.CoreResponseBase_<CoreTypes.WorkOrderSecurity> {}
        export interface WorkOrders extends ServiceTypes.CoreResponseBase_<CoreTypes.WorkOrderSecurity[]> {}
        export interface WorkOrderTemplate extends ServiceTypes.CoreResponseBase_<CoreTypes.WorkOrderTemplateSecurity> {}
    }
    export interface ISecurityService {
        AreContractPermissionsEnabled?: (request: Requests.AreContractPermissionsEnabled) => AbortablePromise<Responses.AreContractPermissionsEnabled>;
        AreProjectPermissionsEnabled?: (request: Requests.AreProjectPermissionsEnabled) => AbortablePromise<Responses.AreProjectPermissionsEnabled>;
        Contract?: (request: Requests.Contract) => AbortablePromise<Responses.Contract>;
        Contracts?: (request: Requests.Contracts) => AbortablePromise<Responses.Contracts>;
        Employee?: (request: Requests.Employee) => AbortablePromise<Responses.Employee>;
        Inspection?: (request: Requests.Inspection) => AbortablePromise<Responses.Inspection>;
        Inspections?: (request: Requests.Inspections) => AbortablePromise<Responses.Inspections>;
        InspectionTemplate?: (request: Requests.InspectionTemplate) => AbortablePromise<Responses.InspectionTemplate>;
        InspectionTemplates?: (request: Requests.InspectionTemplates) => AbortablePromise<Responses.InspectionTemplates>;
        Problem?: (request: Requests.Problem) => AbortablePromise<Responses.Problem>;
        Problems?: (request: Requests.Problems) => AbortablePromise<Responses.Problems>;
        Projects?: (request: Requests.Projects) => AbortablePromise<Responses.Projects>;
        Search?: (request: Requests.Search) => AbortablePromise<Responses.Search>;
        ServiceRequest?: (request: Requests.ServiceRequest) => AbortablePromise<Responses.ServiceRequest>;
        ServiceRequests?: (request: Requests.ServiceRequests) => AbortablePromise<Responses.ServiceRequests>;
        StoreroomAccess?: (request: Requests.StoreroomAccess) => AbortablePromise<Responses.StoreroomAccess>;
        WorkOrder?: (request: Requests.WorkOrder) => AbortablePromise<Responses.WorkOrder>;
        WorkOrderBySid?: (request: Requests.WorkOrderBySid) => AbortablePromise<Responses.WorkOrderBySid>;
        WorkOrders?: (request: Requests.WorkOrders) => AbortablePromise<Responses.WorkOrders>;
        WorkOrderTemplate?: (request: Requests.WorkOrderTemplate) => AbortablePromise<Responses.WorkOrderTemplate>;
    }
}
