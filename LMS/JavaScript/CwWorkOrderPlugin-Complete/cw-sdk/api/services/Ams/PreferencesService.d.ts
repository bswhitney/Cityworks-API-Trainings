import { PromiseTypes } from '../../../core/promise';
import { IApiService } from '../../../http/api-service';
import { PreferencesServiceTypes as SvcDef } from '../../interfaces/Ams/PreferencesService';
import AbortablePromise = PromiseTypes.AbortablePromise;
import Requests = SvcDef.Requests;
import Responses = SvcDef.Responses;
import IPreferencesService = SvcDef.IPreferencesService;
export * from '../../../http/api-service';
export * from '../../interfaces/Ams/PreferencesService';
export declare class PreferencesService implements IPreferencesService {
    private _service;
    constructor(service: IApiService);
    Global(request: Requests.Global): AbortablePromise<Responses.Global>;
    User(request: Requests.User): AbortablePromise<Responses.User>;
    UserSave(request: Requests.UserSave): AbortablePromise<Responses.UserSave>;
}
