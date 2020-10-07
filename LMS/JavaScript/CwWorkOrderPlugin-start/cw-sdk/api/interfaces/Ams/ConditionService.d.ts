import { Enums, ServiceEnums, PromiseTypes, ServiceTypes, Types as CoreTypes } from '../../../bundles/core';
import AbortablePromise = PromiseTypes.AbortablePromise;

export namespace ConditionServiceTypes { 
    export namespace Requests {
        export interface Current extends ServiceTypes.CoreRequestBase {
            EntityType: string;
            EntityUids: string[];
        }
        export interface History extends ServiceTypes.CoreRequestBase {
            EntityType: string;
            EntityUids: string[];
            IncludeConditionScore?: boolean;
            IncludeCustomScore?: boolean;
            IncludeMaintenanceScore?: boolean;
        }
    }
    export namespace Responses {
        export interface Current extends ServiceTypes.CoreResponseBase_<CoreTypes.ConditionScore[]> {}
        export interface History extends ServiceTypes.CoreResponseBase_<{[key: string]: CoreTypes.ConditionHistory[]}> {}
    }
    export interface IConditionService {
        Current?: (request: Requests.Current) => AbortablePromise<Responses.Current>;
        History?: (request: Requests.History) => AbortablePromise<Responses.History>;
    }
}
