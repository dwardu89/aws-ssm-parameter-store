import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  StartChangeRequestExecutionRequest,
  StartChangeRequestExecutionResult,
} from "../models/models_2";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SSMClientResolvedConfig,
} from "../SSMClient";
export { __MetadataBearer };
export { $Command };
export interface StartChangeRequestExecutionCommandInput
  extends StartChangeRequestExecutionRequest {}
export interface StartChangeRequestExecutionCommandOutput
  extends StartChangeRequestExecutionResult,
    __MetadataBearer {}
declare const StartChangeRequestExecutionCommand_base: {
  new (
    input: StartChangeRequestExecutionCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    StartChangeRequestExecutionCommandInput,
    StartChangeRequestExecutionCommandOutput,
    SSMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    input: StartChangeRequestExecutionCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    StartChangeRequestExecutionCommandInput,
    StartChangeRequestExecutionCommandOutput,
    SSMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class StartChangeRequestExecutionCommand extends StartChangeRequestExecutionCommand_base {
  protected static __types: {
    api: {
      input: StartChangeRequestExecutionRequest;
      output: StartChangeRequestExecutionResult;
    };
    sdk: {
      input: StartChangeRequestExecutionCommandInput;
      output: StartChangeRequestExecutionCommandOutput;
    };
  };
}
