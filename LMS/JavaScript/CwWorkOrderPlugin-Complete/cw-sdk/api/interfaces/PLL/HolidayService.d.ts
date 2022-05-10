import { Enums, ServiceEnums, PromiseTypes, ServiceTypes, Types as CoreTypes } from '../../../bundles/core';
import AbortablePromise = PromiseTypes.AbortablePromise;

export namespace HolidayServiceTypes { 
    export namespace Requests {
        export interface Add extends ServiceTypes.CoreRequestBase {
            HalfDayFlag?: string;
            HolidayDate?: Date;
            HolidayDesc?: string;
        }
        export interface Delete extends ServiceTypes.CoreRequestBase {
            HolidayId: number;
        }
    }
    export namespace Responses {
        export interface Add extends ServiceTypes.CoreResponseBase_<CoreTypes.HolidaysItem> {}
        export interface Delete extends ServiceTypes.CoreResponseBase_<CoreTypes.HolidaysItem> {}
    }
    export interface IHolidayService {
        Add?: (request: Requests.Add) => AbortablePromise<Responses.Add>;
        Delete?: (request: Requests.Delete) => AbortablePromise<Responses.Delete>;
    }
}
