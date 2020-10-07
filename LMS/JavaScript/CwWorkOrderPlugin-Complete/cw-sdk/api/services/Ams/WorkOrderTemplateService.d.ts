import { PromiseTypes } from '../../../core/promise';
import { IApiService } from '../../../http/api-service';
import { WorkOrderTemplateServiceTypes as SvcDef } from '../../interfaces/Ams/WorkOrderTemplateService';
import AbortablePromise = PromiseTypes.AbortablePromise;
import Requests = SvcDef.Requests;
import Responses = SvcDef.Responses;
import IWorkOrderTemplateService = SvcDef.IWorkOrderTemplateService;
export * from '../../../http/api-service';
export * from '../../interfaces/Ams/WorkOrderTemplateService';
export declare class WorkOrderTemplateService implements IWorkOrderTemplateService {
    private _service;
    constructor(service: IApiService);
    ByIds(request: Requests.ByIds): AbortablePromise<Responses.ByIds>;
    ByProblemSids(request: Requests.ByProblemSids): AbortablePromise<Responses.ByProblemSids>;
    CustomFieldCategories(request: Requests.CustomFieldCategories): AbortablePromise<Responses.CustomFieldCategories>;
    CustomFields(request: Requests.CustomFields): AbortablePromise<Responses.CustomFields>;
    Search(request: Requests.Search): AbortablePromise<Responses.Search>;
    TemplateInspections(request: Requests.TemplateInspections): AbortablePromise<Responses.TemplateInspections>;
    TemplateNames(request: Requests.TemplateNames): AbortablePromise<Responses.TemplateNames>;
}
