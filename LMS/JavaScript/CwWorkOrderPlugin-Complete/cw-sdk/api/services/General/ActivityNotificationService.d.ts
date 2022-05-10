import { PromiseTypes } from '../../../core/promise';
import { IApiService } from '../../../http/api-service';
import { ActivityNotificationServiceTypes as SvcDef } from '../../interfaces/General/ActivityNotificationService';
import AbortablePromise = PromiseTypes.AbortablePromise;
import Requests = SvcDef.Requests;
import Responses = SvcDef.Responses;
import IActivityNotificationService = SvcDef.IActivityNotificationService;
export * from '../../../http/api-service';
export * from '../../interfaces/General/ActivityNotificationService';
export declare class ActivityNotificationService implements IActivityNotificationService {
    private _service;
    constructor(service: IApiService);
    User(request: Requests.User): AbortablePromise<Responses.User>;
    UserWatching(request: Requests.UserWatching): AbortablePromise<Responses.UserWatching>;
    ErrorCodes: {};
    WarningCodes: {};
}
