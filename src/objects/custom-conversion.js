/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 * @flow
 */
import {AbstractCrudObject} from './../abstract-crud-object';
import CustomConversionStatsResult from './custom-conversion-stats-result';

/**
 * CustomConversion
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class CustomConversion extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
     account_id: 'account_id',
     aggregation_rule: 'aggregation_rule',
     creation_time: 'creation_time',
     custom_event_type: 'custom_event_type',
     default_conversion_value: 'default_conversion_value',
     description: 'description',
     event_source_type: 'event_source_type',
     first_fired_time: 'first_fired_time',
     id: 'id',
     is_archived: 'is_archived',
     last_fired_time: 'last_fired_time',
     name: 'name',
     offline_conversion_data_set: 'offline_conversion_data_set',
     pixel: 'pixel',
     retention_days: 'retention_days',
     rule: 'rule',
    });
  }

  static get CustomEventType(): Object {
    return Object.freeze({
      add_payment_info: 'ADD_PAYMENT_INFO',
      add_to_cart: 'ADD_TO_CART',
      add_to_wishlist: 'ADD_TO_WISHLIST',
      complete_registration: 'COMPLETE_REGISTRATION',
      content_view: 'CONTENT_VIEW',
      initiated_checkout: 'INITIATED_CHECKOUT',
      lead: 'LEAD',
      other: 'OTHER',
      purchase: 'PURCHASE',
      search: 'SEARCH',
    });
  }

  getActivities(fields, params, fetchFirstPage = true): Object {
    return this.getEdge(
      Object,
      fields,
      params,
      fetchFirstPage,
      '/activities'
    );
  }

  getStats(fields, params, fetchFirstPage = true): CustomConversionStatsResult {
    return this.getEdge(
      CustomConversionStatsResult,
      fields,
      params,
      fetchFirstPage,
      '/stats'
    );
  }

  delete (fields, params): Object {
    return super.delete(
      params
    );
  }

  get (fields, params): CustomConversion {
    return this.read(
      fields,
      params
    );
  }

  update (fields, params): CustomConversion {
    return super.update(
      params
    );
  }
}
