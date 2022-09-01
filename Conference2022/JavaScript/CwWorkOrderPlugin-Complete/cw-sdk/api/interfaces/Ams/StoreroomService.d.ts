import { Enums, ServiceEnums, PromiseTypes, ServiceTypes, Types as CoreTypes } from '../../../bundles/core';
import AbortablePromise = PromiseTypes.AbortablePromise;

export namespace StoreroomServiceTypes { 
    export namespace Requests {
        export interface Accounts extends ServiceTypes.CoreRequestBase {
            IncludeInactive?: boolean;
        }
        export interface AddAudit extends ServiceTypes.CoreRequestBase {
            AcctNum?: string;
            AuditReason?: string;
            Comments?: string;
            MaterialSid: number;
            NewQuant: number;
            NewUnitCost: number;
            SerialNumbersLost?: string[];
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
            SerialNumbers?: string[];
            Source: string;
            TagNum?: string;
            TransDateTime?: Date;
            UnitCost?: number;
            WorkOrderId?: string;
            WorkOrderSid?: number;
            WOTaskId?: number;
        }
        export interface AddReceive extends ServiceTypes.CoreRequestBase {
            AcctNum?: string;
            Comments?: string;
            Destination: string;
            InvoiceNum?: string;
            MaterialCostId?: number;
            MaterialSerials?: CoreTypes.MaterialSerial[];
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
            WorkOrderSid?: number;
        }
        export interface AddRequisition extends ServiceTypes.CoreRequestBase {
            Comments?: string;
            Complete?: boolean;
            DomainId?: number;
            ExpDeliveryDate?: Date;
            PoNumber?: string;
            ReqType?: string;
            RequisitionDate?: Date;
        }
        export interface AddRequisitionItem extends ServiceTypes.CoreRequestBase {
            Complete?: boolean;
            DomainId?: number;
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
            DomainId?: number;
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
            DomainId?: number;
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
            SerialNumbers?: string[];
            Source: string;
            TagNum?: string;
            TransDateTime?: Date;
            UnitCost?: number;
        }
        export interface AssemblyMaterial extends ServiceTypes.CoreRequestBase {
            MaterialSid?: number;
            Storeroom: string;
        }
        export interface BuildAssemblyMaterial extends ServiceTypes.CoreRequestBase {
            AcctNum?: string;
            ChildMaterialQuantities?: {[key: number]: number};
            ChildMaterialSerialMap?: {[key: number]: string[]};
            Comments?: string;
            ParentMaterialSid: number;
            Quantity: number;
            Storeroom: string;
            TagNum?: string;
            TransDateTime?: Date;
            WorkOrderId?: string;
            WorkOrderSid?: number;
        }
        export interface MaterialsByEmployeeSid extends ServiceTypes.CoreRequestBase {
            EmployeeSid: number;
        }
        export interface MaterialSearch extends ServiceTypes.CoreRequestBase {
            IncludeInactive?: boolean;
            IsAssembly?: boolean;
            Limit?: number;
            Offset?: number;
            Query?: string;
            SortDir?: number;
            SortField?: string;
            Storeroom: string;
            WhereClause?: CoreTypes.FilterCondition[];
        }
        export interface RequisitionItems extends ServiceTypes.CoreRequestBase {
            DomainId?: number;
            RequisitionSid: number;
        }
        export interface Requisitions extends ServiceTypes.CoreRequestBase {
            DomainId?: number;
            RequisitionSids: number[];
        }
        export interface SearchSuppliersByUid extends ServiceTypes.CoreRequestBase {
            SupplierUid?: string;
        }
        export interface StoreDomainsByEmployee extends ServiceTypes.CoreRequestBase {
            EmployeeSid: number;
        }
        export interface Storerooms extends ServiceTypes.CoreRequestBase {
            CanIssue?: boolean;
            CanReceive?: boolean;
            DomainId?: number;
            IsActive?: boolean;
        }
        export interface StoreroomSecurity extends ServiceTypes.CoreRequestBase {
            EmployeeSid?: number;
            Storeroom: string;
        }
        export interface StoreroomStocks extends ServiceTypes.CoreRequestBase {
            MaterialSid?: number;
            Storeroom?: string;
        }
        export interface SupplierMaterial extends ServiceTypes.CoreRequestBase {
            MaterialSid: number;
            SupplierSid: number;
        }
        export interface Suppliers extends ServiceTypes.CoreRequestBase {
            MaterialSids?: number[];
        }
        export interface UpdateRequisition extends ServiceTypes.CoreRequestBase {
            Cancel?: boolean;
            Comments?: string;
            Complete?: boolean;
            DomainId?: number;
            ExpDeliveryDate?: Date;
            PoNumber?: string;
            ReceiveStoreroom?: string;
            ReqType?: string;
            RequisitionDate?: Date;
            RequisitionItems?: CoreTypes.RequisitionItem[];
            RequisitionSid: number;
        }
        export interface UpdateStoreroomStock extends ServiceTypes.CoreRequestBase {
            BinLocation?: string;
            CycleIntervalNum?: number;
            CycleIntervalUnit?: number;
            DomainId?: number;
            MaterialSid: number;
            MaxQuantity?: number;
            MinQuantity?: number;
            NextAuditDate?: Date;
            SecBinLocation?: string;
            StockOnHand?: number;
            Storeroom: string;
        }
        export interface UpdateSupplier extends ServiceTypes.CoreRequestBase {
            Address?: string;
            City?: string;
            ContactPerson?: string;
            ContactPerson2?: string;
            DomainId?: number;
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
            DomainId?: number;
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
        export interface AssemblyMaterial extends ServiceTypes.CoreResponseBase_<CoreTypes.AssemblyMaterialDetail[]> {}
        export interface BuildAssemblyMaterial extends ServiceTypes.CoreResponseBase_<CoreTypes.AssemblyTransactions> {}
        export interface MaterialsByEmployeeSid extends ServiceTypes.CoreResponseBase_<CoreTypes.MaterialBase[]> {}
        export interface MaterialSearch extends ServiceTypes.CoreResponsePaged_<CoreTypes.MaterialBase[]> {}
        export interface RequisitionItems extends ServiceTypes.CoreResponseBase_<CoreTypes.RequisitionItem[]> {}
        export interface Requisitions extends ServiceTypes.CoreResponseBase_<CoreTypes.Requisition[]> {}
        export interface SearchSuppliersByUid extends ServiceTypes.CoreResponseBase_<CoreTypes.Supplier[]> {}
        export interface StoreDomainsByEmployee extends ServiceTypes.CoreResponseBase_<CoreTypes.StoreDomainBase[]> {}
        export interface Storerooms extends ServiceTypes.CoreResponseBase_<CoreTypes.CodeDesc[]> {}
        export interface StoreroomSecurity extends ServiceTypes.CoreResponseBase_<CoreTypes.StoreroomSecurityBase> {}
        export interface StoreroomStocks extends ServiceTypes.CoreResponseBase_<CoreTypes.StorermStock[]> {}
        export interface SupplierMaterial extends ServiceTypes.CoreResponseBase_<CoreTypes.SupplierMaterialBase> {}
        export interface Suppliers extends ServiceTypes.CoreResponseBase_<CoreTypes.Supplier[]> {}
        export interface UpdateRequisition extends ServiceTypes.CoreResponseBase_<CoreTypes.Requisition> {}
        export interface UpdateStoreroomStock extends ServiceTypes.CoreResponseBase_<CoreTypes.StorermStock> {}
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
        AssemblyMaterial?: (request: Requests.AssemblyMaterial) => AbortablePromise<Responses.AssemblyMaterial>;
        BuildAssemblyMaterial?: (request: Requests.BuildAssemblyMaterial) => AbortablePromise<Responses.BuildAssemblyMaterial>;
        MaterialsByEmployeeSid?: (request: Requests.MaterialsByEmployeeSid) => AbortablePromise<Responses.MaterialsByEmployeeSid>;
        MaterialSearch?: (request: Requests.MaterialSearch) => AbortablePromise<Responses.MaterialSearch>;
        RequisitionItems?: (request: Requests.RequisitionItems) => AbortablePromise<Responses.RequisitionItems>;
        Requisitions?: (request: Requests.Requisitions) => AbortablePromise<Responses.Requisitions>;
        SearchSuppliersByUid?: (request: Requests.SearchSuppliersByUid) => AbortablePromise<Responses.SearchSuppliersByUid>;
        StoreDomainsByEmployee?: (request: Requests.StoreDomainsByEmployee) => AbortablePromise<Responses.StoreDomainsByEmployee>;
        Storerooms?: (request: Requests.Storerooms) => AbortablePromise<Responses.Storerooms>;
        StoreroomSecurity?: (request: Requests.StoreroomSecurity) => AbortablePromise<Responses.StoreroomSecurity>;
        StoreroomStocks?: (request: Requests.StoreroomStocks) => AbortablePromise<Responses.StoreroomStocks>;
        SupplierMaterial?: (request: Requests.SupplierMaterial) => AbortablePromise<Responses.SupplierMaterial>;
        Suppliers?: (request: Requests.Suppliers) => AbortablePromise<Responses.Suppliers>;
        UpdateRequisition?: (request: Requests.UpdateRequisition) => AbortablePromise<Responses.UpdateRequisition>;
        UpdateStoreroomStock?: (request: Requests.UpdateStoreroomStock) => AbortablePromise<Responses.UpdateStoreroomStock>;
        UpdateSupplier?: (request: Requests.UpdateSupplier) => AbortablePromise<Responses.UpdateSupplier>;
        UpdateSupplierMaterial?: (request: Requests.UpdateSupplierMaterial) => AbortablePromise<Responses.UpdateSupplierMaterial>;
    }
}
