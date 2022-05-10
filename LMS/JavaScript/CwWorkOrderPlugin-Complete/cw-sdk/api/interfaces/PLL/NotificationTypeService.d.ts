import { Enums, ServiceEnums, PromiseTypes, ServiceTypes, Types as CoreTypes } from '../../../bundles/core';
import AbortablePromise = PromiseTypes.AbortablePromise;

export namespace NotificationTypeServiceTypes { 
    export namespace Requests {
        export interface GetNotificationTypeList extends ServiceTypes.CoreRequestBase {
            Limit?: number;
            Offset?: number;
            SortDir?: number;
            SortField?: string;
            WhereClause?: CoreTypes.FilterCondition[];
        }
    }
    export namespace Responses {
        export interface GetNotificationTypeList extends ServiceTypes.CoreResponsePaged_<CoreTypes.NotificationTypeItem[]> {}
    }
    export interface INotificationTypeService {
        GetNotificationTypeList?: (request: Requests.GetNotificationTypeList) => AbortablePromise<Responses.GetNotificationTypeList>;
    }
}
