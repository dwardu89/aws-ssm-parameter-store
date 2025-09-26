import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import { RegisterPatchBaselineForPatchGroupRequest } from "../models/models_1";
import { RegisterPatchBaselineForPatchGroupResult } from "../models/models_2";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SSMClientResolvedConfig,
} from "../SSMClient";
export { __MetadataBearer };
export { $Command };
export interface RegisterPatchBaselineForPatchGroupCommandInput
  extends RegisterPatchBaselineForPatchGroupRequest {}
export interface RegisterPatchBaselineForPatchGroupCommandOutput
  extends RegisterPatchBaselineForPatchGroupResult,
    __MetadataBearer {}
declare const RegisterPatchBaselineForPatchGroupCommand_base: {
  new (
    input: RegisterPatchBaselineForPatchGroupCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    RegisterPatchBaselineForPatchGroupCommandInput,
    RegisterPatchBaselineForPatchGroupCommandOutput,
    SSMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    input: RegisterPatchBaselineForPatchGroupCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    RegisterPatchBaselineForPatchGroupCommandInput,
    RegisterPatchBaselineForPatchGroupCommandOutput,
    SSMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class RegisterPatchBaselineForPatchGroupCommand extends RegisterPatchBaselineForPatchGroupCommand_base {
  protected static __types: {
    api: {
      input: RegisterPatchBaselineForPatchGroupRequest;
      output: RegisterPatchBaselineForPatchGroupResult;
    };
    sdk: {
      input: RegisterPatchBaselineForPatchGroupCommandInput;
      output: RegisterPatchBaselineForPatchGroupCommandOutput;
    };
  };
}
