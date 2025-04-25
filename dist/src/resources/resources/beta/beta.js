// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.
import { APIResource } from '../../resource';
import * as AssistantsAPI from './assistants';
import * as ChatAPI from './chat/chat';
import { Assistants, AssistantsPage, } from './assistants';
import * as RealtimeAPI from './realtime/realtime';
import { Realtime, } from './realtime/realtime';
import * as ThreadsAPI from './threads/threads';
import { Threads, } from './threads/threads';
import { Chat } from './chat/chat';
export class Beta extends APIResource {
    constructor() {
        super(...arguments);
        this.realtime = new RealtimeAPI.Realtime(this._client);
        this.chat = new ChatAPI.Chat(this._client);
        this.assistants = new AssistantsAPI.Assistants(this._client);
        this.threads = new ThreadsAPI.Threads(this._client);
    }
}
Beta.Realtime = Realtime;
Beta.Assistants = Assistants;
Beta.AssistantsPage = AssistantsPage;
Beta.Threads = Threads;
