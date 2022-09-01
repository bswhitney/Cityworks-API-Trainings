define(["require", "exports", "../../../http/api-service"], function (require, exports, api_service_1) {
    "use strict";
    function __export(m) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    __export(api_service_1);
    var EntityService = /** @class */ (function () {
        function EntityService(service) {
            this.ErrorCodes = {
                UnknownError: 1,
                ErrorUnknownEntityType: 2,
                ErrorNoWorkHistory: 20,
                ErrorUnknownDestinationEntity: 21,
                ErrorIdentifierAlreadyInUse: 24,
                InvalidField: 30
            };
            this.WarningCodes = {
                WarningItemNotFound: 60,
                WarningEmptyOrNullField: 61,
                WarningNoUidSetForEntityType: 62,
                WarningNoValidRelationships: 63
            };
            this._service = service;
        }
        EntityService.prototype.AddAlias = function (request) {
            return this._service.call(request, 'Ams/Entity/AddAlias');
        };
        EntityService.prototype.AddGroupAlias = function (request) {
            return this._service.call(request, 'Ams/Entity/AddGroupAlias');
        };
        EntityService.prototype.AddIdentifier = function (request) {
            return this._service.call(request, 'Ams/Entity/AddIdentifier');
        };
        EntityService.prototype.AddIdentifiers = function (request) {
            return this._service.call(request, 'Ams/Entity/AddIdentifiers');
        };
        EntityService.prototype.AddSplit = function (request) {
            return this._service.call(request, 'Ams/Entity/AddSplit');
        };
        EntityService.prototype.AliasAssets = function (request) {
            return this._service.call(request, 'Ams/Entity/AliasAssets');
        };
        EntityService.prototype.Aliases = function (request) {
            return this._service.call(request, 'Ams/Entity/Aliases');
        };
        EntityService.prototype.AllAliases = function (request) {
            return this._service.call(request, 'Ams/Entity/AllAliases');
        };
        EntityService.prototype.AllGroupAliases = function (request) {
            return this._service.call(request, 'Ams/Entity/AllGroupAliases');
        };
        EntityService.prototype.AssetCostHistory = function (request) {
            return this._service.call(request, 'Ams/Entity/AssetCostHistory');
        };
        EntityService.prototype.Attributes = function (request) {
            return this._service.call(request, 'Ams/Entity/Attributes');
        };
        EntityService.prototype.ChildPaths = function (request) {
            return this._service.call(request, 'Ams/Entity/ChildPaths');
        };
        EntityService.prototype.Children = function (request) {
            return this._service.call(request, 'Ams/Entity/Children');
        };
        EntityService.prototype.CloneWorkOrderEntities = function (request) {
            return this._service.call(request, 'Ams/Entity/CloneWorkOrderEntities');
        };
        EntityService.prototype.Configuration = function (request) {
            return this._service.call(request, 'Ams/Entity/Configuration');
        };
        EntityService.prototype.CostHistory = function (request) {
            return this._service.call(request, 'Ams/Entity/CostHistory');
        };
        EntityService.prototype.CostTotal = function (request) {
            return this._service.call(request, 'Ams/Entity/CostTotal');
        };
        EntityService.prototype.DirectParent = function (request) {
            return this._service.call(request, 'Ams/Entity/DirectParent');
        };
        EntityService.prototype.DistinctValues = function (request) {
            return this._service.call(request, 'Ams/Entity/DistinctValues');
        };
        EntityService.prototype.DomainTypes = function (request) {
            return this._service.call(request, 'Ams/Entity/DomainTypes');
        };
        EntityService.prototype.EntityUidField = function (request) {
            return this._service.call(request, 'Ams/Entity/EntityUidField');
        };
        EntityService.prototype.EntityUrlInfos = function (request) {
            return this._service.call(request, 'Ams/Entity/EntityUrlInfos');
        };
        EntityService.prototype.FilterRecordToWorkOrderEntity = function (request) {
            return this._service.call(request, 'Ams/Entity/FilterRecordToWorkOrderEntity');
        };
        EntityService.prototype.FiveNumberSummary = function (request) {
            return this._service.call(request, 'Ams/Entity/FiveNumberSummary');
        };
        EntityService.prototype.GetByIdentifier = function (request) {
            return this._service.call(request, 'Ams/Entity/GetByIdentifier');
        };
        EntityService.prototype.GetByIdentifiers = function (request) {
            return this._service.call(request, 'Ams/Entity/GetByIdentifiers');
        };
        EntityService.prototype.GISAttributes = function (request) {
            return this._service.call(request, 'Ams/Entity/GISAttributes');
        };
        EntityService.prototype.GroupAliases = function (request) {
            return this._service.call(request, 'Ams/Entity/GroupAliases');
        };
        EntityService.prototype.GroupByType = function (request) {
            return this._service.call(request, 'Ams/Entity/GroupByType');
        };
        EntityService.prototype.Groups = function (request) {
            return this._service.call(request, 'Ams/Entity/Groups');
        };
        EntityService.prototype.InspectionCostHistory = function (request) {
            return this._service.call(request, 'Ams/Entity/InspectionCostHistory');
        };
        EntityService.prototype.Orphans = function (request) {
            return this._service.call(request, 'Ams/Entity/Orphans');
        };
        EntityService.prototype.ParentPaths = function (request) {
            return this._service.call(request, 'Ams/Entity/ParentPaths');
        };
        EntityService.prototype.Parents = function (request) {
            return this._service.call(request, 'Ams/Entity/Parents');
        };
        EntityService.prototype.ProcessSplits = function (request) {
            return this._service.call(request, 'Ams/Entity/ProcessSplits');
        };
        EntityService.prototype.PwEntities = function (request) {
            return this._service.call(request, 'Ams/Entity/PwEntities');
        };
        EntityService.prototype.RemoveAlias = function (request) {
            return this._service.call(request, 'Ams/Entity/RemoveAlias');
        };
        EntityService.prototype.RemoveGroupAlias = function (request) {
            return this._service.call(request, 'Ams/Entity/RemoveGroupAlias');
        };
        EntityService.prototype.Resolve = function (request) {
            return this._service.call(request, 'Ams/Entity/Resolve');
        };
        EntityService.prototype.Search = function (request) {
            return this._service.call(request, 'Ams/Entity/Search');
        };
        EntityService.prototype.SearchAsWorkOrderEntity = function (request) {
            return this._service.call(request, 'Ams/Entity/SearchAsWorkOrderEntity');
        };
        EntityService.prototype.SplitEntities = function (request) {
            return this._service.call(request, 'Ams/Entity/SplitEntities');
        };
        EntityService.prototype.Splits = function (request) {
            return this._service.call(request, 'Ams/Entity/Splits');
        };
        EntityService.prototype.SubTypes = function (request) {
            return this._service.call(request, 'Ams/Entity/SubTypes');
        };
        EntityService.prototype.TypeRelationships = function (request) {
            return this._service.call(request, 'Ams/Entity/TypeRelationships');
        };
        EntityService.prototype.Types = function (request) {
            return this._service.call(request, 'Ams/Entity/Types');
        };
        EntityService.prototype.VisibleFields = function (request) {
            return this._service.call(request, 'Ams/Entity/VisibleFields');
        };
        EntityService.prototype.WorkActivityHistory = function (request) {
            return this._service.call(request, 'Ams/Entity/WorkActivityHistory');
        };
        return EntityService;
    }());
    exports.EntityService = EntityService;
});
