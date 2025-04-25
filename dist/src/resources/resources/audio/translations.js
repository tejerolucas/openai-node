// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.
import { APIResource } from '../../resource';
import * as Core from '../../core';
export class Translations extends APIResource {
    create(body, options) {
        return this._client.post('/audio/translations', Core.multipartFormRequestOptions({ body, ...options, __metadata: { model: body.model } }));
    }
}
