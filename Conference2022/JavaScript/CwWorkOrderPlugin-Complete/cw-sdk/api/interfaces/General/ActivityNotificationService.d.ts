import { Enums, ServiceEnums, PromiseTypes, ServiceTypes, Types as CoreTypes } from '../../../bundles/core';
import AbortablePromise = PromiseTypes.AbortablePromise;

export namespace ActivityNotificationServiceTypes { 
    export namespace Requests {
        export interface User extends ServiceTypes.CoreRequestBase {
        }
        export interface UserWatching extends ServiceTypes.CoreRequestBase {
            ActivityId: number;
            ActivityType: Enums.NotificationActivityType;
        }
    }
    export namespace Responses {
        export interface User extends ServiceTypes.CoreResponseBase_<CoreTypes.ActivityNotificationItem[]> {}
        export interface UserWatching extends ServiceTypes.CoreResponseBase_<boolean> {}
    }
    export interface IActivityNotificationService {
        User?: (request: Requests.User) => AbortablePromise<Responses.User>;
        UserWatching?: (request: Requests.UserWatching) => AbortablePromise<Responses.UserWatching>;
    }
}
