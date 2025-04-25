import { ZodEffectsDef } from 'zod';
import { JsonSchema7Type } from '../parseDef';
import { Refs } from '../Refs';
export declare function parseEffectsDef(_def: ZodEffectsDef, refs: Refs, forceResolution: boolean): JsonSchema7Type | undefined;
