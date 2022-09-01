import { PromiseTypes } from '../../../core/promise';
import { IApiService } from '../../../http/api-service';
import { NotificationTypeServiceTypes as SvcDef } from '../../interfaces/PLL/NotificationTypeService';
import AbortablePromise = PromiseTypes.AbortablePromise;
import Requests = SvcDef.Requests;
import Responses = SvcDef.Responses;
import INotificationTypeService = SvcDef.INotificationTypeService;
export * from '../../../http/api-service';
export * from '../../interfaces/PLL/NotificationTypeService';
export declare class NotificationTypeService implements INotificationTypeService {
    private _service;
    constructor(service: IApiService);
    GetNotificationTypeList(request: Requests.GetNotificationTypeList): AbortablePromise<Responses.GetNotificationTypeList>;
    ErrorCodes: {};
    WarningCodes: {};
}
