// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.
import { APIResource } from '../../resource';
import * as CompletionsAPI from './completions/completions';
import { ChatCompletionsPage, Completions, } from './completions/completions';
export class Chat extends APIResource {
    constructor() {
        super(...arguments);
        this.completions = new CompletionsAPI.Completions(this._client);
    }
}
Chat.Completions = Completions;
Chat.ChatCompletionsPage = ChatCompletionsPage;
