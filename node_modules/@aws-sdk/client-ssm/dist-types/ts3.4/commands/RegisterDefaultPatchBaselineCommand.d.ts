import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  RegisterDefaultPatchBaselineRequest,
  RegisterDefaultPatchBaselineResult,
} from "../models/models_1";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SSMClientResolvedConfig,
} from "../SSMClient";
export { __MetadataBearer };
export { $Command };
export interface RegisterDefaultPatchBaselineCommandInput
  extends RegisterDefaultPatchBaselineRequest {}
export interface RegisterDefaultPatchBaselineCommandOutput
  extends RegisterDefaultPatchBaselineResult,
    __MetadataBearer {}
declare const RegisterDefaultPatchBaselineCommand_base: {
  new (
    input: RegisterDefaultPatchBaselineCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    RegisterDefaultPatchBaselineCommandInput,
    RegisterDefaultPatchBaselineCommandOutput,
    SSMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    input: RegisterDefaultPatchBaselineCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    RegisterDefaultPatchBaselineCommandInput,
    RegisterDefaultPatchBaselineCommandOutput,
    SSMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class RegisterDefaultPatchBaselineCommand extends RegisterDefaultPatchBaselineCommand_base {
  protected static __types: {
    api: {
      input: RegisterDefaultPatchBaselineRequest;
      output: RegisterDefaultPatchBaselineResult;
    };
    sdk: {
      input: RegisterDefaultPatchBaselineCommandInput;
      output: RegisterDefaultPatchBaselineCommandOutput;
    };
  };
}
