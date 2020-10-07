import { PromiseTypes } from '../../../core/promise';
import { IApiService } from '../../../http/api-service';
import { EmployeeServiceTypes as SvcDef } from '../../interfaces/Ams/EmployeeService';
import AbortablePromise = PromiseTypes.AbortablePromise;
import Requests = SvcDef.Requests;
import Responses = SvcDef.Responses;
import IEmployeeService = SvcDef.IEmployeeService;
export * from '../../../http/api-service';
export * from '../../interfaces/Ams/EmployeeService';
export declare class EmployeeService implements IEmployeeService {
    private _service;
    constructor(service: IApiService);
    Add(request: Requests.Add): AbortablePromise<Responses.Add>;
    AddLicensedItems(request: Requests.AddLicensedItems): AbortablePromise<Responses.AddLicensedItems>;
    All(request: Requests.All): AbortablePromise<Responses.All>;
    ById(request: Requests.ById): AbortablePromise<Responses.ById>;
    ByIds(request: Requests.ByIds): AbortablePromise<Responses.ByIds>;
    Delete(request: Requests.Delete): AbortablePromise<Responses.Delete>;
    DeleteLicensedItems(request: Requests.DeleteLicensedItems): AbortablePromise<Responses.DeleteLicensedItems>;
    NamesAreUnique(request: Requests.NamesAreUnique): AbortablePromise<Responses.NamesAreUnique>;
    Search(request: Requests.Search): AbortablePromise<Responses.Search>;
    Update(request: Requests.Update): AbortablePromise<Responses.Update>;
}
