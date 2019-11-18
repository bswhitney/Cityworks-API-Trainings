import { PromiseTypes } from '../../../core/promise';
import { IApiService } from '../../../http/api-service';
import { MessageQueueServiceTypes as SvcDef } from '../../interfaces/General/MessageQueueService';
import AbortablePromise = PromiseTypes.AbortablePromise;
import Requests = SvcDef.Requests;
import Responses = SvcDef.Responses;
import IMessageQueueService = SvcDef.IMessageQueueService;
export * from '../../../http/api-service';
export * from '../../interfaces/General/MessageQueueService';
export declare class MessageQueueService implements IMessageQueueService {
    private _service;
    constructor(service: IApiService);
    ByIds(request: Requests.ByIds): AbortablePromise<Responses.ByIds>;
    Delete(request: Requests.Delete): AbortablePromise<Responses.Delete>;
    Preferences(request: Requests.Preferences): AbortablePromise<Responses.Preferences>;
    Search(request: Requests.Search): AbortablePromise<Responses.Search>;
    Update(request: Requests.Update): AbortablePromise<Responses.Update>;
    UpdateMessageStatus(request: Requests.UpdateMessageStatus): AbortablePromise<Responses.UpdateMessageStatus>;
    WebHooks(request: Requests.WebHooks): AbortablePromise<Responses.WebHooks>;
}
