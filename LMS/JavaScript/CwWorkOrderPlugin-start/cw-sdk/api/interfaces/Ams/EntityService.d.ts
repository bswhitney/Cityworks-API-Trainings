import { Enums, ServiceEnums, PromiseTypes, ServiceTypes, Types as CoreTypes } from '../../../bundles/core';
import AbortablePromise = PromiseTypes.AbortablePromise;

export namespace EntityServiceTypes { 
    export namespace Requests {
        export interface AddAlias extends ServiceTypes.CoreRequestBase {
            EntityType?: string;
            LayerName?: string;
        }
        export interface AddGroupAlias extends ServiceTypes.CoreRequestBase {
            Alias?: string;
            GroupName?: string;
        }
        export interface AddIdentifier extends ServiceTypes.CoreRequestBase {
            EntityType?: string;
            EntityUid?: string;
            Identifier?: string;
        }
        export interface AddIdentifiers extends ServiceTypes.CoreRequestBase {
            Identifiers?: CoreTypes.EntityIdentifier[];
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
        export interface AllGroupAliases extends ServiceTypes.CoreRequestBase {
        }
        export interface AssetCostHistory extends ServiceTypes.CoreRequestBase {
            EntityType?: string;
            EntityUids?: string[];
            IncludeInspections?: boolean;
            IncludeWorkOrders?: boolean;
        }
        export interface Attributes extends ServiceTypes.CoreRequestBase {
            EntityType?: string;
        }
        export interface ChildPaths extends ServiceTypes.CoreRequestBase {
            ChildType?: string;
            EntityTypes: string[];
        }
        export interface Children extends ServiceTypes.CoreRequestBase {
            ChildType?: string;
            EntitySids?: number[];
            EntityType: string;
            EntityUids?: string[];
            Generations?: number;
            IgnoreEntityTypes?: string[];
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
            IncludeInspections?: boolean;
            IncludeWorkOrders?: boolean;
        }
        export interface DirectParent extends ServiceTypes.CoreRequestBase {
            EntitySids?: number[];
            EntityType: string;
            EntityUids?: string[];
            ParentType?: string;
            ReturnGeometry?: boolean;
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
        export interface EntityUrlInfos extends ServiceTypes.CoreRequestBase {
            EntityTypes: string[];
        }
        export interface FilterRecordToWorkOrderEntity extends ServiceTypes.CoreRequestBase {
            IncludeConfiguration?: boolean;
            Items?: CoreTypes.FilterRecordToWorkOrderEntitiyRequest[];
        }
        export interface FiveNumberSummary extends ServiceTypes.CoreRequestBase {
            Attribute: string;
            EntityType: string;
        }
        export interface GetByIdentifier extends ServiceTypes.CoreRequestBase {
            Identifier?: string;
        }
        export interface GetByIdentifiers extends ServiceTypes.CoreRequestBase {
            Identifiers?: string[];
        }
        export interface GISAttributes extends ServiceTypes.CoreRequestBase {
            EntitySid?: number;
            EntityType: string;
            EntityUid?: string;
            ReadableValues?: boolean;
        }
        export interface GroupAliases extends ServiceTypes.CoreRequestBase {
            GroupName?: string;
        }
        export interface GroupByType extends ServiceTypes.CoreRequestBase {
            DomainId?: number;
            EntityType: string;
        }
        export interface Groups extends ServiceTypes.CoreRequestBase {
            DomainId?: number;
        }
        export interface InspectionCostHistory extends ServiceTypes.CoreRequestBase {
            EntityType?: string;
            EntityUids?: string[];
            IncludeCanceledActivities?: boolean;
            IncludeOpenActivities?: boolean;
        }
        export interface Orphans extends ServiceTypes.CoreRequestBase {
            ChildType: string;
            MaxResults?: number;
            ParentType: string;
            RequiresFeatureAccess?: boolean;
        }
        export interface ParentPaths extends ServiceTypes.CoreRequestBase {
            EntityTypes: string[];
            ParentType?: string;
            RequireParentFeature?: boolean;
        }
        export interface Parents extends ServiceTypes.CoreRequestBase {
            EntitySids?: number[];
            EntityType: string;
            EntityUids?: string[];
            Generations?: number;
            ParentType?: string;
            RequireParentFeature?: boolean;
            ReturnGeometry?: boolean;
        }
        export interface ProcessSplits extends ServiceTypes.CoreRequestBase {
            Ids?: number[];
        }
        export interface PwEntities extends ServiceTypes.CoreRequestBase {
            Codes: string[];
        }
        export interface RemoveAlias extends ServiceTypes.CoreRequestBase {
            EntityType?: string;
            LayerName?: string;
        }
        export interface RemoveGroupAlias extends ServiceTypes.CoreRequestBase {
            Alias?: string;
            GroupName?: string;
        }
        export interface Resolve extends ServiceTypes.CoreRequestBase {
            Entities?: string[];
        }
        export interface Search extends ServiceTypes.CoreRequestBase {
            Attributes?: string[];
            DateAsEpoch?: boolean;
            EntityType: string;
            MaxResults?: number;
            Oids?: number[];
            ReturnGeometry?: boolean;
            Uids?: string[];
        }
        export interface SearchAsWorkOrderEntity extends ServiceTypes.CoreRequestBase {
            Attributes?: string[];
            DateAsEpoch?: boolean;
            EntityType: string;
            IncludeLatLon?: boolean;
            IncludeParent?: boolean;
            MaxResults?: number;
            Oids?: number[];
            ReturnGeometry?: boolean;
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
            EntityUids?: string[];
            IncludeInspections?: boolean;
            IncludeStandardInspections?: boolean;
            IncludeWorkOrders?: boolean;
            MaxResults?: number;
            OnlyOpenWAs?: boolean;
        }
    }
    export namespace Responses {
        export interface AddAlias extends ServiceTypes.CoreResponseBase_<CoreTypes.AssetAlias> {}
        export interface AddGroupAlias extends ServiceTypes.CoreResponseBase_<CoreTypes.AssetAlias> {}
        export interface AddIdentifier extends ServiceTypes.CoreResponseBase_<CoreTypes.EntityIdentifier> {}
        export interface AddIdentifiers extends ServiceTypes.CoreResponseBase_<CoreTypes.EntityIdentifier[]> {}
        export interface AddSplit extends ServiceTypes.CoreResponseBase_<CoreTypes.AssetSplitRecord> {}
        export interface AliasAssets extends ServiceTypes.CoreResponseBase_<CoreTypes.AliasAsset[]> {}
        export interface Aliases extends ServiceTypes.CoreResponseBase_<CoreTypes.AssetAlias> {}
        export interface AllAliases extends ServiceTypes.CoreResponseBase_<CoreTypes.AssetAlias[]> {}
        export interface AllGroupAliases extends ServiceTypes.CoreResponseBase_<CoreTypes.AssetAlias[]> {}
        export interface AssetCostHistory extends ServiceTypes.CoreResponseBase_<CoreTypes.AssetCostSummary[]> {}
        export interface Attributes extends ServiceTypes.CoreResponseBase_<CoreTypes.EsriServiceLayerAttribute[]> {}
        export interface ChildPaths extends ServiceTypes.CoreResponseBase_<{[key: string]: string[]}> {}
        export interface Children extends ServiceTypes.CoreResponseBase_<CoreTypes.GISNode[]> {}
        export interface CloneWorkOrderEntities extends ServiceTypes.CoreResponseBase_<CoreTypes.EntityUidSidUpdate[]> {}
        export interface Configuration extends ServiceTypes.CoreResponseBase_<CoreTypes.EntityConfiguration[]> {}
        export interface CostHistory extends ServiceTypes.CoreResponseBase_<CoreTypes.WorkOrderCostSummary[]> {}
        export interface CostTotal extends ServiceTypes.CoreResponseBase_<CoreTypes.EntityCostTotal[]> {}
        export interface DirectParent extends ServiceTypes.CoreResponseBase_<CoreTypes.GISParentChild[]> {}
        export interface DistinctValues extends ServiceTypes.CoreResponseBase_<Object[]> {}
        export interface DomainTypes extends ServiceTypes.CoreResponseBase_<CoreTypes.PWEntity[]> {}
        export interface EntityUidField extends ServiceTypes.CoreResponseBase_<string> {}
        export interface EntityUrlInfos extends ServiceTypes.CoreResponseBase_<{[key: string]: CoreTypes.EntityUrlInfo}> {}
        export interface FilterRecordToWorkOrderEntity extends ServiceTypes.CoreResponseBase_<CoreTypes.FilterRecordToWorkOrderEntityResult[]> {}
        export interface FiveNumberSummary extends ServiceTypes.CoreResponseBase_<CoreTypes.FiveNumberStatistic> {}
        export interface GetByIdentifier extends ServiceTypes.CoreResponseBase_<CoreTypes.EntityIdentifier> {}
        export interface GetByIdentifiers extends ServiceTypes.CoreResponseBase_<CoreTypes.EntityIdentifier[]> {}
        export interface GISAttributes extends ServiceTypes.CoreResponseBase_<{[key: string]: Object}> {}
        export interface GroupAliases extends ServiceTypes.CoreResponseBase_<CoreTypes.AssetAlias> {}
        export interface GroupByType extends ServiceTypes.CoreResponseBase_<CoreTypes.PWModule> {}
        export interface Groups extends ServiceTypes.CoreResponseBase_<CoreTypes.PWModule[]> {}
        export interface InspectionCostHistory extends ServiceTypes.CoreResponseBase_<CoreTypes.InspCostSummary[]> {}
        export interface Orphans extends ServiceTypes.CoreResponseBase_<CoreTypes.GISResult> {}
        export interface ParentPaths extends ServiceTypes.CoreResponseBase_<{[key: string]: string[]}> {}
        export interface Parents extends ServiceTypes.CoreResponseBase_<CoreTypes.GISParentChild[]> {}
        export interface ProcessSplits extends ServiceTypes.CoreResponseBase_<{[key: number]: boolean}> {}
        export interface PwEntities extends ServiceTypes.CoreResponseBase_<{[key: string]: CoreTypes.PWEntity[]}> {}
        export interface RemoveAlias extends ServiceTypes.CoreResponseBase_<CoreTypes.AssetAlias> {}
        export interface RemoveGroupAlias extends ServiceTypes.CoreResponseBase_<CoreTypes.AssetAlias> {}
        export interface Resolve extends ServiceTypes.CoreResponseBase_<{[key: string]: CoreTypes.PWEntity}> {}
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
        AddAlias?: (request: Requests.AddAlias) => AbortablePromise<Responses.AddAlias>;
        AddGroupAlias?: (request: Requests.AddGroupAlias) => AbortablePromise<Responses.AddGroupAlias>;
        AddIdentifier?: (request: Requests.AddIdentifier) => AbortablePromise<Responses.AddIdentifier>;
        AddIdentifiers?: (request: Requests.AddIdentifiers) => AbortablePromise<Responses.AddIdentifiers>;
        AddSplit?: (request: Requests.AddSplit) => AbortablePromise<Responses.AddSplit>;
        AliasAssets?: (request: Requests.AliasAssets) => AbortablePromise<Responses.AliasAssets>;
        Aliases?: (request: Requests.Aliases) => AbortablePromise<Responses.Aliases>;
        AllAliases?: (request: Requests.AllAliases) => AbortablePromise<Responses.AllAliases>;
        AllGroupAliases?: (request: Requests.AllGroupAliases) => AbortablePromise<Responses.AllGroupAliases>;
        AssetCostHistory?: (request: Requests.AssetCostHistory) => AbortablePromise<Responses.AssetCostHistory>;
        Attributes?: (request: Requests.Attributes) => AbortablePromise<Responses.Attributes>;
        ChildPaths?: (request: Requests.ChildPaths) => AbortablePromise<Responses.ChildPaths>;
        Children?: (request: Requests.Children) => AbortablePromise<Responses.Children>;
        CloneWorkOrderEntities?: (request: Requests.CloneWorkOrderEntities) => AbortablePromise<Responses.CloneWorkOrderEntities>;
        Configuration?: (request: Requests.Configuration) => AbortablePromise<Responses.Configuration>;
        CostHistory?: (request: Requests.CostHistory) => AbortablePromise<Responses.CostHistory>;
        CostTotal?: (request: Requests.CostTotal) => AbortablePromise<Responses.CostTotal>;
        DirectParent?: (request: Requests.DirectParent) => AbortablePromise<Responses.DirectParent>;
        DistinctValues?: (request: Requests.DistinctValues) => AbortablePromise<Responses.DistinctValues>;
        DomainTypes?: (request: Requests.DomainTypes) => AbortablePromise<Responses.DomainTypes>;
        EntityUidField?: (request: Requests.EntityUidField) => AbortablePromise<Responses.EntityUidField>;
        EntityUrlInfos?: (request: Requests.EntityUrlInfos) => AbortablePromise<Responses.EntityUrlInfos>;
        FilterRecordToWorkOrderEntity?: (request: Requests.FilterRecordToWorkOrderEntity) => AbortablePromise<Responses.FilterRecordToWorkOrderEntity>;
        FiveNumberSummary?: (request: Requests.FiveNumberSummary) => AbortablePromise<Responses.FiveNumberSummary>;
        GetByIdentifier?: (request: Requests.GetByIdentifier) => AbortablePromise<Responses.GetByIdentifier>;
        GetByIdentifiers?: (request: Requests.GetByIdentifiers) => AbortablePromise<Responses.GetByIdentifiers>;
        GISAttributes?: (request: Requests.GISAttributes) => AbortablePromise<Responses.GISAttributes>;
        GroupAliases?: (request: Requests.GroupAliases) => AbortablePromise<Responses.GroupAliases>;
        GroupByType?: (request: Requests.GroupByType) => AbortablePromise<Responses.GroupByType>;
        Groups?: (request: Requests.Groups) => AbortablePromise<Responses.Groups>;
        InspectionCostHistory?: (request: Requests.InspectionCostHistory) => AbortablePromise<Responses.InspectionCostHistory>;
        Orphans?: (request: Requests.Orphans) => AbortablePromise<Responses.Orphans>;
        ParentPaths?: (request: Requests.ParentPaths) => AbortablePromise<Responses.ParentPaths>;
        Parents?: (request: Requests.Parents) => AbortablePromise<Responses.Parents>;
        ProcessSplits?: (request: Requests.ProcessSplits) => AbortablePromise<Responses.ProcessSplits>;
        PwEntities?: (request: Requests.PwEntities) => AbortablePromise<Responses.PwEntities>;
        RemoveAlias?: (request: Requests.RemoveAlias) => AbortablePromise<Responses.RemoveAlias>;
        RemoveGroupAlias?: (request: Requests.RemoveGroupAlias) => AbortablePromise<Responses.RemoveGroupAlias>;
        Resolve?: (request: Requests.Resolve) => AbortablePromise<Responses.Resolve>;
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
