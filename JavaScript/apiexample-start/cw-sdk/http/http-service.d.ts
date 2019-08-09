import { PromiseTypes } from '../core/promise';
export declare function post(url: string, token: string, csrfToken: string | undefined, csrfTokenHeader: string | undefined, dataParams: any | undefined): PromiseTypes.AbortablePromise<any>;
