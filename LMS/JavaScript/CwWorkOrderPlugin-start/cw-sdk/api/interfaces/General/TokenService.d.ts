import { Enums, ServiceEnums, PromiseTypes, ServiceTypes, Types as CoreTypes } from '../../../bundles/core';
import AbortablePromise = PromiseTypes.AbortablePromise;

export namespace TokenServiceTypes { 
    export namespace Requests {
        export interface RevokeUser extends ServiceTypes.CoreRequestBase {
            RevokeDate?: number;
        }
    }
    export namespace Responses {
        export interface RevokeUser extends ServiceTypes.CoreResponseBase_<boolean> {}
    }
    export interface ITokenService {
        RevokeUser?: (request: Requests.RevokeUser) => AbortablePromise<Responses.RevokeUser>;
    }
}
