import { PromiseTypes } from '../../../core/promise';
import { IApiService } from '../../../http/api-service';
import { InspectionTemplateServiceTypes as SvcDef } from '../../interfaces/Ams/InspectionTemplateService';
import AbortablePromise = PromiseTypes.AbortablePromise;
import Requests = SvcDef.Requests;
import Responses = SvcDef.Responses;
import IInspectionTemplateService = SvcDef.IInspectionTemplateService;
export * from '../../../http/api-service';
export * from '../../interfaces/Ams/InspectionTemplateService';
export declare class InspectionTemplateService implements IInspectionTemplateService {
    private _service;
    constructor(service: IApiService);
    ByIds(request: Requests.ByIds): AbortablePromise<Responses.ByIds>;
    CreateSearchDefinition(request: Requests.CreateSearchDefinition): AbortablePromise<Responses.CreateSearchDefinition>;
    EntityTypes(request: Requests.EntityTypes): AbortablePromise<Responses.EntityTypes>;
    QA(request: Requests.QA): AbortablePromise<Responses.QA>;
    Search(request: Requests.Search): AbortablePromise<Responses.Search>;
    Templates(request: Requests.Templates): AbortablePromise<Responses.Templates>;
    TestTypes(request: Requests.TestTypes): AbortablePromise<Responses.TestTypes>;
}
