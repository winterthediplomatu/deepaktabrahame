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
import Cursor from './../cursor';
import AdAccount from './ad-account';
import BusinessAssetGroup from './business-asset-group';
import Page from './page';
import ProductCatalog from './product-catalog';

/**
 * BusinessUser
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class BusinessUser extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      business: 'business',
      email: 'email',
      finance_permission: 'finance_permission',
      first_name: 'first_name',
      id: 'id',
      ip_permission: 'ip_permission',
      last_name: 'last_name',
      marked_for_removal: 'marked_for_removal',
      name: 'name',
      pending_email: 'pending_email',
      role: 'role',
      title: 'title',
      two_fac_status: 'two_fac_status',
    });
  }

  static get Role (): Object {
    return Object.freeze({
      admin: 'ADMIN',
      ads_rights_reviewer: 'ADS_RIGHTS_REVIEWER',
      developer: 'DEVELOPER',
      employee: 'EMPLOYEE',
      finance_analyst: 'FINANCE_ANALYST',
      finance_editor: 'FINANCE_EDITOR',
      finance_edit_task: 'FINANCE_EDIT_TASK',
      finance_view_task: 'FINANCE_VIEW_TASK',
      moderate_task: 'MODERATE_TASK',
      operate_task: 'OPERATE_TASK',
      partner_center_admin: 'PARTNER_CENTER_ADMIN',
      partner_center_analyst: 'PARTNER_CENTER_ANALYST',
      partner_center_education: 'PARTNER_CENTER_EDUCATION',
      partner_center_marketing: 'PARTNER_CENTER_MARKETING',
      partner_center_operations: 'PARTNER_CENTER_OPERATIONS',
    });
  }

  getAssignedAdAccounts (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AdAccount,
      fields,
      params,
      fetchFirstPage,
      '/assigned_ad_accounts'
    );
  }

  getAssignedBusinessAssetGroups (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      BusinessAssetGroup,
      fields,
      params,
      fetchFirstPage,
      '/assigned_business_asset_groups'
    );
  }

  getAssignedPages (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      Page,
      fields,
      params,
      fetchFirstPage,
      '/assigned_pages'
    );
  }

  getAssignedProductCatalogs (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      ProductCatalog,
      fields,
      params,
      fetchFirstPage,
      '/assigned_product_catalogs'
    );
  }

  // $FlowFixMe : Support Generic Types
  delete (fields: Array<string>, params: Object = {}): AbstractObject {
    // $FlowFixMe : Support Generic Types
    return super.delete(
      params
    );
  }

  
  get (fields: Array<string>, params: Object = {}): BusinessUser {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }

  // $FlowFixMe : Support Generic Types
  update (fields: Array<string>, params: Object = {}): BusinessUser {
    // $FlowFixMe : Support Generic Types
    return super.update(
      params
    );
  }
}
