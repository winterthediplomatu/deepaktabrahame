/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 * @flow
 */
import {AbstractCrudObject} from './../abstract-crud-object';
import AbstractObject from './../abstract-object';
import AdPlacePageSet from './ad-place-page-set';
import AdsPixel from './ads-pixel';
import Application from './application';
import CustomConversion from './custom-conversion';
import OfflineConversionDataSet from './offline-conversion-data-set';
import OffsitePixel from './offsite-pixel';

/**
 * AdStudyObjective
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdStudyObjective extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      custom_attributes: 'custom_attributes',
      id: 'id',
      is_primary: 'is_primary',
      last_updated_results: 'last_updated_results',
      name: 'name',
      results: 'results',
      type: 'type'
    });
  }

  static get Type (): Object {
    return Object.freeze({
      brand: 'BRAND',
      brandlift: 'BRANDLIFT',
      ftl: 'FTL',
      mae: 'MAE',
      mai: 'MAI',
      nonsales: 'NONSALES',
      partner: 'PARTNER',
      sales: 'SALES',
      telco: 'TELCO'
    });
  }

  getAdPlacePageSets (fields, params, fetchFirstPage = true): AdPlacePageSet {
    return this.getEdge(
      AdPlacePageSet,
      fields,
      params,
      fetchFirstPage,
      '/ad_place_page_sets'
    );
  }

  getAdsPixels (fields, params, fetchFirstPage = true): AdsPixel {
    return this.getEdge(
      AdsPixel,
      fields,
      params,
      fetchFirstPage,
      '/adspixels'
    );
  }

  getApplications (fields, params, fetchFirstPage = true): Application {
    return this.getEdge(
      Application,
      fields,
      params,
      fetchFirstPage,
      '/applications'
    );
  }

  getCustomConversions (fields, params, fetchFirstPage = true): CustomConversion {
    return this.getEdge(
      CustomConversion,
      fields,
      params,
      fetchFirstPage,
      '/customconversions'
    );
  }

  getOfflineConversionDataSets (fields, params, fetchFirstPage = true): OfflineConversionDataSet {
    return this.getEdge(
      OfflineConversionDataSet,
      fields,
      params,
      fetchFirstPage,
      '/offline_conversion_data_sets'
    );
  }

  getOffsitePixels (fields, params, fetchFirstPage = true): OffsitePixel {
    return this.getEdge(
      OffsitePixel,
      fields,
      params,
      fetchFirstPage,
      '/offsitepixels'
    );
  }

  delete (fields, params): AbstractObject {
    return super.delete(
      params
    );
  }

  get (fields, params): AdStudyObjective {
    return this.read(
      fields,
      params
    );
  }

  update (fields, params): AdStudyObjective {
    return super.update(
      params
    );
  }
}
