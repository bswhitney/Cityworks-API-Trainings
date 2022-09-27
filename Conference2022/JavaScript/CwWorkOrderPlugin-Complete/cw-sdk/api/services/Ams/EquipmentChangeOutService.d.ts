import { PromiseTypes } from '../../../core/promise';
import { IApiService } from '../../../http/api-service';
import { EquipmentChangeOutServiceTypes as SvcDef } from '../../interfaces/Ams/EquipmentChangeOutService';
import AbortablePromise = PromiseTypes.AbortablePromise;
import Requests = SvcDef.Requests;
import Responses = SvcDef.Responses;
import IEquipmentChangeOutService = SvcDef.IEquipmentChangeOutService;
export * from '../../../http/api-service';
export * from '../../interfaces/Ams/EquipmentChangeOutService';
export declare class EquipmentChangeOutService implements IEquipmentChangeOutService {
    private _service;
    constructor(service: IApiService);
    AddChangeOutRead(request: Requests.AddChangeOutRead): AbortablePromise<Responses.AddChangeOutRead>;
    AddOperation(request: Requests.AddOperation): AbortablePromise<Responses.AddOperation>;
    Attach(request: Requests.Attach): AbortablePromise<Responses.Attach>;
    ById(request: Requests.ById): AbortablePromise<Responses.ById>;
    ByIds(request: Requests.ByIds): AbortablePromise<Responses.ByIds>;
    Delete(request: Requests.Delete): AbortablePromise<Responses.Delete>;
    DeleteChangeOutReads(request: Requests.DeleteChangeOutReads): AbortablePromise<Responses.DeleteChangeOutReads>;
    DeleteOperations(request: Requests.DeleteOperations): AbortablePromise<Responses.DeleteOperations>;
    Detach(request: Requests.Detach): AbortablePromise<Responses.Detach>;
    DirectParent(request: Requests.DirectParent): AbortablePromise<Responses.DirectParent>;
    Entities(request: Requests.Entities): AbortablePromise<Responses.Entities>;
    Entity(request: Requests.Entity): AbortablePromise<Responses.Entity>;
    History(request: Requests.History): AbortablePromise<Responses.History>;
    Read(request: Requests.Read): AbortablePromise<Responses.Read>;
    ReadConfigs(request: Requests.ReadConfigs): AbortablePromise<Responses.ReadConfigs>;
    Related(request: Requests.Related): AbortablePromise<Responses.Related>;
    Replace(request: Requests.Replace): AbortablePromise<Responses.Replace>;
    UpdateChangeOutRead(request: Requests.UpdateChangeOutRead): AbortablePromise<Responses.UpdateChangeOutRead>;
    UpdateOperation(request: Requests.UpdateOperation): AbortablePromise<Responses.UpdateOperation>;
    ErrorCodes: {
        InvalidField: number;
        UnauthorizedUser: number;
    };
    WarningCodes: {};
}