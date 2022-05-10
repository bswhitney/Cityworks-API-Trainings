import { PromiseTypes } from '../../../core/promise';
import { IApiService } from '../../../http/api-service';
import { DepartmentServiceTypes as SvcDef } from '../../interfaces/PLL/DepartmentService';
import AbortablePromise = PromiseTypes.AbortablePromise;
import Requests = SvcDef.Requests;
import Responses = SvcDef.Responses;
import IDepartmentService = SvcDef.IDepartmentService;
export * from '../../../http/api-service';
export * from '../../interfaces/PLL/DepartmentService';
export declare class DepartmentService implements IDepartmentService {
    private _service;
    constructor(service: IApiService);
    Add(request: Requests.Add): AbortablePromise<Responses.Add>;
    ErrorCodes: {};
    WarningCodes: {};
}
