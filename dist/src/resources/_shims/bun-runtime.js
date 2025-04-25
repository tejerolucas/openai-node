import { getRuntime as getWebRuntime } from './web-runtime';
import { ReadStream as FsReadStream } from 'node:fs';
export function getRuntime() {
    const runtime = getWebRuntime();
    function isFsReadStream(value) {
        return value instanceof FsReadStream;
    }
    return { ...runtime, isFsReadStream };
}
