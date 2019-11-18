import * as Core from '../bundles/core';
import { AuthenticationServiceTypes } from '../api/services/general/AuthenticationService';
import AbortablePromise = Core.PromiseTypes.AbortablePromise;
export interface IApiService {
    getToken(): string;
    initializeCsrfToken(): void;
    login(userName: string, password: string): AbortablePromise<AuthenticationServiceTypes.Responses.Authenticate>;
    call(data: any, url: string): AbortablePromise<any>;
}
export declare class ApiService implements IApiService {
    private readonly _csrfTokenCookieName;
    private readonly _csrfHeaderName;
    private _baseUrl;
    private _csrfToken;
    private _token;
    constructor(baseUrl: string, token?: string);
    getToken(): string;
    initializeCsrfToken(): void;
    login(userName: string, password: string): AbortablePromise<AuthenticationServiceTypes.Responses.Authenticate>;
    call(data: any, url: string): AbortablePromise<any>;
}
