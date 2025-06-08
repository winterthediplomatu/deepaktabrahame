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
import User from './user';
import Comment from './comment';
import Page from './page';
import LiveVideoError from './live-video-error';
import Profile from './profile';
import VideoPoll from './video-poll';

/**
 * LiveVideo
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class LiveVideo extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      ad_break_config: 'ad_break_config',
      ad_break_failure_reason: 'ad_break_failure_reason',
      broadcast_start_time: 'broadcast_start_time',
      copyright: 'copyright',
      creation_time: 'creation_time',
      dash_ingest_url: 'dash_ingest_url',
      dash_preview_url: 'dash_preview_url',
      description: 'description',
      embed_html: 'embed_html',
      from: 'from',
      id: 'id',
      ingest_streams: 'ingest_streams',
      is_manual_mode: 'is_manual_mode',
      is_reference_only: 'is_reference_only',
      live_encoders: 'live_encoders',
      live_views: 'live_views',
      permalink_url: 'permalink_url',
      planned_start_time: 'planned_start_time',
      seconds_left: 'seconds_left',
      secure_stream_url: 'secure_stream_url',
      status: 'status',
      stream_url: 'stream_url',
      targeting: 'targeting',
      title: 'title',
      total_views: 'total_views',
      video: 'video'
    });
  }

  static get Projection (): Object {
    return Object.freeze({
      cubemap: 'CUBEMAP',
      equirectangular: 'EQUIRECTANGULAR',
      half_equirectangular: 'HALF_EQUIRECTANGULAR'
    });
  }
  static get SpatialAudioFormat (): Object {
    return Object.freeze({
      ambix_4: 'ambiX_4'
    });
  }
  static get Status (): Object {
    return Object.freeze({
      live_now: 'LIVE_NOW',
      scheduled_canceled: 'SCHEDULED_CANCELED',
      scheduled_live: 'SCHEDULED_LIVE',
      scheduled_unpublished: 'SCHEDULED_UNPUBLISHED',
      unpublished: 'UNPUBLISHED'
    });
  }
  static get StereoscopicMode (): Object {
    return Object.freeze({
      left_right: 'LEFT_RIGHT',
      mono: 'MONO',
      top_bottom: 'TOP_BOTTOM'
    });
  }
  static get StreamType (): Object {
    return Object.freeze({
      ambient: 'AMBIENT',
      regular: 'REGULAR'
    });
  }
  static get BroadcastStatus (): Object {
    return Object.freeze({
      live: 'LIVE',
      live_stopped: 'LIVE_STOPPED',
      processing: 'PROCESSING',
      scheduled_canceled: 'SCHEDULED_CANCELED',
      scheduled_expired: 'SCHEDULED_EXPIRED',
      scheduled_live: 'SCHEDULED_LIVE',
      scheduled_unpublished: 'SCHEDULED_UNPUBLISHED',
      unpublished: 'UNPUBLISHED',
      vod: 'VOD'
    });
  }
  static get Source (): Object {
    return Object.freeze({
      owner: 'owner',
      target: 'target'
    });
  }
  static get LiveCommentModerationSetting (): Object {
    return Object.freeze({
      discussion: 'DISCUSSION',
      follower: 'FOLLOWER',
      protected_mode: 'PROTECTED_MODE',
      restricted: 'RESTRICTED',
      slow: 'SLOW',
      supporter: 'SUPPORTER'
    });
  }

  getBlockedUsers (fields, params, fetchFirstPage = true): User {
    return this.getEdge(
      User,
      fields,
      params,
      fetchFirstPage,
      '/blocked_users'
    );
  }

  getComments (fields, params, fetchFirstPage = true): Comment {
    return this.getEdge(
      Comment,
      fields,
      params,
      fetchFirstPage,
      '/comments'
    );
  }

  getCrosspostSharedPages (fields, params, fetchFirstPage = true): Page {
    return this.getEdge(
      Page,
      fields,
      params,
      fetchFirstPage,
      '/crosspost_shared_pages'
    );
  }

  getCrosspostedBroadcasts (fields, params, fetchFirstPage = true): LiveVideo {
    return this.getEdge(
      LiveVideo,
      fields,
      params,
      fetchFirstPage,
      '/crossposted_broadcasts'
    );
  }

  getErrors (fields, params, fetchFirstPage = true): LiveVideoError {
    return this.getEdge(
      LiveVideoError,
      fields,
      params,
      fetchFirstPage,
      '/errors'
    );
  }

  getLikes (fields, params, fetchFirstPage = true): Profile {
    return this.getEdge(
      Profile,
      fields,
      params,
      fetchFirstPage,
      '/likes'
    );
  }

  getPolls (fields, params, fetchFirstPage = true): VideoPoll {
    return this.getEdge(
      VideoPoll,
      fields,
      params,
      fetchFirstPage,
      '/polls'
    );
  }

  createPoll (fields, params): VideoPoll {
    return this.createEdge(
      '/polls',
      fields,
      params,
      VideoPoll
    );
  }

  getReactions (fields, params, fetchFirstPage = true): Profile {
    return this.getEdge(
      Profile,
      fields,
      params,
      fetchFirstPage,
      '/reactions'
    );
  }

  delete (fields, params): AbstractObject {
    return super.delete(
      params
    );
  }

  get (fields, params): LiveVideo {
    return this.read(
      fields,
      params
    );
  }

  update (fields, params): LiveVideo {
    return super.update(
      params
    );
  }
}
