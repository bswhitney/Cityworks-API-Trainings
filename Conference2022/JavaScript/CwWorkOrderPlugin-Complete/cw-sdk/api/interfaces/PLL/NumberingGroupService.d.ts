import { Enums, ServiceEnums, PromiseTypes, ServiceTypes, Types as CoreTypes } from '../../../bundles/core';
import AbortablePromise = PromiseTypes.AbortablePromise;

export namespace NumberingGroupServiceTypes { 
    export namespace Requests {
        export interface Add extends ServiceTypes.CoreRequestBase {
            DateExpired?: Date;
            ExpiredFlag?: string;
            IncrementBy?: number;
            LastNum?: number;
            LastNumDate?: Date;
            MaskedPaddedLength?: number;
            NumberingGroupCode?: string;
            NumberingGroupDesc?: string;
            OrgId?: number;
            PrefixYyyymmdd?: string;
            ResetYearEndFlag?: string;
            Separator?: string;
            StartWith?: number;
        }
        export interface Update extends ServiceTypes.CoreRequestBase {
            DateExpired?: Date;
            ExpiredFlag?: string;
            IncrementBy?: number;
            LastNum?: number;
            LastNumDate?: Date;
            MaskedPaddedLength?: number;
            NumberingGroupCode?: string;
            NumberingGroupDesc?: string;
            NumberingGroupId?: number;
            OrgId?: number;
            PrefixYyyymmdd?: string;
            ResetYearEndFlag?: string;
            Separator?: string;
            StartWith?: number;
        }
    }
    export namespace Responses {
        export interface Add extends ServiceTypes.CoreResponseBase_<CoreTypes.NumberingGroupItem> {}
        export interface Update extends ServiceTypes.CoreResponseBase_<CoreTypes.NumberingGroupItem> {}
    }
    export interface INumberingGroupService {
        Add?: (request: Requests.Add) => AbortablePromise<Responses.Add>;
        Update?: (request: Requests.Update) => AbortablePromise<Responses.Update>;
    }
}
