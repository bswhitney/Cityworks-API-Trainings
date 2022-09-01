import { Enums, ServiceEnums, PromiseTypes, ServiceTypes, Types as CoreTypes } from '../../../bundles/core';
import AbortablePromise = PromiseTypes.AbortablePromise;

export namespace GISServiceServiceTypes { 
    export namespace Requests {
        export interface AddGISServiceDefinition extends ServiceTypes.CoreRequestBase {
            DashboardUse?: boolean;
            DomainId?: number;
            Name: string;
            ServiceEndPointIds?: number[];
        }
        export interface AddGISServiceEndPointSecurity extends ServiceTypes.CoreRequestBase {
            AuthorizationUrl?: string;
            ClientId?: string;
            ClientSecret?: string;
            CreateServiceDefinition?: boolean;
            DomainId?: number;
            ExpandWebMap?: boolean;
            FileName?: string;
            FileSize?: number;
            IsPermanent?: boolean;
            Password?: string;
            SecurityType?: number;
            Service: string;
            ServiceDefinitionName?: string;
            ServiceName: string;
            ServiceType?: number;
            SharingUrl?: string;
            Timeout?: number;
            TokenUrl?: string;
            UserId?: string;
        }
        export interface CloneGISServiceDefinition extends ServiceTypes.CoreRequestBase {
            DefinitionId: number;
            Name?: string;
        }
        export interface DeleteGISServiceDefinitions extends ServiceTypes.CoreRequestBase {
            DefinitionIds: number[];
        }
        export interface DeleteGISServiceEndPointSecurities extends ServiceTypes.CoreRequestBase {
            ServiceIds: number[];
        }
        export interface GISServiceDefinitions extends ServiceTypes.CoreRequestBase {
            DashboardUse?: boolean;
            DefinitionId?: number;
            DefinitionIds?: number[];
            DomainId?: number;
            EmployeeSid?: number;
            GroupIds?: number[];
            Names?: string[];
        }
        export interface UpdateGISServiceEndPointSecurity extends ServiceTypes.CoreRequestBase {
            AuthorizationUrl?: string;
            ClientId?: string;
            ClientSecret?: string;
            DomainId?: number;
            ExpandWebMap?: boolean;
            FileName?: string;
            FileSize?: number;
            IsPermanent?: boolean;
            Password?: string;
            SecurityType?: number;
            Service?: string;
            ServiceId: number;
            ServiceName?: string;
            ServiceType?: number;
            SharingUrl?: string;
            Timeout?: number;
            TokenUrl?: string;
            UserId?: string;
        }
        export interface ValidateServiceSecurity extends ServiceTypes.CoreRequestBase {
            SecurityIds: number[];
        }
    }
    export namespace Responses {
        export interface AddGISServiceDefinition extends ServiceTypes.CoreResponseBase_<CoreTypes.GISServiceDefinitionBase> {}
        export interface AddGISServiceEndPointSecurity extends ServiceTypes.CoreResponseBase_<CoreTypes.GISServiceEndPointSecurity> {}
        export interface CloneGISServiceDefinition extends ServiceTypes.CoreResponseBase_<CoreTypes.GISServiceDefinitionBase> {}
        export interface DeleteGISServiceDefinitions extends ServiceTypes.CoreResponseBase_<{[key: number]: boolean}> {}
        export interface DeleteGISServiceEndPointSecurities extends ServiceTypes.CoreResponseBase_<{[key: number]: boolean}> {}
        export interface GISServiceDefinitions extends ServiceTypes.CoreResponseBase_<CoreTypes.GISServiceDefinitionBase[]> {}
        export interface UpdateGISServiceEndPointSecurity extends ServiceTypes.CoreResponseBase_<CoreTypes.GISServiceEndPointSecurity> {}
        export interface ValidateServiceSecurity extends ServiceTypes.CoreResponseBase_<{[key: number]: boolean}> {}
    }
    export interface IGISServiceService {
        AddGISServiceDefinition?: (request: Requests.AddGISServiceDefinition) => AbortablePromise<Responses.AddGISServiceDefinition>;
        AddGISServiceEndPointSecurity?: (request: Requests.AddGISServiceEndPointSecurity) => AbortablePromise<Responses.AddGISServiceEndPointSecurity>;
        CloneGISServiceDefinition?: (request: Requests.CloneGISServiceDefinition) => AbortablePromise<Responses.CloneGISServiceDefinition>;
        DeleteGISServiceDefinitions?: (request: Requests.DeleteGISServiceDefinitions) => AbortablePromise<Responses.DeleteGISServiceDefinitions>;
        DeleteGISServiceEndPointSecurities?: (request: Requests.DeleteGISServiceEndPointSecurities) => AbortablePromise<Responses.DeleteGISServiceEndPointSecurities>;
        GISServiceDefinitions?: (request: Requests.GISServiceDefinitions) => AbortablePromise<Responses.GISServiceDefinitions>;
        UpdateGISServiceEndPointSecurity?: (request: Requests.UpdateGISServiceEndPointSecurity) => AbortablePromise<Responses.UpdateGISServiceEndPointSecurity>;
        ValidateServiceSecurity?: (request: Requests.ValidateServiceSecurity) => AbortablePromise<Responses.ValidateServiceSecurity>;
    }
}
