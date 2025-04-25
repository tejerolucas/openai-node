import { ZodDateDef } from 'zod';
import { Refs } from '../Refs';
import { ErrorMessages } from '../errorMessages';
import { JsonSchema7NumberType } from './number';
import { DateStrategy } from '../Options';
export type JsonSchema7DateType = {
    type: 'integer' | 'string';
    format: 'unix-time' | 'date-time' | 'date';
    minimum?: number;
    maximum?: number;
    errorMessage?: ErrorMessages<JsonSchema7NumberType>;
} | {
    anyOf: JsonSchema7DateType[];
};
export declare function parseDateDef(def: ZodDateDef, refs: Refs, overrideDateStrategy?: DateStrategy): JsonSchema7DateType;
