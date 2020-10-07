import { PromiseTypes } from '../../../core/promise';
import { IApiService } from '../../../http/api-service';
import { CasePaymentRefundServiceTypes as SvcDef } from '../../interfaces/PLL/CasePaymentRefundService';
import AbortablePromise = PromiseTypes.AbortablePromise;
import Requests = SvcDef.Requests;
import Responses = SvcDef.Responses;
import ICasePaymentRefundService = SvcDef.ICasePaymentRefundService;
export * from '../../../http/api-service';
export * from '../../interfaces/PLL/CasePaymentRefundService';
export declare class CasePaymentRefundService implements ICasePaymentRefundService {
    private _service;
    constructor(service: IApiService);
    Add(request: Requests.Add): AbortablePromise<Responses.Add>;
    Delete(request: Requests.Delete): AbortablePromise<Responses.Delete>;
    Search(request: Requests.Search): AbortablePromise<Responses.Search>;
}
