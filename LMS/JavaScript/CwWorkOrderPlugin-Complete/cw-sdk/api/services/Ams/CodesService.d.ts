import { PromiseTypes } from '../../../core/promise';
import { IApiService } from '../../../http/api-service';
import { CodesServiceTypes as SvcDef } from '../../interfaces/Ams/CodesService';
import AbortablePromise = PromiseTypes.AbortablePromise;
import Requests = SvcDef.Requests;
import Responses = SvcDef.Responses;
import ICodesService = SvcDef.ICodesService;
export * from '../../../http/api-service';
export * from '../../interfaces/Ams/CodesService';
export declare class CodesService implements ICodesService {
    private _service;
    constructor(service: IApiService);
    All(request: Requests.All): AbortablePromise<Responses.All>;
    AllCCTVCodeDescScore(request: Requests.AllCCTVCodeDescScore): AbortablePromise<Responses.AllCCTVCodeDescScore>;
    AllDescScore(request: Requests.AllDescScore): AbortablePromise<Responses.AllDescScore>;
    ByCodeType(request: Requests.ByCodeType): AbortablePromise<Responses.ByCodeType>;
    Export(request: Requests.Export): AbortablePromise<Responses.Export>;
    ExportCCTVCodeDescScore(request: Requests.ExportCCTVCodeDescScore): AbortablePromise<Responses.Export>;
    ExportDescScore(request: Requests.ExportDescScore): AbortablePromise<Responses.Export>;
    Import(request: Requests.Import): AbortablePromise<Responses.Import>;
    ImportCCTVCodeDescScore(request: Requests.ImportCCTVCodeDescScore): AbortablePromise<Responses.ImportCCTVCodeDescScore>;
    ImportDescScore(request: Requests.ImportDescScore): AbortablePromise<Responses.ImportDescScore>;
}
