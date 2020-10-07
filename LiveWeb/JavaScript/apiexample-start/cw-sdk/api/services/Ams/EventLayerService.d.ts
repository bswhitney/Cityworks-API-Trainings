import { PromiseTypes } from '../../../core/promise';
import { IApiService } from '../../../http/api-service';
import { EventLayerServiceTypes as SvcDef } from '../../interfaces/Ams/EventLayerService';
import AbortablePromise = PromiseTypes.AbortablePromise;
import Requests = SvcDef.Requests;
import Responses = SvcDef.Responses;
import IEventLayerService = SvcDef.IEventLayerService;
export * from '../../../http/api-service';
export * from '../../interfaces/Ams/EventLayerService';
export declare class EventLayerService implements IEventLayerService {
    private _service;
    constructor(service: IApiService);
    All(request: Requests.All): AbortablePromise<Responses.All>;
    ById(request: Requests.ById): AbortablePromise<Responses.ById>;
}
