import { Enums, ServiceEnums, PromiseTypes, ServiceTypes, Types as CoreTypes } from '../../../bundles/core';
import AbortablePromise = PromiseTypes.AbortablePromise;

export namespace CaseRelDocsServiceTypes { 
    export namespace Requests {
        export interface Add extends ServiceTypes.CoreRequestBase {
            CaObjectId: number;
        }
        export interface ByCaObjectId extends ServiceTypes.CoreRequestBase {
            CaObjectId?: number;
        }
        export interface Delete extends ServiceTypes.CoreRequestBase {
            CaRelDocId?: number;
        }
        export interface DeleteByCaObjectId extends ServiceTypes.CoreRequestBase {
            CaObjectId?: number;
        }
        export interface GetStoragePreferences extends ServiceTypes.CoreRequestBase {
        }
        export interface Search extends ServiceTypes.CoreRequestBase {
            CaObjectId?: number;
            CaRelDocId?: number;
            CommentText?: string;
            DocName?: string;
            Location?: string;
            LocationType?: string;
        }
    }
    export namespace Responses {
        export interface Add extends ServiceTypes.CoreResponseBase_obsolete_<CoreTypes.ViewDataUploadFilesResult[]> {}
        export interface ByCaObjectId extends ServiceTypes.CoreResponseBase_obsolete_<CoreTypes.ViewDataUploadFilesResult[]> {}
        export interface Delete extends ServiceTypes.CoreResponseBase_obsolete_<CoreTypes.CaRelDocsItemBase> {}
        export interface DeleteByCaObjectId extends ServiceTypes.CoreResponseBase_obsolete {}
        export interface StoragePreferences extends ServiceTypes.CoreResponseBase_obsolete_<CoreTypes.PllPreferenceItem[]> {}
        export interface Search extends ServiceTypes.CoreResponseBase_obsolete_<number[]> {}
    }
    export interface ICaseRelDocsService {
        Add?: (request: Requests.Add) => AbortablePromise<Responses.Add>;
        ByCaObjectId?: (request: Requests.ByCaObjectId) => AbortablePromise<Responses.ByCaObjectId>;
        Delete?: (request: Requests.Delete) => AbortablePromise<Responses.Delete>;
        DeleteByCaObjectId?: (request: Requests.DeleteByCaObjectId) => AbortablePromise<Responses.DeleteByCaObjectId>;
        GetStoragePreferences?: (request: Requests.GetStoragePreferences) => AbortablePromise<Responses.StoragePreferences>;
        Search?: (request: Requests.Search) => AbortablePromise<Responses.Search>;
    }
}
