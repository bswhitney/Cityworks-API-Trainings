import { Enums, ServiceEnums, PromiseTypes, ServiceTypes, Types as CoreTypes } from '../../../bundles/core';
import AbortablePromise = PromiseTypes.AbortablePromise;

export namespace WebHookEventServiceTypes { 
    export namespace Requests {
        export interface ProcessMessages extends ServiceTypes.CoreRequestBase {
            Delete?: boolean;
            Ids: number[];
        }
    }
    export namespace Responses {
        export interface ProcessMessages extends ServiceTypes.CoreResponseBase_<CoreTypes.QueueMessage[]> {}
    }
    export interface IWebHookEventService {
        ProcessMessages?: (request: Requests.ProcessMessages) => AbortablePromise<Responses.ProcessMessages>;
    }
}
