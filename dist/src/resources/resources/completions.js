// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.
import { APIResource } from '../resource';
export class Completions extends APIResource {
    create(body, options) {
        return this._client.post('/completions', { body, ...options, stream: body.stream ?? false });
    }
}
