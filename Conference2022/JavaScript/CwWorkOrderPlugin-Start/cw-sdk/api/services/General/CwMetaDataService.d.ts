import { PromiseTypes } from '../../../core/promise';
import { IApiService } from '../../../http/api-service';
import { CwMetaDataServiceTypes as SvcDef } from '../../interfaces/General/CwMetaDataService';
import AbortablePromise = PromiseTypes.AbortablePromise;
import Requests = SvcDef.Requests;
import Responses = SvcDef.Responses;
import ICwMetaDataService = SvcDef.ICwMetaDataService;
export * from '../../../http/api-service';
export * from '../../interfaces/General/CwMetaDataService';
export declare class CwMetaDataService implements ICwMetaDataService {
    private _service;
    constructor(service: IApiService);
    ByTableNameSids(request: Requests.ByTableNameSids): AbortablePromise<Responses.ByTableNameSids>;
    ErrorCodes: {};
    WarningCodes: {};
}
