import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  UnlabelParameterVersionRequest,
  UnlabelParameterVersionResult,
} from "../models/models_2";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SSMClientResolvedConfig,
} from "../SSMClient";
export { __MetadataBearer };
export { $Command };
export interface UnlabelParameterVersionCommandInput
  extends UnlabelParameterVersionRequest {}
export interface UnlabelParameterVersionCommandOutput
  extends UnlabelParameterVersionResult,
    __MetadataBearer {}
declare const UnlabelParameterVersionCommand_base: {
  new (
    input: UnlabelParameterVersionCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    UnlabelParameterVersionCommandInput,
    UnlabelParameterVersionCommandOutput,
    SSMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    input: UnlabelParameterVersionCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    UnlabelParameterVersionCommandInput,
    UnlabelParameterVersionCommandOutput,
    SSMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class UnlabelParameterVersionCommand extends UnlabelParameterVersionCommand_base {
  protected static __types: {
    api: {
      input: UnlabelParameterVersionRequest;
      output: UnlabelParameterVersionResult;
    };
    sdk: {
      input: UnlabelParameterVersionCommandInput;
      output: UnlabelParameterVersionCommandOutput;
    };
  };
}
