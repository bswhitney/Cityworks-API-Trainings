import { PromiseTypes } from '../../../core/promise';
import { IApiService } from '../../../http/api-service';
import { TokenServiceTypes as SvcDef } from '../../interfaces/General/TokenService';
import AbortablePromise = PromiseTypes.AbortablePromise;
import Requests = SvcDef.Requests;
import Responses = SvcDef.Responses;
import ITokenService = SvcDef.ITokenService;
export * from '../../../http/api-service';
export * from '../../interfaces/General/TokenService';
export declare class TokenService implements ITokenService {
    private _service;
    constructor(service: IApiService);
    RevokeUser(request: Requests.RevokeUser): AbortablePromise<Responses.RevokeUser>;
    ErrorCodes: {};
    WarningCodes: {};
}
