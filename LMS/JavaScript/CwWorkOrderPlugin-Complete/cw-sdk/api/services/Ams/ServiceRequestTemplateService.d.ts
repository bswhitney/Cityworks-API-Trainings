import { PromiseTypes } from '../../../core/promise';
import { IApiService } from '../../../http/api-service';
import { ServiceRequestTemplateServiceTypes as SvcDef } from '../../interfaces/Ams/ServiceRequestTemplateService';
import AbortablePromise = PromiseTypes.AbortablePromise;
import Requests = SvcDef.Requests;
import Responses = SvcDef.Responses;
import IServiceRequestTemplateService = SvcDef.IServiceRequestTemplateService;
export * from '../../../http/api-service';
export * from '../../interfaces/Ams/ServiceRequestTemplateService';
export declare class ServiceRequestTemplateService implements IServiceRequestTemplateService {
    private _service;
    constructor(service: IApiService);
    ByIds(request: Requests.ByIds): AbortablePromise<Responses.ByIds>;
    CreateSearchDefinition(request: Requests.CreateSearchDefinition): AbortablePromise<Responses.CreateSearchDefinition>;
    QA(request: Requests.QA): AbortablePromise<Responses.QA>;
    Search(request: Requests.Search): AbortablePromise<Responses.Search>;
    Templates(request: Requests.Templates): AbortablePromise<Responses.Templates>;
    WorkOrderTemplates(request: Requests.WorkOrderTemplates): AbortablePromise<Responses.WorkOrderTemplates>;
    ErrorCodes: {};
    WarningCodes: {
        WarningEmptyOrNullField: number;
    };
}
