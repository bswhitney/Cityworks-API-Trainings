import { Enums, ServiceEnums, PromiseTypes, ServiceTypes, Types as CoreTypes } from '../../../bundles/core';
import AbortablePromise = PromiseTypes.AbortablePromise;

export namespace EventLayerServiceTypes { 
    export namespace Requests {
        export interface All extends ServiceTypes.CoreRequestBase {
            DomainId?: number;
            EmployeeSid?: number;
            IncludeDisabled?: boolean;
        }
        export interface ById extends ServiceTypes.CoreRequestBase {
            EventLayerId: number;
        }
    }
    export namespace Responses {
        export interface All extends ServiceTypes.CoreResponseBase_<CoreTypes.EventLayer[]> {}
        export interface ById extends ServiceTypes.CoreResponseBase_<CoreTypes.EventLayer> {}
    }
    export interface IEventLayerService {
        All?: (request: Requests.All) => AbortablePromise<Responses.All>;
        ById?: (request: Requests.ById) => AbortablePromise<Responses.ById>;
    }
}
