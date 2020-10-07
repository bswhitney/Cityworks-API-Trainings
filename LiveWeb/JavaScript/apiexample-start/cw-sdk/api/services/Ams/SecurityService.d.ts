import { PromiseTypes } from '../../../core/promise';
import { IApiService } from '../../../http/api-service';
import { SecurityServiceTypes as SvcDef } from '../../interfaces/Ams/SecurityService';
import AbortablePromise = PromiseTypes.AbortablePromise;
import Requests = SvcDef.Requests;
import Responses = SvcDef.Responses;
import ISecurityService = SvcDef.ISecurityService;
export * from '../../../http/api-service';
export * from '../../interfaces/Ams/SecurityService';
export declare class SecurityService implements ISecurityService {
    private _service;
    constructor(service: IApiService);
    Contract(request: Requests.Contract): AbortablePromise<Responses.Contract>;
    Contracts(request: Requests.Contracts): AbortablePromise<Responses.Contracts>;
    Inspection(request: Requests.Inspection): AbortablePromise<Responses.Inspection>;
    Inspections(request: Requests.Inspections): AbortablePromise<Responses.Inspections>;
    InspectionTemplate(request: Requests.InspectionTemplate): AbortablePromise<Responses.InspectionTemplate>;
    InspectionTemplates(request: Requests.InspectionTemplates): AbortablePromise<Responses.InspectionTemplates>;
    Problem(request: Requests.Problem): AbortablePromise<Responses.Problem>;
    Problems(request: Requests.Problems): AbortablePromise<Responses.Problems>;
    Search(request: Requests.Search): AbortablePromise<Responses.Search>;
    ServiceRequest(request: Requests.ServiceRequest): AbortablePromise<Responses.ServiceRequest>;
    ServiceRequests(request: Requests.ServiceRequests): AbortablePromise<Responses.ServiceRequests>;
    WorkOrder(request: Requests.WorkOrder): AbortablePromise<Responses.WorkOrder>;
    WorkOrders(request: Requests.WorkOrders): AbortablePromise<Responses.WorkOrders>;
    WorkOrderTemplate(request: Requests.WorkOrderTemplate): AbortablePromise<Responses.WorkOrderTemplate>;
}
