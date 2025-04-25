// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.
import { APIResource } from '../../../resource';
import * as CompletionsAPI from './completions';
export class Chat extends APIResource {
    constructor() {
        super(...arguments);
        this.completions = new CompletionsAPI.Completions(this._client);
    }
}
(function (Chat) {
    Chat.Completions = CompletionsAPI.Completions;
})(Chat || (Chat = {}));
