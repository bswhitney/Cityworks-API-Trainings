import { Enums, ServiceEnums, PromiseTypes, ServiceTypes, Types as CoreTypes } from '../../../bundles/core';
import AbortablePromise = PromiseTypes.AbortablePromise;

export namespace CwMetaDataServiceTypes { 
    export namespace Requests {
        export interface ByTableNameSids extends ServiceTypes.CoreRequestBase {
            Ids: number[];
            TableName: string;
        }
    }
    export namespace Responses {
        export interface ByTableNameSids extends ServiceTypes.CoreResponseBase_<CoreTypes.CWMetaData[]> {}
    }
    export interface ICwMetaDataService {
        ByTableNameSids?: (request: Requests.ByTableNameSids) => AbortablePromise<Responses.ByTableNameSids>;
    }
}
