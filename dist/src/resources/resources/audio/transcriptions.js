// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.
import { APIResource } from '../../resource';
import * as Core from '../../core';
export class Transcriptions extends APIResource {
    create(body, options) {
        return this._client.post('/audio/transcriptions', Core.multipartFormRequestOptions({
            body,
            ...options,
            stream: body.stream ?? false,
            __metadata: { model: body.model },
        }));
    }
}
