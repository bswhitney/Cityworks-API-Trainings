import { PromiseTypes } from '../../../core/promise';
import { IApiService } from '../../../http/api-service';
import { CrewServiceTypes as SvcDef } from '../../interfaces/Ams/CrewService';
import AbortablePromise = PromiseTypes.AbortablePromise;
import Requests = SvcDef.Requests;
import Responses = SvcDef.Responses;
import ICrewService = SvcDef.ICrewService;
export * from '../../../http/api-service';
export * from '../../interfaces/Ams/CrewService';
export declare class CrewService implements ICrewService {
    private _service;
    constructor(service: IApiService);
    ByEmployee(request: Requests.ByEmployee): AbortablePromise<Responses.ByEmployee>;
    ByIds(request: Requests.ByIds): AbortablePromise<Responses.ByIds>;
    Employees(request: Requests.Employees): AbortablePromise<Responses.Employees>;
    Equipment(request: Requests.Equipment): AbortablePromise<Responses.Equipment>;
    Material(request: Requests.Material): AbortablePromise<Responses.Material>;
    ErrorCodes: {};
    WarningCodes: {};
}
