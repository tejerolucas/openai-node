import { ZodTupleDef, ZodTupleItems, ZodTypeAny } from 'zod';
import { JsonSchema7Type } from '../parseDef';
import { Refs } from '../Refs';
export type JsonSchema7TupleType = {
    type: 'array';
    minItems: number;
    items: JsonSchema7Type[];
} & ({
    maxItems: number;
} | {
    additionalItems?: JsonSchema7Type | undefined;
});
export declare function parseTupleDef(def: ZodTupleDef<ZodTupleItems | [], ZodTypeAny | null>, refs: Refs): JsonSchema7TupleType;
