// @ts-ignore
import * as types from '../_shims/web-types';
import { setShims } from '../_shims/registry';
import { getRuntime } from '../_shims/web-runtime';
setShims(getRuntime({ manuallyImported: true }));
