/**
 * Creates a mock `fetch` function and a `handleRequest` function for intercepting `fetch` calls.
 *
 * You call `handleRequest` with a callback function that handles the next `fetch` call.
 * It returns a Promise that:
 * - waits for the next call to `fetch`
 * - calls the callback with the `fetch` arguments
 * - resolves `fetch` with the callback output
 */
export function mockFetch() {
    const fetchQueue = [];
    const handlerQueue = [];
    const enqueueHandler = () => {
        handlerQueue.push(new Promise((resolve) => {
            fetchQueue.push((handle) => {
                enqueueHandler();
                resolve(handle);
            });
        }));
    };
    enqueueHandler();
    async function fetch(req, init) {
        const handler = await handlerQueue.shift();
        if (!handler)
            throw new Error('expected handler to be defined');
        const signal = init?.signal;
        if (!signal)
            return await handler(req, init);
        return await Promise.race([
            handler(req, init),
            new Promise((resolve, reject) => {
                if (signal.aborted) {
                    // @ts-ignore does exist in Node
                    reject(new DOMException('The user aborted a request.', 'AbortError'));
                    return;
                }
                signal.addEventListener('abort', (e) => {
                    // @ts-ignore does exist in Node
                    reject(new DOMException('The user aborted a request.', 'AbortError'));
                });
            }),
        ]);
    }
    function handleRequest(handle) {
        return new Promise((resolve, reject) => {
            fetchQueue.shift()?.(async (req, init) => {
                try {
                    return await handle(req, init);
                }
                catch (err) {
                    reject(err);
                    return err;
                }
                finally {
                    resolve();
                }
            });
        });
    }
    return { fetch, handleRequest };
}
