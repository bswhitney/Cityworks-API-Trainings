import { Enums, ServiceEnums, PromiseTypes, ServiceTypes, Types as CoreTypes } from '../../../bundles/core';
import AbortablePromise = PromiseTypes.AbortablePromise;

export namespace BookmarkServiceTypes { 
    export namespace Requests {
        export interface AddBookmark extends ServiceTypes.CoreRequestBase {
            ExtentName: string;
            IsDefault?: boolean;
            SharedWithin?: number;
            XMax?: number;
            XMin?: number;
            YMax?: number;
            YMin?: number;
        }
        export interface AddScale extends ServiceTypes.CoreRequestBase {
            Scale?: number;
            SharedWithin?: number;
        }
        export interface DeleteBookmarks extends ServiceTypes.CoreRequestBase {
            BookmarkIds?: number[];
        }
        export interface DeleteScales extends ServiceTypes.CoreRequestBase {
            ScaleIds?: number[];
        }
        export interface GetBookmarks extends ServiceTypes.CoreRequestBase {
            DomainId?: number;
            EmployeeSid?: number;
            GroupId?: number;
            IncludeShared?: boolean;
            WKID?: number;
            WKT?: string;
        }
        export interface GetScales extends ServiceTypes.CoreRequestBase {
            DomainId?: number;
            EmployeeSid?: number;
            GroupId?: number;
            IncludeShared?: boolean;
        }
        export interface SetInitialExtent extends ServiceTypes.CoreRequestBase {
            ExtentName?: string;
            XMax?: number;
            XMin?: number;
            YMax?: number;
            YMin?: number;
        }
        export interface UpdateBookmark extends ServiceTypes.CoreRequestBase {
            ExtentId: number;
            ExtentName?: string;
            IsDefault?: boolean;
            SharedWithin?: number;
            XMax?: number;
            XMin?: number;
            YMax?: number;
            YMin?: number;
        }
        export interface UpdateScale extends ServiceTypes.CoreRequestBase {
            Scale?: number;
            ScaleId: number;
            SharedWithin?: number;
        }
    }
    export namespace Responses {
        export interface AddBookmark extends ServiceTypes.CoreResponseBase_<CoreTypes.UserMapExtent> {}
        export interface AddScale extends ServiceTypes.CoreResponseBase_<CoreTypes.UserMapScale> {}
        export interface DeleteBookmarks extends ServiceTypes.CoreResponseBase_<number[]> {}
        export interface DeleteScales extends ServiceTypes.CoreResponseBase_<number[]> {}
        export interface GetBookmarks extends ServiceTypes.CoreResponseBase_<CoreTypes.UserMapExtent[]> {}
        export interface GetScales extends ServiceTypes.CoreResponseBase_<CoreTypes.UserMapScale[]> {}
        export interface SetInitialExtent extends ServiceTypes.CoreResponseBase_<CoreTypes.UserMapExtent> {}
        export interface UpdateBookmark extends ServiceTypes.CoreResponseBase_<CoreTypes.UserMapExtent> {}
        export interface UpdateScale extends ServiceTypes.CoreResponseBase_<CoreTypes.UserMapScale> {}
    }
    export interface IBookmarkService {
        AddBookmark?: (request: Requests.AddBookmark) => AbortablePromise<Responses.AddBookmark>;
        AddScale?: (request: Requests.AddScale) => AbortablePromise<Responses.AddScale>;
        DeleteBookmarks?: (request: Requests.DeleteBookmarks) => AbortablePromise<Responses.DeleteBookmarks>;
        DeleteScales?: (request: Requests.DeleteScales) => AbortablePromise<Responses.DeleteScales>;
        GetBookmarks?: (request: Requests.GetBookmarks) => AbortablePromise<Responses.GetBookmarks>;
        GetScales?: (request: Requests.GetScales) => AbortablePromise<Responses.GetScales>;
        SetInitialExtent?: (request: Requests.SetInitialExtent) => AbortablePromise<Responses.SetInitialExtent>;
        UpdateBookmark?: (request: Requests.UpdateBookmark) => AbortablePromise<Responses.UpdateBookmark>;
        UpdateScale?: (request: Requests.UpdateScale) => AbortablePromise<Responses.UpdateScale>;
    }
}
