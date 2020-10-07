import { Enums, ServiceEnums, PromiseTypes, ServiceTypes, Types as CoreTypes } from '../../../bundles/core';
import AbortablePromise = PromiseTypes.AbortablePromise;

export namespace CaseAssetServiceTypes { 
    export namespace Requests {
        export interface ByCaObjectId extends ServiceTypes.CoreRequestBase {
            CaObjectId: number;
        }
        export interface DeleteByCaObjectId extends ServiceTypes.CoreRequestBase {
            CaObjectId: number;
        }
        export interface Search extends ServiceTypes.CoreRequestBase {
            Address?: string;
            AssetId?: string;
            AssetObjectId?: number;
            AssetType?: string;
            CaAssetId?: number;
            FeatureAssetId?: string;
            FeatureClass?: string;
            FeatureObjectId?: number;
            LegacyId?: string;
            Location?: string;
            TileNo?: string;
            Xcoord?: string;
            Ycoord?: string;
        }
        export interface SearchObject extends ServiceTypes.CoreRequestBase {
            Address?: string;
            AssetId?: string;
            AssetObjectId?: number;
            AssetType?: string;
            CaAssetId?: number;
            FeatureAssetId?: string;
            FeatureClass?: string;
            FeatureObjectId?: number;
            LegacyId?: string;
            Location?: string;
            TileNo?: string;
            Xcoord?: string;
            Ycoord?: string;
        }
    }
    export namespace Responses {
        export interface ByCaObjectId extends ServiceTypes.CoreResponseBase_obsolete_<CoreTypes.CaAssetItemBase[]> {}
        export interface DeleteByCaObjectId extends ServiceTypes.CoreResponseBase_obsolete_<number> {}
        export interface Search extends ServiceTypes.CoreResponseBase_obsolete_<number[]> {}
        export interface SearchObject extends ServiceTypes.CoreResponseBase_obsolete_<CoreTypes.CaAssetItemBase[]> {}
    }
    export interface ICaseAssetService {
        ByCaObjectId?: (request: Requests.ByCaObjectId) => AbortablePromise<Responses.ByCaObjectId>;
        DeleteByCaObjectId?: (request: Requests.DeleteByCaObjectId) => AbortablePromise<Responses.DeleteByCaObjectId>;
        Search?: (request: Requests.Search) => AbortablePromise<Responses.Search>;
        SearchObject?: (request: Requests.SearchObject) => AbortablePromise<Responses.SearchObject>;
    }
}
