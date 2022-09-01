import { Enums, ServiceEnums, PromiseTypes, ServiceTypes, Types as CoreTypes } from '../../../bundles/core';
import AbortablePromise = PromiseTypes.AbortablePromise;

export namespace AuthorizationServiceTypes { 
    export namespace Requests {
        export interface LicensedApiCheck extends ServiceTypes.CoreRequestBase {
            Area: string;
            Service: string;
        }
        export interface LicensedExtensionCheck extends ServiceTypes.CoreRequestBase {
            Extension: Enums.LicensedExtension;
        }
        export interface LicensedExtensionsCheck extends ServiceTypes.CoreRequestBase {
            Extensions: Enums.LicensedExtension[];
        }
        export interface LicensedFeatureCheck extends ServiceTypes.CoreRequestBase {
            Feature: Enums.LicensedFeature;
        }
        export interface LicensedFeaturesCheck extends ServiceTypes.CoreRequestBase {
            Features: number[];
        }
        export interface LicensedServicesCheck extends ServiceTypes.CoreRequestBase {
            Services: string[];
        }
    }
    export namespace Responses {
        export interface LicensedApiCheck extends ServiceTypes.CoreResponseBase_<boolean> {}
        export interface LicensedExtensionCheck extends ServiceTypes.CoreResponseBase_<boolean> {}
        export interface LicensedExtensionsCheck extends ServiceTypes.CoreResponseBase_<{[key: number]: boolean}> {}
        export interface LicensedFeatureCheck extends ServiceTypes.CoreResponseBase_<boolean> {}
        export interface LicensedFeaturesCheck extends ServiceTypes.CoreResponseBase_<{[key: number]: boolean}> {}
        export interface LicensedServicesCheck extends ServiceTypes.CoreResponseBase_<{[key: string]: boolean}> {}
    }
    export interface IAuthorizationService {
        LicensedApiCheck?: (request: Requests.LicensedApiCheck) => AbortablePromise<Responses.LicensedApiCheck>;
        LicensedExtensionCheck?: (request: Requests.LicensedExtensionCheck) => AbortablePromise<Responses.LicensedExtensionCheck>;
        LicensedExtensionsCheck?: (request: Requests.LicensedExtensionsCheck) => AbortablePromise<Responses.LicensedExtensionsCheck>;
        LicensedFeatureCheck?: (request: Requests.LicensedFeatureCheck) => AbortablePromise<Responses.LicensedFeatureCheck>;
        LicensedFeaturesCheck?: (request: Requests.LicensedFeaturesCheck) => AbortablePromise<Responses.LicensedFeaturesCheck>;
        LicensedServicesCheck?: (request: Requests.LicensedServicesCheck) => AbortablePromise<Responses.LicensedServicesCheck>;
    }
}
