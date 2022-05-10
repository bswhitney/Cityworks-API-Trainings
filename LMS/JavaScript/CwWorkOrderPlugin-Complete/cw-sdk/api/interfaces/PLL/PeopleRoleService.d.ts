import { Enums, ServiceEnums, PromiseTypes, ServiceTypes, Types as CoreTypes } from '../../../bundles/core';
import AbortablePromise = PromiseTypes.AbortablePromise;

export namespace PeopleRoleServiceTypes { 
    export namespace Requests {
        export interface Add extends ServiceTypes.CoreRequestBase {
            ExpiredFlag?: string;
            RequiredFields?: string;
            RoleCode: string;
            RoleDesc?: string;
            TableName?: string;
        }
    }
    export namespace Responses {
        export interface Add extends ServiceTypes.CoreResponseBase_<CoreTypes.PeopleRoleItem> {}
    }
    export interface IPeopleRoleService {
        Add?: (request: Requests.Add) => AbortablePromise<Responses.Add>;
    }
}
