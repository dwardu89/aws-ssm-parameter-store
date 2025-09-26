import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  SendAutomationSignalRequest,
  SendAutomationSignalResult,
} from "../models/models_2";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SSMClientResolvedConfig,
} from "../SSMClient";
export { __MetadataBearer };
export { $Command };
export interface SendAutomationSignalCommandInput
  extends SendAutomationSignalRequest {}
export interface SendAutomationSignalCommandOutput
  extends SendAutomationSignalResult,
    __MetadataBearer {}
declare const SendAutomationSignalCommand_base: {
  new (
    input: SendAutomationSignalCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    SendAutomationSignalCommandInput,
    SendAutomationSignalCommandOutput,
    SSMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    input: SendAutomationSignalCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    SendAutomationSignalCommandInput,
    SendAutomationSignalCommandOutput,
    SSMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class SendAutomationSignalCommand extends SendAutomationSignalCommand_base {
  protected static __types: {
    api: {
      input: SendAutomationSignalRequest;
      output: {};
    };
    sdk: {
      input: SendAutomationSignalCommandInput;
      output: SendAutomationSignalCommandOutput;
    };
  };
}
