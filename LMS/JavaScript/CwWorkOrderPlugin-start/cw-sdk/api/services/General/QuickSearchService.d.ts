import { PromiseTypes } from '../../../core/promise';
import { IApiService } from '../../../http/api-service';
import { QuickSearchServiceTypes as SvcDef } from '../../interfaces/General/QuickSearchService';
import AbortablePromise = PromiseTypes.AbortablePromise;
import Requests = SvcDef.Requests;
import Responses = SvcDef.Responses;
import IQuickSearchService = SvcDef.IQuickSearchService;
export * from '../../../http/api-service';
export * from '../../interfaces/General/QuickSearchService';
export declare class QuickSearchService implements IQuickSearchService {
    private _service;
    constructor(service: IApiService);
    QuickSearch(request: Requests.QuickSearch): AbortablePromise<Responses.QuickSearch>;
    ErrorCodes: {};
    WarningCodes: {};
}
