import { Enums, ServiceEnums, PromiseTypes, ServiceTypes, Types as CoreTypes } from '../../../bundles/core';
import AbortablePromise = PromiseTypes.AbortablePromise;

export namespace NotificationCaseServiceTypes { 
    export namespace Requests {
        export interface GetNotificationCaseList extends ServiceTypes.CoreRequestBase {
            Limit?: number;
            Offset?: number;
            SortDir?: number;
            SortField?: string;
            WhereClause?: CoreTypes.FilterCondition[];
        }
    }
    export namespace Responses {
        export interface GetNotificationCaseList extends ServiceTypes.CoreResponsePaged_<CoreTypes.NotificationCaseItem[]> {}
    }
    export interface INotificationCaseService {
        GetNotificationCaseList?: (request: Requests.GetNotificationCaseList) => AbortablePromise<Responses.GetNotificationCaseList>;
    }
}
