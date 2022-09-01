import { Enums, ServiceEnums, PromiseTypes, ServiceTypes, Types as CoreTypes } from '../../../bundles/core';
import AbortablePromise = PromiseTypes.AbortablePromise;

export namespace PluginLayoutServiceTypes { 
    export namespace Requests {
        export interface Definition extends ServiceTypes.CoreRequestBase {
            Id?: string;
        }
        export interface Definitions extends ServiceTypes.CoreRequestBase {
            Ids?: string[];
        }
        export interface Public extends ServiceTypes.CoreRequestBase {
            Id?: string;
        }
        export interface PublicDefinitions extends ServiceTypes.CoreRequestBase {
            Ids?: string[];
        }
    }
    export namespace Responses {
        export interface Definition extends ServiceTypes.CoreResponseBase_<CoreTypes.PluginLayoutDefinition> {}
        export interface Definitions extends ServiceTypes.CoreResponseBase_<CoreTypes.PluginLayoutDefinition[]> {}
    }
    export interface IPluginLayoutService {
        Definition?: (request: Requests.Definition) => AbortablePromise<Responses.Definition>;
        Definitions?: (request: Requests.Definitions) => AbortablePromise<Responses.Definitions>;
        Public?: (request: Requests.Public) => AbortablePromise<Responses.Definition>;
        PublicDefinitions?: (request: Requests.PublicDefinitions) => AbortablePromise<Responses.Definitions>;
    }
}
