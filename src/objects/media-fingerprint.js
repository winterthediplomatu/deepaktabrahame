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
 * MediaFingerprint
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class MediaFingerprint extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      duration_in_sec: 'duration_in_sec',
      expiration_time: 'expiration_time',
      fingerprint_content_type: 'fingerprint_content_type',
      fingerprint_type: 'fingerprint_type',
      fingerprint_validity: 'fingerprint_validity',
      id: 'id',
      metadata: 'metadata',
      title: 'title',
      universal_content_id: 'universal_content_id'
    });
  }

  static get FingerprintContentType (): Object {
    return Object.freeze({
      am_songtrack: 'AM_SONGTRACK',
      episode: 'EPISODE',
      movie: 'MOVIE',
      other: 'OTHER',
      songtrack: 'SONGTRACK'
    });
  }

  get (fields, params): MediaFingerprint {
    return this.read(
      fields,
      params
    );
  }

  update (fields, params): MediaFingerprint {
    return super.update(
      params
    );
  }
}
