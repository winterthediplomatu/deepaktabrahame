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
import AdRule from './ad-rule';
import Ad from './ad';
import AdSet from './ad-set';
import AdsInsights from './ads-insights';
import AdReportRun from './ad-report-run';

/**
 * Campaign
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class Campaign extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      account_id: 'account_id',
      adlabels: 'adlabels',
      bid_strategy: 'bid_strategy',
      boosted_object_id: 'boosted_object_id',
      brand_lift_studies: 'brand_lift_studies',
      budget_rebalance_flag: 'budget_rebalance_flag',
      budget_remaining: 'budget_remaining',
      buying_type: 'buying_type',
      can_create_brand_lift_study: 'can_create_brand_lift_study',
      can_use_spend_cap: 'can_use_spend_cap',
      configured_status: 'configured_status',
      created_time: 'created_time',
      daily_budget: 'daily_budget',
      effective_status: 'effective_status',
      id: 'id',
      issues_info: 'issues_info',
      last_budget_toggling_time: 'last_budget_toggling_time',
      lifetime_budget: 'lifetime_budget',
      name: 'name',
      objective: 'objective',
      pacing_type: 'pacing_type',
      promoted_object: 'promoted_object',
      recommendations: 'recommendations',
      source_campaign: 'source_campaign',
      source_campaign_id: 'source_campaign_id',
      spend_cap: 'spend_cap',
      start_time: 'start_time',
      status: 'status',
      stop_time: 'stop_time',
      topline_id: 'topline_id',
      updated_time: 'updated_time'
    });
  }

  static get BidStrategy (): Object {
    return Object.freeze({
      lowest_cost_without_cap: 'LOWEST_COST_WITHOUT_CAP',
      lowest_cost_with_bid_cap: 'LOWEST_COST_WITH_BID_CAP',
      target_cost: 'TARGET_COST'
    });
  }
  static get ConfiguredStatus (): Object {
    return Object.freeze({
      active: 'ACTIVE',
      archived: 'ARCHIVED',
      deleted: 'DELETED',
      paused: 'PAUSED'
    });
  }
  static get EffectiveStatus (): Object {
    return Object.freeze({
      active: 'ACTIVE',
      adset_paused: 'ADSET_PAUSED',
      archived: 'ARCHIVED',
      campaign_paused: 'CAMPAIGN_PAUSED',
      deleted: 'DELETED',
      disapproved: 'DISAPPROVED',
      paused: 'PAUSED',
      pending_billing_info: 'PENDING_BILLING_INFO',
      pending_review: 'PENDING_REVIEW',
      preapproved: 'PREAPPROVED',
      with_issues: 'WITH_ISSUES'
    });
  }
  static get Status (): Object {
    return Object.freeze({
      active: 'ACTIVE',
      archived: 'ARCHIVED',
      deleted: 'DELETED',
      paused: 'PAUSED'
    });
  }
  static get DatePreset (): Object {
    return Object.freeze({
      last_14d: 'last_14d',
      last_28d: 'last_28d',
      last_30d: 'last_30d',
      last_3d: 'last_3d',
      last_7d: 'last_7d',
      last_90d: 'last_90d',
      last_month: 'last_month',
      last_quarter: 'last_quarter',
      last_week_mon_sun: 'last_week_mon_sun',
      last_week_sun_sat: 'last_week_sun_sat',
      last_year: 'last_year',
      lifetime: 'lifetime',
      this_month: 'this_month',
      this_quarter: 'this_quarter',
      this_week_mon_today: 'this_week_mon_today',
      this_week_sun_today: 'this_week_sun_today',
      this_year: 'this_year',
      today: 'today',
      yesterday: 'yesterday'
    });
  }
  static get ExecutionOptions (): Object {
    return Object.freeze({
      include_recommendations: 'include_recommendations',
      validate_only: 'validate_only'
    });
  }
  static get Objective (): Object {
    return Object.freeze({
      app_installs: 'APP_INSTALLS',
      brand_awareness: 'BRAND_AWARENESS',
      conversions: 'CONVERSIONS',
      event_responses: 'EVENT_RESPONSES',
      lead_generation: 'LEAD_GENERATION',
      link_clicks: 'LINK_CLICKS',
      local_awareness: 'LOCAL_AWARENESS',
      messages: 'MESSAGES',
      offer_claims: 'OFFER_CLAIMS',
      page_likes: 'PAGE_LIKES',
      post_engagement: 'POST_ENGAGEMENT',
      product_catalog_sales: 'PRODUCT_CATALOG_SALES',
      reach: 'REACH',
      video_views: 'VIDEO_VIEWS'
    });
  }
  static get Operator (): Object {
    return Object.freeze({
      all: 'ALL',
      any: 'ANY'
    });
  }
  static get StatusOption (): Object {
    return Object.freeze({
      active: 'ACTIVE',
      inherited_from_source: 'INHERITED_FROM_SOURCE',
      paused: 'PAUSED'
    });
  }

  deleteAdLabels (params): AbstractObject {
    return super.deleteEdge(
      '/adlabels',
      params
    );
  }

  createAdLabel (fields, params): Campaign {
    return this.createEdge(
      '/adlabels',
      fields,
      params,
      Campaign
    );
  }

  getAdRulesGoverned (fields, params, fetchFirstPage = true): AdRule {
    return this.getEdge(
      AdRule,
      fields,
      params,
      fetchFirstPage,
      '/adrules_governed'
    );
  }

  getAds (fields, params, fetchFirstPage = true): Ad {
    return this.getEdge(
      Ad,
      fields,
      params,
      fetchFirstPage,
      '/ads'
    );
  }

  getAdSets (fields, params, fetchFirstPage = true): AdSet {
    return this.getEdge(
      AdSet,
      fields,
      params,
      fetchFirstPage,
      '/adsets'
    );
  }

  getCopies (fields, params, fetchFirstPage = true): Campaign {
    return this.getEdge(
      Campaign,
      fields,
      params,
      fetchFirstPage,
      '/copies'
    );
  }

  createCopy (fields, params): Campaign {
    return this.createEdge(
      '/copies',
      fields,
      params,
      Campaign
    );
  }

  getInsights (fields, params, fetchFirstPage = true): AdsInsights {
    return this.getEdge(
      AdsInsights,
      fields,
      params,
      fetchFirstPage,
      '/insights'
    );
  }

  getInsightsAsync (fields, params): AdReportRun {
    return this.createEdge(
      '/insights',
      fields,
      params,
      AdReportRun
    );
  }

  delete (fields, params): AbstractObject {
    return super.delete(
      params
    );
  }

  get (fields, params): Campaign {
    return this.read(
      fields,
      params
    );
  }

  update (fields, params): Campaign {
    return super.update(
      params
    );
  }
}
