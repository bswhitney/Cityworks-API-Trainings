import { PromiseTypes } from '../../../core/promise';
import { IApiService } from '../../../http/api-service';
import { GISServiceServiceTypes as SvcDef } from '../../interfaces/Ams/GISServiceService';
import AbortablePromise = PromiseTypes.AbortablePromise;
import Requests = SvcDef.Requests;
import Responses = SvcDef.Responses;
import IGISServiceService = SvcDef.IGISServiceService;
export * from '../../../http/api-service';
export * from '../../interfaces/Ams/GISServiceService';
export declare class GISServiceService implements IGISServiceService {
    private _service;
    constructor(service: IApiService);
    AddGISServiceDefinition(request: Requests.AddGISServiceDefinition): AbortablePromise<Responses.AddGISServiceDefinition>;
    AddGISServiceEndPointSecurity(request: Requests.AddGISServiceEndPointSecurity): AbortablePromise<Responses.AddGISServiceEndPointSecurity>;
    CloneGISServiceDefinition(request: Requests.CloneGISServiceDefinition): AbortablePromise<Responses.CloneGISServiceDefinition>;
    DeleteGISServiceDefinitions(request: Requests.DeleteGISServiceDefinitions): AbortablePromise<Responses.DeleteGISServiceDefinitions>;
    DeleteGISServiceEndPointSecurities(request: Requests.DeleteGISServiceEndPointSecurities): AbortablePromise<Responses.DeleteGISServiceEndPointSecurities>;
    GISServiceDefinitions(request: Requests.GISServiceDefinitions): AbortablePromise<Responses.GISServiceDefinitions>;
    UpdateGISServiceEndPointSecurity(request: Requests.UpdateGISServiceEndPointSecurity): AbortablePromise<Responses.UpdateGISServiceEndPointSecurity>;
    ValidateServiceSecurity(request: Requests.ValidateServiceSecurity): AbortablePromise<Responses.ValidateServiceSecurity>;
}
