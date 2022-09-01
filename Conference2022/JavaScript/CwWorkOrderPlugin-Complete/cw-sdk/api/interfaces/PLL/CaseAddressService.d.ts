import { Enums, ServiceEnums, PromiseTypes, ServiceTypes, Types as CoreTypes } from '../../../bundles/core';
import AbortablePromise = PromiseTypes.AbortablePromise;

export namespace CaseAddressServiceTypes { 
    export namespace Requests {
        export interface Add extends ServiceTypes.CoreRequestBase {
            Address?: string;
            AddressId?: number;
            AssetId?: string;
            AssetObjectId?: number;
            AssetType?: string;
            CaObjectId: number;
            CityName?: string;
            CrossStreet?: string;
            DateExpired?: Date;
            ExpiredFlag?: string;
            Facility_Id?: string;
            FeatureAssetId?: string;
            FeatureClass?: string;
            FeatureObjectId?: number;
            LegacyId?: string;
            Level_Id?: string;
            LndObjectId?: number;
            Location?: string;
            MasterFlag?: string;
            ObjectId?: string;
            StateCode?: string;
            StreetDirection?: string;
            StreetFraction?: string;
            StreetName?: string;
            StreetNumber?: number;
            StreetPostDir?: string;
            StreetType?: string;
            Suite?: string;
            TileNo?: string;
            UpdateCaseData?: boolean;
            UpdateXY?: boolean;
            XCoord?: number;
            YCoord?: number;
            ZCoord?: number;
            ZipCode?: string;
        }
        export interface ByCaObjectId extends ServiceTypes.CoreRequestBase {
            CaObjectId: number;
        }
        export interface Delete extends ServiceTypes.CoreRequestBase {
            CaAddressId: number;
            UpdateXY?: boolean;
        }
        export interface DeleteByCaObjectId extends ServiceTypes.CoreRequestBase {
            CaObjectId: number;
            UpdateXY?: boolean;
        }
        export interface Search extends ServiceTypes.CoreRequestBase {
            AssetType?: string;
            CaAddressId?: number;
            CaObjectId?: number;
            CityName?: string;
            ExpiredFlag?: string;
            StateCode?: string;
            StateName?: string;
            StreetName?: string;
            StreetNumber?: number;
            Suite?: string;
            ZipCode?: string;
        }
        export interface SearchObject extends ServiceTypes.CoreRequestBase {
            AssetType?: string;
            CaAddressId?: number;
            CaObjectId?: number;
            CityName?: string;
            ExpiredFlag?: string;
            StateCode?: string;
            StateName?: string;
            StreetName?: string;
            StreetNumber?: number;
            Suite?: string;
            ZipCode?: string;
        }
    }
    export namespace Responses {
        export interface Add extends ServiceTypes.CoreResponseBase_<CoreTypes.CaAddressItemBase> {}
        export interface ByCaObjectId extends ServiceTypes.CoreResponseBase_obsolete_<CoreTypes.CaAddressItemBase[]> {}
        export interface Delete extends ServiceTypes.CoreResponseBase_obsolete_<CoreTypes.CaAddressItemBase> {}
        export interface DeleteByCaObjectId extends ServiceTypes.CoreResponseBase_obsolete_<number> {}
        export interface Search extends ServiceTypes.CoreResponseBase_obsolete_<number[]> {}
        export interface SearchObject extends ServiceTypes.CoreResponseBase_obsolete_<CoreTypes.CaAddressItemBase[]> {}
    }
    export interface ICaseAddressService {
        Add?: (request: Requests.Add) => AbortablePromise<Responses.Add>;
        ByCaObjectId?: (request: Requests.ByCaObjectId) => AbortablePromise<Responses.ByCaObjectId>;
        Delete?: (request: Requests.Delete) => AbortablePromise<Responses.Delete>;
        DeleteByCaObjectId?: (request: Requests.DeleteByCaObjectId) => AbortablePromise<Responses.DeleteByCaObjectId>;
        Search?: (request: Requests.Search) => AbortablePromise<Responses.Search>;
        SearchObject?: (request: Requests.SearchObject) => AbortablePromise<Responses.SearchObject>;
    }
}
