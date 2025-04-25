import { type RequestInfo, type RequestInit } from 'openai/_shims/index';
import { Response } from 'node-fetch';
type Fetch = (req: string | RequestInfo, init?: RequestInit) => Promise<Response>;
/**
 * Creates a mock `fetch` function and a `handleRequest` function for intercepting `fetch` calls.
 *
 * You call `handleRequest` with a callback function that handles the next `fetch` call.
 * It returns a Promise that:
 * - waits for the next call to `fetch`
 * - calls the callback with the `fetch` arguments
 * - resolves `fetch` with the callback output
 */
export declare function mockFetch(): {
    fetch: Fetch;
    handleRequest: (handle: Fetch) => Promise<void>;
};
export {};
