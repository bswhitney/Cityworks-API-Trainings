import { Enums, ServiceEnums, PromiseTypes, ServiceTypes, Types as CoreTypes } from '../../../bundles/core';
import AbortablePromise = PromiseTypes.AbortablePromise;

export namespace CustomerCallServiceTypes { 
    export namespace Requests {
        export interface AddToRequest extends ServiceTypes.CoreRequestBase {
            AcctNum?: string;
            Answers?: CoreTypes.ServiceRequestAnswer[];
            AptNum?: string;
            CallerType?: string;
            Ccx?: number;
            Ccy?: number;
            Ccz?: number;
            CellPhone?: string;
            Comments?: string;
            CustAddress?: string;
            CustAddType?: string;
            CustCallback?: boolean;
            CustCity?: string;
            CustContact?: boolean;
            CustDistrict?: string;
            CustState?: string;
            CustZip?: string;
            DateTimeCall?: Date;
            DateTimeCallback?: Date;
            DateTimeContact?: Date;
            Email?: string;
            EmployeeSid?: number;
            Fax?: string;
            FirstName?: string;
            HomePhone?: string;
            IsFollowUpCall?: boolean;
            IsResident?: boolean;
            LastName?: string;
            MiddleInitial?: string;
            OtherPhone?: string;
            ProbDetails?: string;
            RequestId: number;
            Text1?: string;
            Text2?: string;
            Text3?: string;
            Text4?: string;
            Text5?: string;
            Title?: string;
            WorkPhone?: string;
        }
        export interface ByIncidentNum extends ServiceTypes.CoreRequestBase {
            IncidentNum: number;
        }
        export interface ByRequestId extends ServiceTypes.CoreRequestBase {
            RequestId: number;
        }
        export interface ByRequestIds extends ServiceTypes.CoreRequestBase {
            RequestIds: number[];
        }
        export interface CallerQuestions extends ServiceTypes.CoreRequestBase {
            IncidentNums: number[];
        }
        export interface CallerQuestionsByRequestIds extends ServiceTypes.CoreRequestBase {
            RequestIds: number[];
        }
        export interface Delete extends ServiceTypes.CoreRequestBase {
            IncidentNum: number;
        }
        export interface Move extends ServiceTypes.CoreRequestBase {
            IncidentNum: number;
            VcsWKID?: number;
            WKID?: number;
            WKT?: string;
            X: number;
            Y: number;
            Z?: number;
        }
        export interface MoveToRequest extends ServiceTypes.CoreRequestBase {
            FromRequestId: number;
            IncidentNums: number[];
            ToRequestId: number;
        }
        export interface Update extends ServiceTypes.CoreRequestBase {
            AcctNum?: string;
            Answers?: CoreTypes.ServiceRequestAnswer[];
            AptNum?: string;
            CallerType?: string;
            Ccx?: number;
            Ccy?: number;
            Ccz?: number;
            CellPhone?: string;
            Comments?: string;
            CustAddress?: string;
            CustAddType?: string;
            CustCallback?: boolean;
            CustCity?: string;
            CustContact?: boolean;
            CustDistrict?: string;
            CustState?: string;
            CustZip?: string;
            DateTimeCall?: Date;
            DateTimeCallback?: Date;
            DateTimeContact?: Date;
            Email?: string;
            EmployeeSid?: number;
            Fax?: string;
            FirstName?: string;
            HomePhone?: string;
            IncidentNum: number;
            IsFollowUpCall?: boolean;
            IsResident?: boolean;
            LastName?: string;
            MiddleInitial?: string;
            OtherPhone?: string;
            ProbDetails?: string;
            RequestId?: number;
            Text1?: string;
            Text2?: string;
            Text3?: string;
            Text4?: string;
            Text5?: string;
            Title?: string;
            WorkPhone?: string;
        }
    }
    export namespace Responses {
        export interface AddToRequest extends ServiceTypes.CoreResponseBase_<CoreTypes.CustomerCallBase> {}
        export interface ByIncidentNum extends ServiceTypes.CoreResponseBase_<CoreTypes.CustomerCallBase> {}
        export interface ByRequestId extends ServiceTypes.CoreResponseBase_<CoreTypes.CustomerCallBase[]> {}
        export interface ByRequestIds extends ServiceTypes.CoreResponseBase_<CoreTypes.CustomerCallBase[]> {}
        export interface CallerQuestions extends ServiceTypes.CoreResponseBase_<CoreTypes.CustCallQuestionBase[]> {}
        export interface CallerQuestionsByRequestIds extends ServiceTypes.CoreResponseBase_<{[key: number]: CoreTypes.CustCallQuestionBase[]}> {}
        export interface Delete extends ServiceTypes.CoreResponseBase {}
        export interface Move extends ServiceTypes.CoreResponseBase_<CoreTypes.GISPoint> {}
        export interface MoveToRequest extends ServiceTypes.CoreResponseBase {}
        export interface Update extends ServiceTypes.CoreResponseBase_<CoreTypes.CustomerCallBase> {}
    }
    export interface ICustomerCallService {
        AddToRequest?: (request: Requests.AddToRequest) => AbortablePromise<Responses.AddToRequest>;
        ByIncidentNum?: (request: Requests.ByIncidentNum) => AbortablePromise<Responses.ByIncidentNum>;
        ByRequestId?: (request: Requests.ByRequestId) => AbortablePromise<Responses.ByRequestId>;
        ByRequestIds?: (request: Requests.ByRequestIds) => AbortablePromise<Responses.ByRequestIds>;
        CallerQuestions?: (request: Requests.CallerQuestions) => AbortablePromise<Responses.CallerQuestions>;
        CallerQuestionsByRequestIds?: (request: Requests.CallerQuestionsByRequestIds) => AbortablePromise<Responses.CallerQuestionsByRequestIds>;
        Delete?: (request: Requests.Delete) => AbortablePromise<Responses.Delete>;
        Move?: (request: Requests.Move) => AbortablePromise<Responses.Move>;
        MoveToRequest?: (request: Requests.MoveToRequest) => AbortablePromise<Responses.MoveToRequest>;
        Update?: (request: Requests.Update) => AbortablePromise<Responses.Update>;
    }
}
