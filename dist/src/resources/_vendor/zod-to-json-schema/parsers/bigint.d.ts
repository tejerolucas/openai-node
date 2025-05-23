import { ZodBigIntDef } from 'zod';
import { Refs } from '../Refs';
import { ErrorMessages } from '../errorMessages';
export type JsonSchema7BigintType = {
    type: 'integer';
    format: 'int64';
    minimum?: BigInt;
    exclusiveMinimum?: BigInt;
    maximum?: BigInt;
    exclusiveMaximum?: BigInt;
    multipleOf?: BigInt;
    errorMessage?: ErrorMessages<JsonSchema7BigintType>;
};
export declare function parseBigintDef(def: ZodBigIntDef, refs: Refs): JsonSchema7BigintType;
