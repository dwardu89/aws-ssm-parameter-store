import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  StopAutomationExecutionRequest,
  StopAutomationExecutionResult,
} from "../models/models_2";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SSMClientResolvedConfig,
} from "../SSMClient";
export { __MetadataBearer };
export { $Command };
export interface StopAutomationExecutionCommandInput
  extends StopAutomationExecutionRequest {}
export interface StopAutomationExecutionCommandOutput
  extends StopAutomationExecutionResult,
    __MetadataBearer {}
declare const StopAutomationExecutionCommand_base: {
  new (
    input: StopAutomationExecutionCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    StopAutomationExecutionCommandInput,
    StopAutomationExecutionCommandOutput,
    SSMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    input: StopAutomationExecutionCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    StopAutomationExecutionCommandInput,
    StopAutomationExecutionCommandOutput,
    SSMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class StopAutomationExecutionCommand extends StopAutomationExecutionCommand_base {
  protected static __types: {
    api: {
      input: StopAutomationExecutionRequest;
      output: {};
    };
    sdk: {
      input: StopAutomationExecutionCommandInput;
      output: StopAutomationExecutionCommandOutput;
    };
  };
}
