// Copyright 2020 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

'use strict';

// sample-metadata:
//   title: List Assets
//   description: List assets under the current project.
//   usage: node listAssets <ASSET_TYPES>
//   example: node listAssets "storage.googleapis.com/Bucket,bigquery.googleapis.com/Table"

async function main(assetTypes) {
  // [START asset_quickstart_list_assets]
  const util = require('util');
  const {v1p5beta1} = require('@google-cloud/asset');
  const client = new v1p5beta1.AssetServiceClient();

  const projectId = await client.getProjectId();
  const projectResource = `projects/${projectId}`;
  // TODO(developer): Choose types of assets to list, such as 'storage.googleapis.com/Bucket':
  //   const assetTypes = 'storage.googleapis.com/Bucket,bigquery.googleapis.com/Table';
  // Or simply use empty string to list all types of assets:
  //   const assetTypes = '';
  const assetTypesList = assetTypes ? assetTypes.split(',') : [];

  async function listAssets() {
    const request = {
      parent: projectResource,
      assetTypes: assetTypesList,
      contentType: 'RESOURCE',
      // (Optional) Add readTime parameter to list assets at the given time instead of current time:
      //   readTime: { seconds: 1593988758 },
    };

    // Call cloud.assets.v1p5beta1.ListAssets API.
    const result = await client.listAssets(request);
    // Handle the response.
    console.log(util.inspect(result, {depth: null}));
  }
  listAssets();
  // [END asset_quickstart_list_assets]
}

main(...process.argv.slice(2)).catch(err => {
  console.error(err.message);
  process.exitCode = 1;
});
