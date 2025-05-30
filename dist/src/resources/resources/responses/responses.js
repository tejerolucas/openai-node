// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.
import { parseResponse, addOutputText, } from '../../lib/ResponsesParser';
import { isRequestOptions } from '../../core';
import { APIResource } from '../../resource';
import * as InputItemsAPI from './input-items';
import { InputItems } from './input-items';
import { ResponseStream } from '../../lib/responses/ResponseStream';
import { CursorPage } from '../../pagination';
export class Responses extends APIResource {
    constructor() {
        super(...arguments);
        this.inputItems = new InputItemsAPI.InputItems(this._client);
    }
    create(body, options) {
        return this._client.post('/responses', { body, ...options, stream: body.stream ?? false })._thenUnwrap((rsp) => {
            if ('object' in rsp && rsp.object === 'response') {
                addOutputText(rsp);
            }
            return rsp;
        });
    }
    retrieve(responseId, query = {}, options) {
        if (isRequestOptions(query)) {
            return this.retrieve(responseId, {}, query);
        }
        return this._client.get(`/responses/${responseId}`, { query, ...options });
    }
    /**
     * Deletes a model response with the given ID.
     */
    del(responseId, options) {
        return this._client.delete(`/responses/${responseId}`, {
            ...options,
            headers: { Accept: '*/*', ...options?.headers },
        });
    }
    parse(body, options) {
        return this._client.responses
            .create(body, options)
            ._thenUnwrap((response) => parseResponse(response, body));
    }
    /**
     * Creates a model response stream
     */
    stream(body, options) {
        return ResponseStream.createResponse(this._client, body, options);
    }
}
export class ResponseItemsPage extends CursorPage {
}
Responses.InputItems = InputItems;
