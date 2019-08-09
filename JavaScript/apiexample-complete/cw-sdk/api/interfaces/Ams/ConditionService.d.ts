import { Enums, ServiceEnums, PromiseTypes, ServiceTypes, Types as CoreTypes } from '../../../bundles/core';
import AbortablePromise = PromiseTypes.AbortablePromise;

export namespace ConditionServiceTypes { 
    export namespace Requests {
        export interface History extends ServiceTypes.CoreRequestBase {
            EntityType: string;
            EntityUids: string[];
            IncludeConditionScore?: boolean;
            IncludeCustomScore?: boolean;
            IncludeMaintenanceScore?: boolean;
        }
    }
    export namespace Responses {
        export interface History extends ServiceTypes.CoreResponseBase_obsolete_<{[key: string]: CoreTypes.ConditionHistory[]}> {}
    }
    export interface IConditionService {
        History?: (request: Requests.History) => AbortablePromise<Responses.History>;
    }
}
