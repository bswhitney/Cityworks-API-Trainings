import { PromiseTypes } from '../../../core/promise';
import { IApiService } from '../../../http/api-service';
import { EscrowPaymentServiceTypes as SvcDef } from '../../interfaces/PLL/EscrowPaymentService';
import AbortablePromise = PromiseTypes.AbortablePromise;
import Requests = SvcDef.Requests;
import Responses = SvcDef.Responses;
import IEscrowPaymentService = SvcDef.IEscrowPaymentService;
export * from '../../../http/api-service';
export * from '../../interfaces/PLL/EscrowPaymentService';
export declare class EscrowPaymentService implements IEscrowPaymentService {
    private _service;
    constructor(service: IApiService);
    Add(request: Requests.Add): AbortablePromise<Responses.Add>;
    GetList(request: Requests.GetList): AbortablePromise<Responses.GetList>;
    Update(request: Requests.Update): AbortablePromise<Responses.Update>;
    ErrorCodes: {};
    WarningCodes: {};
}
