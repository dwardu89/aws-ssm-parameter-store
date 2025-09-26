import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  TerminateSessionRequest,
  TerminateSessionResponse,
} from "../models/models_2";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SSMClientResolvedConfig,
} from "../SSMClient";
export { __MetadataBearer };
export { $Command };
export interface TerminateSessionCommandInput extends TerminateSessionRequest {}
export interface TerminateSessionCommandOutput
  extends TerminateSessionResponse,
    __MetadataBearer {}
declare const TerminateSessionCommand_base: {
  new (
    input: TerminateSessionCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    TerminateSessionCommandInput,
    TerminateSessionCommandOutput,
    SSMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    input: TerminateSessionCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    TerminateSessionCommandInput,
    TerminateSessionCommandOutput,
    SSMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class TerminateSessionCommand extends TerminateSessionCommand_base {
  protected static __types: {
    api: {
      input: TerminateSessionRequest;
      output: TerminateSessionResponse;
    };
    sdk: {
      input: TerminateSessionCommandInput;
      output: TerminateSessionCommandOutput;
    };
  };
}
