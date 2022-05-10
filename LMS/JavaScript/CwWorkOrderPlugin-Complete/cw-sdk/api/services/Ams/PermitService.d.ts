import { PromiseTypes } from '../../../core/promise';
import { IApiService } from '../../../http/api-service';
import { PermitServiceTypes as SvcDef } from '../../interfaces/Ams/PermitService';
import AbortablePromise = PromiseTypes.AbortablePromise;
import Requests = SvcDef.Requests;
import Responses = SvcDef.Responses;
import IPermitService = SvcDef.IPermitService;
export * from '../../../http/api-service';
export * from '../../interfaces/Ams/PermitService';
export declare class PermitService implements IPermitService {
    private _service;
    constructor(service: IApiService);
    AddWorkOrderPermits(request: Requests.AddWorkOrderPermits): AbortablePromise<Responses.AddWorkOrderPermits>;
    CreatePermit(request: Requests.CreatePermit): AbortablePromise<Responses.CreatePermit>;
    DeletePermits(request: Requests.DeletePermits): AbortablePromise<Responses.DeletePermits>;
    DeleteWorkOrderPermits(request: Requests.DeleteWorkOrderPermits): AbortablePromise<Responses.DeleteWorkOrderPermits>;
    Permits(request: Requests.Permits): AbortablePromise<Responses.Permits>;
    PermitTypes(request: Requests.PermitTypes): AbortablePromise<Responses.PermitTypes>;
    UpdatePermit(request: Requests.UpdatePermit): AbortablePromise<Responses.UpdatePermit>;
    WorkOrderPermits(request: Requests.WorkOrderPermits): AbortablePromise<Responses.WorkOrderPermits>;
    ErrorCodes: {
        UnknownError: number;
        WorkOrderIdRequired: number;
        PermitSidsRequired: number;
        PermitDoesNotExist: number;
        PermitNumberRequired: number;
        PermitSidRequired: number;
        WorkOrderSidRequired: number;
        MustBeDomainAdmin: number;
    };
    WarningCodes: {};
}
