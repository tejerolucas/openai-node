import { ZodObjectDef } from 'zod';
import { JsonSchema7Type } from '../parseDef';
import { Refs } from '../Refs';
export type JsonSchema7ObjectType = {
    type: 'object';
    properties: Record<string, JsonSchema7Type>;
    additionalProperties: boolean | JsonSchema7Type;
    required?: string[];
};
export declare function parseObjectDef(def: ZodObjectDef, refs: Refs): JsonSchema7ObjectType;
