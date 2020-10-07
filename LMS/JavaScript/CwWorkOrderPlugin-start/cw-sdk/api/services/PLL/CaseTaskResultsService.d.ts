import { PromiseTypes } from '../../../core/promise';
import { IApiService } from '../../../http/api-service';
import { CaseTaskResultsServiceTypes as SvcDef } from '../../interfaces/PLL/CaseTaskResultsService';
import AbortablePromise = PromiseTypes.AbortablePromise;
import Requests = SvcDef.Requests;
import Responses = SvcDef.Responses;
import ICaseTaskResultsService = SvcDef.ICaseTaskResultsService;
export * from '../../../http/api-service';
export * from '../../interfaces/PLL/CaseTaskResultsService';
export declare class CaseTaskResultsService implements ICaseTaskResultsService {
    private _service;
    constructor(service: IApiService);
    Add(request: Requests.Add): AbortablePromise<Responses.Add>;
    ByCaTaskIds(request: Requests.ByCaTaskIds): AbortablePromise<Responses.ByCaTaskIds>;
    SearchObject(request: Requests.SearchObject): AbortablePromise<Responses.SearchObject>;
}
