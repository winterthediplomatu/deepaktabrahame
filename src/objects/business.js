/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 * @flow
 */
import {AbstractCrudObject} from './../abstract-crud-object';
import AdStudy from './ad-study';
import AdAccount from './ad-account';
import AdsPixel from './ads-pixel';
import ProductCatalog from './product-catalog';
import BusinessAdAccountRequest from './business-ad-account-request';
import BusinessPageRequest from './business-page-request';
import EventSourceGroup from './event-source-group';
import ReachFrequencyPrediction from './reach-frequency-prediction';
import LegacyBusinessAdAccountRequest from './legacy-business-ad-account-request';
import ProfilePictureSource from './profile-picture-source';

/**
 * Business
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class Business extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
     created_by: 'created_by',
     created_time: 'created_time',
     id: 'id',
     link: 'link',
     name: 'name',
     payment_account_id: 'payment_account_id',
     primary_page: 'primary_page',
     timezone_id: 'timezone_id',
     two_factor_type: 'two_factor_type',
     updated_by: 'updated_by',
     updated_time: 'updated_time',
    });
  }


  createAdStudy(fields, params): AdStudy {
    return this.createEdge(
      '/ad_studies',
      fields,
      params
    );
  }

  createAdAccount(fields, params): AdAccount {
    return this.createEdge(
      '/adaccount',
      fields,
      params
    );
  }

  createAdAccounts(fields, params): AdAccount {
    return this.createEdge(
      '/adaccounts',
      fields,
      params
    );
  }

  getAdsPixels(fields, params, fetchFirstPage = true): AdsPixel {
    return this.getEdge(
      AdsPixel,
      fields,
      params,
      fetchFirstPage,
      '/adspixels'
    );
  }

  createAdsPixel(fields, params): AdsPixel {
    return this.createEdge(
      '/adspixels',
      fields,
      params
    );
  }

  deleteApps(params): Object {
    return super.deleteEdge(
      '/apps',
      params
    );
  }

  getAssignedAdAccounts(fields, params, fetchFirstPage = true): AdAccount {
    return this.getEdge(
      AdAccount,
      fields,
      params,
      fetchFirstPage,
      '/assigned_ad_accounts'
    );
  }

  getAssignedPages(fields, params, fetchFirstPage = true): Object {
    return this.getEdge(
      Object,
      fields,
      params,
      fetchFirstPage,
      '/assigned_pages'
    );
  }

  getAssignedProductCatalogs(fields, params, fetchFirstPage = true): ProductCatalog {
    return this.getEdge(
      ProductCatalog,
      fields,
      params,
      fetchFirstPage,
      '/assigned_product_catalogs'
    );
  }

  getClientAdAccountRequests(fields, params, fetchFirstPage = true): BusinessAdAccountRequest {
    return this.getEdge(
      BusinessAdAccountRequest,
      fields,
      params,
      fetchFirstPage,
      '/client_ad_account_requests'
    );
  }

  getClientAdAccounts(fields, params, fetchFirstPage = true): AdAccount {
    return this.getEdge(
      AdAccount,
      fields,
      params,
      fetchFirstPage,
      '/client_ad_accounts'
    );
  }

  getClientPageRequests(fields, params, fetchFirstPage = true): BusinessPageRequest {
    return this.getEdge(
      BusinessPageRequest,
      fields,
      params,
      fetchFirstPage,
      '/client_page_requests'
    );
  }

  getClientPages(fields, params, fetchFirstPage = true): Object {
    return this.getEdge(
      Object,
      fields,
      params,
      fetchFirstPage,
      '/client_pages'
    );
  }

  getEventSourceGroups(fields, params, fetchFirstPage = true): EventSourceGroup {
    return this.getEdge(
      EventSourceGroup,
      fields,
      params,
      fetchFirstPage,
      '/event_source_groups'
    );
  }

  createEventSourceGroup(fields, params): EventSourceGroup {
    return this.createEdge(
      '/event_source_groups',
      fields,
      params
    );
  }

  getGrpPlans(fields, params, fetchFirstPage = true): ReachFrequencyPrediction {
    return this.getEdge(
      ReachFrequencyPrediction,
      fields,
      params,
      fetchFirstPage,
      '/grp_plans'
    );
  }

  getInstagramAccounts(fields, params, fetchFirstPage = true): Object {
    return this.getEdge(
      Object,
      fields,
      params,
      fetchFirstPage,
      '/instagram_accounts'
    );
  }

  getMeasurementReports(fields, params, fetchFirstPage = true): Object {
    return this.getEdge(
      Object,
      fields,
      params,
      fetchFirstPage,
      '/measurement_reports'
    );
  }

  createMeasurementReport(fields, params): Object {
    return this.createEdge(
      '/measurement_reports',
      fields,
      params
    );
  }

  getOfflineConversionDataSets(fields, params, fetchFirstPage = true): Object {
    return this.getEdge(
      Object,
      fields,
      params,
      fetchFirstPage,
      '/offline_conversion_data_sets'
    );
  }

  createOfflineConversionDataSet(fields, params): Object {
    return this.createEdge(
      '/offline_conversion_data_sets',
      fields,
      params
    );
  }

  getOwnedAdAccountRequests(fields, params, fetchFirstPage = true): LegacyBusinessAdAccountRequest {
    return this.getEdge(
      LegacyBusinessAdAccountRequest,
      fields,
      params,
      fetchFirstPage,
      '/owned_ad_account_requests'
    );
  }

  getOwnedAdAccounts(fields, params, fetchFirstPage = true): AdAccount {
    return this.getEdge(
      AdAccount,
      fields,
      params,
      fetchFirstPage,
      '/owned_ad_accounts'
    );
  }

  getOwnedInstagramAccounts(fields, params, fetchFirstPage = true): Object {
    return this.getEdge(
      Object,
      fields,
      params,
      fetchFirstPage,
      '/owned_instagram_accounts'
    );
  }

  getOwnedPageRequests(fields, params, fetchFirstPage = true): BusinessPageRequest {
    return this.getEdge(
      BusinessPageRequest,
      fields,
      params,
      fetchFirstPage,
      '/owned_page_requests'
    );
  }

  getOwnedPages(fields, params, fetchFirstPage = true): Object {
    return this.getEdge(
      Object,
      fields,
      params,
      fetchFirstPage,
      '/owned_pages'
    );
  }

  getOwnedPixels(fields, params, fetchFirstPage = true): AdsPixel {
    return this.getEdge(
      AdsPixel,
      fields,
      params,
      fetchFirstPage,
      '/owned_pixels'
    );
  }

  getPicture(fields, params, fetchFirstPage = true): ProfilePictureSource {
    return this.getEdge(
      ProfilePictureSource,
      fields,
      params,
      fetchFirstPage,
      '/picture'
    );
  }

  getProductCatalogs(fields, params, fetchFirstPage = true): ProductCatalog {
    return this.getEdge(
      ProductCatalog,
      fields,
      params,
      fetchFirstPage,
      '/product_catalogs'
    );
  }

  createProductCatalog(fields, params): ProductCatalog {
    return this.createEdge(
      '/product_catalogs',
      fields,
      params
    );
  }

  getReceivedAudiencePermissions(fields, params, fetchFirstPage = true): Object {
    return this.getEdge(
      Object,
      fields,
      params,
      fetchFirstPage,
      '/received_audience_permissions'
    );
  }

  getSharedAudiencePermissions(fields, params, fetchFirstPage = true): Object {
    return this.getEdge(
      Object,
      fields,
      params,
      fetchFirstPage,
      '/shared_audience_permissions'
    );
  }

  getSystemUsers(fields, params, fetchFirstPage = true): Object {
    return this.getEdge(
      Object,
      fields,
      params,
      fetchFirstPage,
      '/system_users'
    );
  }

  createUserPermission(fields, params): Object {
    return this.createEdge(
      '/userpermissions',
      fields,
      params
    );
  }

  get (fields, params): Business {
    return this.read(
      fields,
      params
    );
  }
}
