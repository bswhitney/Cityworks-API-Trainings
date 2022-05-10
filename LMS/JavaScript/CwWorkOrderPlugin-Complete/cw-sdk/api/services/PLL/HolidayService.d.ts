import { PromiseTypes } from '../../../core/promise';
import { IApiService } from '../../../http/api-service';
import { HolidayServiceTypes as SvcDef } from '../../interfaces/PLL/HolidayService';
import AbortablePromise = PromiseTypes.AbortablePromise;
import Requests = SvcDef.Requests;
import Responses = SvcDef.Responses;
import IHolidayService = SvcDef.IHolidayService;
export * from '../../../http/api-service';
export * from '../../interfaces/PLL/HolidayService';
export declare class HolidayService implements IHolidayService {
    private _service;
    constructor(service: IApiService);
    Add(request: Requests.Add): AbortablePromise<Responses.Add>;
    Delete(request: Requests.Delete): AbortablePromise<Responses.Delete>;
    ErrorCodes: {};
    WarningCodes: {};
}
