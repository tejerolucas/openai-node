import { type ChatCompletionChunk, type ChatCompletionCreateParamsStreaming } from '../resources/chat/completions';
import { RunnerOptions, type AbstractChatCompletionRunnerEvents } from './AbstractChatCompletionRunner';
import { type ReadableStream } from '../_shims/index';
import { RunnableTools, type BaseFunctionsArgs, type RunnableFunctions } from './RunnableFunction';
import { ChatCompletionSnapshot, ChatCompletionStream } from './ChatCompletionStream';
import OpenAI from '../index';
import { AutoParseableTool } from '../lib/parser';
export interface ChatCompletionStreamEvents extends AbstractChatCompletionRunnerEvents {
    content: (contentDelta: string, contentSnapshot: string) => void;
    chunk: (chunk: ChatCompletionChunk, snapshot: ChatCompletionSnapshot) => void;
}
export type ChatCompletionStreamingFunctionRunnerParams<FunctionsArgs extends BaseFunctionsArgs> = Omit<ChatCompletionCreateParamsStreaming, 'functions'> & {
    functions: RunnableFunctions<FunctionsArgs>;
};
export type ChatCompletionStreamingToolRunnerParams<FunctionsArgs extends BaseFunctionsArgs> = Omit<ChatCompletionCreateParamsStreaming, 'tools'> & {
    tools: RunnableTools<FunctionsArgs> | AutoParseableTool<any, true>[];
};
export declare class ChatCompletionStreamingRunner<ParsedT = null> extends ChatCompletionStream<ParsedT> implements AsyncIterable<ChatCompletionChunk> {
    static fromReadableStream(stream: ReadableStream): ChatCompletionStreamingRunner<null>;
    /** @deprecated - please use `runTools` instead. */
    static runFunctions<T extends (string | object)[]>(client: OpenAI, params: ChatCompletionStreamingFunctionRunnerParams<T>, options?: RunnerOptions): ChatCompletionStreamingRunner<null>;
    static runTools<T extends (string | object)[], ParsedT = null>(client: OpenAI, params: ChatCompletionStreamingToolRunnerParams<T>, options?: RunnerOptions): ChatCompletionStreamingRunner<ParsedT>;
}
