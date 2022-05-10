import { PromiseTypes } from '../../../core/promise';
import { IApiService } from '../../../http/api-service';
import { CaseDataGroupServiceTypes as SvcDef } from '../../interfaces/PLL/CaseDataGroupService';
import AbortablePromise = PromiseTypes.AbortablePromise;
import Requests = SvcDef.Requests;
import Responses = SvcDef.Responses;
import ICaseDataGroupService = SvcDef.ICaseDataGroupService;
export * from '../../../http/api-service';
export * from '../../interfaces/PLL/CaseDataGroupService';
export declare class CaseDataGroupService implements ICaseDataGroupService {
    private _service;
    constructor(service: IApiService);
    Add(request: Requests.Add): AbortablePromise<Responses.Add>;
    AddDefault(request: Requests.AddDefault): AbortablePromise<Responses.AddDefault>;
    ByCaObjectId(request: Requests.ByCaObjectId): AbortablePromise<Responses.ByCaObjectId>;
    CheckGISChanges(request: Requests.CheckGISChanges): AbortablePromise<Responses.CheckGISChanges>;
    DeleteByCaObjectId(request: Requests.DeleteByCaObjectId): AbortablePromise<Responses.DeleteByCaObjectId>;
    Search(request: Requests.Search): AbortablePromise<Responses.Search>;
    UpdateFromAsset(request: Requests.UpdateFromAsset): AbortablePromise<Responses.UpdateFromAsset>;
    ErrorCodes: {};
    WarningCodes: {};
}
