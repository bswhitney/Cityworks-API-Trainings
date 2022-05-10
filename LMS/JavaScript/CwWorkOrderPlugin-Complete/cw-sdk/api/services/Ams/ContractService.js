define(["require", "exports", "../../../http/api-service"], function (require, exports, api_service_1) {
    "use strict";
    function __export(m) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    __export(api_service_1);
    var ContractService = /** @class */ (function () {
        function ContractService(service) {
            this.ErrorCodes = {
                UnknownError: 1,
                NotAuthorizedToViewItem: 2,
                NotAuthorizedToCreateItem: 3,
                NotAuthorizedToUpdateItem: 4,
                NotAuthorizedToDeleteItem: 5,
                InvalidField: 30
            };
            this.WarningCodes = {
                WarningItemNotFound: 60,
                WarningEmptyOrNullField: 61
            };
            this._service = service;
        }
        ContractService.prototype.AddInvoice = function (request) {
            return this._service.call(request, 'Ams/Contract/AddInvoice');
        };
        ContractService.prototype.AddInvoiceItem = function (request) {
            return this._service.call(request, 'Ams/Contract/AddInvoiceItem');
        };
        ContractService.prototype.AddLineItem = function (request) {
            return this._service.call(request, 'Ams/Contract/AddLineItem');
        };
        ContractService.prototype.ByIds = function (request) {
            return this._service.call(request, 'Ams/Contract/ByIds');
        };
        ContractService.prototype.Claims = function (request) {
            return this._service.call(request, 'Ams/Contract/Claims');
        };
        ContractService.prototype.Create = function (request) {
            return this._service.call(request, 'Ams/Contract/Create');
        };
        ContractService.prototype.CreateFundSource = function (request) {
            return this._service.call(request, 'Ams/Contract/CreateFundSource');
        };
        ContractService.prototype.CreateSearchDefinition = function (request) {
            return this._service.call(request, 'Ams/Contract/CreateSearchDefinition');
        };
        ContractService.prototype.CreateSubcontractor = function (request) {
            return this._service.call(request, 'Ams/Contract/CreateSubcontractor');
        };
        ContractService.prototype.CreateSubmittal = function (request) {
            return this._service.call(request, 'Ams/Contract/CreateSubmittal');
        };
        ContractService.prototype.Delete = function (request) {
            return this._service.call(request, 'Ams/Contract/Delete');
        };
        ContractService.prototype.DeleteFundSource = function (request) {
            return this._service.call(request, 'Ams/Contract/DeleteFundSource');
        };
        ContractService.prototype.DeleteInvoiceItems = function (request) {
            return this._service.call(request, 'Ams/Contract/DeleteInvoiceItems');
        };
        ContractService.prototype.DeleteInvoices = function (request) {
            return this._service.call(request, 'Ams/Contract/DeleteInvoices');
        };
        ContractService.prototype.DeleteLineItems = function (request) {
            return this._service.call(request, 'Ams/Contract/DeleteLineItems');
        };
        ContractService.prototype.DeleteSubcontractor = function (request) {
            return this._service.call(request, 'Ams/Contract/DeleteSubcontractor');
        };
        ContractService.prototype.DeleteSubmittal = function (request) {
            return this._service.call(request, 'Ams/Contract/DeleteSubmittal');
        };
        ContractService.prototype.FundSources = function (request) {
            return this._service.call(request, 'Ams/Contract/FundSources');
        };
        ContractService.prototype.InvoiceItems = function (request) {
            return this._service.call(request, 'Ams/Contract/InvoiceItems');
        };
        ContractService.prototype.Invoices = function (request) {
            return this._service.call(request, 'Ams/Contract/Invoices');
        };
        ContractService.prototype.LineItems = function (request) {
            return this._service.call(request, 'Ams/Contract/LineItems');
        };
        ContractService.prototype.LineItemSummary = function (request) {
            return this._service.call(request, 'Ams/Contract/LineItemSummary');
        };
        ContractService.prototype.Move = function (request) {
            return this._service.call(request, 'Ams/Contract/Move');
        };
        ContractService.prototype.Permits = function (request) {
            return this._service.call(request, 'Ams/Contract/Permits');
        };
        ContractService.prototype.Search = function (request) {
            return this._service.call(request, 'Ams/Contract/Search');
        };
        ContractService.prototype.Subcontractors = function (request) {
            return this._service.call(request, 'Ams/Contract/Subcontractors');
        };
        ContractService.prototype.Submittals = function (request) {
            return this._service.call(request, 'Ams/Contract/Submittals');
        };
        ContractService.prototype.UninvoicedLineItemCosts = function (request) {
            return this._service.call(request, 'Ams/Contract/UninvoicedLineItemCosts');
        };
        ContractService.prototype.Update = function (request) {
            return this._service.call(request, 'Ams/Contract/Update');
        };
        ContractService.prototype.UpdateFundSource = function (request) {
            return this._service.call(request, 'Ams/Contract/UpdateFundSource');
        };
        ContractService.prototype.UpdateInvoice = function (request) {
            return this._service.call(request, 'Ams/Contract/UpdateInvoice');
        };
        ContractService.prototype.UpdateInvoiceItem = function (request) {
            return this._service.call(request, 'Ams/Contract/UpdateInvoiceItem');
        };
        ContractService.prototype.UpdateLineItem = function (request) {
            return this._service.call(request, 'Ams/Contract/UpdateLineItem');
        };
        ContractService.prototype.UpdateSubcontractor = function (request) {
            return this._service.call(request, 'Ams/Contract/UpdateSubcontractor');
        };
        ContractService.prototype.UpdateSubmittal = function (request) {
            return this._service.call(request, 'Ams/Contract/UpdateSubmittal');
        };
        ContractService.prototype.User = function (request) {
            return this._service.call(request, 'Ams/Contract/User');
        };
        return ContractService;
    }());
    exports.ContractService = ContractService;
});
