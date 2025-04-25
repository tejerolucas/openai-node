// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.
import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as RunsAPI from './runs/runs';
import { RunListResponsesPage, Runs, } from './runs/runs';
import { CursorPage } from '../../pagination';
export class Evals extends APIResource {
    constructor() {
        super(...arguments);
        this.runs = new RunsAPI.Runs(this._client);
    }
    /**
     * Create the structure of an evaluation that can be used to test a model's
     * performance. An evaluation is a set of testing criteria and a datasource. After
     * creating an evaluation, you can run it on different models and model parameters.
     * We support several types of graders and datasources. For more information, see
     * the [Evals guide](https://platform.openai.com/docs/guides/evals).
     */
    create(body, options) {
        return this._client.post('/evals', { body, ...options });
    }
    /**
     * Get an evaluation by ID.
     */
    retrieve(evalId, options) {
        return this._client.get(`/evals/${evalId}`, options);
    }
    /**
     * Update certain properties of an evaluation.
     */
    update(evalId, body, options) {
        return this._client.post(`/evals/${evalId}`, { body, ...options });
    }
    list(query = {}, options) {
        if (isRequestOptions(query)) {
            return this.list({}, query);
        }
        return this._client.getAPIList('/evals', EvalListResponsesPage, { query, ...options });
    }
    /**
     * Delete an evaluation.
     */
    del(evalId, options) {
        return this._client.delete(`/evals/${evalId}`, options);
    }
}
export class EvalListResponsesPage extends CursorPage {
}
Evals.EvalListResponsesPage = EvalListResponsesPage;
Evals.Runs = Runs;
Evals.RunListResponsesPage = RunListResponsesPage;
