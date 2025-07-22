/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 * @flow
 */
import {AbstractCrudObject} from './../abstract-crud-object';
import Cursor from './../cursor';
import InsightsResult from './insights-result';

/**
 * PageBroadcast
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class PageBroadcast extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      id: 'id',
      scheduled_time: 'scheduled_time',
      status: 'status',
    });
  }

  static get Operation (): Object {
    return Object.freeze({
      cancel: 'CANCEL',
    });
  }

  getInsights (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      InsightsResult,
      fields,
      params,
      fetchFirstPage,
      '/insights'
    );
  }

  
  get (fields: Array<string>, params: Object = {}): PageBroadcast {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }

  // $FlowFixMe : Support Generic Types
  update (fields: Array<string>, params: Object = {}): PageBroadcast {
    // $FlowFixMe : Support Generic Types
    return super.update(
      params
    );
  }
}
