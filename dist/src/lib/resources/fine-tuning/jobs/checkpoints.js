// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.
import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import { CursorPage } from '../../../pagination';
export class Checkpoints extends APIResource {
    list(fineTuningJobId, query = {}, options) {
        if (isRequestOptions(query)) {
            return this.list(fineTuningJobId, {}, query);
        }
        return this._client.getAPIList(`/fine_tuning/jobs/${fineTuningJobId}/checkpoints`, FineTuningJobCheckpointsPage, { query, ...options });
    }
}
export class FineTuningJobCheckpointsPage extends CursorPage {
}
Checkpoints.FineTuningJobCheckpointsPage = FineTuningJobCheckpointsPage;
