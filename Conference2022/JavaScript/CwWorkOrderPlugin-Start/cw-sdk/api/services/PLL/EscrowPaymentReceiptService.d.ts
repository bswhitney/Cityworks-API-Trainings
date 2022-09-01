import { PromiseTypes } from '../../../core/promise';
import { IApiService } from '../../../http/api-service';
import { EscrowPaymentReceiptServiceTypes as SvcDef } from '../../interfaces/PLL/EscrowPaymentReceiptService';
import AbortablePromise = PromiseTypes.AbortablePromise;
import Requests = SvcDef.Requests;
import Responses = SvcDef.Responses;
import IEscrowPaymentReceiptService = SvcDef.IEscrowPaymentReceiptService;
export * from '../../../http/api-service';
export * from '../../interfaces/PLL/EscrowPaymentReceiptService';
export declare class EscrowPaymentReceiptService implements IEscrowPaymentReceiptService {
    private _service;
    constructor(service: IApiService);
    Add(request: Requests.Add): AbortablePromise<Responses.Add>;
    GetList(request: Requests.GetList): AbortablePromise<Responses.GetList>;
    Update(request: Requests.Update): AbortablePromise<Responses.Update>;
    ErrorCodes: {};
    WarningCodes: {};
}
