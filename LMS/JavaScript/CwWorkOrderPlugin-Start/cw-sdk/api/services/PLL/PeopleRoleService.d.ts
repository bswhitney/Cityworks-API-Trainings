import { PromiseTypes } from '../../../core/promise';
import { IApiService } from '../../../http/api-service';
import { PeopleRoleServiceTypes as SvcDef } from '../../interfaces/PLL/PeopleRoleService';
import AbortablePromise = PromiseTypes.AbortablePromise;
import Requests = SvcDef.Requests;
import Responses = SvcDef.Responses;
import IPeopleRoleService = SvcDef.IPeopleRoleService;
export * from '../../../http/api-service';
export * from '../../interfaces/PLL/PeopleRoleService';
export declare class PeopleRoleService implements IPeopleRoleService {
    private _service;
    constructor(service: IApiService);
    Add(request: Requests.Add): AbortablePromise<Responses.Add>;
    ErrorCodes: {};
    WarningCodes: {};
}
