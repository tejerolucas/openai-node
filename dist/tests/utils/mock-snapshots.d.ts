import OpenAI from 'openai/index';
export declare function makeSnapshotRequest<T>(requestFn: (client: OpenAI) => Promise<T>, snapshotIndex?: number): Promise<T>;
export declare function makeStreamSnapshotRequest<T extends AsyncIterable<any>>(requestFn: (client: OpenAI) => T): Promise<T>;
