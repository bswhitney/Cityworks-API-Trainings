import { PromiseTypes } from '../../../core/promise';
import { IApiService } from '../../../http/api-service';
import { AppDataServiceTypes as SvcDef } from '../../interfaces/General/AppDataService';
import AbortablePromise = PromiseTypes.AbortablePromise;
import Requests = SvcDef.Requests;
import Responses = SvcDef.Responses;
import IAppDataService = SvcDef.IAppDataService;
export * from '../../../http/api-service';
export * from '../../interfaces/General/AppDataService';
export declare class AppDataService implements IAppDataService {
    private _service;
    constructor(service: IApiService);
    CurrentLocation(request: Requests.CurrentLocation): AbortablePromise<Responses.CurrentLocation>;
    SelectedEntities(request: Requests.SelectedEntities): AbortablePromise<Responses.SelectedEntities>;
}
