import { APIResource } from '../../../resource';
import * as PermissionsAPI from './permissions';
import { PermissionCreateParams, PermissionCreateResponse, PermissionCreateResponsesPage, PermissionDeleteResponse, PermissionRetrieveParams, PermissionRetrieveResponse, Permissions } from './permissions';
export declare class Checkpoints extends APIResource {
    permissions: PermissionsAPI.Permissions;
}
export declare namespace Checkpoints {
    export { Permissions as Permissions, type PermissionCreateResponse as PermissionCreateResponse, type PermissionRetrieveResponse as PermissionRetrieveResponse, type PermissionDeleteResponse as PermissionDeleteResponse, PermissionCreateResponsesPage as PermissionCreateResponsesPage, type PermissionCreateParams as PermissionCreateParams, type PermissionRetrieveParams as PermissionRetrieveParams, };
}
