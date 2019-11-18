import { PromiseTypes } from '../../../core/promise';
import { IApiService } from '../../../http/api-service';
import { CustomerAccountServiceTypes as SvcDef } from '../../interfaces/Ams/CustomerAccountService';
import AbortablePromise = PromiseTypes.AbortablePromise;
import Requests = SvcDef.Requests;
import Responses = SvcDef.Responses;
import ICustomerAccountService = SvcDef.ICustomerAccountService;
export * from '../../../http/api-service';
export * from '../../interfaces/Ams/CustomerAccountService';
export declare class CustomerAccountService implements ICustomerAccountService {
    private _service;
    constructor(service: IApiService);
    Add(request: Requests.Add): AbortablePromise<Responses.Add>;
    ByAccountNumbers(request: Requests.ByAccountNumbers): AbortablePromise<Responses.ByAccountNumbers>;
    ByIds(request: Requests.ByIds): AbortablePromise<Responses.ByIds>;
    Delete(request: Requests.Delete): AbortablePromise<Responses.Delete>;
    Import(request: Requests.Import): AbortablePromise<Responses.Import>;
    Search(request: Requests.Search): AbortablePromise<Responses.Search>;
    Update(request: Requests.Update): AbortablePromise<Responses.Update>;
}
