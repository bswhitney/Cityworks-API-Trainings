import { Enums, ServiceEnums, PromiseTypes, ServiceTypes, Types as CoreTypes } from '../../../bundles/core';
import AbortablePromise = PromiseTypes.AbortablePromise;

export namespace ManholeInspectionServiceTypes { 
    export namespace Requests {
        export interface AddImage extends ServiceTypes.CoreRequestBase {
            AttachedBySid?: number;
            Comments?: string;
            DateTimeAttached?: Date;
            ImagePath?: string;
            InspectionId: number;
        }
        export interface AddObservation extends ServiceTypes.CoreRequestBase {
            Condition?: string;
            ConditionScore?: number;
            DistFromRim?: number;
            EstMhIandI?: number;
            InspectionId: number;
            LeakCategory?: string;
            LeakCatScore?: number;
            LeakType?: string;
            LeakTypeScore?: number;
            MhPart?: string;
            Position?: string;
            TestMethod?: string;
        }
        export interface AddPipeObservation extends ServiceTypes.CoreRequestBase {
            BypassPipe?: boolean;
            Diameter?: number;
            DropConnection?: boolean;
            EstPipeIandI?: number;
            FlowDepth?: number;
            GetGisData?: boolean;
            InOut?: Enums.PipeInOut;
            InspectionId: number;
            Material?: string;
            PipeCond?: string;
            PipeCondScore?: number;
            PipeDepth?: number;
            PipeDirection?: string;
            PipeElev?: number;
            PipeId?: string;
            PipeType?: string;
        }
        export interface ByEntityTypeIds extends ServiceTypes.CoreRequestBase {
            EntityType?: string;
            EntityUids?: string[];
        }
        export interface ById extends ServiceTypes.CoreRequestBase {
            InspectionId?: number;
        }
        export interface ByIds extends ServiceTypes.CoreRequestBase {
            InspectionIds?: number[];
        }
        export interface ByWorkOrderIds extends ServiceTypes.CoreRequestBase {
            WorkOrderIds?: string[];
        }
        export interface ByWorkOrders extends ServiceTypes.CoreRequestBase {
            WorkOrderSids?: number[];
        }
        export interface ChangeCustomFieldCategory extends ServiceTypes.CoreRequestBase {
            CategoryId: number;
            InspectionIds: number[];
        }
        export interface CloneInspection extends ServiceTypes.CoreRequestBase {
            InspectionId?: number;
        }
        export interface Create extends ServiceTypes.CoreRequestBase {
            AccessType?: string;
            BarrelDiam?: number;
            BenchMaterial?: string;
            ChannelMaterial?: string;
            CondRating?: number;
            ConeMaterial?: string;
            CustomFieldValues?: {[key: number]: string};
            Date1?: Date;
            Date2?: Date;
            Date3?: Date;
            Date4?: Date;
            Date5?: Date;
            Depth?: number;
            DepthOfDebris?: number;
            DepthOfFlow?: number;
            DepthOfSurchrg?: number;
            DistToHydrant?: number;
            FacilityId?: string;
            FeatureType?: string;
            FlowType?: string;
            FlowTypeScore?: number;
            ForemanRecomnd?: string;
            FrmMaterial?: string;
            GetGisData?: boolean;
            GroundCond?: string;
            GroundCondScore?: number;
            HydRating?: number;
            InspCustFieldCatId?: number;
            InspDate?: Date;
            InspectedBy?: string;
            InspectedBySid?: number;
            LidDiameter?: number;
            LidMaterial?: string;
            Location?: string;
            MapNumber?: string;
            MhLength?: number;
            MhMaterial?: string;
            MhWidth?: number;
            Num1?: number;
            Num2?: number;
            Num3?: number;
            Num4?: number;
            Num5?: number;
            ObservationSum?: string;
            Ponding?: string;
            PondingScore?: number;
            PrecipType?: string;
            PrecipTypeScore?: number;
            RepairsMade?: string;
            RingMaterial?: string;
            Spot?: string;
            SpotScore?: number;
            StepMaterial?: string;
            StructRating?: number;
            SubType?: string;
            SuperAprvlComnts?: string;
            SurfaceType?: string;
            Text1?: string;
            Text10?: string;
            Text2?: string;
            Text3?: string;
            Text4?: string;
            Text5?: string;
            Text6?: string;
            Text7?: string;
            Text8?: string;
            Text9?: string;
            TribArea?: number;
            UpdateMap?: boolean;
            VcsWKID?: number;
            WKID?: number;
            WKT?: string;
            WorkOrderId: string;
            WorkOrderSid: number;
            X?: number;
            Y?: number;
            Z?: number;
        }
        export interface EntityTypes extends ServiceTypes.CoreRequestBase {
        }
        export interface Images extends ServiceTypes.CoreRequestBase {
            InspectionId?: number;
        }
        export interface InspectedBy extends ServiceTypes.CoreRequestBase {
            DomainId?: number;
            InspectionIds?: number[];
        }
        export interface Move extends ServiceTypes.CoreRequestBase {
            InspectionId: number;
            VcsWKID?: number;
            WKID?: number;
            WKT?: string;
            X: number;
            Y: number;
            Z?: number;
        }
        export interface Observations extends ServiceTypes.CoreRequestBase {
            InspectionIds?: number[];
        }
        export interface ObservationsByIds extends ServiceTypes.CoreRequestBase {
            ObservationIds?: number[];
        }
        export interface PipeObservations extends ServiceTypes.CoreRequestBase {
            GetGisData?: boolean;
            InspectionIds?: number[];
        }
        export interface PipeObservationsByIds extends ServiceTypes.CoreRequestBase {
            GetGisData?: boolean;
            PipeObservationIds?: number[];
        }
        export interface Update extends ServiceTypes.CoreRequestBase {
            AccessType?: string;
            BarrelDiam?: number;
            BenchMaterial?: string;
            ChannelMaterial?: string;
            CondRating?: number;
            ConeMaterial?: string;
            CustomFieldValues?: {[key: number]: string};
            Date1?: Date;
            Date2?: Date;
            Date3?: Date;
            Date4?: Date;
            Date5?: Date;
            Depth?: number;
            DepthOfDebris?: number;
            DepthOfFlow?: number;
            DepthOfSurchrg?: number;
            DistToHydrant?: number;
            FacilityId?: string;
            FeatureType?: string;
            FlowType?: string;
            FlowTypeScore?: number;
            ForemanRecomnd?: string;
            FrmMaterial?: string;
            GetGisData?: boolean;
            GroundCond?: string;
            GroundCondScore?: number;
            HydRating?: number;
            InspCustFieldCatId?: number;
            InspDate?: Date;
            InspectedBySid?: number;
            InspectionId: number;
            LidDiameter?: number;
            LidMaterial?: string;
            Location?: string;
            MapNumber?: string;
            MhLength?: number;
            MhMaterial?: string;
            MhWidth?: number;
            Num1?: number;
            Num2?: number;
            Num3?: number;
            Num4?: number;
            Num5?: number;
            ObservationSum?: string;
            Ponding?: string;
            PondingScore?: number;
            PrecipType?: string;
            PrecipTypeScore?: number;
            RepairsMade?: string;
            RingMaterial?: string;
            Spot?: string;
            SpotScore?: number;
            StepMaterial?: string;
            StructRating?: number;
            SubType?: string;
            SuperAprvlComnts?: string;
            SurfaceType?: string;
            Text1?: string;
            Text10?: string;
            Text2?: string;
            Text3?: string;
            Text4?: string;
            Text5?: string;
            Text6?: string;
            Text7?: string;
            Text8?: string;
            Text9?: string;
            TribArea?: number;
            UpdateGis?: boolean;
            UpdateMap?: boolean;
            WorkOrderId?: string;
            WorkOrderSid?: number;
        }
        export interface UpdateObservation extends ServiceTypes.CoreRequestBase {
            Condition?: string;
            ConditionScore?: number;
            DistFromRim?: number;
            EstMhIandI?: number;
            LeakCategory?: string;
            LeakCatScore?: number;
            LeakType?: string;
            LeakTypeScore?: number;
            MhObservId: number;
            MhPart?: string;
            Position?: string;
            TestMethod?: string;
        }
        export interface UpdatePipeObservation extends ServiceTypes.CoreRequestBase {
            BypassPipe?: boolean;
            Diameter?: number;
            DropConnection?: boolean;
            EstPipeIandI?: number;
            FlowDepth?: number;
            GetGisData?: boolean;
            InOut?: Enums.PipeInOut;
            Material?: string;
            PipeCond?: string;
            PipeCondScore?: number;
            PipeDepth?: number;
            PipeDirection?: string;
            PipeElev?: number;
            PipeId?: string;
            PipeInMhId: number;
            PipeType?: string;
            UpdateGis?: boolean;
        }
    }
    export namespace Responses {
        export interface AddImage extends ServiceTypes.CoreResponseBase_<CoreTypes.SMhInspImg> {}
        export interface AddObservation extends ServiceTypes.CoreResponseBase_<CoreTypes.SMhiObserv> {}
        export interface AddPipeObservation extends ServiceTypes.CoreResponseBase_<CoreTypes.SPipeInManhole> {}
        export interface ByEntityTypeIds extends ServiceTypes.CoreResponseBase_<CoreTypes.ManholeInspBase[]> {}
        export interface ById extends ServiceTypes.CoreResponseBase_<CoreTypes.ManholeInspBase> {}
        export interface ByIds extends ServiceTypes.CoreResponseBase_<CoreTypes.ManholeInspBase[]> {}
        export interface ByWorkOrderIds extends ServiceTypes.CoreResponseBase_<CoreTypes.ManholeInspBase[]> {}
        export interface ByWorkOrders extends ServiceTypes.CoreResponseBase_<CoreTypes.ManholeInspBase[]> {}
        export interface ChangeCustomFieldCategory extends ServiceTypes.CoreResponseBase_<CoreTypes.ManholeInspBase[]> {}
        export interface CloneInspection extends ServiceTypes.CoreResponseBase_<CoreTypes.ManholeInsp> {}
        export interface Create extends ServiceTypes.CoreResponseBase_<CoreTypes.ManholeInspBase> {}
        export interface EntityTypes extends ServiceTypes.CoreResponseBase_<string[]> {}
        export interface Images extends ServiceTypes.CoreResponseBase_<CoreTypes.SMhInspImg[]> {}
        export interface InspectedBy extends ServiceTypes.CoreResponseBase_<CoreTypes.RelEmpToField[]> {}
        export interface Move extends ServiceTypes.CoreResponseBase_<CoreTypes.GISPoint> {}
        export interface Observations extends ServiceTypes.CoreResponseBase_<CoreTypes.SMhiObserv[]> {}
        export interface ObservationsByIds extends ServiceTypes.CoreResponseBase_<CoreTypes.SMhiObserv[]> {}
        export interface PipeObservations extends ServiceTypes.CoreResponseBase_<CoreTypes.SPipeInManhole[]> {}
        export interface PipeObservationsByIds extends ServiceTypes.CoreResponseBase_<CoreTypes.SPipeInManhole[]> {}
        export interface Update extends ServiceTypes.CoreResponseBase_<CoreTypes.ManholeInspBase> {}
        export interface UpdateObservation extends ServiceTypes.CoreResponseBase_<CoreTypes.SMhiObserv> {}
        export interface UpdatePipeObservation extends ServiceTypes.CoreResponseBase_<CoreTypes.SPipeInManhole> {}
    }
    export interface IManholeInspectionService {
        AddImage?: (request: Requests.AddImage) => AbortablePromise<Responses.AddImage>;
        AddObservation?: (request: Requests.AddObservation) => AbortablePromise<Responses.AddObservation>;
        AddPipeObservation?: (request: Requests.AddPipeObservation) => AbortablePromise<Responses.AddPipeObservation>;
        ByEntityTypeIds?: (request: Requests.ByEntityTypeIds) => AbortablePromise<Responses.ByEntityTypeIds>;
        ById?: (request: Requests.ById) => AbortablePromise<Responses.ById>;
        ByIds?: (request: Requests.ByIds) => AbortablePromise<Responses.ByIds>;
        ByWorkOrderIds?: (request: Requests.ByWorkOrderIds) => AbortablePromise<Responses.ByWorkOrderIds>;
        ByWorkOrders?: (request: Requests.ByWorkOrders) => AbortablePromise<Responses.ByWorkOrders>;
        ChangeCustomFieldCategory?: (request: Requests.ChangeCustomFieldCategory) => AbortablePromise<Responses.ChangeCustomFieldCategory>;
        CloneInspection?: (request: Requests.CloneInspection) => AbortablePromise<Responses.CloneInspection>;
        Create?: (request: Requests.Create) => AbortablePromise<Responses.Create>;
        EntityTypes?: (request: Requests.EntityTypes) => AbortablePromise<Responses.EntityTypes>;
        Images?: (request: Requests.Images) => AbortablePromise<Responses.Images>;
        InspectedBy?: (request: Requests.InspectedBy) => AbortablePromise<Responses.InspectedBy>;
        Move?: (request: Requests.Move) => AbortablePromise<Responses.Move>;
        Observations?: (request: Requests.Observations) => AbortablePromise<Responses.Observations>;
        ObservationsByIds?: (request: Requests.ObservationsByIds) => AbortablePromise<Responses.ObservationsByIds>;
        PipeObservations?: (request: Requests.PipeObservations) => AbortablePromise<Responses.PipeObservations>;
        PipeObservationsByIds?: (request: Requests.PipeObservationsByIds) => AbortablePromise<Responses.PipeObservationsByIds>;
        Update?: (request: Requests.Update) => AbortablePromise<Responses.Update>;
        UpdateObservation?: (request: Requests.UpdateObservation) => AbortablePromise<Responses.UpdateObservation>;
        UpdatePipeObservation?: (request: Requests.UpdatePipeObservation) => AbortablePromise<Responses.UpdatePipeObservation>;
    }
}
