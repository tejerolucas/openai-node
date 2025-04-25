// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.
import { APIResource } from '../../../resource';
import { ChatCompletionRunner } from '../../../lib/ChatCompletionRunner';
import { ChatCompletionStreamingRunner, } from '../../../lib/ChatCompletionStreamingRunner';
import { ChatCompletionStream } from '../../../lib/ChatCompletionStream';
import { parseChatCompletion, validateInputTools } from '../../../lib/parser';
export { ChatCompletionStreamingRunner, } from '../../../lib/ChatCompletionStreamingRunner';
export { ParsingFunction, ParsingToolFunction, } from '../../../lib/RunnableFunction';
export { ChatCompletionStream } from '../../../lib/ChatCompletionStream';
export { ChatCompletionRunner, } from '../../../lib/ChatCompletionRunner';
export class Completions extends APIResource {
    parse(body, options) {
        validateInputTools(body.tools);
        return this._client.chat.completions
            .create(body, {
            ...options,
            headers: {
                ...options?.headers,
                'X-Stainless-Helper-Method': 'beta.chat.completions.parse',
            },
        })
            ._thenUnwrap((completion) => parseChatCompletion(completion, body));
    }
    runFunctions(body, options) {
        if (body.stream) {
            return ChatCompletionStreamingRunner.runFunctions(this._client, body, options);
        }
        return ChatCompletionRunner.runFunctions(this._client, body, options);
    }
    runTools(body, options) {
        if (body.stream) {
            return ChatCompletionStreamingRunner.runTools(this._client, body, options);
        }
        return ChatCompletionRunner.runTools(this._client, body, options);
    }
    /**
     * Creates a chat completion stream
     */
    stream(body, options) {
        return ChatCompletionStream.createChatCompletion(this._client, body, options);
    }
}
