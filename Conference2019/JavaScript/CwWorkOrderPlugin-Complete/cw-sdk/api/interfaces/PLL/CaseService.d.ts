import { Enums, ServiceEnums, PromiseTypes, ServiceTypes, Types as CoreTypes } from '../../../bundles/core';
import AbortablePromise = PromiseTypes.AbortablePromise;

export namespace CaseServiceTypes { 
    export namespace Requests {
        export interface Create extends ServiceTypes.CoreRequestBase {
            AcceptedBy?: number;
            CaseName?: string;
            CaseNumber?: string;
            CaseTypeId: number;
            DateAccepted?: Date;
            Location?: string;
            ProjectCode?: string;
            SubTypeId?: number;
            X?: number;
            Y?: number;
        }
        export interface CreateChild extends ServiceTypes.CoreRequestBase {
            AcceptedBy?: number;
            BusCaseId: number;
            CaseName?: string;
            CaseNumber?: string;
            CX?: number;
            CY?: number;
            DateAccepted?: Date;
            Location?: string;
            NoOfCases?: number;
            ParentCaObjectId: number;
            ProjectCode?: string;
        }
    }
    export namespace Responses {
        export interface Create extends ServiceTypes.CoreResponseBase_obsolete_<CoreTypes.CaObjectItem> {}
        export interface CreateChild extends ServiceTypes.CoreResponseBase_obsolete_<CoreTypes.CaObjectItem> {}
    }
    export interface ICaseService {
        Create?: (request: Requests.Create) => AbortablePromise<Responses.Create>;
        CreateChild?: (request: Requests.CreateChild) => AbortablePromise<Responses.CreateChild>;
    }
}
