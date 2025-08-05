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
import Application from './application';
import Page from './page';
import ProductCatalog from './product-catalog';

/**
 * BusinessProject
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class BusinessProject extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      business: 'business',
      created_time: 'created_time',
      creator: 'creator',
      id: 'id',
      name: 'name',
    });
  }


  deleteAdAccounts (params: Object = {}): Promise<*> {
    return super.deleteEdge(
      '/adaccounts',
      params
    );
  }

  getAdAccounts (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AdAccount,
      fields,
      params,
      fetchFirstPage,
      '/adaccounts'
    );
  }

  createAdAccount (fields: Array<string>, params: Object = {}): Promise<BusinessProject> {
    return this.createEdge(
      '/adaccounts',
      fields,
      params,
      BusinessProject
    );
  }

  deleteApps (params: Object = {}): Promise<*> {
    return super.deleteEdge(
      '/apps',
      params
    );
  }

  getApps (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      Application,
      fields,
      params,
      fetchFirstPage,
      '/apps'
    );
  }

  createApp (fields: Array<string>, params: Object = {}): Promise<BusinessProject> {
    return this.createEdge(
      '/apps',
      fields,
      params,
      BusinessProject
    );
  }

  deleteAssets (params: Object = {}): Promise<*> {
    return super.deleteEdge(
      '/assets',
      params
    );
  }

  createAsset (fields: Array<string>, params: Object = {}): Promise<BusinessProject> {
    return this.createEdge(
      '/assets',
      fields,
      params,
      BusinessProject
    );
  }

  deletePages (params: Object = {}): Promise<*> {
    return super.deleteEdge(
      '/pages',
      params
    );
  }

  getPages (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      Page,
      fields,
      params,
      fetchFirstPage,
      '/pages'
    );
  }

  createPage (fields: Array<string>, params: Object = {}): Promise<BusinessProject> {
    return this.createEdge(
      '/pages',
      fields,
      params,
      BusinessProject
    );
  }

  deleteProductCatalogs (params: Object = {}): Promise<*> {
    return super.deleteEdge(
      '/product_catalogs',
      params
    );
  }

  getProductCatalogs (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      ProductCatalog,
      fields,
      params,
      fetchFirstPage,
      '/product_catalogs'
    );
  }

  createProductCatalog (fields: Array<string>, params: Object = {}): Promise<BusinessProject> {
    return this.createEdge(
      '/product_catalogs',
      fields,
      params,
      BusinessProject
    );
  }

  // $FlowFixMe : Support Generic Types
  delete (fields: Array<string>, params: Object = {}): AbstractObject {
    // $FlowFixMe : Support Generic Types
    return super.delete(
      params
    );
  }

  
  get (fields: Array<string>, params: Object = {}): BusinessProject {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }

  // $FlowFixMe : Support Generic Types
  update (fields: Array<string>, params: Object = {}): BusinessProject {
    // $FlowFixMe : Support Generic Types
    return super.update(
      params
    );
  }
}
