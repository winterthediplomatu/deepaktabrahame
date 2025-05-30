 /*
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 */

import {AbstractCrudObject} from './../abstract-crud-object';

/**
 * FBImageCopyrightMatch
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class FBImageCopyrightMatch extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      added_to_dashboard_time: 'added_to_dashboard_time',
      applied_actions: 'applied_actions',
      audit_log: 'audit_log',
      available_ui_actions: 'available_ui_actions',
      expiration_days: 'expiration_days',
      generic_match_data: 'generic_match_data',
      id: 'id',
      is_business_page_match: 'is_business_page_match',
      last_modified_time: 'last_modified_time',
      match_data: 'match_data',
      match_status: 'match_status',
      ownership_countries: 'ownership_countries',
      reference_owner: 'reference_owner',
      time_to_appeal: 'time_to_appeal',
    });
  }


  
  get (fields: Array<string>, params: Object = {}): FBImageCopyrightMatch {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }
}
