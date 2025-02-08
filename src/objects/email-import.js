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
 * EmailImport
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class EmailImport extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      lists: 'lists',
      total: 'total',
      id: 'id'
    });
  }

  get (fields, params): EmailImport {
    return this.read(
      fields,
      params
    );
  }
}
