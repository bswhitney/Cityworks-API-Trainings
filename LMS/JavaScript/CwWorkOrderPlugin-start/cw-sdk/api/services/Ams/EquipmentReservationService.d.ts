import { PromiseTypes } from '../../../core/promise';
import { IApiService } from '../../../http/api-service';
import { EquipmentReservationServiceTypes as SvcDef } from '../../interfaces/Ams/EquipmentReservationService';
import AbortablePromise = PromiseTypes.AbortablePromise;
import Requests = SvcDef.Requests;
import Responses = SvcDef.Responses;
import IEquipmentReservationService = SvcDef.IEquipmentReservationService;
export * from '../../../http/api-service';
export * from '../../interfaces/Ams/EquipmentReservationService';
export declare class EquipmentReservationService implements IEquipmentReservationService {
    private _service;
    constructor(service: IApiService);
    CheckedOut(request: Requests.CheckedOut): AbortablePromise<Responses.CheckedOut>;
    CheckIn(request: Requests.CheckIn): AbortablePromise<Responses.CheckIn>;
    CheckOut(request: Requests.CheckOut): AbortablePromise<Responses.CheckOut>;
    CheckOutHistory(request: Requests.CheckOutHistory): AbortablePromise<Responses.CheckOutHistory>;
    DeleteReservation(request: Requests.DeleteReservation): AbortablePromise<Responses.DeleteReservation>;
    Reservations(request: Requests.Reservations): AbortablePromise<Responses.Reservations>;
    Reserve(request: Requests.Reserve): AbortablePromise<Responses.Reserve>;
    Status(request: Requests.Status): AbortablePromise<Responses.Status>;
    UpdateReservation(request: Requests.UpdateReservation): AbortablePromise<Responses.UpdateReservation>;
    ErrorCodes: {};
    WarningCodes: {};
}
