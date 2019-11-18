import { Enums, ServiceEnums, PromiseTypes, ServiceTypes, Types as CoreTypes } from '../../../bundles/core';
import AbortablePromise = PromiseTypes.AbortablePromise;

export namespace LocalizationServiceTypes { 
    export namespace Requests {
        export interface LocalizationSettings extends ServiceTypes.CoreRequestBase {
        }
        export interface TimeZones extends ServiceTypes.CoreRequestBase {
        }
    }
    export namespace Responses {
        export interface LocalizationSettings extends ServiceTypes.CoreResponseBase_<CoreTypes.LocalizationSettings> {}
        export interface TimeZones extends ServiceTypes.CoreResponseBase_<CoreTypes.SystemTimeZone[]> {}
    }
    export interface ILocalizationService {
        LocalizationSettings?: (request: Requests.LocalizationSettings) => AbortablePromise<Responses.LocalizationSettings>;
        TimeZones?: (request: Requests.TimeZones) => AbortablePromise<Responses.TimeZones>;
    }
}
