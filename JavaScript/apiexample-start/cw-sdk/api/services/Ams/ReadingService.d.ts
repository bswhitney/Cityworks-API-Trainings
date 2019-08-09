import { PromiseTypes } from '../../../core/promise';
import { IApiService } from '../../../http/api-service';
import { ReadingServiceTypes as SvcDef } from '../../interfaces/Ams/ReadingService';
import AbortablePromise = PromiseTypes.AbortablePromise;
import Requests = SvcDef.Requests;
import Responses = SvcDef.Responses;
import IReadingService = SvcDef.IReadingService;
export * from '../../../http/api-service';
export * from '../../interfaces/Ams/ReadingService';
export declare class ReadingService implements IReadingService {
    private _service;
    constructor(service: IApiService);
    Add(request: Requests.Add): AbortablePromise<Responses.Add>;
    ByEntity(request: Requests.ByEntity): AbortablePromise<Responses.ByEntity>;
    Configuration(request: Requests.Configuration): AbortablePromise<Responses.Configuration>;
    Update(request: Requests.Update): AbortablePromise<Responses.Update>;
}
