import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  GetDeployablePatchSnapshotForInstanceRequest,
  GetDeployablePatchSnapshotForInstanceResult,
} from "../models/models_1";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SSMClientResolvedConfig,
} from "../SSMClient";
export { __MetadataBearer };
export { $Command };
export interface GetDeployablePatchSnapshotForInstanceCommandInput
  extends GetDeployablePatchSnapshotForInstanceRequest {}
export interface GetDeployablePatchSnapshotForInstanceCommandOutput
  extends GetDeployablePatchSnapshotForInstanceResult,
    __MetadataBearer {}
declare const GetDeployablePatchSnapshotForInstanceCommand_base: {
  new (
    input: GetDeployablePatchSnapshotForInstanceCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    GetDeployablePatchSnapshotForInstanceCommandInput,
    GetDeployablePatchSnapshotForInstanceCommandOutput,
    SSMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    input: GetDeployablePatchSnapshotForInstanceCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    GetDeployablePatchSnapshotForInstanceCommandInput,
    GetDeployablePatchSnapshotForInstanceCommandOutput,
    SSMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class GetDeployablePatchSnapshotForInstanceCommand extends GetDeployablePatchSnapshotForInstanceCommand_base {
  protected static __types: {
    api: {
      input: GetDeployablePatchSnapshotForInstanceRequest;
      output: GetDeployablePatchSnapshotForInstanceResult;
    };
    sdk: {
      input: GetDeployablePatchSnapshotForInstanceCommandInput;
      output: GetDeployablePatchSnapshotForInstanceCommandOutput;
    };
  };
}
