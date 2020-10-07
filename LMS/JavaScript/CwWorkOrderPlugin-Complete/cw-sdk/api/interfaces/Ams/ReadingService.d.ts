import { Enums, ServiceEnums, PromiseTypes, ServiceTypes, Types as CoreTypes } from '../../../bundles/core';
import AbortablePromise = PromiseTypes.AbortablePromise;

export namespace ReadingServiceTypes { 
    export namespace Requests {
        export interface Add extends ServiceTypes.CoreRequestBase {
            Comments?: string;
            EntityId: string;
            EntityType: string;
            Reading?: number;
            ReadingName: string;
        }
        export interface ByEntity extends ServiceTypes.CoreRequestBase {
            EntityId: string;
            EntityType: string;
            ReadingName: string;
        }
        export interface Configuration extends ServiceTypes.CoreRequestBase {
            EntityIds?: string[];
            EntityType?: string;
            InspectionId?: number;
            WorkOrderId?: string;
        }
        export interface Update extends ServiceTypes.CoreRequestBase {
            ReadingId: number;
            WOReading?: number;
        }
    }
    export namespace Responses {
        export interface Add extends ServiceTypes.CoreResponseBase_obsolete_<CoreTypes.EntityReading> {}
        export interface ByEntity extends ServiceTypes.CoreResponseBase_obsolete_<CoreTypes.EntityReading[]> {}
        export interface Configuration extends ServiceTypes.CoreResponseBase_obsolete_<CoreTypes.EntityReadingConfiguration[]> {}
        export interface Update extends ServiceTypes.CoreResponseBase_obsolete {}
    }
    export interface IReadingService {
        Add?: (request: Requests.Add) => AbortablePromise<Responses.Add>;
        ByEntity?: (request: Requests.ByEntity) => AbortablePromise<Responses.ByEntity>;
        Configuration?: (request: Requests.Configuration) => AbortablePromise<Responses.Configuration>;
        Update?: (request: Requests.Update) => AbortablePromise<Responses.Update>;
    }
}
