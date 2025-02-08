/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 * @flow
 */
import {AbstractCrudObject} from './../abstract-crud-object';

/**
 * DynamicItemQualityIssue
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class DynamicItemQualityIssue extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      description: 'description',
      issue_type: 'issue_type',
      property_names: 'property_names',
      summary: 'summary',
      id: 'id'
    });
  }

  get (fields, params): DynamicItemQualityIssue {
    return this.read(
      fields,
      params
    );
  }
}
