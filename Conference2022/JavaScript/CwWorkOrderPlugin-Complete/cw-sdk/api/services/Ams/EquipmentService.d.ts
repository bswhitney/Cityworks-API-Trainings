import { PromiseTypes } from '../../../core/promise';
import { IApiService } from '../../../http/api-service';
import { EquipmentServiceTypes as SvcDef } from '../../interfaces/Ams/EquipmentService';
import AbortablePromise = PromiseTypes.AbortablePromise;
import Requests = SvcDef.Requests;
import Responses = SvcDef.Responses;
import IEquipmentService = SvcDef.IEquipmentService;
export * from '../../../http/api-service';
export * from '../../interfaces/Ams/EquipmentService';
export declare class EquipmentService implements IEquipmentService {
    private _service;
    constructor(service: IApiService);
    Add(request: Requests.Add): AbortablePromise<Responses.Add>;
    All(request: Requests.All): AbortablePromise<Responses.All>;
    ById(request: Requests.ById): AbortablePromise<Responses.ById>;
    ByIds(request: Requests.ByIds): AbortablePromise<Responses.ByIds>;
    CustomDataFields(request: Requests.CustomDataFields): AbortablePromise<Responses.CustomDataFields>;
    Delete(request: Requests.Delete): AbortablePromise<Responses.Delete>;
    Search(request: Requests.Search): AbortablePromise<Responses.Search>;
    Update(request: Requests.Update): AbortablePromise<Responses.Update>;
    ErrorCodes: {
        NotAuthorizedToCreateEquipment: number;
        InvalidField: number;
        ErrorCreatingEquipment: number;
    };
    WarningCodes: {};
}
