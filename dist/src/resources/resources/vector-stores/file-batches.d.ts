import { APIResource } from '../../resource';
import { Uploadable } from '../../core';
import * as Core from '../../core';
import * as FilesAPI from './files';
import { VectorStoreFilesPage } from './files';
import * as VectorStoresAPI from './vector-stores';
import { type CursorPageParams } from '../../pagination';
export declare class FileBatches extends APIResource {
    /**
     * Create a vector store file batch.
     */
    create(vectorStoreId: string, body: FileBatchCreateParams, options?: Core.RequestOptions): Core.APIPromise<VectorStoreFileBatch>;
    /**
     * Retrieves a vector store file batch.
     */
    retrieve(vectorStoreId: string, batchId: string, options?: Core.RequestOptions): Core.APIPromise<VectorStoreFileBatch>;
    /**
     * Cancel a vector store file batch. This attempts to cancel the processing of
     * files in this batch as soon as possible.
     */
    cancel(vectorStoreId: string, batchId: string, options?: Core.RequestOptions): Core.APIPromise<VectorStoreFileBatch>;
    /**
     * Create a vector store batch and poll until all files have been processed.
     */
    createAndPoll(vectorStoreId: string, body: FileBatchCreateParams, options?: Core.RequestOptions & {
        pollIntervalMs?: number;
    }): Promise<VectorStoreFileBatch>;
    /**
     * Returns a list of vector store files in a batch.
     */
    listFiles(vectorStoreId: string, batchId: string, query?: FileBatchListFilesParams, options?: Core.RequestOptions): Core.PagePromise<VectorStoreFilesPage, FilesAPI.VectorStoreFile>;
    listFiles(vectorStoreId: string, batchId: string, options?: Core.RequestOptions): Core.PagePromise<VectorStoreFilesPage, FilesAPI.VectorStoreFile>;
    /**
     * Wait for the given file batch to be processed.
     *
     * Note: this will return even if one of the files failed to process, you need to
     * check batch.file_counts.failed_count to handle this case.
     */
    poll(vectorStoreId: string, batchId: string, options?: Core.RequestOptions & {
        pollIntervalMs?: number;
    }): Promise<VectorStoreFileBatch>;
    /**
     * Uploads the given files concurrently and then creates a vector store file batch.
     *
     * The concurrency limit is configurable using the `maxConcurrency` parameter.
     */
    uploadAndPoll(vectorStoreId: string, { files, fileIds }: {
        files: Uploadable[];
        fileIds?: string[];
    }, options?: Core.RequestOptions & {
        pollIntervalMs?: number;
        maxConcurrency?: number;
    }): Promise<VectorStoreFileBatch>;
}
/**
 * A batch of files attached to a vector store.
 */
export interface VectorStoreFileBatch {
    /**
     * The identifier, which can be referenced in API endpoints.
     */
    id: string;
    /**
     * The Unix timestamp (in seconds) for when the vector store files batch was
     * created.
     */
    created_at: number;
    file_counts: VectorStoreFileBatch.FileCounts;
    /**
     * The object type, which is always `vector_store.file_batch`.
     */
    object: 'vector_store.files_batch';
    /**
     * The status of the vector store files batch, which can be either `in_progress`,
     * `completed`, `cancelled` or `failed`.
     */
    status: 'in_progress' | 'completed' | 'cancelled' | 'failed';
    /**
     * The ID of the
     * [vector store](https://platform.openai.com/docs/api-reference/vector-stores/object)
     * that the [File](https://platform.openai.com/docs/api-reference/files) is
     * attached to.
     */
    vector_store_id: string;
}
export declare namespace VectorStoreFileBatch {
    interface FileCounts {
        /**
         * The number of files that where cancelled.
         */
        cancelled: number;
        /**
         * The number of files that have been processed.
         */
        completed: number;
        /**
         * The number of files that have failed to process.
         */
        failed: number;
        /**
         * The number of files that are currently being processed.
         */
        in_progress: number;
        /**
         * The total number of files.
         */
        total: number;
    }
}
export interface FileBatchCreateParams {
    /**
     * A list of [File](https://platform.openai.com/docs/api-reference/files) IDs that
     * the vector store should use. Useful for tools like `file_search` that can access
     * files.
     */
    file_ids: Array<string>;
    /**
     * Set of 16 key-value pairs that can be attached to an object. This can be useful
     * for storing additional information about the object in a structured format, and
     * querying for objects via API or the dashboard. Keys are strings with a maximum
     * length of 64 characters. Values are strings with a maximum length of 512
     * characters, booleans, or numbers.
     */
    attributes?: Record<string, string | number | boolean> | null;
    /**
     * The chunking strategy used to chunk the file(s). If not set, will use the `auto`
     * strategy. Only applicable if `file_ids` is non-empty.
     */
    chunking_strategy?: VectorStoresAPI.FileChunkingStrategyParam;
}
export interface FileBatchListFilesParams extends CursorPageParams {
    /**
     * A cursor for use in pagination. `before` is an object ID that defines your place
     * in the list. For instance, if you make a list request and receive 100 objects,
     * starting with obj_foo, your subsequent call can include before=obj_foo in order
     * to fetch the previous page of the list.
     */
    before?: string;
    /**
     * Filter by file status. One of `in_progress`, `completed`, `failed`, `cancelled`.
     */
    filter?: 'in_progress' | 'completed' | 'failed' | 'cancelled';
    /**
     * Sort order by the `created_at` timestamp of the objects. `asc` for ascending
     * order and `desc` for descending order.
     */
    order?: 'asc' | 'desc';
}
export declare namespace FileBatches {
    export { type VectorStoreFileBatch as VectorStoreFileBatch, type FileBatchCreateParams as FileBatchCreateParams, type FileBatchListFilesParams as FileBatchListFilesParams, };
}
export { VectorStoreFilesPage };
