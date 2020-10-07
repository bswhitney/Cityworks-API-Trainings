import { PromiseTypes } from '../../../core/promise';
import { IApiService } from '../../../http/api-service';
import { PavementInspectionServiceTypes as SvcDef } from '../../interfaces/Ams/PavementInspectionService';
import AbortablePromise = PromiseTypes.AbortablePromise;
import Requests = SvcDef.Requests;
import Responses = SvcDef.Responses;
import IPavementInspectionService = SvcDef.IPavementInspectionService;
export * from '../../../http/api-service';
export * from '../../interfaces/Ams/PavementInspectionService';
export declare class PavementInspectionService implements IPavementInspectionService {
    private _service;
    constructor(service: IApiService);
    AddDistress(request: Requests.AddDistress): AbortablePromise<Responses.AddDistress>;
    AddSample(request: Requests.AddSample): AbortablePromise<Responses.AddSample>;
    ById(request: Requests.ById): AbortablePromise<Responses.ById>;
    ByIds(request: Requests.ByIds): AbortablePromise<Responses.ByIds>;
    CodeDesc(request: Requests.CodeDesc): AbortablePromise<Responses.CodeDesc>;
    Create(request: Requests.Create): AbortablePromise<Responses.Create>;
    CreateSearchDefinition(request: Requests.CreateSearchDefinition): AbortablePromise<Responses.CreateSearchDefinition>;
    DistressCodes(request: Requests.DistressCodes): AbortablePromise<Responses.DistressCodes>;
    Distresses(request: Requests.Distresses): AbortablePromise<Responses.Distresses>;
    Samples(request: Requests.Samples): AbortablePromise<Responses.Samples>;
    Search(request: Requests.Search): AbortablePromise<Responses.Search>;
    Update(request: Requests.Update): AbortablePromise<Responses.Update>;
    UpdateDistress(request: Requests.UpdateDistress): AbortablePromise<Responses.UpdateDistress>;
    UpdateSample(request: Requests.UpdateSample): AbortablePromise<Responses.UpdateSample>;
}
