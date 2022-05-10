import { PromiseTypes } from '../../../core/promise';
import { IApiService } from '../../../http/api-service';
import { ManholeInspectionServiceTypes as SvcDef } from '../../interfaces/Ams/ManholeInspectionService';
import AbortablePromise = PromiseTypes.AbortablePromise;
import Requests = SvcDef.Requests;
import Responses = SvcDef.Responses;
import IManholeInspectionService = SvcDef.IManholeInspectionService;
export * from '../../../http/api-service';
export * from '../../interfaces/Ams/ManholeInspectionService';
export declare class ManholeInspectionService implements IManholeInspectionService {
    private _service;
    constructor(service: IApiService);
    AddImage(request: Requests.AddImage): AbortablePromise<Responses.AddImage>;
    AddObservation(request: Requests.AddObservation): AbortablePromise<Responses.AddObservation>;
    AddPipeObservation(request: Requests.AddPipeObservation): AbortablePromise<Responses.AddPipeObservation>;
    ByEntityTypeIds(request: Requests.ByEntityTypeIds): AbortablePromise<Responses.ByEntityTypeIds>;
    ById(request: Requests.ById): AbortablePromise<Responses.ById>;
    ByIds(request: Requests.ByIds): AbortablePromise<Responses.ByIds>;
    ByWorkOrderIds(request: Requests.ByWorkOrderIds): AbortablePromise<Responses.ByWorkOrderIds>;
    ByWorkOrders(request: Requests.ByWorkOrders): AbortablePromise<Responses.ByWorkOrders>;
    ChangeCustomFieldCategory(request: Requests.ChangeCustomFieldCategory): AbortablePromise<Responses.ChangeCustomFieldCategory>;
    CloneInspection(request: Requests.CloneInspection): AbortablePromise<Responses.CloneInspection>;
    Create(request: Requests.Create): AbortablePromise<Responses.Create>;
    EntityTypes(request: Requests.EntityTypes): AbortablePromise<Responses.EntityTypes>;
    Images(request: Requests.Images): AbortablePromise<Responses.Images>;
    InspectedBy(request: Requests.InspectedBy): AbortablePromise<Responses.InspectedBy>;
    Move(request: Requests.Move): AbortablePromise<Responses.Move>;
    Observations(request: Requests.Observations): AbortablePromise<Responses.Observations>;
    ObservationsByIds(request: Requests.ObservationsByIds): AbortablePromise<Responses.ObservationsByIds>;
    PipeObservations(request: Requests.PipeObservations): AbortablePromise<Responses.PipeObservations>;
    PipeObservationsByIds(request: Requests.PipeObservationsByIds): AbortablePromise<Responses.PipeObservationsByIds>;
    Update(request: Requests.Update): AbortablePromise<Responses.Update>;
    UpdateObservation(request: Requests.UpdateObservation): AbortablePromise<Responses.UpdateObservation>;
    UpdatePipeObservation(request: Requests.UpdatePipeObservation): AbortablePromise<Responses.UpdatePipeObservation>;
    ErrorCodes: {
        UnknownError: number;
        NotAuthorizedToUpdateInspection: number;
        InvalidActivityMapLogicXY: number;
        InvalidField: number;
        ErrorItemNotFound: number;
        MoveInvalidCityworksWkid: number;
    };
    WarningCodes: {
        WarningItemNotFound: number;
        WarningEmptyOrNullField: number;
    };
}
