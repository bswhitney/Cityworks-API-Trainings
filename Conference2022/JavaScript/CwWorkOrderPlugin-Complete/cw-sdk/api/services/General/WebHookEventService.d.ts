import { PromiseTypes } from '../../../core/promise';
import { IApiService } from '../../../http/api-service';
import { WebHookEventServiceTypes as SvcDef } from '../../interfaces/General/WebHookEventService';
import AbortablePromise = PromiseTypes.AbortablePromise;
import Requests = SvcDef.Requests;
import Responses = SvcDef.Responses;
import IWebHookEventService = SvcDef.IWebHookEventService;
export * from '../../../http/api-service';
export * from '../../interfaces/General/WebHookEventService';
export declare class WebHookEventService implements IWebHookEventService {
    private _service;
    constructor(service: IApiService);
    ProcessMessages(request: Requests.ProcessMessages): AbortablePromise<Responses.ProcessMessages>;
    ErrorCodes: {};
    WarningCodes: {};
}
