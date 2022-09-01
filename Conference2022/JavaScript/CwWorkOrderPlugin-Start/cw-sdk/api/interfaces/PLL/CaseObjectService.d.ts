import { Enums, ServiceEnums, PromiseTypes, ServiceTypes, Types as CoreTypes } from '../../../bundles/core';
import AbortablePromise = PromiseTypes.AbortablePromise;

export namespace CaseObjectServiceTypes { 
    export namespace Requests {
        export interface ByIds extends ServiceTypes.CoreRequestBase {
            CaObjectIds?: number[];
        }
        export interface CreateCaseFromServiceRequest extends ServiceTypes.CoreRequestBase {
            AcceptedBy?: number;
            CaseName?: string;
            CaseNumber?: string;
            CaseTypeId: number;
            DateAccepted?: Date;
            Entities?: {[key: string]: string[]};
            Facility_Id?: string;
            Level_Id?: string;
            Location?: string;
            ProjectCode?: string;
            ProjectDesc?: string;
            ServiceRequestId: number;
            SubTypeId?: number;
            X?: number;
            Y?: number;
            Z?: number;
        }
        export interface DeleteCase extends ServiceTypes.CoreRequestBase {
            CaObjectId: number;
        }
        export interface Move extends ServiceTypes.CoreRequestBase {
            caObjectId: number;
            VcsWKID?: number;
            WKID?: number;
            WKT?: string;
            X: number;
            Y: number;
            Z?: number;
        }
        export interface Search extends ServiceTypes.CoreRequestBase {
            BusinessName?: string;
            CaObjectId?: number;
            CaseName?: string;
            CaseNumber?: string;
            CaseStatus?: string;
            CaseStatusId?: number;
            CaseType?: string;
            CaseTypeDesc?: string;
            CaseTypeId?: number;
            DateEnteredFrom?: Date;
            DateEnteredTo?: Date;
            Facility_Id?: string;
            IssuedBy?: number;
            IssuedFlag?: string;
            Level_Id?: string;
            Location?: string;
            ProjectCode?: string;
            ProjectDesc?: string;
            ProjectId?: number;
            StatusCode?: string;
            SubType?: string;
            SubTypeDesc?: string;
            SubTypeId?: number;
        }
    }
    export namespace Responses {
        export interface ByIds extends ServiceTypes.CoreResponseBase_obsolete_<CoreTypes.CaObjectItemBase[]> {}
        export interface CreateCaseFromServiceRequest extends ServiceTypes.CoreResponseBase_obsolete_<CoreTypes.CaObjectItem> {}
        export interface DeleteCase extends ServiceTypes.CoreResponseBase_obsolete_<number> {}
        export interface Move extends ServiceTypes.CoreResponseBase_<CoreTypes.GISPoint> {}
        export interface Search extends ServiceTypes.CoreResponseBase_obsolete_<number[]> {}
    }
    export interface ICaseObjectService {
        ByIds?: (request: Requests.ByIds) => AbortablePromise<Responses.ByIds>;
        CreateCaseFromServiceRequest?: (request: Requests.CreateCaseFromServiceRequest) => AbortablePromise<Responses.CreateCaseFromServiceRequest>;
        DeleteCase?: (request: Requests.DeleteCase) => AbortablePromise<Responses.DeleteCase>;
        Move?: (request: Requests.Move) => AbortablePromise<Responses.Move>;
        Search?: (request: Requests.Search) => AbortablePromise<Responses.Search>;
    }
}
