import { PromiseTypes } from '../../../core/promise';
import { IApiService } from '../../../http/api-service';
import { UniversalCustomFieldServiceTypes as SvcDef } from '../../interfaces/Ams/UniversalCustomFieldService';
import AbortablePromise = PromiseTypes.AbortablePromise;
import Requests = SvcDef.Requests;
import Responses = SvcDef.Responses;
import IUniversalCustomFieldService = SvcDef.IUniversalCustomFieldService;
export * from '../../../http/api-service';
export * from '../../interfaces/Ams/UniversalCustomFieldService';
export declare class UniversalCustomFieldService implements IUniversalCustomFieldService {
    private _service;
    constructor(service: IApiService);
    Add(request: Requests.Add): AbortablePromise<Responses.Add>;
    ById(request: Requests.ById): AbortablePromise<Responses.ById>;
    ByType(request: Requests.ByType): AbortablePromise<Responses.ByType>;
    Contract(request: Requests.Contract): AbortablePromise<Responses.Contract>;
    CustomerCall(request: Requests.CustomerCall): AbortablePromise<Responses.CustomerCall>;
    Delete(request: Requests.Delete): AbortablePromise<Responses.Delete>;
    Inspection(request: Requests.Inspection): AbortablePromise<Responses.Inspection>;
    MoveField(request: Requests.MoveField): AbortablePromise<Responses.MoveField>;
    Project(request: Requests.Project): AbortablePromise<Responses.Project>;
    ServiceRequest(request: Requests.ServiceRequest): AbortablePromise<Responses.ServiceRequest>;
    Update(request: Requests.Update): AbortablePromise<Responses.Update>;
    WorkOrder(request: Requests.WorkOrder): AbortablePromise<Responses.WorkOrder>;
    ErrorCodes: {
        InvalidField: number;
        UnauthorizedUser: number;
        AddError: number;
        UpdateError: number;
    };
    WarningCodes: {
        WarningEmptyOrNullField: number;
    };
}
