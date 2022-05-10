import { PromiseTypes } from '../../../core/promise';
import { IApiService } from '../../../http/api-service';
import { AuthorizationServiceTypes as SvcDef } from '../../interfaces/General/AuthorizationService';
import AbortablePromise = PromiseTypes.AbortablePromise;
import Requests = SvcDef.Requests;
import Responses = SvcDef.Responses;
import IAuthorizationService = SvcDef.IAuthorizationService;
export * from '../../../http/api-service';
export * from '../../interfaces/General/AuthorizationService';
export declare class AuthorizationService implements IAuthorizationService {
    private _service;
    constructor(service: IApiService);
    LicensedApiCheck(request: Requests.LicensedApiCheck): AbortablePromise<Responses.LicensedApiCheck>;
    LicensedExtensionCheck(request: Requests.LicensedExtensionCheck): AbortablePromise<Responses.LicensedExtensionCheck>;
    LicensedExtensionsCheck(request: Requests.LicensedExtensionsCheck): AbortablePromise<Responses.LicensedExtensionsCheck>;
    LicensedFeatureCheck(request: Requests.LicensedFeatureCheck): AbortablePromise<Responses.LicensedFeatureCheck>;
    LicensedFeaturesCheck(request: Requests.LicensedFeaturesCheck): AbortablePromise<Responses.LicensedFeaturesCheck>;
    LicensedServicesCheck(request: Requests.LicensedServicesCheck): AbortablePromise<Responses.LicensedServicesCheck>;
    ErrorCodes: {};
    WarningCodes: {};
}
