import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  UpdatePatchBaselineRequest,
  UpdatePatchBaselineResult,
} from "../models/models_2";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SSMClientResolvedConfig,
} from "../SSMClient";
export { __MetadataBearer };
export { $Command };
export interface UpdatePatchBaselineCommandInput
  extends UpdatePatchBaselineRequest {}
export interface UpdatePatchBaselineCommandOutput
  extends UpdatePatchBaselineResult,
    __MetadataBearer {}
declare const UpdatePatchBaselineCommand_base: {
  new (
    input: UpdatePatchBaselineCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    UpdatePatchBaselineCommandInput,
    UpdatePatchBaselineCommandOutput,
    SSMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    input: UpdatePatchBaselineCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    UpdatePatchBaselineCommandInput,
    UpdatePatchBaselineCommandOutput,
    SSMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class UpdatePatchBaselineCommand extends UpdatePatchBaselineCommand_base {
  protected static __types: {
    api: {
      input: UpdatePatchBaselineRequest;
      output: UpdatePatchBaselineResult;
    };
    sdk: {
      input: UpdatePatchBaselineCommandInput;
      output: UpdatePatchBaselineCommandOutput;
    };
  };
}
