import { Enums, ServiceEnums, PromiseTypes, ServiceTypes, Types as CoreTypes } from '../../../bundles/core';
import AbortablePromise = PromiseTypes.AbortablePromise;

export namespace CodesServiceTypes { 
    export namespace Requests {
        export interface All extends ServiceTypes.CoreRequestBase {
        }
        export interface AllCCTVCodeDescScore extends ServiceTypes.CoreRequestBase {
        }
        export interface AllDescScore extends ServiceTypes.CoreRequestBase {
        }
        export interface ByCodeType extends ServiceTypes.CoreRequestBase {
            CodeTypes?: string[];
        }
        export interface Export extends ServiceTypes.CoreRequestBase {
            CodeTypes?: string[];
        }
        export interface ExportCCTVCodeDescScore extends ServiceTypes.CoreRequestBase {
        }
        export interface ExportDescScore extends ServiceTypes.CoreRequestBase {
        }
        export interface Import extends ServiceTypes.CoreRequestBase {
            Codes?: CoreTypes.CodeDesc[];
            DeleteExisting?: boolean;
        }
        export interface ImportCCTVCodeDescScore extends ServiceTypes.CoreRequestBase {
            CodeDescScores?: CoreTypes.CodeDescScore[];
            DeleteExisting?: boolean;
        }
        export interface ImportDescScore extends ServiceTypes.CoreRequestBase {
            DeleteExisting?: boolean;
            DescScores?: CoreTypes.DescScore[];
        }
    }
    export namespace Responses {
        export interface All extends ServiceTypes.CoreResponseBase_<CoreTypes.CodeDesc[]> {}
        export interface AllCCTVCodeDescScore extends ServiceTypes.CoreResponseBase_<CoreTypes.CodeDescScore[]> {}
        export interface AllDescScore extends ServiceTypes.CoreResponseBase_<CoreTypes.DescScore[]> {}
        export interface ByCodeType extends ServiceTypes.CoreResponseBase_<{[key: string]: CoreTypes.CodeDesc[]}> {}
        export interface Export extends ServiceTypes.CoreResponseBase_<{[key: string]: Object}[]> {}
        export interface Import extends ServiceTypes.CoreResponseBase_<boolean> {}
        export interface ImportCCTVCodeDescScore extends ServiceTypes.CoreResponseBase_<boolean> {}
        export interface ImportDescScore extends ServiceTypes.CoreResponseBase_<boolean> {}
    }
    export interface ICodesService {
        All?: (request: Requests.All) => AbortablePromise<Responses.All>;
        AllCCTVCodeDescScore?: (request: Requests.AllCCTVCodeDescScore) => AbortablePromise<Responses.AllCCTVCodeDescScore>;
        AllDescScore?: (request: Requests.AllDescScore) => AbortablePromise<Responses.AllDescScore>;
        ByCodeType?: (request: Requests.ByCodeType) => AbortablePromise<Responses.ByCodeType>;
        Export?: (request: Requests.Export) => AbortablePromise<Responses.Export>;
        ExportCCTVCodeDescScore?: (request: Requests.ExportCCTVCodeDescScore) => AbortablePromise<Responses.Export>;
        ExportDescScore?: (request: Requests.ExportDescScore) => AbortablePromise<Responses.Export>;
        Import?: (request: Requests.Import) => AbortablePromise<Responses.Import>;
        ImportCCTVCodeDescScore?: (request: Requests.ImportCCTVCodeDescScore) => AbortablePromise<Responses.ImportCCTVCodeDescScore>;
        ImportDescScore?: (request: Requests.ImportDescScore) => AbortablePromise<Responses.ImportDescScore>;
    }
}
