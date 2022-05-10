import { Enums, ServiceEnums, PromiseTypes, ServiceTypes, Types as CoreTypes } from '../../../bundles/core';
import AbortablePromise = PromiseTypes.AbortablePromise;

export namespace CrewServiceTypes { 
    export namespace Requests {
        export interface ByEmployee extends ServiceTypes.CoreRequestBase {
            DomainId?: number;
            EmployeeSid?: number;
        }
        export interface ByIds extends ServiceTypes.CoreRequestBase {
            CrewIds?: number[];
        }
        export interface Employees extends ServiceTypes.CoreRequestBase {
            CrewIds: number[];
            IncludeInactive?: boolean;
        }
        export interface Equipment extends ServiceTypes.CoreRequestBase {
            CrewIds: number[];
            IncludeInactive?: boolean;
        }
        export interface Material extends ServiceTypes.CoreRequestBase {
            CrewIds: number[];
            IncludeInactive?: boolean;
        }
    }
    export namespace Responses {
        export interface ByEmployee extends ServiceTypes.CoreResponseBase_<number[]> {}
        export interface ByIds extends ServiceTypes.CoreResponseBase_<CoreTypes.CrewBase[]> {}
        export interface Employees extends ServiceTypes.CoreResponseBase_<{[key: number]: number[]}> {}
        export interface Equipment extends ServiceTypes.CoreResponseBase_<{[key: number]: number[]}> {}
        export interface Material extends ServiceTypes.CoreResponseBase_<{[key: number]: number[]}> {}
    }
    export interface ICrewService {
        ByEmployee?: (request: Requests.ByEmployee) => AbortablePromise<Responses.ByEmployee>;
        ByIds?: (request: Requests.ByIds) => AbortablePromise<Responses.ByIds>;
        Employees?: (request: Requests.Employees) => AbortablePromise<Responses.Employees>;
        Equipment?: (request: Requests.Equipment) => AbortablePromise<Responses.Equipment>;
        Material?: (request: Requests.Material) => AbortablePromise<Responses.Material>;
    }
}
