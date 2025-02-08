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
 * CustomAudienceUsageHistory
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class CustomAudienceUsageHistory extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      action: 'action',
      extra_data: 'extra_data',
      time: 'time',
      id: 'id'
    });
  }

  get (fields, params): CustomAudienceUsageHistory {
    return this.read(
      fields,
      params
    );
  }
}
