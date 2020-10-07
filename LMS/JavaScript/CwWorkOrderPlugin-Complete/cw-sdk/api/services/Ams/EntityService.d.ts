import { PromiseTypes } from '../../../core/promise';
import { IApiService } from '../../../http/api-service';
import { EntityServiceTypes as SvcDef } from '../../interfaces/Ams/EntityService';
import AbortablePromise = PromiseTypes.AbortablePromise;
import Requests = SvcDef.Requests;
import Responses = SvcDef.Responses;
import IEntityService = SvcDef.IEntityService;
export * from '../../../http/api-service';
export * from '../../interfaces/Ams/EntityService';
export declare class EntityService implements IEntityService {
    private _service;
    constructor(service: IApiService);
    AddAlias(request: Requests.AddAlias): AbortablePromise<Responses.AssetAlias>;
    AddSplit(request: Requests.AddSplit): AbortablePromise<Responses.AddSplit>;
    AliasAssets(request: Requests.AliasAssets): AbortablePromise<Responses.AliasAssets>;
    Aliases(request: Requests.Aliases): AbortablePromise<Responses.AssetAlias>;
    AllAliases(request: Requests.AllAliases): AbortablePromise<Responses.AllAliases>;
    Attributes(request: Requests.Attributes): AbortablePromise<Responses.Attributes>;
    CloneWorkOrderEntities(request: Requests.CloneWorkOrderEntities): AbortablePromise<Responses.CloneWorkOrderEntities>;
    Configuration(request: Requests.Configuration): AbortablePromise<Responses.Configuration>;
    CostHistory(request: Requests.CostHistory): AbortablePromise<Responses.CostHistory>;
    CostTotal(request: Requests.CostTotal): AbortablePromise<Responses.CostTotal>;
    DistinctValues(request: Requests.DistinctValues): AbortablePromise<Responses.DistinctValues>;
    DomainTypes(request: Requests.DomainTypes): AbortablePromise<Responses.DomainTypes>;
    EntityUidField(request: Requests.EntityUidField): AbortablePromise<Responses.EntityUidField>;
    FiveNumberSummary(request: Requests.FiveNumberSummary): AbortablePromise<Responses.FiveNumberSummary>;
    Groups(request: Requests.Groups): AbortablePromise<Responses.Groups>;
    ProcessSplits(request: Requests.ProcessSplits): AbortablePromise<Responses.ProcessSplits>;
    RemoveAlias(request: Requests.RemoveAlias): AbortablePromise<Responses.AssetAlias>;
    Search(request: Requests.Search): AbortablePromise<Responses.Search>;
    SearchAsWorkOrderEntity(request: Requests.SearchAsWorkOrderEntity): AbortablePromise<Responses.SearchAsWorkOrderEntity>;
    SplitEntities(request: Requests.SplitEntities): AbortablePromise<Responses.SplitEntities>;
    Splits(request: Requests.Splits): AbortablePromise<Responses.Splits>;
    SubTypes(request: Requests.SubTypes): AbortablePromise<Responses.SubTypes>;
    TypeRelationships(request: Requests.TypeRelationships): AbortablePromise<Responses.TypeRelationships>;
    Types(request: Requests.Types): AbortablePromise<Responses.Types>;
    VisibleFields(request: Requests.VisibleFields): AbortablePromise<Responses.VisibleFields>;
    WorkActivityHistory(request: Requests.WorkActivityHistory): AbortablePromise<Responses.WorkActivityHistory>;
}