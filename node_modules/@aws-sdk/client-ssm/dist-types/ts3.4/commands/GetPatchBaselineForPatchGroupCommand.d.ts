import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  GetPatchBaselineForPatchGroupRequest,
  GetPatchBaselineForPatchGroupResult,
} from "../models/models_1";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SSMClientResolvedConfig,
} from "../SSMClient";
export { __MetadataBearer };
export { $Command };
export interface GetPatchBaselineForPatchGroupCommandInput
  extends GetPatchBaselineForPatchGroupRequest {}
export interface GetPatchBaselineForPatchGroupCommandOutput
  extends GetPatchBaselineForPatchGroupResult,
    __MetadataBearer {}
declare const GetPatchBaselineForPatchGroupCommand_base: {
  new (
    input: GetPatchBaselineForPatchGroupCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    GetPatchBaselineForPatchGroupCommandInput,
    GetPatchBaselineForPatchGroupCommandOutput,
    SSMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    input: GetPatchBaselineForPatchGroupCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    GetPatchBaselineForPatchGroupCommandInput,
    GetPatchBaselineForPatchGroupCommandOutput,
    SSMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class GetPatchBaselineForPatchGroupCommand extends GetPatchBaselineForPatchGroupCommand_base {
  protected static __types: {
    api: {
      input: GetPatchBaselineForPatchGroupRequest;
      output: GetPatchBaselineForPatchGroupResult;
    };
    sdk: {
      input: GetPatchBaselineForPatchGroupCommandInput;
      output: GetPatchBaselineForPatchGroupCommandOutput;
    };
  };
}
