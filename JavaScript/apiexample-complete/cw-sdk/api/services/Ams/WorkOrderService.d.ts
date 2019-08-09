import { PromiseTypes } from '../../../core/promise';
import { IApiService } from '../../../http/api-service';
import { WorkOrderServiceTypes as SvcDef } from '../../interfaces/Ams/WorkOrderService';
import AbortablePromise = PromiseTypes.AbortablePromise;
import Requests = SvcDef.Requests;
import Responses = SvcDef.Responses;
import IWorkOrderService = SvcDef.IWorkOrderService;
export * from '../../../http/api-service';
export * from '../../interfaces/Ams/WorkOrderService';
export declare class WorkOrderService implements IWorkOrderService {
    private _service;
    constructor(service: IApiService);
    AddComments(request: Requests.AddComments): AbortablePromise<Responses.AddComments>;
    AddEntities(request: Requests.AddEntities): AbortablePromise<Responses.AddEntities>;
    ById(request: Requests.ById): AbortablePromise<Responses.ById>;
    ByIds(request: Requests.ByIds): AbortablePromise<Responses.ByIds>;
    Cancel(request: Requests.Cancel): AbortablePromise<Responses.Cancel>;
    Categories(request: Requests.Categories): AbortablePromise<Responses.Categories>;
    ChangeCustomFieldCategory(request: Requests.ChangeCustomFieldCategory): AbortablePromise<Responses.ChangeCustomFieldCategory>;
    Close(request: Requests.Close): AbortablePromise<Responses.Close>;
    Combine(request: Requests.Combine): AbortablePromise<Responses.Combine>;
    Comments(request: Requests.Comments): AbortablePromise<Responses.Comments>;
    CommentsByWorkOrderIds(request: Requests.CommentsByWorkOrderIds): AbortablePromise<Responses.CommentsByWorkOrderIds>;
    Create(request: Requests.Create): AbortablePromise<Responses.Create>;
    CreateFromInspection(request: Requests.CreateFromInspection): AbortablePromise<Responses.CreateFromInspection>;
    CreateFromParent(request: Requests.CreateFromParent): AbortablePromise<Responses.CreateFromParent>;
    CreateFromServiceRequest(request: Requests.CreateFromServiceRequest): AbortablePromise<Responses.CreateFromServiceRequest>;
    CreateSearchDefinition(request: Requests.CreateSearchDefinition): AbortablePromise<Responses.CreateSearchDefinition>;
    CustomFields(request: Requests.CustomFields): AbortablePromise<Responses.CustomFields>;
    CycleFrom(request: Requests.CycleFrom): AbortablePromise<Responses.CycleFrom>;
    CycleIntervals(request: Requests.CycleIntervals): AbortablePromise<Responses.CycleIntervals>;
    CycleTypes(request: Requests.CycleTypes): AbortablePromise<Responses.CycleTypes>;
    Entities(request: Requests.Entities): AbortablePromise<Responses.Entities>;
    ExpenseTypes(request: Requests.ExpenseTypes): AbortablePromise<Responses.ExpenseTypes>;
    InstructionsByWorkOrderIds(request: Requests.InstructionsByWorkOrderIds): AbortablePromise<Responses.InstructionsByWorkOrderIds>;
    LinkInspections(request: Requests.LinkInspections): AbortablePromise<Responses.LinkInspections>;
    LinkServiceRequests(request: Requests.LinkServiceRequests): AbortablePromise<Responses.LinkServiceRequests>;
    Move(request: Requests.Move): AbortablePromise<Responses.Move>;
    Priorities(request: Requests.Priorities): AbortablePromise<Responses.Priorities>;
    RemoveEntities(request: Requests.RemoveEntities): AbortablePromise<Responses.RemoveEntities>;
    ReOpen(request: Requests.ReOpen): AbortablePromise<Responses.ReOpen>;
    Search(request: Requests.Search): AbortablePromise<Responses.Search>;
    SearchObject(request: Requests.SearchObject): AbortablePromise<Responses.SearchObject>;
    Stages(request: Requests.Stages): AbortablePromise<Responses.Stages>;
    Statuses(request: Requests.Statuses): AbortablePromise<Responses.Statuses>;
    SubmitTos(request: Requests.SubmitTos): AbortablePromise<Responses.SubmitTos>;
    Supervisors(request: Requests.Supervisors): AbortablePromise<Responses.Supervisors>;
    Template(request: Requests.Template): AbortablePromise<Responses.Template>;
    TemplateCustomFields(request: Requests.TemplateCustomFields): AbortablePromise<Responses.TemplateCustomFields>;
    Templates(request: Requests.Templates): AbortablePromise<Responses.Templates>;
    Uncancel(request: Requests.Uncancel): AbortablePromise<Responses.Uncancel>;
    UnlinkInspections(request: Requests.UnlinkInspections): AbortablePromise<Responses.UnlinkInspections>;
    UnlinkServiceRequests(request: Requests.UnlinkServiceRequests): AbortablePromise<Responses.UnlinkServiceRequests>;
    Update(request: Requests.Update): AbortablePromise<Responses.Update>;
    UpdateEntity(request: Requests.UpdateEntity): AbortablePromise<Responses.UpdateEntity>;
    WorkOrderInspections(request: Requests.WorkOrderInspections): AbortablePromise<Responses.WorkOrderInspections>;
    WorkOrderServiceRequests(request: Requests.WorkOrderServiceRequests): AbortablePromise<Responses.WorkOrderServiceRequests>;
    WorkOrderWorkOrders(request: Requests.WorkOrderWorkOrders): AbortablePromise<Responses.WorkOrderWorkOrders>;
}