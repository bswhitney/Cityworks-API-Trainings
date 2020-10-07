import { Enums, ServiceEnums, PromiseTypes, ServiceTypes, Types as CoreTypes } from '../../../bundles/core';
import AbortablePromise = PromiseTypes.AbortablePromise;

export namespace UniversalCustomFieldServiceTypes { 
    export namespace Requests {
        export interface Add extends ServiceTypes.CoreRequestBase {
            CodeType?: string;
            DefaultValue?: string;
            DomainId?: number;
            FieldAlias?: string;
            FieldName: string;
            SequenceId?: number;
            TableType: number;
            UseCodeDesc?: number;
        }
        export interface ById extends ServiceTypes.CoreRequestBase {
            FieldIds: number[];
        }
        export interface ByType extends ServiceTypes.CoreRequestBase {
            DomainIds?: number[];
            TableTypes: number[];
        }
        export interface Contract extends ServiceTypes.CoreRequestBase {
            DomainIds?: number[];
        }
        export interface CustomerCall extends ServiceTypes.CoreRequestBase {
            DomainIds?: number[];
        }
        export interface Delete extends ServiceTypes.CoreRequestBase {
            FieldIds: number[];
        }
        export interface Inspection extends ServiceTypes.CoreRequestBase {
            DomainIds?: number[];
        }
        export interface MoveField extends ServiceTypes.CoreRequestBase {
            Count?: number;
            Direction: number;
            FieldId: number;
        }
        export interface ServiceRequest extends ServiceTypes.CoreRequestBase {
            DomainIds?: number[];
        }
        export interface Update extends ServiceTypes.CoreRequestBase {
            CodeType?: string;
            DefaultValue?: string;
            FieldAlias?: string;
            FieldId: number;
            SequenceId?: number;
            UseCodeDesc?: number;
        }
        export interface WorkOrder extends ServiceTypes.CoreRequestBase {
            DomainIds?: number[];
        }
    }
    export namespace Responses {
        export interface Add extends ServiceTypes.CoreResponseBase_<CoreTypes.CWField> {}
        export interface ById extends ServiceTypes.CoreResponseBase_<CoreTypes.CWField[]> {}
        export interface ByType extends ServiceTypes.CoreResponseBase_<CoreTypes.CWField[]> {}
        export interface Contract extends ServiceTypes.CoreResponseBase_<CoreTypes.CWField[]> {}
        export interface CustomerCall extends ServiceTypes.CoreResponseBase_<CoreTypes.CWField[]> {}
        export interface Delete extends ServiceTypes.CoreResponseBase_<{[key: number]: boolean}> {}
        export interface Inspection extends ServiceTypes.CoreResponseBase_<CoreTypes.CWField[]> {}
        export interface MoveField extends ServiceTypes.CoreResponseBase_<CoreTypes.CWField> {}
        export interface ServiceRequest extends ServiceTypes.CoreResponseBase_<CoreTypes.CWField[]> {}
        export interface Update extends ServiceTypes.CoreResponseBase_<CoreTypes.CWField> {}
        export interface WorkOrder extends ServiceTypes.CoreResponseBase_<CoreTypes.CWField[]> {}
    }
    export interface IUniversalCustomFieldService {
        Add?: (request: Requests.Add) => AbortablePromise<Responses.Add>;
        ById?: (request: Requests.ById) => AbortablePromise<Responses.ById>;
        ByType?: (request: Requests.ByType) => AbortablePromise<Responses.ByType>;
        Contract?: (request: Requests.Contract) => AbortablePromise<Responses.Contract>;
        CustomerCall?: (request: Requests.CustomerCall) => AbortablePromise<Responses.CustomerCall>;
        Delete?: (request: Requests.Delete) => AbortablePromise<Responses.Delete>;
        Inspection?: (request: Requests.Inspection) => AbortablePromise<Responses.Inspection>;
        MoveField?: (request: Requests.MoveField) => AbortablePromise<Responses.MoveField>;
        ServiceRequest?: (request: Requests.ServiceRequest) => AbortablePromise<Responses.ServiceRequest>;
        Update?: (request: Requests.Update) => AbortablePromise<Responses.Update>;
        WorkOrder?: (request: Requests.WorkOrder) => AbortablePromise<Responses.WorkOrder>;
    }
}
