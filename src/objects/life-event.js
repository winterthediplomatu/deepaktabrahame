/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 * @flow
 */
import {AbstractCrudObject} from './../abstract-crud-object';
import Comment from './comment';
import Profile from './profile';
import Photo from './photo';
import Post from './post';

/**
 * LifeEvent
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class LifeEvent extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      created_time: 'created_time',
      description: 'description',
      end_time: 'end_time',
      from: 'from',
      id: 'id',
      is_hidden: 'is_hidden',
      start_time: 'start_time',
      title: 'title',
      updated_time: 'updated_time'
    });
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

  getLikes (fields, params, fetchFirstPage = true): Profile {
    return this.getEdge(
      Profile,
      fields,
      params,
      fetchFirstPage,
      '/likes'
    );
  }

  getPhotos (fields, params, fetchFirstPage = true): Photo {
    return this.getEdge(
      Photo,
      fields,
      params,
      fetchFirstPage,
      '/photos'
    );
  }

  getSharedPosts (fields, params, fetchFirstPage = true): Post {
    return this.getEdge(
      Post,
      fields,
      params,
      fetchFirstPage,
      '/sharedposts'
    );
  }

  get (fields, params): LifeEvent {
    return this.read(
      fields,
      params
    );
  }
}
