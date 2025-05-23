import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as ResponsesAPI from './responses';
import { ResponseItemsPage } from './responses';
import { type CursorPageParams } from '../../pagination';
export declare class InputItems extends APIResource {
    /**
     * Returns a list of input items for a given response.
     */
    list(responseId: string, query?: InputItemListParams, options?: Core.RequestOptions): Core.PagePromise<ResponseItemsPage, ResponsesAPI.ResponseItem>;
    list(responseId: string, options?: Core.RequestOptions): Core.PagePromise<ResponseItemsPage, ResponsesAPI.ResponseItem>;
}
/**
 * A list of Response items.
 */
export interface ResponseItemList {
    /**
     * A list of items used to generate this response.
     */
    data: Array<ResponsesAPI.ResponseItem>;
    /**
     * The ID of the first item in the list.
     */
    first_id: string;
    /**
     * Whether there are more items available.
     */
    has_more: boolean;
    /**
     * The ID of the last item in the list.
     */
    last_id: string;
    /**
     * The type of object returned, must be `list`.
     */
    object: 'list';
}
export interface InputItemListParams extends CursorPageParams {
    /**
     * An item ID to list items before, used in pagination.
     */
    before?: string;
    /**
     * Additional fields to include in the response. See the `include` parameter for
     * Response creation above for more information.
     */
    include?: Array<ResponsesAPI.ResponseIncludable>;
    /**
     * The order to return the input items in. Default is `asc`.
     *
     * - `asc`: Return the input items in ascending order.
     * - `desc`: Return the input items in descending order.
     */
    order?: 'asc' | 'desc';
}
export declare namespace InputItems {
    export { type ResponseItemList as ResponseItemList, type InputItemListParams as InputItemListParams };
}
export { ResponseItemsPage };
