import { PromiseTypes } from '../../../core/promise';
import { IApiService } from '../../../http/api-service';
import { BookmarkServiceTypes as SvcDef } from '../../interfaces/Ams/BookmarkService';
import AbortablePromise = PromiseTypes.AbortablePromise;
import Requests = SvcDef.Requests;
import Responses = SvcDef.Responses;
import IBookmarkService = SvcDef.IBookmarkService;
export * from '../../../http/api-service';
export * from '../../interfaces/Ams/BookmarkService';
export declare class BookmarkService implements IBookmarkService {
    private _service;
    constructor(service: IApiService);
    AddBookmark(request: Requests.AddBookmark): AbortablePromise<Responses.AddBookmark>;
    AddScale(request: Requests.AddScale): AbortablePromise<Responses.AddScale>;
    DeleteBookmarks(request: Requests.DeleteBookmarks): AbortablePromise<Responses.DeleteBookmarks>;
    DeleteScales(request: Requests.DeleteScales): AbortablePromise<Responses.DeleteScales>;
    GetBookmarks(request: Requests.GetBookmarks): AbortablePromise<Responses.GetBookmarks>;
    GetScales(request: Requests.GetScales): AbortablePromise<Responses.GetScales>;
    SetInitialExtent(request: Requests.SetInitialExtent): AbortablePromise<Responses.SetInitialExtent>;
    UpdateBookmark(request: Requests.UpdateBookmark): AbortablePromise<Responses.UpdateBookmark>;
    UpdateScale(request: Requests.UpdateScale): AbortablePromise<Responses.UpdateScale>;
    ErrorCodes: {};
    WarningCodes: {};
}
