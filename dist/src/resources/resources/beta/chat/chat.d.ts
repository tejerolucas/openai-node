import { APIResource } from '../../../resource';
import * as CompletionsAPI from './completions';
export declare class Chat extends APIResource {
    completions: CompletionsAPI.Completions;
}
export declare namespace Chat {
    export import Completions = CompletionsAPI.Completions;
}
