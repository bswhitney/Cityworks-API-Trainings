import { Enums, ServiceEnums, PromiseTypes, ServiceTypes, Types as CoreTypes } from '../../../bundles/core';
import AbortablePromise = PromiseTypes.AbortablePromise;

export namespace MaterialServiceTypes { 
    export namespace Requests {
        export interface All extends ServiceTypes.CoreRequestBase {
            ViewableOnly?: boolean;
        }
        export interface ById extends ServiceTypes.CoreRequestBase {
            MaterialSid: number;
        }
        export interface ByIds extends ServiceTypes.CoreRequestBase {
            MaterialSids?: number[];
        }
        export interface ByParent extends ServiceTypes.CoreRequestBase {
            DisplayTextDelimeter?: string;
            DisplayTextMode?: string;
            DomainId?: number;
            IncludeEmptyNodes?: boolean;
            IncludeNotViewable?: boolean;
            NodeSid: number;
            RecursiveSearch?: boolean;
        }
        export interface ByStoreroom extends ServiceTypes.CoreRequestBase {
            Storeroom: string;
        }
        export interface ByStoreroomAndId extends ServiceTypes.CoreRequestBase {
            MaterialSid: number;
            Storeroom: string;
        }
        export interface Keywords extends ServiceTypes.CoreRequestBase {
            MaterialSids?: number[];
        }
        export interface MaterialBom extends ServiceTypes.CoreRequestBase {
            MaterialSid: number;
            Storeroom?: string;
        }
        export interface MaterialCategories extends ServiceTypes.CoreRequestBase {
        }
        export interface MaterialNodes extends ServiceTypes.CoreRequestBase {
            DisplayTextDelimeter?: string;
            DisplayTextMode?: string;
            DomainId: number;
            IncludeNotViewable?: boolean;
        }
        export interface Search extends ServiceTypes.CoreRequestBase {
            AuditInterval?: string[];
            CatClass?: number[];
            Category?: string[];
            CostType?: number[];
            CUCategory?: string[];
            DefaultImgPath?: string[];
            Description?: string[];
            Detail?: string[];
            GdbSubtype?: string[];
            JustificationRequired?: boolean;
            Manufacturer?: string[];
            MaterialSid?: number[];
            MaterialUid?: string[];
            MaximumExpirationDate?: Date;
            MaximumMaterialSid?: number;
            MaximumMinQuantity?: number;
            MaximumUnitCost?: number;
            MinimumExpirationDate?: Date;
            MinimumMaterialSid?: number;
            MinimumMinQuantity?: number;
            MinimumUnitCost?: number;
            Model?: string[];
            PartNumber?: string[];
            Splittable?: boolean;
            Supplier?: string[];
            UnitOfMeasure?: string[];
            Viewable?: boolean;
        }
    }
    export namespace Responses {
        export interface All extends ServiceTypes.CoreResponseBase_obsolete_<CoreTypes.MaterialBase[]> {}
        export interface ById extends ServiceTypes.CoreResponseBase_obsolete_<CoreTypes.MaterialBase> {}
        export interface ByIds extends ServiceTypes.CoreResponseBase_obsolete_<CoreTypes.MaterialBase[]> {}
        export interface ByParent extends ServiceTypes.CoreResponseBase_obsolete_<CoreTypes.MaterialNode[]> {}
        export interface ByStoreroom extends ServiceTypes.CoreResponseBase_obsolete_<CoreTypes.MaterialBase[]> {}
        export interface ByStoreroomAndId extends ServiceTypes.CoreResponseBase_obsolete_<CoreTypes.MaterialBase[]> {}
        export interface Keywords extends ServiceTypes.CoreResponseBase_<CoreTypes.MaterialKeyword[]> {}
        export interface MaterialBom extends ServiceTypes.CoreResponseBase_obsolete_<CoreTypes.AssemblyMaterialDetail[]> {}
        export interface MaterialCategories extends ServiceTypes.CoreResponseBase_obsolete_<CoreTypes.CodeDesc[]> {}
        export interface MaterialNodes extends ServiceTypes.CoreResponseBase_obsolete_<CoreTypes.MaterialNode[]> {}
        export interface Search extends ServiceTypes.CoreResponseBase_obsolete_<CoreTypes.MaterialBase[]> {}
    }
    export interface IMaterialService {
        All?: (request: Requests.All) => AbortablePromise<Responses.All>;
        ById?: (request: Requests.ById) => AbortablePromise<Responses.ById>;
        ByIds?: (request: Requests.ByIds) => AbortablePromise<Responses.ByIds>;
        ByParent?: (request: Requests.ByParent) => AbortablePromise<Responses.ByParent>;
        ByStoreroom?: (request: Requests.ByStoreroom) => AbortablePromise<Responses.ByStoreroom>;
        ByStoreroomAndId?: (request: Requests.ByStoreroomAndId) => AbortablePromise<Responses.ByStoreroomAndId>;
        Keywords?: (request: Requests.Keywords) => AbortablePromise<Responses.Keywords>;
        MaterialBom?: (request: Requests.MaterialBom) => AbortablePromise<Responses.MaterialBom>;
        MaterialCategories?: (request: Requests.MaterialCategories) => AbortablePromise<Responses.MaterialCategories>;
        MaterialNodes?: (request: Requests.MaterialNodes) => AbortablePromise<Responses.MaterialNodes>;
        Search?: (request: Requests.Search) => AbortablePromise<Responses.Search>;
    }
}
