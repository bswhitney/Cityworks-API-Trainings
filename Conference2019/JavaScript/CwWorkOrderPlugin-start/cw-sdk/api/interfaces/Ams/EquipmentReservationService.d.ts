import { Enums, ServiceEnums, PromiseTypes, ServiceTypes, Types as CoreTypes } from '../../../bundles/core';
import AbortablePromise = PromiseTypes.AbortablePromise;

export namespace EquipmentReservationServiceTypes { 
    export namespace Requests {
        export interface CheckedOut extends ServiceTypes.CoreRequestBase {
        }
        export interface CheckIn extends ServiceTypes.CoreRequestBase {
            Comments?: string;
            EmployeeSid: number;
            EquipmentSid: number;
            WorkOrderId?: string;
        }
        export interface CheckOut extends ServiceTypes.CoreRequestBase {
            Comments?: string;
            EmployeeSid: number;
            EquipmentSid: number;
            ReservedToDate: Date;
            WorkOrderId?: string;
        }
        export interface CheckOutHistory extends ServiceTypes.CoreRequestBase {
            EmployeeSid?: number;
            EquipmentSid?: number;
        }
        export interface DeleteReservation extends ServiceTypes.CoreRequestBase {
            TransactionIds: number[];
        }
        export interface Reservations extends ServiceTypes.CoreRequestBase {
            EndDateTime?: Date;
            EquipmentSid?: number;
            StartDateTime?: Date;
        }
        export interface Reserve extends ServiceTypes.CoreRequestBase {
            Comments?: string;
            EmployeeSid: number;
            EquipmentSid: number;
            ReservedToDate: Date;
            TransDateTime: Date;
            WorkOrderId?: string;
        }
        export interface Status extends ServiceTypes.CoreRequestBase {
            EquipmentSids: number[];
        }
        export interface UpdateReservation extends ServiceTypes.CoreRequestBase {
            Comments?: string;
            EmployeeSid?: number;
            ReservedToDate?: Date;
            TransactionId: number;
            TransDateTime?: Date;
            WorkOrderId?: string;
        }
    }
    export namespace Responses {
        export interface CheckedOut extends ServiceTypes.CoreResponseBase_<CoreTypes.EquipTransHistory[]> {}
        export interface CheckIn extends ServiceTypes.CoreResponseBase_<CoreTypes.EquipTransHistory> {}
        export interface CheckOut extends ServiceTypes.CoreResponseBase_<CoreTypes.EquipTransHistory> {}
        export interface CheckOutHistory extends ServiceTypes.CoreResponseBase_<CoreTypes.EquipTransHistory[]> {}
        export interface DeleteReservation extends ServiceTypes.CoreResponseBase {}
        export interface Reservations extends ServiceTypes.CoreResponseBase_<CoreTypes.EquipTransHistory[]> {}
        export interface Reserve extends ServiceTypes.CoreResponseBase_<CoreTypes.EquipTransHistory> {}
        export interface Status extends ServiceTypes.CoreResponseBase_<CoreTypes.EquipmentReservationStatus[]> {}
        export interface UpdateReservation extends ServiceTypes.CoreResponseBase_<CoreTypes.EquipTransHistory> {}
    }
    export interface IEquipmentReservationService {
        CheckedOut?: (request: Requests.CheckedOut) => AbortablePromise<Responses.CheckedOut>;
        CheckIn?: (request: Requests.CheckIn) => AbortablePromise<Responses.CheckIn>;
        CheckOut?: (request: Requests.CheckOut) => AbortablePromise<Responses.CheckOut>;
        CheckOutHistory?: (request: Requests.CheckOutHistory) => AbortablePromise<Responses.CheckOutHistory>;
        DeleteReservation?: (request: Requests.DeleteReservation) => AbortablePromise<Responses.DeleteReservation>;
        Reservations?: (request: Requests.Reservations) => AbortablePromise<Responses.Reservations>;
        Reserve?: (request: Requests.Reserve) => AbortablePromise<Responses.Reserve>;
        Status?: (request: Requests.Status) => AbortablePromise<Responses.Status>;
        UpdateReservation?: (request: Requests.UpdateReservation) => AbortablePromise<Responses.UpdateReservation>;
    }
}
