define(["require", "exports", "../../../http/api-service"], function (require, exports, api_service_1) {
    "use strict";
    function __export(m) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    __export(api_service_1);
    var WorkOrderService = /** @class */ (function () {
        function WorkOrderService(service) {
            this.ErrorCodes = {
                UnknownError: 1,
                InvalidWorkOrderId: 2,
                NotAuthorizedToViewWorkOrder: 3,
                NotAuthorizedToUpdateWorkOrder: 4,
                NotAuthorizedToCreateWorkOrder: 5,
                NotAuthorizedToCancelWorkOrder: 6,
                NotAuthorizedToDeleteWorkOrder: 7,
                NotAuthorizedToCloseWorkOrder: 8,
                InvalidActivityMapLogicXY: 9,
                WorkOrderIdIsRequired: 12,
                ServiceRequestIdsAreRequired: 13,
                ErrorSearchingForServiceRequests: 14,
                InspectionIdsAreRequired: 15,
                ErrorSearchingForInspections: 16,
                DomainIdIsRequired: 17,
                ErrorNoUidSetForEntityType: 18,
                ErrorProjectedFinishDateBeforeStartDate: 19,
                ErrorActualFinishDateBeforeActualDate: 20,
                ErrorUnknownEntityType: 21,
                ErrorActivityFieldValidation: 22,
                WorkOrderSidIsRequired: 23,
                InvalidField: 30,
                ErrorStatusCantBeClosed: 31,
                ErrorStatusCantBeCanceled: 32,
                ErrorRequiredCustomFields: 34,
                ErrorItemNotFound: 35,
                ErrorIncompleteTasks: 36,
                ErrorRequiredAttachedAsset: 39,
                MoveInvalidCityworksWkid: 68,
                CannotCombineToClosedWorkOrder: 90,
                CannotCombineFromClosedWorkOrder: 92,
                CannotCombineFromDifferentWoTemplates: 96
            };
            this.WarningCodes = {
                WarningItemNotFound: 60,
                WarningEmptyOrNullField: 61,
                WarningInspectionAlreadyAssociatedToWorkOrder: 64,
                WarningDeprecatedField: 65
            };
            this._service = service;
        }
        WorkOrderService.prototype.AddComments = function (request) {
            return this._service.call(request, 'Ams/WorkOrder/AddComments');
        };
        WorkOrderService.prototype.AddEntities = function (request) {
            return this._service.call(request, 'Ams/WorkOrder/AddEntities');
        };
        WorkOrderService.prototype.AuditLog = function (request) {
            return this._service.call(request, 'Ams/WorkOrder/AuditLog');
        };
        WorkOrderService.prototype.ById = function (request) {
            return this._service.call(request, 'Ams/WorkOrder/ById');
        };
        WorkOrderService.prototype.ByIds = function (request) {
            return this._service.call(request, 'Ams/WorkOrder/ByIds');
        };
        WorkOrderService.prototype.BySid = function (request) {
            return this._service.call(request, 'Ams/WorkOrder/BySid');
        };
        WorkOrderService.prototype.BySids = function (request) {
            return this._service.call(request, 'Ams/WorkOrder/BySids');
        };
        WorkOrderService.prototype.Cancel = function (request) {
            return this._service.call(request, 'Ams/WorkOrder/Cancel');
        };
        WorkOrderService.prototype.Categories = function (request) {
            return this._service.call(request, 'Ams/WorkOrder/Categories');
        };
        WorkOrderService.prototype.ChangeCustomFieldCategory = function (request) {
            return this._service.call(request, 'Ams/WorkOrder/ChangeCustomFieldCategory');
        };
        WorkOrderService.prototype.ChangeWOTemplate = function (request) {
            return this._service.call(request, 'Ams/WorkOrder/ChangeWOTemplate');
        };
        WorkOrderService.prototype.Close = function (request) {
            return this._service.call(request, 'Ams/WorkOrder/Close');
        };
        WorkOrderService.prototype.Combine = function (request) {
            return this._service.call(request, 'Ams/WorkOrder/Combine');
        };
        WorkOrderService.prototype.Comments = function (request) {
            return this._service.call(request, 'Ams/WorkOrder/Comments');
        };
        WorkOrderService.prototype.CommentsByWorkOrderIds = function (request) {
            return this._service.call(request, 'Ams/WorkOrder/CommentsByWorkOrderIds');
        };
        WorkOrderService.prototype.Create = function (request) {
            return this._service.call(request, 'Ams/WorkOrder/Create');
        };
        WorkOrderService.prototype.CreateFromInspection = function (request) {
            return this._service.call(request, 'Ams/WorkOrder/CreateFromInspection');
        };
        WorkOrderService.prototype.CreateFromParent = function (request) {
            return this._service.call(request, 'Ams/WorkOrder/CreateFromParent');
        };
        WorkOrderService.prototype.CreateFromServiceRequest = function (request) {
            return this._service.call(request, 'Ams/WorkOrder/CreateFromServiceRequest');
        };
        WorkOrderService.prototype.CreateSearchDefinition = function (request) {
            return this._service.call(request, 'Ams/WorkOrder/CreateSearchDefinition');
        };
        WorkOrderService.prototype.CustomFields = function (request) {
            return this._service.call(request, 'Ams/WorkOrder/CustomFields');
        };
        WorkOrderService.prototype.CustomFieldsByWorkOrderSids = function (request) {
            return this._service.call(request, 'Ams/WorkOrder/CustomFieldsByWorkOrderSids');
        };
        WorkOrderService.prototype.CycleFrom = function (request) {
            return this._service.call(request, 'Ams/WorkOrder/CycleFrom');
        };
        WorkOrderService.prototype.CycleIntervals = function (request) {
            return this._service.call(request, 'Ams/WorkOrder/CycleIntervals');
        };
        WorkOrderService.prototype.CycleTypes = function (request) {
            return this._service.call(request, 'Ams/WorkOrder/CycleTypes');
        };
        WorkOrderService.prototype.Delete = function (request) {
            return this._service.call(request, 'Ams/WorkOrder/Delete');
        };
        WorkOrderService.prototype.Entities = function (request) {
            return this._service.call(request, 'Ams/WorkOrder/Entities');
        };
        WorkOrderService.prototype.ExpenseTypes = function (request) {
            return this._service.call(request, 'Ams/WorkOrder/ExpenseTypes');
        };
        WorkOrderService.prototype.InstructionsByWorkOrderIds = function (request) {
            return this._service.call(request, 'Ams/WorkOrder/InstructionsByWorkOrderIds');
        };
        WorkOrderService.prototype.InstructionsByWorkOrderSids = function (request) {
            return this._service.call(request, 'Ams/WorkOrder/InstructionsByWorkOrderSids');
        };
        WorkOrderService.prototype.LinkInspections = function (request) {
            return this._service.call(request, 'Ams/WorkOrder/LinkInspections');
        };
        WorkOrderService.prototype.LinkServiceRequests = function (request) {
            return this._service.call(request, 'Ams/WorkOrder/LinkServiceRequests');
        };
        WorkOrderService.prototype.Move = function (request) {
            return this._service.call(request, 'Ams/WorkOrder/Move');
        };
        WorkOrderService.prototype.Priorities = function (request) {
            return this._service.call(request, 'Ams/WorkOrder/Priorities');
        };
        WorkOrderService.prototype.RemoveEntities = function (request) {
            return this._service.call(request, 'Ams/WorkOrder/RemoveEntities');
        };
        WorkOrderService.prototype.ReOpen = function (request) {
            return this._service.call(request, 'Ams/WorkOrder/ReOpen');
        };
        WorkOrderService.prototype.Search = function (request) {
            return this._service.call(request, 'Ams/WorkOrder/Search');
        };
        WorkOrderService.prototype.SearchForSids = function (request) {
            return this._service.call(request, 'Ams/WorkOrder/SearchForSids');
        };
        WorkOrderService.prototype.SearchObject = function (request) {
            return this._service.call(request, 'Ams/WorkOrder/SearchObject');
        };
        WorkOrderService.prototype.Stages = function (request) {
            return this._service.call(request, 'Ams/WorkOrder/Stages');
        };
        WorkOrderService.prototype.Statuses = function (request) {
            return this._service.call(request, 'Ams/WorkOrder/Statuses');
        };
        WorkOrderService.prototype.SubmitTos = function (request) {
            return this._service.call(request, 'Ams/WorkOrder/SubmitTos');
        };
        WorkOrderService.prototype.Supervisors = function (request) {
            return this._service.call(request, 'Ams/WorkOrder/Supervisors');
        };
        WorkOrderService.prototype.Template = function (request) {
            return this._service.call(request, 'Ams/WorkOrder/Template');
        };
        WorkOrderService.prototype.TemplateCustomFields = function (request) {
            return this._service.call(request, 'Ams/WorkOrder/TemplateCustomFields');
        };
        WorkOrderService.prototype.Templates = function (request) {
            return this._service.call(request, 'Ams/WorkOrder/Templates');
        };
        WorkOrderService.prototype.Uncancel = function (request) {
            return this._service.call(request, 'Ams/WorkOrder/Uncancel');
        };
        WorkOrderService.prototype.UnlinkInspections = function (request) {
            return this._service.call(request, 'Ams/WorkOrder/UnlinkInspections');
        };
        WorkOrderService.prototype.UnlinkServiceRequests = function (request) {
            return this._service.call(request, 'Ams/WorkOrder/UnlinkServiceRequests');
        };
        WorkOrderService.prototype.Update = function (request) {
            return this._service.call(request, 'Ams/WorkOrder/Update');
        };
        WorkOrderService.prototype.UpdateEntity = function (request) {
            return this._service.call(request, 'Ams/WorkOrder/UpdateEntity');
        };
        WorkOrderService.prototype.WorkOrderInspections = function (request) {
            return this._service.call(request, 'Ams/WorkOrder/WorkOrderInspections');
        };
        WorkOrderService.prototype.WorkOrderServiceRequests = function (request) {
            return this._service.call(request, 'Ams/WorkOrder/WorkOrderServiceRequests');
        };
        WorkOrderService.prototype.WorkOrderWorkOrders = function (request) {
            return this._service.call(request, 'Ams/WorkOrder/WorkOrderWorkOrders');
        };
        return WorkOrderService;
    }());
    exports.WorkOrderService = WorkOrderService;
});
