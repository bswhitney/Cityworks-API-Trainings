import { Enums, ServiceEnums, PromiseTypes, ServiceTypes, Types as CoreTypes } from '../../../bundles/core';
import AbortablePromise = PromiseTypes.AbortablePromise;

export namespace InspectionTimeBlockServiceTypes { 
    export namespace Requests {
        export interface Add extends ServiceTypes.CoreRequestBase {
            EndTime: string;
            InspTimeBlocksDetails?: CoreTypes.InspTimeBlocksDetailItem[];
            LabelText: string;
            StartTime: string;
        }
    }
    export namespace Responses {
        export interface Add extends ServiceTypes.CoreResponseBase_<CoreTypes.InspectionTimeBlocksItem> {}
    }
    export interface IInspectionTimeBlockService {
        Add?: (request: Requests.Add) => AbortablePromise<Responses.Add>;
    }
}
