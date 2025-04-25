// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.
import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import { ResponseItemsPage } from './responses';
export class InputItems extends APIResource {
    list(responseId, query = {}, options) {
        if (isRequestOptions(query)) {
            return this.list(responseId, {}, query);
        }
        return this._client.getAPIList(`/responses/${responseId}/input_items`, ResponseItemsPage, {
            query,
            ...options,
        });
    }
}
export { ResponseItemsPage };
