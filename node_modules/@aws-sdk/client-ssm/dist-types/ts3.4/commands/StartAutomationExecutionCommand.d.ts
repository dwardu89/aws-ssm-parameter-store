import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  StartAutomationExecutionRequest,
  StartAutomationExecutionResult,
} from "../models/models_2";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SSMClientResolvedConfig,
} from "../SSMClient";
export { __MetadataBearer };
export { $Command };
export interface StartAutomationExecutionCommandInput
  extends StartAutomationExecutionRequest {}
export interface StartAutomationExecutionCommandOutput
  extends StartAutomationExecutionResult,
    __MetadataBearer {}
declare const StartAutomationExecutionCommand_base: {
  new (
    input: StartAutomationExecutionCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    StartAutomationExecutionCommandInput,
    StartAutomationExecutionCommandOutput,
    SSMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    input: StartAutomationExecutionCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    StartAutomationExecutionCommandInput,
    StartAutomationExecutionCommandOutput,
    SSMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class StartAutomationExecutionCommand extends StartAutomationExecutionCommand_base {
  protected static __types: {
    api: {
      input: StartAutomationExecutionRequest;
      output: StartAutomationExecutionResult;
    };
    sdk: {
      input: StartAutomationExecutionCommandInput;
      output: StartAutomationExecutionCommandOutput;
    };
  };
}
