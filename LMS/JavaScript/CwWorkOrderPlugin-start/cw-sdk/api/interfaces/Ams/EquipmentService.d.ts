import { Enums, ServiceEnums, PromiseTypes, ServiceTypes, Types as CoreTypes } from '../../../bundles/core';
import AbortablePromise = PromiseTypes.AbortablePromise;

export namespace EquipmentServiceTypes { 
    export namespace Requests {
        export interface Add extends ServiceTypes.CoreRequestBase {
            CustomFieldValues?: {[key: number]: string};
            DefaultImgPath?: string;
            Description?: string;
            EquipmentUid: string;
            ForCheckout?: string;
            Manufacturer?: string;
            Model?: string;
            RateType?: string;
            UnitCost?: number;
            Viewable?: boolean;
            WarranteeDate?: Date;
        }
        export interface All extends ServiceTypes.CoreRequestBase {
            ViewableOnly?: boolean;
        }
        export interface ById extends ServiceTypes.CoreRequestBase {
            EquipmentSid: number;
        }
        export interface ByIds extends ServiceTypes.CoreRequestBase {
            EquipmentSids?: number[];
        }
        export interface Delete extends ServiceTypes.CoreRequestBase {
            EquipmentSids: number[];
        }
        export interface Search extends ServiceTypes.CoreRequestBase {
            Description?: string[];
            EquipmentSid?: number[];
            EquipmentUid?: string[];
            ForCheckout?: boolean;
            Manufacturer?: string[];
            MaxResults?: number;
            Model?: string[];
            RateType?: string[];
            Viewable?: boolean;
        }
        export interface Update extends ServiceTypes.CoreRequestBase {
            CustomFieldValues?: {[key: number]: string};
            DefaultImgPath?: string;
            Description?: string;
            EquipmentSids: number[];
            EquipmentUid?: string;
            ForCheckout?: string;
            Manufacturer?: string;
            Model?: string;
            RateType?: string;
            UnitCost?: number;
            Viewable?: boolean;
            WarranteeDate?: Date;
        }
    }
    export namespace Responses {
        export interface Add extends ServiceTypes.CoreResponseBase_<CoreTypes.EquipmentBase> {}
        export interface All extends ServiceTypes.CoreResponseBase_obsolete_<CoreTypes.EquipmentBase[]> {}
        export interface ById extends ServiceTypes.CoreResponseBase_obsolete_<CoreTypes.EquipmentBase> {}
        export interface ByIds extends ServiceTypes.CoreResponseBase_obsolete_<CoreTypes.EquipmentBase[]> {}
        export interface Delete extends ServiceTypes.CoreResponseBase_<{[key: number]: boolean}> {}
        export interface Search extends ServiceTypes.CoreResponseBase_<number[]> {}
        export interface Update extends ServiceTypes.CoreResponseBase_<CoreTypes.EquipmentBase[]> {}
    }
    export interface IEquipmentService {
        Add?: (request: Requests.Add) => AbortablePromise<Responses.Add>;
        All?: (request: Requests.All) => AbortablePromise<Responses.All>;
        ById?: (request: Requests.ById) => AbortablePromise<Responses.ById>;
        ByIds?: (request: Requests.ByIds) => AbortablePromise<Responses.ByIds>;
        Delete?: (request: Requests.Delete) => AbortablePromise<Responses.Delete>;
        Search?: (request: Requests.Search) => AbortablePromise<Responses.Search>;
        Update?: (request: Requests.Update) => AbortablePromise<Responses.Update>;
    }
}
