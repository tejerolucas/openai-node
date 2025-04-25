/// <reference types="node" />
import * as WS from 'ws';
import { AzureOpenAI, OpenAI } from '../../index';
import type { RealtimeClientEvent } from '../../resources/beta/realtime/realtime';
import { OpenAIRealtimeEmitter } from './internal-base';
export declare class OpenAIRealtimeWS extends OpenAIRealtimeEmitter {
    url: URL;
    socket: WS.WebSocket;
    constructor(props: {
        model: string;
        options?: WS.ClientOptions | undefined;
    }, client?: Pick<OpenAI, 'apiKey' | 'baseURL'>);
    static azure(client: Pick<AzureOpenAI, '_getAzureADToken' | 'apiVersion' | 'apiKey' | 'baseURL' | 'deploymentName'>, options?: {
        deploymentName?: string;
        options?: WS.ClientOptions | undefined;
    }): Promise<OpenAIRealtimeWS>;
    send(event: RealtimeClientEvent): void;
    close(props?: {
        code: number;
        reason: string;
    }): void;
}
