// Copyright 2021 Google LLC
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

function main(parent) {
  // [START cloudasset_v1_generated_AssetService_BatchGetAssetsHistory_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The relative name of the root asset. It can only be an
   *  organization number (such as "organizations/123"), a project ID (such as
   *  "projects/my-project-id")", or a project number (such as "projects/12345").
   */
  // const parent = 'abc123'
  /**
   *  A list of the full names of the assets.
   *  See: https://cloud.google.com/asset-inventory/docs/resource-name-format
   *  Example:
   *  `//compute.googleapis.com/projects/my_project_123/zones/zone1/instances/instance1`.
   *  The request becomes a no-op if the asset name list is empty, and the max
   *  size of the asset name list is 100 in one request.
   */
  // const assetNames = 'abc123'
  /**
   *  Optional. The content type.
   */
  // const contentType = {}
  /**
   *  Optional. The time window for the asset history. Both start_time and
   *  end_time are optional and if set, it must be after the current time minus
   *  35 days. If end_time is not set, it is default to current timestamp.
   *  If start_time is not set, the snapshot of the assets at end_time will be
   *  returned. The returned results contain all temporal assets whose time
   *  window overlap with read_time_window.
   */
  // const readTimeWindow = {}
  /**
   *  Optional. A list of relationship types to output, for example:
   *  `INSTANCE_TO_INSTANCEGROUP`. This field should only be specified if
   *  content_type=RELATIONSHIP.
   *  * If specified:
   *  it outputs specified relationships' history on the asset_names. It
   *  returns an error if any of the relationship_types  doesn't belong to the
   *  supported relationship types of the asset_names  or if any of the
   *  asset_names's types doesn't belong to the source types of the
   *  relationship_types.
   *  * Otherwise:
   *  it outputs the supported relationships' history on the asset_names  or
   *  returns an error if any of the asset_names's types has no relationship
   *  support.
   *  See Introduction to Cloud Asset
   *  Inventory (https://cloud.google.com/asset-inventory/docs/overview) for all
   *  supported asset types and relationship types.
   */
  // const relationshipTypes = 'abc123'

  // Imports the Asset library
  const {AssetServiceClient} = require('@google-cloud/asset').v1;

  // Instantiates a client
  const assetClient = new AssetServiceClient();

  async function callBatchGetAssetsHistory() {
    // Construct request
    const request = {
      parent,
    };

    // Run request
    const response = await assetClient.batchGetAssetsHistory(request);
    console.log(response);
  }

  callBatchGetAssetsHistory();
  // [END cloudasset_v1_generated_AssetService_BatchGetAssetsHistory_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));