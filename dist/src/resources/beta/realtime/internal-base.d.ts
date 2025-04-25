/// <reference types="node" />
import { RealtimeClientEvent, RealtimeServerEvent, ErrorEvent } from '../../resources/beta/realtime/realtime';
import { EventEmitter } from '../../lib/EventEmitter';
import { OpenAIError } from '../../error';
import OpenAI, { AzureOpenAI } from '../../index';
export declare class OpenAIRealtimeError extends OpenAIError {
    /**
     * The error data that the API sent back in an `error` event.
     */
    error?: ErrorEvent.Error | undefined;
    /**
     * The unique ID of the server event.
     */
    event_id?: string | undefined;
    constructor(message: string, event: ErrorEvent | null);
}
type Simplify<T> = {
    [KeyType in keyof T]: T[KeyType];
} & {};
type RealtimeEvents = Simplify<{
    event: (event: RealtimeServerEvent) => void;
    error: (error: OpenAIRealtimeError) => void;
} & {
    [EventType in Exclude<RealtimeServerEvent['type'], 'error'>]: (event: Extract<RealtimeServerEvent, {
        type: EventType;
    }>) => unknown;
}>;
export declare abstract class OpenAIRealtimeEmitter extends EventEmitter<RealtimeEvents> {
    /**
     * Send an event to the API.
     */
    abstract send(event: RealtimeClientEvent): void;
    /**
     * Close the websocket connection.
     */
    abstract close(props?: {
        code: number;
        reason: string;
    }): void;
    protected _onError(event: null, message: string, cause: any): void;
    protected _onError(event: ErrorEvent, message?: string | undefined): void;
}
export declare function isAzure(client: Pick<OpenAI, 'apiKey' | 'baseURL'>): client is AzureOpenAI;
export declare function buildRealtimeURL(client: Pick<OpenAI, 'apiKey' | 'baseURL'>, model: string): URL;
export {};
