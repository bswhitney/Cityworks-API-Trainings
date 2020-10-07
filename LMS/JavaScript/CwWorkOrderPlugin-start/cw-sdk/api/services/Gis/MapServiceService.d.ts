import { PromiseTypes } from '../../../core/promise';
import { IApiService } from '../../../http/api-service';
import { MapServiceServiceTypes as SvcDef } from '../../interfaces/Gis/MapServiceService';
import AbortablePromise = PromiseTypes.AbortablePromise;
import Requests = SvcDef.Requests;
import Responses = SvcDef.Responses;
import IMapServiceService = SvcDef.IMapServiceService;
export * from '../../../http/api-service';
export * from '../../interfaces/Gis/MapServiceService';
export declare class MapServiceService implements IMapServiceService {
    private _service;
    constructor(service: IApiService);
    Configuration(request: Requests.Configuration): AbortablePromise<Responses.Configuration>;
    Domain(request: Requests.Domain): AbortablePromise<Responses.Domain>;
    DownloadMobileMapCache(request: Requests.DownloadMobileMapCache): AbortablePromise<Responses.DownloadMobileMapCache>;
    InitialExtent(request: Requests.InitialExtent): AbortablePromise<Responses.InitialExtent>;
    InspectionConfiguration(request: Requests.InspectionConfiguration): AbortablePromise<Responses.InspectionConfiguration>;
    ServiceRequestConfiguration(request: Requests.ServiceRequestConfiguration): AbortablePromise<Responses.ServiceRequestConfiguration>;
    User(request: Requests.User): AbortablePromise<Responses.User>;
    WorkOrderConfiguration(request: Requests.WorkOrderConfiguration): AbortablePromise<Responses.WorkOrderConfiguration>;
}
