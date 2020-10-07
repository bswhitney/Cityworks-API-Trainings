import { Enums, ServiceEnums, PromiseTypes, ServiceTypes, Types as CoreTypes } from '../../../bundles/core';
import AbortablePromise = PromiseTypes.AbortablePromise;

export namespace LocalizationServiceTypes { 
    export namespace Requests {
        export interface TimeZones extends ServiceTypes.CoreRequestBase {
        }
    }
    export namespace Responses {
        export interface TimeZones extends ServiceTypes.CoreResponseBase_<CoreTypes.SystemTimeZone[]> {}
    }
    export interface ILocalizationService {
        TimeZones?: (request: Requests.TimeZones) => AbortablePromise<Responses.TimeZones>;
    }
}
