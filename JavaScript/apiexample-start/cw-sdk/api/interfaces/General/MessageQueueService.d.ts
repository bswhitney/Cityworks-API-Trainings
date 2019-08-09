import { Enums, ServiceEnums, PromiseTypes, ServiceTypes, Types as CoreTypes } from '../../../bundles/core';
import AbortablePromise = PromiseTypes.AbortablePromise;

export namespace MessageQueueServiceTypes { 
    export namespace Requests {
        export interface ByIds extends ServiceTypes.CoreRequestBase {
            Ids?: number[];
            MaxCount?: number;
            Status?: Enums.QueueStatus;
        }
        export interface Delete extends ServiceTypes.CoreRequestBase {
            HoursToKeep?: number;
            Ids?: number[];
            Status?: Enums.QueueStatus;
        }
        export interface Preferences extends ServiceTypes.CoreRequestBase {
        }
        export interface Search extends ServiceTypes.CoreRequestBase {
            DateCreatedBegin?: Date;
            DateCreatedEnd?: Date;
            DateUpdatedBegin?: Date;
            DateUpdatedEnd?: Date;
            HookId?: number[];
            HookType?: string[];
            Id?: number[];
            MaxResults?: number;
            Result?: string[];
            Status?: string[];
        }
        export interface Update extends ServiceTypes.CoreRequestBase {
            HookId?: number;
            HookType?: Enums.ActionType;
            Id?: number;
            Packet?: string;
            Result?: string;
            Status?: Enums.QueueStatus;
        }
        export interface UpdateMessageStatus extends ServiceTypes.CoreRequestBase {
            Ids?: number[];
            Status?: Enums.QueueStatus;
        }
        export interface WebHooks extends ServiceTypes.CoreRequestBase {
            HookIds?: number[];
        }
    }
    export namespace Responses {
        export interface ByIds extends ServiceTypes.CoreResponseBase_<CoreTypes.QueueMessage[]> {}
        export interface Delete extends ServiceTypes.CoreResponseBase_<{[key: number]: boolean}> {}
        export interface Preferences extends ServiceTypes.CoreResponseBase_<CoreTypes.GlobalPreference[]> {}
        export interface Search extends ServiceTypes.CoreResponseBase_<number[]> {}
        export interface Update extends ServiceTypes.CoreResponseBase_<CoreTypes.QueueMessage> {}
        export interface UpdateMessageStatus extends ServiceTypes.CoreResponseBase_<boolean> {}
        export interface WebHooks extends ServiceTypes.CoreResponseBase_<CoreTypes.WebHookBase[]> {}
    }
    export interface IMessageQueueService {
        ByIds?: (request: Requests.ByIds) => AbortablePromise<Responses.ByIds>;
        Delete?: (request: Requests.Delete) => AbortablePromise<Responses.Delete>;
        Preferences?: (request: Requests.Preferences) => AbortablePromise<Responses.Preferences>;
        Search?: (request: Requests.Search) => AbortablePromise<Responses.Search>;
        Update?: (request: Requests.Update) => AbortablePromise<Responses.Update>;
        UpdateMessageStatus?: (request: Requests.UpdateMessageStatus) => AbortablePromise<Responses.UpdateMessageStatus>;
        WebHooks?: (request: Requests.WebHooks) => AbortablePromise<Responses.WebHooks>;
    }
}
