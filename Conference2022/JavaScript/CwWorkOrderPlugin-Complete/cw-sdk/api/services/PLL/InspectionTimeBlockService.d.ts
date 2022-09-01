import { PromiseTypes } from '../../../core/promise';
import { IApiService } from '../../../http/api-service';
import { InspectionTimeBlockServiceTypes as SvcDef } from '../../interfaces/PLL/InspectionTimeBlockService';
import AbortablePromise = PromiseTypes.AbortablePromise;
import Requests = SvcDef.Requests;
import Responses = SvcDef.Responses;
import IInspectionTimeBlockService = SvcDef.IInspectionTimeBlockService;
export * from '../../../http/api-service';
export * from '../../interfaces/PLL/InspectionTimeBlockService';
export declare class InspectionTimeBlockService implements IInspectionTimeBlockService {
    private _service;
    constructor(service: IApiService);
    Add(request: Requests.Add): AbortablePromise<Responses.Add>;
    ErrorCodes: {};
    WarningCodes: {};
}
