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
    AddEntities(request: Requests.AddEntities): AbortablePromise<Responses.AddEntities>;
    AddToContractId(request: Requests.AddToContractId): AbortablePromise<Responses.AddToContractId>;
    All(request: Requests.All): AbortablePromise<Responses.All>;
    AuditLog(request: Requests.AuditLog): AbortablePromise<Responses.AuditLog>;
    ByContractIds(request: Requests.ByContractIds): AbortablePromise<Responses.ByContractIds>;
    ByIds(request: Requests.ByIds): AbortablePromise<Responses.ByIds>;
    Categories(request: Requests.Categories): AbortablePromise<Responses.Categories>;
    Create(request: Requests.Create): AbortablePromise<Responses.Create>;
    CreateSearchDefinition(request: Requests.CreateSearchDefinition): AbortablePromise<Responses.CreateSearchDefinition>;
    DeleteFromContractId(request: Requests.DeleteFromContractId): AbortablePromise<Responses.DeleteFromContractId>;
    Entities(request: Requests.Entities): AbortablePromise<Responses.Entities>;
    Move(request: Requests.Move): AbortablePromise<Responses.Move>;
    QuickView(request: Requests.QuickView): AbortablePromise<Responses.QuickView>;
    RemoveEntities(request: Requests.RemoveEntities): AbortablePromise<Responses.RemoveEntities>;
    Search(request: Requests.Search): AbortablePromise<Responses.Search>;
    Statuses(request: Requests.Statuses): AbortablePromise<Responses.Statuses>;
    Update(request: Requests.Update): AbortablePromise<Responses.Update>;
    UseOpxPermissions(request: Requests.UseOpxPermissions): AbortablePromise<Responses.UseOpxPermissions>;
    ErrorCodes: {
        UnknownError: number;
        NotAuthorizedToCreateProject: number;
        NotAuthorizedToUpdateProject: number;
        InvalidField: number;
        ErrorItemNotFound: number;
    };
    WarningCodes: {
        WarningItemNotFound: number;
        WarningNoPermissionToViewProject: number;
    };
}
