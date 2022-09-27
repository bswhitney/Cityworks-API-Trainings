import { PromiseTypes } from '../../../core/promise';
import { IApiService } from '../../../http/api-service';
import { LocalizationServiceTypes as SvcDef } from '../../interfaces/General/LocalizationService';
import AbortablePromise = PromiseTypes.AbortablePromise;
import Requests = SvcDef.Requests;
import Responses = SvcDef.Responses;
import ILocalizationService = SvcDef.ILocalizationService;
export * from '../../../http/api-service';
export * from '../../interfaces/General/LocalizationService';
export declare class LocalizationService implements ILocalizationService {
    private _service;
    constructor(service: IApiService);
    LocalizationSettings(request: Requests.LocalizationSettings): AbortablePromise<Responses.LocalizationSettings>;
    TimeZones(request: Requests.TimeZones): AbortablePromise<Responses.TimeZones>;
    ErrorCodes: {};
    WarningCodes: {};
}