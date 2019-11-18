export declare namespace PromiseTypes {
    class AbortablePromise<T> extends Promise<T> {
        static REASON_ABORTED: string;
        constructor(executor: (resolve: (value?: T) => void, reject: (reason?: any) => void) => void);
        abort: () => void;
    }
}
