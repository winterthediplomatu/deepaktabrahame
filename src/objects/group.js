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
import Album from './album';
import Event from './event';
import LiveVideo from './live-video';
import User from './user';
import Photo from './photo';
import ProfilePictureSource from './profile-picture-source';
import AdVideo from './ad-video';

/**
 * Group
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class Group extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      archived: 'archived',
      cover: 'cover',
      created_time: 'created_time',
      description: 'description',
      email: 'email',
      icon: 'icon',
      id: 'id',
      link: 'link',
      member_count: 'member_count',
      member_request_count: 'member_request_count',
      name: 'name',
      owner: 'owner',
      parent: 'parent',
      permissions: 'permissions',
      privacy: 'privacy',
      purpose: 'purpose',
      subdomain: 'subdomain',
      updated_time: 'updated_time',
      venue: 'venue'
    });
  }

  static get JoinSetting (): Object {
    return Object.freeze({
      admin_only: 'ADMIN_ONLY',
      anyone: 'ANYONE',
      none: 'NONE'
    });
  }
  static get PostPermissions (): Object {
    return Object.freeze({
      admin_only: 'ADMIN_ONLY',
      anyone: 'ANYONE',
      none: 'NONE'
    });
  }
  static get Purpose (): Object {
    return Object.freeze({
      casual: 'CASUAL',
      close_friends: 'CLOSE_FRIENDS',
      club: 'CLUB',
      couple: 'COUPLE',
      coworkers: 'COWORKERS',
      custom: 'CUSTOM',
      ephemeral: 'EPHEMERAL',
      event_planning: 'EVENT_PLANNING',
      family: 'FAMILY',
      fitness: 'FITNESS',
      for_sale: 'FOR_SALE',
      for_work: 'FOR_WORK',
      fraternity: 'FRATERNITY',
      game: 'GAME',
      health_support: 'HEALTH_SUPPORT',
      high_school_forum: 'HIGH_SCHOOL_FORUM',
      jobs: 'JOBS',
      learning: 'LEARNING',
      meme: 'MEME',
      mentorship: 'MENTORSHIP',
      neighbors: 'NEIGHBORS',
      none: 'NONE',
      parents: 'PARENTS',
      project: 'PROJECT',
      real_world: 'REAL_WORLD',
      real_world_at_work: 'REAL_WORLD_AT_WORK',
      school_class: 'SCHOOL_CLASS',
      sorority: 'SORORITY',
      study_group: 'STUDY_GROUP',
      support: 'SUPPORT',
      teammates: 'TEAMMATES',
      travel_planning: 'TRAVEL_PLANNING',
      work_announcement: 'WORK_ANNOUNCEMENT',
      work_demo_group: 'WORK_DEMO_GROUP',
      work_discussion: 'WORK_DISCUSSION',
      work_ephemeral: 'WORK_EPHEMERAL',
      work_feedback: 'WORK_FEEDBACK',
      work_for_sale: 'WORK_FOR_SALE',
      work_learning: 'WORK_LEARNING',
      work_mentorship: 'WORK_MENTORSHIP',
      work_multi_company: 'WORK_MULTI_COMPANY',
      work_social: 'WORK_SOCIAL',
      work_team: 'WORK_TEAM',
      work_teamwork: 'WORK_TEAMWORK'
    });
  }
  static get GroupType (): Object {
    return Object.freeze({
      casual: 'CASUAL',
      close_friends: 'CLOSE_FRIENDS',
      club: 'CLUB',
      couple: 'COUPLE',
      coworkers: 'COWORKERS',
      custom: 'CUSTOM',
      ephemeral: 'EPHEMERAL',
      event_planning: 'EVENT_PLANNING',
      family: 'FAMILY',
      fitness: 'FITNESS',
      for_sale: 'FOR_SALE',
      for_work: 'FOR_WORK',
      fraternity: 'FRATERNITY',
      game: 'GAME',
      health_support: 'HEALTH_SUPPORT',
      high_school_forum: 'HIGH_SCHOOL_FORUM',
      jobs: 'JOBS',
      learning: 'LEARNING',
      meme: 'MEME',
      mentorship: 'MENTORSHIP',
      neighbors: 'NEIGHBORS',
      none: 'NONE',
      parents: 'PARENTS',
      project: 'PROJECT',
      real_world: 'REAL_WORLD',
      real_world_at_work: 'REAL_WORLD_AT_WORK',
      school_class: 'SCHOOL_CLASS',
      sorority: 'SORORITY',
      study_group: 'STUDY_GROUP',
      support: 'SUPPORT',
      teammates: 'TEAMMATES',
      travel_planning: 'TRAVEL_PLANNING',
      work_announcement: 'WORK_ANNOUNCEMENT',
      work_demo_group: 'WORK_DEMO_GROUP',
      work_discussion: 'WORK_DISCUSSION',
      work_ephemeral: 'WORK_EPHEMERAL',
      work_feedback: 'WORK_FEEDBACK',
      work_for_sale: 'WORK_FOR_SALE',
      work_learning: 'WORK_LEARNING',
      work_mentorship: 'WORK_MENTORSHIP',
      work_multi_company: 'WORK_MULTI_COMPANY',
      work_social: 'WORK_SOCIAL',
      work_team: 'WORK_TEAM',
      work_teamwork: 'WORK_TEAMWORK'
    });
  }
  static get SuggestionCategory (): Object {
    return Object.freeze({
      close_friends: 'CLOSE_FRIENDS',
      close_friends_generic: 'CLOSE_FRIENDS_GENERIC',
      current_city: 'CURRENT_CITY',
      event: 'EVENT',
      family: 'FAMILY',
      friend_list: 'FRIEND_LIST',
      games: 'GAMES',
      life_event: 'LIFE_EVENT',
      messenger: 'MESSENGER',
      messenger_thread: 'MESSENGER_THREAD',
      nearby_friends: 'NEARBY_FRIENDS',
      page_admin: 'PAGE_ADMIN',
      school: 'SCHOOL',
      school_generic: 'SCHOOL_GENERIC',
      top_page: 'TOP_PAGE',
      work: 'WORK',
      workplace: 'WORKPLACE',
      workplace_1_1: 'WORKPLACE_1_1',
      workplace_manager: 'WORKPLACE_MANAGER',
      work_generic: 'WORK_GENERIC'
    });
  }

  deleteAdmins (params): AbstractObject {
    return super.deleteEdge(
      '/admins',
      params
    );
  }

  createAdmin (fields, params): Group {
    return this.createEdge(
      '/admins',
      fields,
      params,
      Group
    );
  }

  getAlbums (fields, params, fetchFirstPage = true): Album {
    return this.getEdge(
      Album,
      fields,
      params,
      fetchFirstPage,
      '/albums'
    );
  }

  createAlbum (fields, params): Album {
    return this.createEdge(
      '/albums',
      fields,
      params,
      Album
    );
  }

  getDocs (fields, params, fetchFirstPage = true): AbstractObject {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/docs'
    );
  }

  getEvents (fields, params, fetchFirstPage = true): Event {
    return this.getEdge(
      Event,
      fields,
      params,
      fetchFirstPage,
      '/events'
    );
  }

  createFeed (fields, params): AbstractObject {
    return this.createEdge(
      '/feed',
      fields,
      params

    );
  }

  getGroups (fields, params, fetchFirstPage = true): Group {
    return this.getEdge(
      Group,
      fields,
      params,
      fetchFirstPage,
      '/groups'
    );
  }

  createGroup (fields, params): Group {
    return this.createEdge(
      '/groups',
      fields,
      params,
      Group
    );
  }

  getLiveVideos (fields, params, fetchFirstPage = true): LiveVideo {
    return this.getEdge(
      LiveVideo,
      fields,
      params,
      fetchFirstPage,
      '/live_videos'
    );
  }

  createLiveVideo (fields, params): LiveVideo {
    return this.createEdge(
      '/live_videos',
      fields,
      params,
      LiveVideo
    );
  }

  deleteMembers (params): AbstractObject {
    return super.deleteEdge(
      '/members',
      params
    );
  }

  createMember (fields, params): Group {
    return this.createEdge(
      '/members',
      fields,
      params,
      Group
    );
  }

  createOpenGraphActionFeed (fields, params): AbstractObject {
    return this.createEdge(
      '/opengraphactionfeed',
      fields,
      params

    );
  }

  getOptedInMembers (fields, params, fetchFirstPage = true): User {
    return this.getEdge(
      User,
      fields,
      params,
      fetchFirstPage,
      '/opted_in_members'
    );
  }

  createPhoto (fields, params): Photo {
    return this.createEdge(
      '/photos',
      fields,
      params,
      Photo
    );
  }

  getPicture (fields, params, fetchFirstPage = true): ProfilePictureSource {
    return this.getEdge(
      ProfilePictureSource,
      fields,
      params,
      fetchFirstPage,
      '/picture'
    );
  }

  getVideos (fields, params, fetchFirstPage = true): AdVideo {
    return this.getEdge(
      AdVideo,
      fields,
      params,
      fetchFirstPage,
      '/videos'
    );
  }

  createVideo (fields, params): AdVideo {
    return this.createEdge(
      '/videos',
      fields,
      params,
      AdVideo
    );
  }

  get (fields, params): Group {
    return this.read(
      fields,
      params
    );
  }

  update (fields, params): Group {
    return super.update(
      params
    );
  }
}
