import { PromiseTypes } from '../../../core/promise';
import { IApiService } from '../../../http/api-service';
import { SearchServiceTypes as SvcDef } from '../../interfaces/Ams/SearchService';
import AbortablePromise = PromiseTypes.AbortablePromise;
import Requests = SvcDef.Requests;
import Responses = SvcDef.Responses;
import ISearchService = SvcDef.ISearchService;
export * from '../../../http/api-service';
export * from '../../interfaces/Ams/SearchService';
export declare class SearchService implements ISearchService {
    private _service;
    constructor(service: IApiService);
    AssetCalculationResultSaved(request: Requests.AssetCalculationResultSaved): AbortablePromise<Responses.AssetCalculationResultSaved>;
    Definition(request: Requests.Definition): AbortablePromise<Responses.Definition>;
    DefinitionNames(request: Requests.DefinitionNames): AbortablePromise<Responses.DefinitionNames>;
    Definitions(request: Requests.Definitions): AbortablePromise<Responses.Definitions>;
    DeleteDefinitions(request: Requests.DeleteDefinitions): AbortablePromise<Responses.DeleteDefinitions>;
    DisplayFields(request: Requests.DisplayFields): AbortablePromise<Responses.DisplayFields>;
    Execute(request: Requests.Execute): AbortablePromise<Responses.Execute>;
    GISSaved(request: Requests.GISSaved): AbortablePromise<Responses.GISSaved>;
    InspectionSaved(request: Requests.InspectionSaved): AbortablePromise<Responses.InspectionSaved>;
    MaterialSaved(request: Requests.MaterialSaved): AbortablePromise<Responses.MaterialSaved>;
    PllSaved(request: Requests.PllSaved): AbortablePromise<Responses.PllSaved>;
    RecentActivity(request: Requests.RecentActivity): AbortablePromise<Responses.RecentActivity>;
    RequestSaved(request: Requests.RequestSaved): AbortablePromise<Responses.RequestSaved>;
    RequisitionSaved(request: Requests.RequisitionSaved): AbortablePromise<Responses.RequisitionSaved>;
    SavedByType(request: Requests.SavedByType): AbortablePromise<Responses.SavedByType>;
    SaveDefinition(request: Requests.SaveDefinition): AbortablePromise<Responses.SaveDefinition>;
    StoreTransactionSaved(request: Requests.StoreTransactionSaved): AbortablePromise<Responses.StoreTransactionSaved>;
    Types(request: Requests.Types): AbortablePromise<Responses.Types>;
    UpdateEurl(request: Requests.UpdateEurl): AbortablePromise<Responses.UpdateEurl>;
    WorkActivitySaved(request: Requests.WorkActivitySaved): AbortablePromise<Responses.WorkActivitySaved>;
    WorkOrderEntitySaved(request: Requests.WorkOrderEntitySaved): AbortablePromise<Responses.WorkOrderEntitySaved>;
    WorkOrderSaved(request: Requests.WorkOrderSaved): AbortablePromise<Responses.WorkOrderSaved>;
    ErrorCodes: {
        InvalidField: number;
    };
    WarningCodes: {};
}
