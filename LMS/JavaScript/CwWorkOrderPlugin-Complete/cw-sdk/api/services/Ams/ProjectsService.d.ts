import { PromiseTypes } from '../../../core/promise';
import { IApiService } from '../../../http/api-service';
import { ProjectsServiceTypes as SvcDef } from '../../interfaces/Ams/ProjectsService';
import AbortablePromise = PromiseTypes.AbortablePromise;
import Requests = SvcDef.Requests;
import Responses = SvcDef.Responses;
import IProjectsService = SvcDef.IProjectsService;
export * from '../../../http/api-service';
export * from '../../interfaces/Ams/ProjectsService';
export declare class ProjectsService implements IProjectsService {
    private _service;
    constructor(service: IApiService);
    ByContractIds(request: Requests.ByContractIds): AbortablePromise<Responses.ByContractIds>;
    ByIds(request: Requests.ByIds): AbortablePromise<Responses.ByIds>;
    Create(request: Requests.Create): AbortablePromise<Responses.Create>;
    QuickView(request: Requests.QuickView): AbortablePromise<Responses.QuickView>;
    Update(request: Requests.Update): AbortablePromise<Responses.Update>;
}
