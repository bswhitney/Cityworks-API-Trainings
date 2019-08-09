import { Enums, ServiceEnums, PromiseTypes, ServiceTypes, Types as CoreTypes } from '../../../bundles/core';
import AbortablePromise = PromiseTypes.AbortablePromise;

export namespace EntityServiceTypes { 
    export namespace Requests {
        export interface AddAlias extends ServiceTypes.CoreRequestBase {
            EntityType?: string;
            LayerName?: string;
        }
        export interface AddSplit extends ServiceTypes.CoreRequestBase {
            Comments?: string;
            EntityType?: string;
            NewOid?: number;
            NewUid?: string;
            OldOid?: number;
            OldUid?: string;
        }
        export interface AliasAssets extends ServiceTypes.CoreRequestBase {
            Aliases?: string[];
        }
        export interface Aliases extends ServiceTypes.CoreRequestBase {
            EntityType?: string;
        }
        export interface AllAliases extends ServiceTypes.CoreRequestBase {
        }
        export interface Attributes extends ServiceTypes.CoreRequestBase {
            EntityType?: string;
        }
        export interface CloneWorkOrderEntities extends ServiceTypes.CoreRequestBase {
            Entities: CoreTypes.EntityUidSidUpdate[];
            EntityType: string;
            EntityUid: string;
            WorkOrderEntities?: CoreTypes.WorkOrderEntityBase[];
        }
        export interface Configuration extends ServiceTypes.CoreRequestBase {
            EntityType: string;
            EntityTypes: string[];
            MaximumDateModified?: Date;
            MinimumDateModified?: Date;
        }
        export interface CostHistory extends ServiceTypes.CoreRequestBase {
            EntityType?: string;
            EntityUids?: string[];
        }
        export interface CostTotal extends ServiceTypes.CoreRequestBase {
            EntityType?: string;
            EntityUids?: string[];
        }
        export interface DistinctValues extends ServiceTypes.CoreRequestBase {
            Attribute: string;
            DateAsEpoch?: boolean;
            EntityType: string;
        }
        export interface DomainTypes extends ServiceTypes.CoreRequestBase {
            DomainId?: number;
        }
        export interface EntityUidField extends ServiceTypes.CoreRequestBase {
            EntityType?: string;
        }
        export interface FiveNumberSummary extends ServiceTypes.CoreRequestBase {
            Attribute: string;
            EntityType: string;
        }
        export interface Groups extends ServiceTypes.CoreRequestBase {
            DomainId?: number;
        }
        export interface ProcessSplits extends ServiceTypes.CoreRequestBase {
            Ids?: number[];
        }
        export interface RemoveAlias extends ServiceTypes.CoreRequestBase {
            EntityType?: string;
            LayerName?: string;
        }
        export interface Search extends ServiceTypes.CoreRequestBase {
            Attributes?: string[];
            EntityType: string;
            MaxResults?: number;
            Oids?: number[];
            ReturnGeometry?: boolean;
            Uids?: string[];
        }
        export interface SearchAsWorkOrderEntity extends ServiceTypes.CoreRequestBase {
            Attributes?: string[];
            EntityType: string;
            IncludeLatLon?: boolean;
            MaxResults?: number;
            Oids?: number[];
            Uids?: string[];
        }
        export interface SplitEntities extends ServiceTypes.CoreRequestBase {
        }
        export interface Splits extends ServiceTypes.CoreRequestBase {
            EndDate?: Date;
            EntityType?: string;
            Id?: number;
            Ids?: number[];
            NewOid?: number;
            NewUid?: string;
            OldOid?: number;
            OldUid?: string;
            StartDate?: Date;
        }
        export interface SubTypes extends ServiceTypes.CoreRequestBase {
            EntityType: string;
        }
        export interface TypeRelationships extends ServiceTypes.CoreRequestBase {
            DomainId?: number;
        }
        export interface Types extends ServiceTypes.CoreRequestBase {
            EntityGroup: string;
            EntityGroups: string[];
            EntityTableTypes?: number[];
        }
        export interface VisibleFields extends ServiceTypes.CoreRequestBase {
            EntityType?: string;
        }
        export interface WorkActivityHistory extends ServiceTypes.CoreRequestBase {
            EntityType?: string;
            EntityUid?: string;
            OnlyOpenWAs?: boolean;
        }
    }
    export namespace Responses {
        export interface AssetAlias extends ServiceTypes.CoreResponseBase_<CoreTypes.AssetAlias> {}
        export interface AddSplit extends ServiceTypes.CoreResponseBase_<CoreTypes.AssetSplitRecord> {}
        export interface AliasAssets extends ServiceTypes.CoreResponseBase_<CoreTypes.AliasAsset[]> {}
        export interface AllAliases extends ServiceTypes.CoreResponseBase_<CoreTypes.AssetAlias[]> {}
        export interface Attributes extends ServiceTypes.CoreResponseBase_<CoreTypes.EsriServiceLayerAttribute[]> {}
        export interface CloneWorkOrderEntities extends ServiceTypes.CoreResponseBase_<CoreTypes.EntityUidSidUpdate[]> {}
        export interface Configuration extends ServiceTypes.CoreResponseBase_<CoreTypes.EntityConfiguration[]> {}
        export interface CostHistory extends ServiceTypes.CoreResponseBase_<CoreTypes.WorkOrderCostSummary[]> {}
        export interface CostTotal extends ServiceTypes.CoreResponseBase_<CoreTypes.EntityCostTotal[]> {}
        export interface DistinctValues extends ServiceTypes.CoreResponseBase_<Object[]> {}
        export interface DomainTypes extends ServiceTypes.CoreResponseBase_<CoreTypes.PWEntity[]> {}
        export interface EntityUidField extends ServiceTypes.CoreResponseBase_<string> {}
        export interface FiveNumberSummary extends ServiceTypes.CoreResponseBase_<CoreTypes.FiveNumberStatistic> {}
        export interface Groups extends ServiceTypes.CoreResponseBase_<CoreTypes.PWModule[]> {}
        export interface ProcessSplits extends ServiceTypes.CoreResponseBase_<{[key: number]: boolean}> {}
        export interface Search extends ServiceTypes.CoreResponseBase_<CoreTypes.GISResult> {}
        export interface SearchAsWorkOrderEntity extends ServiceTypes.CoreResponseBase_<CoreTypes.WorkOrderEntity[]> {}
        export interface SplitEntities extends ServiceTypes.CoreResponseBase_<CoreTypes.AssetTypeId[]> {}
        export interface Splits extends ServiceTypes.CoreResponseBase_<CoreTypes.AssetSplitRecord[]> {}
        export interface SubTypes extends ServiceTypes.CoreResponseBase_<CoreTypes.GISSubTypes> {}
        export interface TypeRelationships extends ServiceTypes.CoreResponseBase_<CoreTypes.ParChildType[]> {}
        export interface Types extends ServiceTypes.CoreResponseBase_<CoreTypes.PWEntity[]> {}
        export interface VisibleFields extends ServiceTypes.CoreResponseBase_<string[]> {}
        export interface WorkActivityHistory extends ServiceTypes.CoreResponseBase_<CoreTypes.EntityHistory[]> {}
    }
    export interface IEntityService {
        AddAlias?: (request: Requests.AddAlias) => AbortablePromise<Responses.AssetAlias>;
        AddSplit?: (request: Requests.AddSplit) => AbortablePromise<Responses.AddSplit>;
        AliasAssets?: (request: Requests.AliasAssets) => AbortablePromise<Responses.AliasAssets>;
        Aliases?: (request: Requests.Aliases) => AbortablePromise<Responses.AssetAlias>;
        AllAliases?: (request: Requests.AllAliases) => AbortablePromise<Responses.AllAliases>;
        Attributes?: (request: Requests.Attributes) => AbortablePromise<Responses.Attributes>;
        CloneWorkOrderEntities?: (request: Requests.CloneWorkOrderEntities) => AbortablePromise<Responses.CloneWorkOrderEntities>;
        Configuration?: (request: Requests.Configuration) => AbortablePromise<Responses.Configuration>;
        CostHistory?: (request: Requests.CostHistory) => AbortablePromise<Responses.CostHistory>;
        CostTotal?: (request: Requests.CostTotal) => AbortablePromise<Responses.CostTotal>;
        DistinctValues?: (request: Requests.DistinctValues) => AbortablePromise<Responses.DistinctValues>;
        DomainTypes?: (request: Requests.DomainTypes) => AbortablePromise<Responses.DomainTypes>;
        EntityUidField?: (request: Requests.EntityUidField) => AbortablePromise<Responses.EntityUidField>;
        FiveNumberSummary?: (request: Requests.FiveNumberSummary) => AbortablePromise<Responses.FiveNumberSummary>;
        Groups?: (request: Requests.Groups) => AbortablePromise<Responses.Groups>;
        ProcessSplits?: (request: Requests.ProcessSplits) => AbortablePromise<Responses.ProcessSplits>;
        RemoveAlias?: (request: Requests.RemoveAlias) => AbortablePromise<Responses.AssetAlias>;
        Search?: (request: Requests.Search) => AbortablePromise<Responses.Search>;
        SearchAsWorkOrderEntity?: (request: Requests.SearchAsWorkOrderEntity) => AbortablePromise<Responses.SearchAsWorkOrderEntity>;
        SplitEntities?: (request: Requests.SplitEntities) => AbortablePromise<Responses.SplitEntities>;
        Splits?: (request: Requests.Splits) => AbortablePromise<Responses.Splits>;
        SubTypes?: (request: Requests.SubTypes) => AbortablePromise<Responses.SubTypes>;
        TypeRelationships?: (request: Requests.TypeRelationships) => AbortablePromise<Responses.TypeRelationships>;
        Types?: (request: Requests.Types) => AbortablePromise<Responses.Types>;
        VisibleFields?: (request: Requests.VisibleFields) => AbortablePromise<Responses.VisibleFields>;
        WorkActivityHistory?: (request: Requests.WorkActivityHistory) => AbortablePromise<Responses.WorkActivityHistory>;
    }
}
