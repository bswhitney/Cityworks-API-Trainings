import { PromiseTypes } from '../../../core/promise';
import { IApiService } from '../../../http/api-service';
import { QueryServiceTypes as SvcDef } from '../../interfaces/General/QueryService';
import AbortablePromise = PromiseTypes.AbortablePromise;
import Requests = SvcDef.Requests;
import Responses = SvcDef.Responses;
import IQueryService = SvcDef.IQueryService;
export * from '../../../http/api-service';
export * from '../../interfaces/General/QueryService';
export declare class QueryService implements IQueryService {
    private _service;
    constructor(service: IApiService);
    ByIds(request: Requests.ByIds): AbortablePromise<Responses.ByIds>;
    Query(request: Requests.Query): AbortablePromise<Responses.Query>;
    QuerySchema(request: Requests.QuerySchema): AbortablePromise<Responses.QuerySchema>;
    QueryTypeInformation(request: Requests.QueryTypeInformation): AbortablePromise<Responses.QueryTypeInformation>;
    QueryTypes(request: Requests.QueryTypes): AbortablePromise<Responses.QueryTypes>;
    RunById(request: Requests.RunById): AbortablePromise<Responses.RunById>;
    SavedQueries(request: Requests.SavedQueries): AbortablePromise<Responses.SavedQueries>;
    SearchToQuery(request: Requests.SearchToQuery): AbortablePromise<Responses.SearchToQuery>;
    ValidateQuery(request: Requests.ValidateQuery): AbortablePromise<Responses.ValidateQuery>;
    ValidateResponseDefinition(request: Requests.ValidateResponseDefinition): AbortablePromise<Responses.ValidateResponseDefinition>;
    ErrorCodes: {
        InvalidTopLevelQueryType: number;
        FieldIsRequired: number;
        CouldNotResolveQueryTypeFromQuery: number;
        InvalidQueryType: number;
        UnknownValidationError: number;
        UnknownError: number;
        UnknownErrorExecutingQuery: number;
        SyntaxError: number;
        InvalidQueryId: number;
    };
    WarningCodes: {};
}
