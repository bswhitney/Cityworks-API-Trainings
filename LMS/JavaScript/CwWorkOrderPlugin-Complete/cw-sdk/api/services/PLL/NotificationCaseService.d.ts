import { PromiseTypes } from '../../../core/promise';
import { IApiService } from '../../../http/api-service';
import { NotificationCaseServiceTypes as SvcDef } from '../../interfaces/PLL/NotificationCaseService';
import AbortablePromise = PromiseTypes.AbortablePromise;
import Requests = SvcDef.Requests;
import Responses = SvcDef.Responses;
import INotificationCaseService = SvcDef.INotificationCaseService;
export * from '../../../http/api-service';
export * from '../../interfaces/PLL/NotificationCaseService';
export declare class NotificationCaseService implements INotificationCaseService {
    private _service;
    constructor(service: IApiService);
    GetNotificationCaseList(request: Requests.GetNotificationCaseList): AbortablePromise<Responses.GetNotificationCaseList>;
    ErrorCodes: {};
    WarningCodes: {};
}
