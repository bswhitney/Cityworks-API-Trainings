import { Enums, ServiceEnums, PromiseTypes, ServiceTypes, Types as CoreTypes } from '../../../bundles/core';
import AbortablePromise = PromiseTypes.AbortablePromise;

export namespace AppDataServiceTypes { 
    export namespace Requests {
        export interface CurrentLocation extends ServiceTypes.CoreRequestBase {
        }
        export interface SelectedEntities extends ServiceTypes.CoreRequestBase {
        }
    }
    export namespace Responses {
        export interface CurrentLocation extends ServiceTypes.CoreResponseBase_obsolete_<CoreTypes.GeocodeRequest> {}
        export interface SelectedEntities extends ServiceTypes.CoreResponseBase_obsolete_<CoreTypes.WorkOrderEntity[]> {}
    }
    export interface IAppDataService {
        CurrentLocation?: (request: Requests.CurrentLocation) => AbortablePromise<Responses.CurrentLocation>;
        SelectedEntities?: (request: Requests.SelectedEntities) => AbortablePromise<Responses.SelectedEntities>;
    }
}
