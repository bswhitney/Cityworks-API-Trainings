import { Enums, ServiceEnums, PromiseTypes, ServiceTypes, Types as CoreTypes } from '../../../bundles/core';
import AbortablePromise = PromiseTypes.AbortablePromise;

export namespace CaseTaskServiceTypes { 
    export namespace Requests {
        export interface Add extends ServiceTypes.CoreRequestBase {
            CaObjectId: number;
            DisciplineId?: number;
            EndPoint: number;
            HearingTypeId?: number;
            InsertBeforeStartPoint?: boolean;
            ResponsibleDeptId?: number;
            ResponsibleDivId?: number;
            ResponsibleUserId?: number;
            StartPoint: number;
            TargetEndDate?: Date;
            TaskId: number;
            TaskSequence?: number;
        }
        export interface ByCaObjectId extends ServiceTypes.CoreRequestBase {
            CaObjectId: number;
            CheckRelatedItems?: boolean;
        }
        export interface ByIds extends ServiceTypes.CoreRequestBase {
            CaTaskIds?: number[];
            CheckRelatedItems?: boolean;
        }
        export interface Delete extends ServiceTypes.CoreRequestBase {
            CaTaskId: number;
        }
        export interface DeleteByCaObjectId extends ServiceTypes.CoreRequestBase {
            CaObjectId: number;
        }
        export interface Search extends ServiceTypes.CoreRequestBase {
            ResponsibleUserId?: number;
            TaskAvailable?: boolean;
            TaskComplete?: boolean;
            TaskType?: string;
        }
        export interface SetResult extends ServiceTypes.CoreRequestBase {
            CaTaskId: number;
            ResultCode: string;
            TaskCompleteDate?: Date;
            TaskCompletedBy?: number;
        }
        export interface Update extends ServiceTypes.CoreRequestBase {
            ActualEndDate?: Date;
            ActualStartDate?: Date;
            AutoSchduleInspFlg?: string;
            CalWeekDayFlag?: string;
            CaTaskId?: number;
            DateExpired?: Date;
            Db2BAdjustedFrom?: number;
            DisciplineId?: number;
            EndPoint?: number;
            ExpiredFlag?: string;
            HearingTypeId?: number;
            IsInsertBetweenLevel?: boolean;
            LoginId?: string;
            ResponsibleDeptId?: number;
            ResponsibleDivId?: number;
            ResponsibleUserId?: number;
            ResultCode?: string;
            StartPoint?: number;
            TargetEndDate?: Date;
            TargetStartDate?: Date;
            TaskAvailableDate?: Date;
            TaskAvailableFlag?: string;
            TaskCompleteDate?: Date;
            TaskCompletedBy?: number;
            TaskCompleteFlag?: string;
            TaskGeoFlag?: string;
            TaskSequence?: number;
        }
    }
    export namespace Responses {
        export interface Add extends ServiceTypes.CoreResponseBase_<CoreTypes.CaTaskItemBase> {}
        export interface ByCaObjectId extends ServiceTypes.CoreResponseBase_<CoreTypes.CaTaskItemBase[]> {}
        export interface ByIds extends ServiceTypes.CoreResponseBase_<CoreTypes.CaTaskItemBase[]> {}
        export interface Delete extends ServiceTypes.CoreResponseBase_<CoreTypes.CaTaskItemBase> {}
        export interface DeleteByCaObjectId extends ServiceTypes.CoreResponseBase_<number> {}
        export interface Search extends ServiceTypes.CoreResponseBase_<number[]> {}
        export interface SetResult extends ServiceTypes.CoreResponseBase_<CoreTypes.CaTaskItemBase> {}
        export interface Update extends ServiceTypes.CoreResponseBase_<CoreTypes.CaTaskItemBase> {}
    }
    export interface ICaseTaskService {
        Add?: (request: Requests.Add) => AbortablePromise<Responses.Add>;
        ByCaObjectId?: (request: Requests.ByCaObjectId) => AbortablePromise<Responses.ByCaObjectId>;
        ByIds?: (request: Requests.ByIds) => AbortablePromise<Responses.ByIds>;
        Delete?: (request: Requests.Delete) => AbortablePromise<Responses.Delete>;
        DeleteByCaObjectId?: (request: Requests.DeleteByCaObjectId) => AbortablePromise<Responses.DeleteByCaObjectId>;
        Search?: (request: Requests.Search) => AbortablePromise<Responses.Search>;
        SetResult?: (request: Requests.SetResult) => AbortablePromise<Responses.SetResult>;
        Update?: (request: Requests.Update) => AbortablePromise<Responses.Update>;
    }
}
