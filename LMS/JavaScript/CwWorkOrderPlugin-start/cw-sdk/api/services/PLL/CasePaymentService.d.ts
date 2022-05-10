import { PromiseTypes } from '../../../core/promise';
import { IApiService } from '../../../http/api-service';
import { CasePaymentServiceTypes as SvcDef } from '../../interfaces/PLL/CasePaymentService';
import AbortablePromise = PromiseTypes.AbortablePromise;
import Requests = SvcDef.Requests;
import Responses = SvcDef.Responses;
import ICasePaymentService = SvcDef.ICasePaymentService;
export * from '../../../http/api-service';
export * from '../../interfaces/PLL/CasePaymentService';
export declare class CasePaymentService implements ICasePaymentService {
    private _service;
    constructor(service: IApiService);
    Add(request: Requests.Add): AbortablePromise<Responses.Add>;
    AddDeposit(request: Requests.AddDeposit): AbortablePromise<Responses.AddDeposit>;
    ByCaObjectId(request: Requests.ByCaObjectId): AbortablePromise<Responses.ByCaObjectId>;
    Delete(request: Requests.Delete): AbortablePromise<Responses.Delete>;
    DeleteByCaObjectId(request: Requests.DeleteByCaObjectId): AbortablePromise<Responses.DeleteByCaObjectId>;
    DownloadReceipt(request: Requests.DownloadReceipt): AbortablePromise<Responses.DownloadReceipt>;
    Search(request: Requests.Search): AbortablePromise<Responses.Search>;
    SearchObject(request: Requests.SearchObject): AbortablePromise<Responses.SearchObject>;
    Update(request: Requests.Update): AbortablePromise<Responses.Update>;
    ErrorCodes: {};
    WarningCodes: {};
}
