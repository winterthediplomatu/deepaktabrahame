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
 * AdsPixelStatsResult
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdsPixelStatsResult extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      aggregation: 'aggregation',
      data: 'data',
      start_time: 'start_time',
      id: 'id'
    });
  }

  static get Aggregation (): Object {
    return Object.freeze({
      browser_type: 'browser_type',
      custom_data_field: 'custom_data_field',
      device_os: 'device_os',
      device_type: 'device_type',
      event: 'event',
      host: 'host',
      people_reached: 'people_reached',
      pii_keys: 'pii_keys',
      pii_lift: 'pii_lift',
      pixel_fire: 'pixel_fire',
      event_detection_method: 'event_detection_method',
      url: 'url',
      event_value_count: 'event_value_count',
      url_by_rule: 'url_by_rule',
      event_total_counts: 'event_total_counts',
      event_source: 'event_source'
    });
  }
}
