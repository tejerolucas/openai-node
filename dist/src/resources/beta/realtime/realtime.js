// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.
import { APIResource } from '../../../resource';
import * as SessionsAPI from './sessions';
import { Sessions, } from './sessions';
import * as TranscriptionSessionsAPI from './transcription-sessions';
import { TranscriptionSessions, } from './transcription-sessions';
export class Realtime extends APIResource {
    constructor() {
        super(...arguments);
        this.sessions = new SessionsAPI.Sessions(this._client);
        this.transcriptionSessions = new TranscriptionSessionsAPI.TranscriptionSessions(this._client);
    }
}
Realtime.Sessions = Sessions;
Realtime.TranscriptionSessions = TranscriptionSessions;
