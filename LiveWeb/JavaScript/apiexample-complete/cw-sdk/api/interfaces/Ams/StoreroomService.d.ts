import { Enums, ServiceEnums, PromiseTypes, ServiceTypes, Types as CoreTypes } from '../../../bundles/core';
import AbortablePromise = PromiseTypes.AbortablePromise;

export namespace StoreroomServiceTypes { 
    export namespace Requests {
        export interface Accounts extends ServiceTypes.CoreRequestBase {
            IncludeInactive?: boolean;
        }
        export interface AddAudit extends ServiceTypes.CoreRequestBase {
            AcctNum?: string;
            Comments?: string;
            MaterialSid: number;
            NewQuant: number;
            NewUnitCost: number;
            StoreRm: string;
            TagNum?: string;
        }
        export interface AddIssue extends ServiceTypes.CoreRequestBase {
            AcctNum?: string;
            Comments?: string;
            EntityType?: string;
            EntityUid?: string;
            IssueToEmpSid?: number;
            MaterialCostId?: number;
            MaterialSid: number;
            Quantity: number;
            Source: string;
            TagNum?: string;
            TransDateTime?: Date;
            UnitCost?: number;
            WorkOrderId?: string;
            WOTaskId?: number;
        }
        export interface AddReceive extends ServiceTypes.CoreRequestBase {
            AcctNum?: string;
            Comments?: string;
            Destination: string;
            InvoiceNum?: string;
            MaterialCostId?: number;
            MaterialSid: number;
            PoNum?: string;
            Quantity: number;
            ReceiveFromEmpSid?: number;
            RequisitionItemId?: number;
            SupplierUid?: string;
            TagNum?: string;
            TransDateTime?: Date;
            UnitCost?: number;
            WorkOrderId?: string;
        }
        export interface AddRequisition extends ServiceTypes.CoreRequestBase {
            Comments?: string;
            Complete?: boolean;
            ExpDeliveryDate?: Date;
            PoNumber?: string;
            ReqType?: string;
            RequisitionDate?: Date;
        }
        export interface AddRequisitionItem extends ServiceTypes.CoreRequestBase {
            Complete?: boolean;
            ItemCost?: number;
            Justification?: string;
            MaterialSid: number;
            QtyInPkg: number;
            Quantity: number;
            ReceivedQuantity?: number;
            RequisitionSid: number;
            ReturnReason?: string;
            SupplierSid: number;
            UnitCost?: number;
        }
        export interface AddSupplier extends ServiceTypes.CoreRequestBase {
            Address?: string;
            City?: string;
            ContactPerson?: string;
            ContactPerson2?: string;
            Name: string;
            State?: string;
            SupplierEmail?: string;
            SupplierEmail2?: string;
            SupplierFax?: string;
            SupplierNotes?: string;
            SupplierPhone?: string;
            SupplierPhone2?: string;
            SupplierPhone3?: string;
            SupplierUid: string;
            Zipcode?: string;
        }
        export interface AddSupplierMaterial extends ServiceTypes.CoreRequestBase {
            CatalogNum?: string;
            ContractNum?: string;
            InfoDate?: Date;
            LeadTime?: number;
            LeadTimeUnit?: number;
            MaterialSid: number;
            NoInPack?: number;
            Notes?: string;
            OrderQuant?: number;
            PackCost?: number;
            PartNumber?: string;
            SupMatName?: string;
            SupplierSid: number;
            UnitOfMeasure?: string;
        }
        export interface AddTransfer extends ServiceTypes.CoreRequestBase {
            AcctNum?: string;
            Comments?: string;
            Destination: string;
            MaterialSid: number;
            Quantity: number;
            RequestedBySid?: number;
            Source: string;
            TagNum?: string;
            TransDateTime?: Date;
            UnitCost?: number;
        }
        export interface BuildAssemblyMaterial extends ServiceTypes.CoreRequestBase {
            AcctNum?: string;
            ChildMaterialQuantities?: {[key: number]: number};
            Comments?: string;
            ParentMaterialSid: number;
            Quantity: number;
            Storeroom: string;
            TagNum?: string;
            TransDateTime?: Date;
            WorkOrderId?: string;
        }
        export interface MaterialsByEmployeeSid extends ServiceTypes.CoreRequestBase {
            EmployeeSid: number;
        }
        export interface RequisitionItems extends ServiceTypes.CoreRequestBase {
            RequisitionSid: number;
        }
        export interface Requisitions extends ServiceTypes.CoreRequestBase {
            RequisitionSids: number[];
        }
        export interface SearchSuppliersByUid extends ServiceTypes.CoreRequestBase {
            SupplierUid?: string;
        }
        export interface Storerooms extends ServiceTypes.CoreRequestBase {
            CanIssue?: boolean;
            CanReceive?: boolean;
        }
        export interface StoreroomStocks extends ServiceTypes.CoreRequestBase {
            MaterialSid?: number;
            Storeroom?: string;
        }
        export interface SupplierMaterial extends ServiceTypes.CoreRequestBase {
            MaterialSid: number;
            SupplierSid: number;
        }
        export interface UpdateRequisition extends ServiceTypes.CoreRequestBase {
            Cancel?: boolean;
            Comments?: string;
            Complete?: boolean;
            ExpDeliveryDate?: Date;
            PoNumber?: string;
            ReceiveStoreroom?: string;
            ReqType?: string;
            RequisitionDate?: Date;
            RequisitionItems?: CoreTypes.RequisitionItem[];
            RequisitionSid: number;
        }
        export interface UpdateSupplier extends ServiceTypes.CoreRequestBase {
            Address?: string;
            City?: string;
            ContactPerson?: string;
            ContactPerson2?: string;
            IsActive?: boolean;
            Name?: string;
            State?: string;
            SupplierEmail?: string;
            SupplierEmail2?: string;
            SupplierFax?: string;
            SupplierNotes?: string;
            SupplierPhone?: string;
            SupplierPhone2?: string;
            SupplierPhone3?: string;
            SupplierSid: number;
            Zipcode?: string;
        }
        export interface UpdateSupplierMaterial extends ServiceTypes.CoreRequestBase {
            CatalogNum?: string;
            ContractNum?: string;
            InfoDate?: Date;
            LeadTime?: number;
            LeadTimeUnit?: number;
            MaterialSid?: number;
            NoInPack?: number;
            Notes?: string;
            OrderQuant?: number;
            PackCost?: number;
            PartNumber?: string;
            SupMatName?: string;
            SupplierMaterialId: number;
            SupplierSid?: number;
            UnitOfMeasure?: string;
        }
    }
    export namespace Responses {
        export interface Accounts extends ServiceTypes.CoreResponseBase_<CoreTypes.CodeDesc[]> {}
        export interface AddAudit extends ServiceTypes.CoreResponseBase_<CoreTypes.Audit> {}
        export interface AddIssue extends ServiceTypes.CoreResponseBase_<CoreTypes.IssueResultSet> {}
        export interface AddReceive extends ServiceTypes.CoreResponseBase_<CoreTypes.Receive> {}
        export interface AddRequisition extends ServiceTypes.CoreResponseBase_<CoreTypes.Requisition> {}
        export interface AddRequisitionItem extends ServiceTypes.CoreResponseBase_<CoreTypes.RequisitionItem> {}
        export interface AddSupplier extends ServiceTypes.CoreResponseBase_<CoreTypes.SupplierBase> {}
        export interface AddSupplierMaterial extends ServiceTypes.CoreResponseBase_<CoreTypes.SupplierMaterialBase> {}
        export interface AddTransfer extends ServiceTypes.CoreResponseBase_<CoreTypes.Transfer> {}
        export interface BuildAssemblyMaterial extends ServiceTypes.CoreResponseBase_<CoreTypes.AssemblyTransactions> {}
        export interface MaterialsByEmployeeSid extends ServiceTypes.CoreResponseBase_<CoreTypes.MaterialBase[]> {}
        export interface RequisitionItems extends ServiceTypes.CoreResponseBase_<CoreTypes.RequisitionItem[]> {}
        export interface Requisitions extends ServiceTypes.CoreResponseBase_<CoreTypes.Requisition[]> {}
        export interface SearchSuppliersByUid extends ServiceTypes.CoreResponseBase_<CoreTypes.Supplier[]> {}
        export interface Storerooms extends ServiceTypes.CoreResponseBase_<CoreTypes.CodeDesc[]> {}
        export interface StoreroomStocks extends ServiceTypes.CoreResponseBase_obsolete_<CoreTypes.StorermStock[]> {}
        export interface SupplierMaterial extends ServiceTypes.CoreResponseBase_<CoreTypes.SupplierMaterialBase> {}
        export interface UpdateRequisition extends ServiceTypes.CoreResponseBase_<CoreTypes.Requisition> {}
        export interface UpdateSupplier extends ServiceTypes.CoreResponseBase_<CoreTypes.SupplierBase> {}
        export interface UpdateSupplierMaterial extends ServiceTypes.CoreResponseBase_<CoreTypes.SupplierMaterialBase> {}
    }
    export interface IStoreroomService {
        Accounts?: (request: Requests.Accounts) => AbortablePromise<Responses.Accounts>;
        AddAudit?: (request: Requests.AddAudit) => AbortablePromise<Responses.AddAudit>;
        AddIssue?: (request: Requests.AddIssue) => AbortablePromise<Responses.AddIssue>;
        AddReceive?: (request: Requests.AddReceive) => AbortablePromise<Responses.AddReceive>;
        AddRequisition?: (request: Requests.AddRequisition) => AbortablePromise<Responses.AddRequisition>;
        AddRequisitionItem?: (request: Requests.AddRequisitionItem) => AbortablePromise<Responses.AddRequisitionItem>;
        AddSupplier?: (request: Requests.AddSupplier) => AbortablePromise<Responses.AddSupplier>;
        AddSupplierMaterial?: (request: Requests.AddSupplierMaterial) => AbortablePromise<Responses.AddSupplierMaterial>;
        AddTransfer?: (request: Requests.AddTransfer) => AbortablePromise<Responses.AddTransfer>;
        BuildAssemblyMaterial?: (request: Requests.BuildAssemblyMaterial) => AbortablePromise<Responses.BuildAssemblyMaterial>;
        MaterialsByEmployeeSid?: (request: Requests.MaterialsByEmployeeSid) => AbortablePromise<Responses.MaterialsByEmployeeSid>;
        RequisitionItems?: (request: Requests.RequisitionItems) => AbortablePromise<Responses.RequisitionItems>;
        Requisitions?: (request: Requests.Requisitions) => AbortablePromise<Responses.Requisitions>;
        SearchSuppliersByUid?: (request: Requests.SearchSuppliersByUid) => AbortablePromise<Responses.SearchSuppliersByUid>;
        Storerooms?: (request: Requests.Storerooms) => AbortablePromise<Responses.Storerooms>;
        StoreroomStocks?: (request: Requests.StoreroomStocks) => AbortablePromise<Responses.StoreroomStocks>;
        SupplierMaterial?: (request: Requests.SupplierMaterial) => AbortablePromise<Responses.SupplierMaterial>;
        UpdateRequisition?: (request: Requests.UpdateRequisition) => AbortablePromise<Responses.UpdateRequisition>;
        UpdateSupplier?: (request: Requests.UpdateSupplier) => AbortablePromise<Responses.UpdateSupplier>;
        UpdateSupplierMaterial?: (request: Requests.UpdateSupplierMaterial) => AbortablePromise<Responses.UpdateSupplierMaterial>;
    }
}
