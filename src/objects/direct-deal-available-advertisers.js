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
 * DirectDealAvailableAdvertisers
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class DirectDealAvailableAdvertisers extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      id: 'id',
      logo: 'logo',
      name: 'name',
      status: 'status'
    });
  }

  get (fields, params): DirectDealAvailableAdvertisers {
    return this.read(
      fields,
      params
    );
  }
}
