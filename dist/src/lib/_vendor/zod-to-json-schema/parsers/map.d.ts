import { ZodMapDef } from 'zod';
import { JsonSchema7Type } from '../parseDef';
import { Refs } from '../Refs';
import { JsonSchema7RecordType } from './record';
export type JsonSchema7MapType = {
    type: 'array';
    maxItems: 125;
    items: {
        type: 'array';
        items: [JsonSchema7Type, JsonSchema7Type];
        minItems: 2;
        maxItems: 2;
    };
};
export declare function parseMapDef(def: ZodMapDef, refs: Refs): JsonSchema7MapType | JsonSchema7RecordType;
