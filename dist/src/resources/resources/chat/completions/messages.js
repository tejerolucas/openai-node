// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.
import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import { ChatCompletionStoreMessagesPage } from './completions';
export class Messages extends APIResource {
    list(completionId, query = {}, options) {
        if (isRequestOptions(query)) {
            return this.list(completionId, {}, query);
        }
        return this._client.getAPIList(`/chat/completions/${completionId}/messages`, ChatCompletionStoreMessagesPage, { query, ...options });
    }
}
export { ChatCompletionStoreMessagesPage };
