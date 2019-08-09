import { PromiseTypes } from '../../../core/promise';
import { IApiService } from '../../../http/api-service';
import { CustomerCallServiceTypes as SvcDef } from '../../interfaces/Ams/CustomerCallService';
import AbortablePromise = PromiseTypes.AbortablePromise;
import Requests = SvcDef.Requests;
import Responses = SvcDef.Responses;
import ICustomerCallService = SvcDef.ICustomerCallService;
export * from '../../../http/api-service';
export * from '../../interfaces/Ams/CustomerCallService';
export declare class CustomerCallService implements ICustomerCallService {
    private _service;
    constructor(service: IApiService);
    AddToRequest(request: Requests.AddToRequest): AbortablePromise<Responses.AddToRequest>;
    ByIncidentNum(request: Requests.ByIncidentNum): AbortablePromise<Responses.ByIncidentNum>;
    ByRequestId(request: Requests.ByRequestId): AbortablePromise<Responses.ByRequestId>;
    CallerQuestions(request: Requests.CallerQuestions): AbortablePromise<Responses.CallerQuestions>;
    CallerQuestionsByRequestIds(request: Requests.CallerQuestionsByRequestIds): AbortablePromise<Responses.CallerQuestionsByRequestIds>;
    Delete(request: Requests.Delete): AbortablePromise<Responses.Delete>;
    Move(request: Requests.Move): AbortablePromise<Responses.Move>;
    MoveToRequest(request: Requests.MoveToRequest): AbortablePromise<Responses.MoveToRequest>;
    Update(request: Requests.Update): AbortablePromise<Responses.Update>;
}
