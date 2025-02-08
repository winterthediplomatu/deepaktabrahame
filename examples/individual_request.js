/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 * @flow
 */

 const adsSdk = require('facebook-nodejs-ads-sdk');
const Page = adsSdk.Page;

let access_token = '<ACCESS_TOKEN>';
let app_secret = '<APP_SECRET>';
let app_id = '<APP_ID>';
let id = '<ID>';
const api = adsSdk.FacebookAdsApi.init(access_token);
const showDebugingInfo = true; // Setting this to true shows more debugging info.
if (showDebugingInfo) {
  api.setDebug(true);
}

const fields = [
];
const params = {
  'type' : 'adradiussuggestion',
  'latitude' : '51.5152253',
  'longitude' : '-0.1423029',
};
(new Page(id)).get(
  fields,
  params
)
.then((result) => {
  sample_code_id = result.id;
  console.log(sample_code_id);
})
.catch((error) => {
  console.log(error);
});