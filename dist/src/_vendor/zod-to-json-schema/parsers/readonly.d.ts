import { ZodReadonlyDef } from 'zod';
import { Refs } from '../Refs';
export declare const parseReadonlyDef: (def: ZodReadonlyDef<any>, refs: Refs) => import("../parseDef").JsonSchema7Type | undefined;
