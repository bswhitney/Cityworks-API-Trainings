import { PromiseTypes } from '../../../core/promise';
import { IApiService } from '../../../http/api-service';
import { AuthenticationServiceTypes as SvcDef } from '../../interfaces/General/AuthenticationService';
import AbortablePromise = PromiseTypes.AbortablePromise;
import Requests = SvcDef.Requests;
import Responses = SvcDef.Responses;
import IAuthenticationService = SvcDef.IAuthenticationService;
export * from '../../../http/api-service';
export * from '../../interfaces/General/AuthenticationService';
export declare class AuthenticationService implements IAuthenticationService {
    private _service;
    constructor(service: IApiService);
    ApiVersion(request: Requests.ApiVersion): AbortablePromise<Responses.ApiVersion>;
    Authenticate(request: Requests.Authenticate): AbortablePromise<Responses.Authenticate>;
    AuthenticateGisToken(request: Requests.AuthenticateGisToken): AbortablePromise<Responses.AuthenticateGisToken>;
    CityworksOnlineAuthenticate(request: Requests.CityworksOnlineAuthenticate): AbortablePromise<Responses.CityworksOnlineAuthenticate>;
    CityworksOnlineSites(request: Requests.CityworksOnlineSites): AbortablePromise<Responses.CityworksOnlineSites>;
    Domains(request: Requests.Domains): AbortablePromise<Responses.Domains>;
    Groups(request: Requests.Groups): AbortablePromise<Responses.Groups>;
    User(request: Requests.User): AbortablePromise<Responses.User>;
    Validate(request: Requests.Validate): AbortablePromise<Responses.Validate>;
    Version(request: Requests.Version): AbortablePromise<Responses.Version>;
    ErrorCodes: {
        UnknownError: number;
        EmployeeNotFoundByLoginName: number;
        InactiveUser: number;
        InvalidCredentials: number;
        InvalidField: number;
    };
    WarningCodes: {};
}
