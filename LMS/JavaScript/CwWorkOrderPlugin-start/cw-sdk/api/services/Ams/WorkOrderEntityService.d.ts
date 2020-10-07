import { PromiseTypes } from '../../../core/promise';
import { IApiService } from '../../../http/api-service';
import { WorkOrderEntityServiceTypes as SvcDef } from '../../interfaces/Ams/WorkOrderEntityService';
import AbortablePromise = PromiseTypes.AbortablePromise;
import Requests = SvcDef.Requests;
import Responses = SvcDef.Responses;
import IWorkOrderEntityService = SvcDef.IWorkOrderEntityService;
export * from '../../../http/api-service';
export * from '../../interfaces/Ams/WorkOrderEntityService';
export declare class WorkOrderEntityService implements IWorkOrderEntityService {
    private _service;
    constructor(service: IApiService);
    ByIds(request: Requests.ByIds): AbortablePromise<Responses.ByIds>;
    CreateSearchDefinition(request: Requests.CreateSearchDefinition): AbortablePromise<Responses.CreateSearchDefinition>;
    Search(request: Requests.Search): AbortablePromise<Responses.Search>;
}
