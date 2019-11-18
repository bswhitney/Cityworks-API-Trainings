import { Enums, ServiceEnums, PromiseTypes, ServiceTypes, Types as CoreTypes } from '../../../bundles/core';
import AbortablePromise = PromiseTypes.AbortablePromise;

export namespace CustomerAccountServiceTypes { 
    export namespace Requests {
        export interface Add extends ServiceTypes.CoreRequestBase {
            AcctNum: string;
            AcctType: string;
            AptNum?: string;
            CellPhone?: string;
            Comments?: string;
            CustAddress?: string;
            CustCity?: string;
            CustDistrict?: string;
            CustState?: string;
            CustZip?: string;
            Email?: string;
            Fax?: string;
            FirstName?: string;
            HomePhone?: string;
            LastName?: string;
            MiddleInitial?: string;
            OtherPhone?: string;
            Title?: string;
            WorkPhone?: string;
        }
        export interface ByAccountNumbers extends ServiceTypes.CoreRequestBase {
            AccountNumbers?: string[];
        }
        export interface ByIds extends ServiceTypes.CoreRequestBase {
            AcctSids?: number[];
        }
        export interface Delete extends ServiceTypes.CoreRequestBase {
            AcctSids?: number[];
        }
        export interface Import extends ServiceTypes.CoreRequestBase {
            CustomerAccounts?: CoreTypes.CustomerAcct[];
            DeleteExisting?: boolean;
        }
        export interface Search extends ServiceTypes.CoreRequestBase {
            AcctNum?: string[];
            AcctSid?: number[];
            AcctType?: string[];
            AptNum?: string[];
            CellPhone?: string[];
            CustAddress?: string[];
            CustCity?: string[];
            CustDistrict?: string[];
            CustState?: string[];
            CustZip?: string[];
            Email?: string[];
            Fax?: string[];
            FirstName?: string[];
            HomePhone?: string[];
            LastName?: string[];
            MaxResults?: number;
            MiddleInitial?: string[];
            OtherPhone?: string[];
            Title?: string[];
            WorkPhone?: string[];
        }
        export interface Update extends ServiceTypes.CoreRequestBase {
            AcctNum?: string;
            AcctSids: number[];
            AcctType?: string;
            AptNum?: string;
            CellPhone?: string;
            Comments?: string;
            CustAddress?: string;
            CustCity?: string;
            CustDistrict?: string;
            CustState?: string;
            CustZip?: string;
            Email?: string;
            Fax?: string;
            FirstName?: string;
            HomePhone?: string;
            LastName?: string;
            MiddleInitial?: string;
            OtherPhone?: string;
            Title?: string;
            WorkPhone?: string;
        }
    }
    export namespace Responses {
        export interface Add extends ServiceTypes.CoreResponseBase_<CoreTypes.CustomerAcct> {}
        export interface ByAccountNumbers extends ServiceTypes.CoreResponseBase_<CoreTypes.CustomerAcct[]> {}
        export interface ByIds extends ServiceTypes.CoreResponseBase_<CoreTypes.CustomerAcct[]> {}
        export interface Delete extends ServiceTypes.CoreResponseBase_<{[key: number]: boolean}> {}
        export interface Import extends ServiceTypes.CoreResponseBase_<number> {}
        export interface Search extends ServiceTypes.CoreResponseBase_<number[]> {}
        export interface Update extends ServiceTypes.CoreResponseBase_<CoreTypes.CustomerAcct[]> {}
    }
    export interface ICustomerAccountService {
        Add?: (request: Requests.Add) => AbortablePromise<Responses.Add>;
        ByAccountNumbers?: (request: Requests.ByAccountNumbers) => AbortablePromise<Responses.ByAccountNumbers>;
        ByIds?: (request: Requests.ByIds) => AbortablePromise<Responses.ByIds>;
        Delete?: (request: Requests.Delete) => AbortablePromise<Responses.Delete>;
        Import?: (request: Requests.Import) => AbortablePromise<Responses.Import>;
        Search?: (request: Requests.Search) => AbortablePromise<Responses.Search>;
        Update?: (request: Requests.Update) => AbortablePromise<Responses.Update>;
    }
}
