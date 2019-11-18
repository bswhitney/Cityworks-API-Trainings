import { PromiseTypes } from '../../../core/promise';
import { IApiService } from '../../../http/api-service';
import { PluginLayoutServiceTypes as SvcDef } from '../../interfaces/Ams/PluginLayoutService';
import AbortablePromise = PromiseTypes.AbortablePromise;
import Requests = SvcDef.Requests;
import Responses = SvcDef.Responses;
import IPluginLayoutService = SvcDef.IPluginLayoutService;
export * from '../../../http/api-service';
export * from '../../interfaces/Ams/PluginLayoutService';
export declare class PluginLayoutService implements IPluginLayoutService {
    private _service;
    constructor(service: IApiService);
    Definition(request: Requests.Definition): AbortablePromise<Responses.Definition>;
    Definitions(request: Requests.Definitions): AbortablePromise<Responses.Definitions>;
    Public(request: Requests.Public): AbortablePromise<Responses.Definition>;
    PublicDefinitions(request: Requests.PublicDefinitions): AbortablePromise<Responses.Definitions>;
}
