import { PromiseTypes } from '../../../core/promise';
import { IApiService } from '../../../http/api-service';
import { MaterialServiceTypes as SvcDef } from '../../interfaces/Ams/MaterialService';
import AbortablePromise = PromiseTypes.AbortablePromise;
import Requests = SvcDef.Requests;
import Responses = SvcDef.Responses;
import IMaterialService = SvcDef.IMaterialService;
export * from '../../../http/api-service';
export * from '../../interfaces/Ams/MaterialService';
export declare class MaterialService implements IMaterialService {
    private _service;
    constructor(service: IApiService);
    All(request: Requests.All): AbortablePromise<Responses.All>;
    ById(request: Requests.ById): AbortablePromise<Responses.ById>;
    ByIds(request: Requests.ByIds): AbortablePromise<Responses.ByIds>;
    ByParent(request: Requests.ByParent): AbortablePromise<Responses.ByParent>;
    ByStoreroom(request: Requests.ByStoreroom): AbortablePromise<Responses.ByStoreroom>;
    ByStoreroomAndId(request: Requests.ByStoreroomAndId): AbortablePromise<Responses.ByStoreroomAndId>;
    Keywords(request: Requests.Keywords): AbortablePromise<Responses.Keywords>;
    MaterialBom(request: Requests.MaterialBom): AbortablePromise<Responses.MaterialBom>;
    MaterialCategories(request: Requests.MaterialCategories): AbortablePromise<Responses.MaterialCategories>;
    MaterialNodes(request: Requests.MaterialNodes): AbortablePromise<Responses.MaterialNodes>;
    Search(request: Requests.Search): AbortablePromise<Responses.Search>;
}
