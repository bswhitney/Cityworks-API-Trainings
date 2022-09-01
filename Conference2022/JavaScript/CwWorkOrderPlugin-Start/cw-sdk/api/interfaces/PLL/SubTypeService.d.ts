import { Enums, ServiceEnums, PromiseTypes, ServiceTypes, Types as CoreTypes } from '../../../bundles/core';
import AbortablePromise = PromiseTypes.AbortablePromise;

export namespace SubTypeServiceTypes { 
    export namespace Requests {
        export interface Add extends ServiceTypes.CoreRequestBase {
            AnonymousFlag?: string;
            DefaultText?: string;
            ExpiredFlag?: string;
            OrgId?: number;
            RegisteredFlag?: string;
            SubType?: string;
            SubTypeDesc?: string;
            SubTypeId?: number;
        }
        export interface Update extends ServiceTypes.CoreRequestBase {
            AnonymousFlag?: string;
            DefaultText?: string;
            ExpiredFlag?: string;
            OrgId?: number;
            RegisteredFlag?: string;
            SubType?: string;
            SubTypeDesc?: string;
            SubTypeId?: number;
        }
    }
    export namespace Responses {
        export interface Add extends ServiceTypes.CoreResponseBase_<CoreTypes.SubTypeItem> {}
        export interface Update extends ServiceTypes.CoreResponseBase_<CoreTypes.SubTypeItem> {}
    }
    export interface ISubTypeService {
        Add?: (request: Requests.Add) => AbortablePromise<Responses.Add>;
        Update?: (request: Requests.Update) => AbortablePromise<Responses.Update>;
    }
}
