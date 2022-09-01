import { Enums, ServiceEnums, PromiseTypes, ServiceTypes, Types as CoreTypes } from '../../../bundles/core';
import AbortablePromise = PromiseTypes.AbortablePromise;

export namespace DisciplineServiceTypes { 
    export namespace Requests {
        export interface All extends ServiceTypes.CoreRequestBase {
        }
    }
    export namespace Responses {
        export interface All extends ServiceTypes.CoreResponseBase_obsolete_<CoreTypes.DisciplineItem[]> {}
    }
    export interface IDisciplineService {
        All?: (request: Requests.All) => AbortablePromise<Responses.All>;
    }
}
