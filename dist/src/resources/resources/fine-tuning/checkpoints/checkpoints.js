// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.
import { APIResource } from '../../../resource';
import * as PermissionsAPI from './permissions';
import { PermissionCreateResponsesPage, Permissions, } from './permissions';
export class Checkpoints extends APIResource {
    constructor() {
        super(...arguments);
        this.permissions = new PermissionsAPI.Permissions(this._client);
    }
}
Checkpoints.Permissions = Permissions;
Checkpoints.PermissionCreateResponsesPage = PermissionCreateResponsesPage;
